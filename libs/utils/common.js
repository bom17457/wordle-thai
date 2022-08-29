String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

module.exports.isNullOrUndefined = (value) => {
  return [null, undefined].includes(value);
};
