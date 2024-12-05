const express = require("express");
const app = express();
const emailRouter = require("./router/email.routes");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/email", emailRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
