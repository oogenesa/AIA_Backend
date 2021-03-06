const axios = require("axios");

module.exports.image_get = async (req, res) => {
  const item = req.params.item;

  let tags = "";
  let str = "";
  if (item !== "all") {
    tags = "&tags=" + item;
  }
  try {
    await axios
      .get(
        "https://www.flickr.com/services/feeds/photos_public.gne?format=json" +
          tags
      )
      .then((resp) => {
        // console.log(resp.data);
        str = resp.data;
        str = str.substring(15);
        str = str.substring(0, str.length - 1);
        // console.log(JSON.parse(str));
        res.header("Access-Control-Allow-Origin", "*");
        res.json(JSON.parse(str));
      });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
