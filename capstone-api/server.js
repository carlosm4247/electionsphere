import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
import { sequelize } from "./database.js";
import { User } from "./models/users.js";
import userRoutes from "./routes/users.js";
import feedRoute from "./routes/feed.js"
import SequelizeStoreInit from "connect-session-sequelize";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(morgan('combined'));

const sequelizeStore = SequelizeStoreInit(session.Store);
const sessionStore = new sequelizeStore({
    db: sequelize
});

app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: {
            sameSite: false,
            secure: false,
            expires: new Date(Date.now() + (365 * 24 * 60 * 60 * 1000))
        }
    })
)

sessionStore.sync();

app.use(feedRoute);
app.use(userRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    const port = 3001;
    app.listen(port);
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });