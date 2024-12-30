export default class CompabilityValidator {
  static isSafari(): boolean {
    if (navigator.userAgentData)
      return navigator.userAgentData.brands.some(brand =>
        /safari/gi.test(brand.brand)
      )
        ? true
        : false;
    else {
      const ua = navigator.userAgent;
      return /safari/i.test(ua) && !/chrome|crios|chromium/i.test(ua)
        ? true
        : false;
    }
  }
}
