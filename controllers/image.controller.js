const Image = require("../models/image");
const imageCtrl = {};
imageCtrl.getImages = async (req, res) => {
  var images = await Image.find();
  res.json(images);
};
imageCtrl.createImage = async (req, res) => {
  var image = new Image(req.body);
  try {
    await image.save();
    res.json({
      status: "1",
      msg: "Image guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
imageCtrl.getImage = async (req, res) => {
  const image = await Image.findById(req.params.id);
  res.json(image);
};
imageCtrl.editImage = async (req, res) => {
  const vimage = new Image(req.body);
  try {
    await Image.updateOne({ _id: req.body._id }, vimage);
    res.json({
      status: "1",
      msg: "Image updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
imageCtrl.deleteImage = async (req, res) => {
  try {
    await Image.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Image removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
module.exports = imageCtrl;
