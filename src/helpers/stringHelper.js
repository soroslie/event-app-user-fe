class StringHelper {
  static formatWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  static addTwoZeroDigit(number) {
    return `${number},00`;
  }

  static pathNameToTitle(pathname) {
    if (pathname === '/' || pathname === '') {
      return 'Home';
    }
    let title = pathname.replaceAll('/', ' ');
    title = title.replaceAll('_', ' ');
    title = title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    return title;
  }
}

export default StringHelper;
