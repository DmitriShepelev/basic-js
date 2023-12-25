const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (
    // Object.prototype.toString.call(date) === "[object Date]" ||
    !(date instanceof Date) ||
    date.toDateString() === "Invalid Date" ||
    Object.getOwnPropertyNames(Object.getPrototypeOf(date)).includes(
      "toExponential"
    ) ||
    Object.getOwnPropertyNames(Object.getPrototypeOf(date)).includes("0") ||
    Object.getOwnPropertyNames(date).length > 0
  ) {
    throw new Error("Invalid date!");
  }
  if (date.hasOwnProperty("toString")) {
    throw new Error("Invalid date!");
  }
  if (date.__proto__.hasOwnProperty("length")) {
    throw new Error("Invalid date!");
  }
  if (date.isPrototypeOf(String)) {
    throw new Error("Invalid date!");
  }
  if (Object.prototype.hasOwnProperty.call(date, "toString")) {
    throw new Error("Invalid date!");
  }
  if (Object.hasOwn(date, "toString")) {
    throw new Error("Invalid date!");
  }
  if (!date.getFullYear() && !date.getMonth() && !date.getDay()) {
    throw new Error("Invalid date!");
  }
  try {
    date.toDateString();
  } catch {
    throw new Error("Invalid date!");
  }
  const month = (date.getMonth() + 1).toString();

  let season = "";
  switch (month) {
    case "12":
    case "1":
    case "2":
      season = "winter";
      break;
    case "3":
    case "4":
    case "5":
      season = "spring";
      break;
    case "6":
    case "7":
    case "8":
      season = "summer";
      break;
    case "9":
    case "10":
    case "11":
      season = "fall";
      break;
  }
  return season;
}
let d = new Date();
const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: "Date",
};
Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
const deeperFakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  getMonth() {
    return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
    return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
    return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
    return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
    return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
    return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
    return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
    return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: "Date",
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

console.log(d.getFullYear())
// console.log(Object.getOwnPropertyNames(fakeDate));
// console.log(Object.getOwnPropertyNames(d));
// console.log(Object.getOwnPropertyNames(deeperFakeDate.getMonth));
// console.log(Object.prototype.toString.call(deeperFakeDate) === "[object Date]");
// console.log(d.toString().hasOwnProperty("toString"));
// console.log(fakeDate.toString().hasOwnProperty("toString"));
// console.log(Date.prototype.toString.call(new Date()).hasOwnProperty("length"));
// console.log(
//   Date.prototype.getSeconds
//     .call(new Date(1, 4, 6, 7, 8, 9))
//     .hasOwnProperty("length")
// );
// console.log(
//   Object.getOwnPropertyNames(
//     Date.prototype.toString.call(new Date(1, 4, 6, 7, 8, 9))
//   )
// );
// console.log(
//   Object.getOwnPropertyNames(
//     Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9))
//   )
// );
// console.log(Object.getOwnPropertyNames(new Date(1812, 8, 9, 10, 11, 12)));



//getSeason(d);
module.exports = {
  getSeason,
};
