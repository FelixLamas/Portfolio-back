function validationName(value) {
  return value.trim().length >= 1 && value.trim().length <= 100;
}

function validationDescription(value) {
  return value.trim().length >= 4 && value.trim().length <= 1500;
}

function validateUrl(url) {
  const regexUrl =
    /^(https?|ftp):\/\/((([a-zA-Z0-9\-_]+\.)+[a-zA-Z]{2,})|localhost)(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;
  console.log(regexUrl.test(url));
  return regexUrl.test(url);
}

module.exports = {
  validationName,
  validationDescription,
  validateUrl,
};
