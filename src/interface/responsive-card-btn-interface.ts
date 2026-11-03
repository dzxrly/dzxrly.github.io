export interface ResponsiveCardBtnInterface {
  coefficientA: number;
  coefficientB: number;
  valueMax: number;
  valueMin: number;
}

// The card size as a CSS length. Same rule as before (size in rem =
// coefficientA × viewport width in px + coefficientB, clamped to
// [valueMin, valueMax]), but the browser evaluates it, so resizing runs no
// script. coefficientA rem per px equals coefficientA × 1600 vw.
export function cardButtonCssSize(props: ResponsiveCardBtnInterface): string {
  const vw = Number((props.coefficientA * 1600).toFixed(4));
  return `clamp(${props.valueMin}rem, calc(${vw}vw + ${props.coefficientB}rem), ${props.valueMax}rem)`;
}
