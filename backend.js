const express = require("express");
const cors = require("cors");

const Routes = require("./routes/Routes");

const app = express();

const port = 5000;

const corsOptions = {
  origin: "https://aiaflicker.herokuapp.com",
  credentials: true,
  headers: { "Access-Control-Allow-Origin": "*" },
};

// const whitelist = [
//   "http://localhost:3000",
//   "110.137.195.198",
//   "https://aiaflicker.herokuapp.com",
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin);
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable");
//       callback(null, true);
//     } else {
//       console.log("Origin rejected");
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

app.use(cors(corsOptions));

app.use(Routes);
app.listen(port, () => {
  console.log(`Server is runnin on port : ${port}`);
});
