function validationName(value) {
  return value.trim().length >= 1 && value.trim().length <= 100;
}

function validationDescription(value) {
  return value.trim().length >= 4 && value.trim().length <= 1500;
}
function validationSeniority(value) {
  return value.trim().length >= 4 && value.trim().length <= 1500;
}
function validateUrl(url) {
  const regexUrl =
    /^(https?|ftp):\/\/((([a-zA-Z0-9\-_]+\.)+[a-zA-Z]{2,})|localhost)(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;
  return regexUrl.test(url);
}

function validationPassword(pass){
  /*
  La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico. 
  */
  const regexPass= /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  return regexPass.test(pass);
}

module.exports = {
  validationName,
  validationDescription,
  validationSeniority,
  validateUrl,
  validationPassword,
};
