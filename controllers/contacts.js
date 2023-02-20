// Favorite - 1:50 https://www.youtube.com/watch?v=wAA02CBZ7wg&t=1336s

const { Book } = require('../models/contact');

const { HttpError, ctrlWrapper } = require('../helpers');
const { get } = require('express/lib/response');

const getAll = async (_, res) => {
  const result = await Book.find();
  res.json(result);
}

const getById = async (req, res) => {
  const id = req.params.contactId;
  const result = await Book.findById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
}

const add = async (req, res) => {
  const result = await Book.create(req.body);
  res.status(201).json(result);
}

const updateById = async (req, res) => {
  const id = req.params.contactId;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
}

const deleteById = async (req, res) => {
  const id = req.params.contactId;
  const result = await Book.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete success" })
}

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById)
}