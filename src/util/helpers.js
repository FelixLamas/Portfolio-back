function validationName(value) {
  return value.trim().length >= 1 && value.trim().length <= 25;
}

function validationDescription(value) {
  return value.trim().length >= 4 && value.trim().length <= 200;
}

module.exports = { validationName, validationDescription };
