const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

app.use("/", mainRouter);

app.listen(4000, () => {
  console.log("back server 4000");
});
