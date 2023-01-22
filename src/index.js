module.exports = function check(str, bracketsConfig) {
  const arr1 = bracketsConfig.map((item) => {
    return `${item[0]}${item[1]}`;
  });

  let arr2 = str.length;

  while (str.length) {
    arr1.forEach((item) => {
      str = str.replaceAll(item, "");
    });

    if (str.length === arr2) {
      return false;
    }

    arr2 = str.length;
  }

  return true;
}

