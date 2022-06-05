const { Contact } = require("../../models");

module.exports = async (req, res, next) => {
  const id = req.params.contactId;
  if (!id) {
    return;
  }
  const contactById = await Contact.findByIdAndRemove(id);
  if (!contactById) {
    res.status(404).json({
      status: "Error 404",
      message: `Contact with id ${id} is not found`,
    });
    return;
  }
  res.status(200).json({ status: "success", message: "contact is deleted" });
};
