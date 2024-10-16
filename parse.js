function getAge(inputString) {
  const arr = inputString.split(" ");
  const arrIndex = arr[0];
  const age = parseInt(arrIndex);
  if (age >= 0 && age <= 9) {
    return age;
  }
  // return the girl's correct age as an integer. Happy coding :)
}
