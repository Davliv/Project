class Validator {

  validateEmail (email) {
    let regex = /^[^@\/\\*,~!#^()]+@[a-z]+\.[a-z]+$/;
    return regex.test(email);
  }

  validatePassword (password) {
    if(!password) return false;
    return password.length >= 6 && password.length <= 24;
  }

  validateUsername (username) {
    let UsernameRegex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    return UsernameRegex.test(username);
  }

  validatePhone (phone) {
    return phone.split('-').join('').split(' ').join('').split('(').join('').split(')').join('');
  }

  validateBirthday (birthday) {
    let date = Date.parse(birthday);
    return !isNaN(date);
  }

  validateAge (age) {
    return Number.isInteger(parseInt(age)) && age >= 1 && age <= 100;
  }
  validatePhone (phone) {
  return phone.split('-').join('').split(' ').join('').split('(').join('').split(')').join('');
  }
  validateAddress (address) {
    if(!address) return false;
    return address.length >= 6 && address.length <= 300;
  }
  validateName (name) {
    let nameRegex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    return nameRegex.test(name);
  }
  validatePhoto (photo) {

  }
  validateRating (rating) {
    return Number.isInteger(parseInt(rating)) && rating >= 1 && rating <= 5;
  }
  }
module.exports = new Validator();
