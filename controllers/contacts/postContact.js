const { validation } = require("../../models/validation");
const { Contact } = require("../../models");

module.exports = async (req, res, next) => {
  const validationResult = validation(req.body);
  if (validationResult.error) {
    res.status(400).json({ message: validationResult.error.details });
    return;
  }
  const newContact = await Contact.create(req.body);
  res.status(201).json({ status: "Created", data: newContact });
};
