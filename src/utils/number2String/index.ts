export const number2String = (value: number) =>
  value < 10 ? `0${+value}` : +value;
