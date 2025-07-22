const reselveValue = Promise.resolve(3);
reselveValue
  .then(result => console.log(result))
  .catch(error => console.log(error));

  const rejectValue = Promise.reject("Boo!");
rejectValue
  .then(result => console.log(result))
  .catch(error => console.log(error));