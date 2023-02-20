const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../models/contacts');
const { HttpError, ctrlWrapper } = require('../helpers');
const { get } = require('express/lib/response');

const getAll = async (req, res) => {
  const result = await listContacts();
  res.json(result);
}

const getById = async (req, res) => {
  const id = req.params.contactId;
  const result = await getContactById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
}

const add = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
}

const updateById = async (req, res) => {
  const id = req.params.contactId;
  const result = await updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
}

const deleteById = async (req, res) => {
  const id = req.params.contactId;
  const result = await removeContact(id);
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