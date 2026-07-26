import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";
//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admin", adminRouter);
app.get("/", (req, res) =>
  res
    .status(200)
    .json(`App is live, user: /api/v1/users; admin: /api/v1/admin `)
);

export default app;
