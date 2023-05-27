export const breakpoints = {
  lg: 1200,
  md: 840,
  sm: 600,
} as const;

/**
 * @description mediaQuery
 * @param lg 1200px
 * @param md 840px
 * @param sm 600px
 */
export const mediaQuery = {
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  sm: `@media (max-width: ${breakpoints.sm}px)`,
};
