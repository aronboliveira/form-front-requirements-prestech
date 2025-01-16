export default class CompabilityValidator {
  static isChromium(): boolean {
    return navigator.userAgentData
      ? navigator.userAgentData.brands.some(brand =>
          ["chrome", "edge", "samsung", "opera", "vivaldi", "brave"].some(
            name => brand.brand.toLowerCase().includes(name)
          )
        )
      : /Chrome|CriOS|EdgA|Edg|SamsungBrowser|OPR|Vivaldi|Brave/i.test(
          navigator.userAgent
        );
  }
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
  static isWebkit(): boolean {
    return CompabilityValidator.isChromium() || CompabilityValidator.isSafari();
  }
  static isFirefox(): boolean {
    return navigator.userAgentData
      ? navigator.userAgentData.brands.some(brand =>
          brand.brand.toLowerCase().includes("firefox")
        )
      : /Firefox/gi.test(navigator.userAgent);
  }
  static isExplorer(): boolean {
    return /MSIE|Trident/gi.test(navigator.userAgent);
  }
}