const express = require("express");
const courseRouter = require("./course");
const studentRouter = require("./student");
const app = express();
const apiRouter = express.Router();
const commonprefixapi = express.Router();

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

app.use(express.json());

commonprefixapi.use("/api", apiRouter);
apiRouter.use("/student", studentRouter);
apiRouter.use("/course", courseRouter);

app.use(commonprefixapi);
app.use(apiRouter);
// app.use(router);
