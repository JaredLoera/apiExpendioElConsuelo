import vine from "@vinejs/vine";

const shmeaValidateUser = vine.object({ 
    email : vine.string().email(),
    password : vine.string().minLength(6)
});
export default shmeaValidateUser;