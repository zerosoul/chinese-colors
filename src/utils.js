import convert from 'color-convert';

export function shuffle(array) {
  let counter = array.length;
  console.log('shuffle', array);

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function getCorrectTextColor(rgb = [0, 0, 0]) {
  /*
  From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast

  Color brightness is determined by the following formula:
  ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000

  I know this could be more compact, but I think this is easier to read/explain.

  */
  if ((typeof rgb === 'string' || rgb instanceof String) && rgb.indexOf('#') > -1) {
    rgb = convert.hex.rgb(rgb);
  }
  console.log({ rgb });

  const threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */
  const [hRed, hGreen, hBlue] = rgb;

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return '#50616d';
  } else {
    return '#e9f1f6';
  }
}
