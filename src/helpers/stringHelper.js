class StringHelper {
  static formatWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  static addTwoZeroDigit(number) {
    return `${number},00`;
  }
}

export default StringHelper;
