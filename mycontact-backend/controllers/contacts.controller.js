const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "GET ALL CONTACTS" });
});
const createContact = asyncHandler(async (request, response) => {
  const { name, email, tel } = request.body;
  if (!name || !email || !tel) {
    response.status(400);
    throw new Error("All fields are mendotory");
  }
  console.log(request.body);
  response.status(200).json({ message: "CREATE CONTACTS" });
});
const updateContact = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "UPDATE CONTACTS" });
});
const deleteContact = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "DELETE CONTACTS" });
});
const getByIdContact = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "GET BY CONTACT ID" });
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getByIdContact,
};
