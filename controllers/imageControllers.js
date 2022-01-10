const axios = require("axios");

module.exports.image_get = async (req, res) => {
  const item = req.params.item;
  console.log(item);
  let tags = "";
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
        console.log(resp.data);
        res.send(resp.data);
      });
  } catch (err) {
    console.log(err);
  }
  //res.json("good");
};
