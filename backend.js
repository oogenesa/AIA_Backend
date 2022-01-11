const express = require("express");
const cors = require("cors");

const Routes = require("./routes/Routes");

const app = express();

const port = 5000;

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://aiaflicker.herokuapp.com:3000/",
    "https://aiaflicker.herokuapp.com:8080/",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(Routes);
app.listen(port, () => {
  console.log(`Server is runnin on port : ${port}`);
});
