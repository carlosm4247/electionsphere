import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/users.js";

const router = express.Router();

router.post("/users", async (req, res) => {
    const { username, password, zipcode } = req.body;

    try {
        const existingUser = await User.findOne({ where:{ username } });

        if (existingUser) {
            return res.status(400).json({ error: "Username already exists, select another or please login instead."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ username, password: hashedPassword, zipcode });

        req.session.user = newUser;

        res.json({ user: newUser });
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

});

router.post("/users/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where:{ username } });

        if (!user) {
            return res.status(401).json({ error: "Invalid username or password" })
        }

        const passwordMatches = await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
            return res.status(401).json({ error: "Invalid username or password" })
        }

        req.session.user = user;

        res.json({ user });
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post("/follow", async (req, res) => {
    const { username, candidateName } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (user.following.includes(candidateName)) {
            return res.status(400).json({ error: "Candidate already followed" });
        }

        const updatedFollowing = [...user.following, candidateName];
        user.setDataValue('following', updatedFollowing);
        await user.save();

        res.json({ message: "Candidate followed successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

router.post("/unfollow", async (req, res) => {
    const { username, candidateName } = req.body;

    try {

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const index = user.following.indexOf(candidateName);
        if (index === -1) {
            return res.status(400).json({ error: "Candidate not followed" });
        }

        const updatedFollowing = user.following.filter(name => name !== candidateName);
        user.setDataValue('following', updatedFollowing);
        await user.save();

        res.json({ message: "Candidate unfollowed successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

export default router