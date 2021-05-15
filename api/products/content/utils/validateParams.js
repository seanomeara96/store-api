exports.validateParams = (numero, sentence, reject) => {
  if (typeof sentence !== "string") reject("lineToAdd must be a string");
  if (typeof numero !== "number") reject("product id must be a number");
};
