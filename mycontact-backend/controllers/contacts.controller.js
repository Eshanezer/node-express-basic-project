function getContacts(request,response){
    response.status(200).json({message:'GET ALL CONTACTS'});
}
function createContact(request,response){
    const {name,email,tel} = request.body;
    if(!name||!email||!tel){
        response.status(400);
        throw new Error("All fields are mendotory");
    }
    console.log(request.body);
    response.status(200).json({message:'CREATE CONTACTS'});
}
function updateContact(request,response){
    response.status(200).json({message:'UPDATE CONTACTS'});
}
function deleteContact(request,response){
    response.status(200).json({message:'DELETE CONTACTS'});
}
function getByIdContact(request,response){
    response.status(200).json({message:'GET BY CONTACT ID'});
}

module.exports={
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getByIdContact
}