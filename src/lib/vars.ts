export const patterns = {
  email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`,
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
