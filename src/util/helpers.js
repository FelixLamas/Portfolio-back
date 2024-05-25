function validationName(value) {
  return value.trim().length >= 1 && value.trim().length <= 60;
}
function validateIcon(value) {
  return value.trim().length >= 30;
}

function validationDescription(value) {
  return value.trim().length >= 4 && value.trim().length <= 300;
}

function validateUrl(url) {
  const regexUrl =
    /^(https?|ftp):\/\/((([a-zA-Z0-9\-_]+\.)+[a-zA-Z]{2,})|localhost)(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;
  console.log(regexUrl.test(url));
  return regexUrl.test(url);
}

module.exports = {
  validationName,
  validateIcon,
  validationDescription,
  validateUrl,
};
