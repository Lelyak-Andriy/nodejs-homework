const express = require("express");

const {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  putContact,
  patchFavoriteContact,
} = require("../../controllers/contacts");

const { auth } = require("../../middlewares");

const router = express.Router();
router.get("/", auth, getContacts);
router.get("/:contactId", getContactById);
router.post("/", auth, postContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", putContact);
router.patch("/:contactId/favorite", patchFavoriteContact);

module.exports = router;
