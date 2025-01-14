export const patterns = {
  email: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
  countryCode: "^\\+[0-9]{2,4}s?$",
  ddd: `^[0-9]{2,}$`,
  age: `^[0-9]{1,3}$`,
};
export const limits = {
  tiny: {
    MAX_UTF_16_SIGNED_SURROGATE: 63,
    MAX_UTF_16_SIGNED_NOTSURROGATE: 127,
  },
  small: {
    MAX_UTF_16_SIGNED_SURROGATE: 16383,
  },
  medium: {
    MAX_UTF_16_SIGNED_SURROGATE: 4194303,
  },
};
