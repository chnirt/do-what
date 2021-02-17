const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

export function getDiffDays(start: Date, end: Date) {
  const diffTime = Math.abs(+end - +start);
  const diffDays = Math.ceil(diffTime / oneDay);
  return diffDays;
}
