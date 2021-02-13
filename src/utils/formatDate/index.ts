import {number2String} from '../number2String';

export const dateDDMMYYYY = (date: Date) => {
  const newDate = `${number2String(date.getDate())}/${number2String(
    date.getMonth() + 1,
  )}/${number2String(date.getFullYear())}`;
  return newDate;
};
