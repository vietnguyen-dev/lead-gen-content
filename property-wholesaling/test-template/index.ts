import { buymyhousepdx } from "./buymyhousepdx.com/index.js";
import { portlandpropertybuyers } from "./portlandpropertybuyers.com/index.js";

export interface TestTemplate {
  buymyhousepdx: typeof buymyhousepdx;
  portlandpropertybuyers: typeof portlandpropertybuyers;
}

const testTemplate: TestTemplate = {
  buymyhousepdx: buymyhousepdx,
  portlandpropertybuyers: portlandpropertybuyers,
};

export type { iAbout } from "./iAbout.js";
export type { iContact } from "./iContact.js";
export type { iFAQ } from "./iFAQ.js";
export type { iHome } from "./iHome.js";
export type { iOfferForm, iOfferPage } from "./iGetOffer.js";

export default testTemplate;
