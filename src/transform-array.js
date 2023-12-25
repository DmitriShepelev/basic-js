const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  //return
  // arr.map((e, i) => {
  //   if (e === "--discard-prev") {
  //     if (i > 0) {
  //       res.splice(i - 1, 1);
  //     }
  //   } else if (e === "--double-prev") {
  //     res.splice(i, 0, i);
  //   } else if (e === "--double-next") {
  //     res.splice(i + 1, 0, i + 1);
  //   } else if (e === "--discard-next") {
  //     res.splice(i + 1, 1);
  //   } else {
  //     res.splice(i, 0, e);
  //   }
  // });
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    if (arr[i] === "--discard-prev" && i > 0) {
      res.splice(j - 1, 1);
      j--;
    } else if (arr[i] === "--double-prev" && i > 0 && res[j] != null) {
      res.splice(j, 0, arr[i - 1]);
      j++;
    } else if (arr[i] === "--double-next" && i < arr.length - 1) {
      res.splice(j, 0, arr[i + 1]);
      j++;
    } else if (arr[i] === "--discard-next" && i < arr.length - 1) {
      i++;
      res.splice(j + 1, 0, null);
    } else if (
      arr[i] != "--discard-prev" &&
      arr[i] != "--double-prev" &&
      arr[i] != "--double-next" &&
      arr[i] != "--discard-next"
    ) {
      res.splice(j, 0, arr[i]);
    }
  }
  return res.filter((x) => x != null);
}

console.log(transform([1, 2, 3, "--double-next", 4, 5, "--double-next"]));
console.log(transform(["--double-prev", 1, 2, 3, "--double-prev", 4, 5]));
console.log(transform([1, 2, 3, "--discard-prev", 4, 5]));
console.log(transform([1, 2, 3, "--discard-next", 4, 5]));

module.exports = {
  transform,
};
