/**
 * Utility for add more specificity to the material-ui components
 * @param {String} string CSS string
 */
export default function css(string) {
  return `&& { ${string} }`;
}
