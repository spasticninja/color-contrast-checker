/* Relative Luminance
 * Calculates the RGB value for each HEX color in array and returns the relative luminance for each color.
 * Formula from: https://www.w3.org/TR/WCAG/#dfn-relative-luminance
 * @param <Array>String color array from hex
 * @return <Array>String relative luminance per color R,G,B
 */
function relativeLuminance(colorArray) {

  // Update each color of the array
  colorArray.map((v) =>  {
    vRGB = v/255;
    return vRGB <= 0.03928
        ? vRGB / 12.92
        : Math.pow((vRGB + 0.055) / 1.055, 2.4 );
  });
  return colorArray;
}
