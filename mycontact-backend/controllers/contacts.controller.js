const asyncHandler = require("express-async-handler");
const Contact = require("../model/contact.model");


const getContacts = asyncHandler(async (request, response) => {
  const contacts = await Contact.find();
  response.status(200).json(contacts);
});
const createContact = asyncHandler(async (request, response) => {
  const { name, email, phone } = request.body;
  if (!name || !email || !phone) {
    response.status(400);
    throw new Error("All fields are mendotory");
  }

  console.log('Awa');

  const newContact = await Contact.create({
    name,email,phone
  });

  console.log(request.body);
  response.status(201).json(newContact);
});
const updateContact = asyncHandler(async (request, response) => {
  const contact = await Contact.findById(request.params.id);
  if(!contact){
    response.status(404);
    throw new Error('Contact not found');
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    request.params.id,
    request.body,
    {new:true}
  );
  response.status(200).json(updateContact);
});
const deleteContact = asyncHandler(async (request, response) => {
  const contact = await Contact.findById(request.params.id);
  if(!contact){
    response.status(404);
    throw new Error('Contact not found');
  }
  await Contact.remove();
  response.status(200).json({ message: "DELETE CONTACTS" });
});
const getByIdContact = asyncHandler(async (request, response) => {
  console.log(request.params.id);
  const contact = await Contact.findById(request.params.id);
  if(!contact){
    response.status(404);
    throw new Error('Contact not found');
  }
  response.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getByIdContact,
};
