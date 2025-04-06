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

// Set up middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(morgan('combined'));

// Session setup - moved before routes but after basic middleware
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

// Define routes
app.get('/', (req, res) => res.send('INDEX'));
app.use(userRoutes);
app.use(feedRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  
  // Now try database operations
  sequelize.authenticate()
    .then(() => {
      console.log('Database connection established successfully');
      // Sync session store
      sessionStore.sync();
      // Sync database models
      return sequelize.sync({ alter: true });
    })
    .then(() => {
      console.log('Database synchronized successfully');
    })
    .catch(error => {
      console.error('Database error:', error);
      console.log('Server is running but database operations failed');
    });
});