import moment from "moment/moment";
import "moment/locale/es";
moment.locale("es");

/**
 *
 * @param {String} string String to replace first n no-blank chars
 * @param {Int} n Denotes the amount of initial character to be replace by the symbol
 * @param {String} symbol Char to replace first n chars of string. Default= '*'
 * @returns
 */

export const replaceChars = (string, n, symbol = "*") => {
  let result = "";
  let numCharsReplaced = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result += " ";
    } else if (numCharsReplaced < n) {
      result += symbol;
      numCharsReplaced++;
    } else {
      result += string[i];
    }
  }
  return result;
};

/**
 *
 * @param {Int} amount Integer to be converted to a string in colombian pesos format
 * @returns
 */
export const formatColombianCurrency = (amount) => {
  return amount.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
};

/**
 *
 * @param {String} isoDate Date to be converted to format DD/MM/YYYY - h:mm:ss a
 * @returns
 */
export const parseIsoDate = (isoDate) => {
  return moment(isoDate).locale("es").format("DD/MM/YYYY - h:mm:ss a");
};

/**
 *
 * @param {Array} arr Array of object to be sorted by a given date field
 * @param {String} field Field name to sort by. Must be a ISO Date
 * @returns
 */
export const sortObjsByDate = (arr, field) => {
  return arr.sort((arr, b) => arr[field].localeCompare(b.fecha));
};
