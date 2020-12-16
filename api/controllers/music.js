const Music = require('../models/music');

exports.index = async (req, res, next) => {
  try {
    const music = await Music.find();

    res.status(200).json(music);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const music = await Music.findById(req.params.id);

    res.status(200).json(music);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    await Music.create(req.body.data);

    res.status(200).end();
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.body;
    await Music.update(
      { _id: id },
      req.body.data
    )

    res.status(200).end();
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Music.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Music was deleted successfully" });
  } catch (error) {
    next(error);
  }
};