import DOMHandler from "../handlers/DOMHandler";
import { borderColors, fontColors } from "../vars";
export default class StyleProvider {
  setup(): void {
    const els = document.body.querySelectorAll("*");
    for (let i = 0; i < els.length; i++) {
      const el = els[i],
        id = DOMHandler.getIdentifier(el);
      if (!id) continue;
      borderColors[id] = getComputedStyle(el).borderColor;
      fontColors[id] = getComputedStyle(el).color;
    }
    const cycle = (): void => {
      const els = document.body.querySelectorAll("*");
      for (let i = 0; i < els.length; i++) {
        const el = els[i],
          id = DOMHandler.getIdentifier(el);
        if (!id || (el instanceof HTMLElement && el.dataset.pulsing === "true"))
          continue;
        if (!borderColors[id])
          borderColors[id] = getComputedStyle(el).borderColor;
        if (!fontColors[id]) fontColors[id] = getComputedStyle(el).color;
      }
    };
    setInterval(cycle, 2000);
  }
}
