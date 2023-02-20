const express = require('express');
const router = express.Router();
const { getAll, getById, add, updateById, deleteById } = require('../../controllers/contacts');

const { validateBody } = require('../../middlewares');
const schemas = require('../../schemas/contacts')


router.get('/', getAll);

router.get('/:contactId', getById);

router.post('/', validateBody(schemas.addScheme), add)

router.put('/:contactId', validateBody(schemas.addScheme), updateById)

router.delete('/:contactId', deleteById)

module.exports = router
