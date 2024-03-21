"use strict";
const userValidator = {
    validateRegister: function (formData) {
        let errors = [];
        let nombre = formData.get("nombre");
        let apellidos = formData.get("apellidos");
        let password1 = formData.get("password");
        let password2 = formData.get("password2");
        if (nombre.length < 3 || apellidos.length < 3) {
            errors.push("The first and last name should have more than 3 characters");
        }
        if (password1 !== password2) {
            errors.push("The passwords must match");
        }
        return errors;
    }
};
export { userValidator };
