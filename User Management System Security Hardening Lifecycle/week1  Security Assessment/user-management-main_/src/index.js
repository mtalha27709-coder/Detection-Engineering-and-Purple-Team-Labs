import "dotenv/config";

import { connectToDB } from "./db/index.js";
import app from "./app.js";

const port = process.env.PORT || 3000;

connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is live on  http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!! ", err);
  });
