const express = require("express");

const {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  putContact,
  patchFavoriteContact,
} = require("../../controllers/contacts");

const router = express.Router();
router.get("/", getContacts);
router.get("/:contactId", getContactById);
router.post("/", postContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", putContact);
router.patch("/:contactId/favorite", patchFavoriteContact);

module.exports = router;
