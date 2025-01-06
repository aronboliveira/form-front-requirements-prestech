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
  static isChromium(): boolean {
    if (navigator.userAgentData) {
      const chromiumBrands = [
        "chrome",
        "edge",
        "samsung",
        "opera",
        "vivaldi",
        "brave",
      ];
      return navigator.userAgentData.brands.some(brand =>
        chromiumBrands.some(name => brand.brand.toLowerCase().includes(name))
      );
    }
    return /Chrome|CriOS|EdgA|Edg|SamsungBrowser|OPR|Vivaldi|Brave/i.test(
      navigator.userAgent
    );
  }
  static isFirefox(): boolean {
    if (navigator.userAgentData)
      return navigator.userAgentData.brands.some(brand =>
        brand.brand.toLowerCase().includes("firefox")
      );
    else return /Firefox/gi.test(navigator.userAgent);
  }
  static isExplorer(): boolean {
    return /MSIE|Trident/gi.test(navigator.userAgent);
  }
  static isWebkit(): boolean {
    return CompabilityValidator.isChromium() || CompabilityValidator.isSafari();
  }
}
