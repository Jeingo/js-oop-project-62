export default class Validator {
  constraint = {
    type: 'string', isRequired: false, minLength: null, contains: null,
  };

  string() {
    this.constraint.type = 'string';
    return this;
  }

  required() {
    this.constraint.isRequired = true;
    return this;
  }

  minLength(min) {
    this.constraint.minLength = min;
    return this;
  }

  contains(str) {
    this.constraint.contains = str;
    return this;
  }

  isValid(value) {
    if (this.constraint.isRequired && !value) {
      return false;
    }
    if (this.constraint.minLength && value.length < this.constraint.minLength) {
      return false;
    }
    if (this.constraint.contains && !value.includes(this.constraint.contains)) {
      return false;
    }
    return true;
  }
}
