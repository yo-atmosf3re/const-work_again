export const divedesNumbers = (integer: number) => {
   const number = integer === 0 ? 0 : integer;
   return new Intl.NumberFormat('ru-RU').format(number);
}