import moment from "moment/moment";
import "moment/locale/es";
moment.locale("es");

export const replaceChars = (string, n) => {
  let result = "";
  let numCharsReplaced = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result += " ";
    } else if (numCharsReplaced < n) {
      result += "*";
      numCharsReplaced++;
    } else {
      result += string[i];
    }
  }
  return result;
};

export const formatColombianCurrency = (amount) => {
  return amount.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
};

export const parseIsoDate = (isoDate) => {
  return moment(isoDate).locale("es").format("DD/MM/YYYY - h:mm:ss a");
};
