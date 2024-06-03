export function textshadow(word) {
  const shadow =
    "text-shadow:0.7px -1px 0 rgb(255 255 255 / 100%),1.4px -2px 0 rgb(255 255 255 / 96%),2.1px -3px 0 rgb(255 255 255 / 92%),2.8px -4px 0 rgb(255 255 255 / 88%),-1px 1px 2px rgb(0 0 0 / 70%),-2px 2px 4px rgb(0 0 0 / 70%),-3px 3px 6px rgb(0 0 0 / 70%)";
  console.log(
    `%c${word}`, "color:#1772F6;font-weight:bold;font-size:6em;padding:10px 30px;"
      .concat(shadow, ";")
      .concat("background: linear-gradient(to right top,oklab(58.2% -0.04 -0.21),oklab(58.2% -0.376 -0.21))")
  );
}
