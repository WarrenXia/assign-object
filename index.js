function objectAssgin() {
  let newObj = {};
  for (let i = 0; i < arguments.length; i++) {
    if (Object.prototype.toString.call(arguments[i]).slice(8, -1) === 'Object') {
      for (j in arguments[i]) {
        newObj[j] = arguments[i][j];
      }
    }
  }
  return newObj;
}