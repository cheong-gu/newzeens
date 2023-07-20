export const breakpoints = {
  lg: 1199,
  md: 839,
  sm: 599,
} as const;

/**
 * @description mediaQuery
 * @param lg 1200px
 * @param md 992px
 * @param sm 768px
 * @param xs 360px
 */
export const mediaQuery = {
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  sm: `@media (max-width: ${breakpoints.sm}px)`,
};
