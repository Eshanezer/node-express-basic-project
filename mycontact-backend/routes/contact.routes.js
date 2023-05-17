const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getByIdContact,
} = require("../controllers/contacts.controller");

// router.route('/').get((request,response)=>{
//     response.status(200).json({message:'GET ALL CONTACTS'});
// });

router.route('/').get(getContacts).post(createContact);
router.post("/", createContact);
router.get("/:id", getByIdContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
