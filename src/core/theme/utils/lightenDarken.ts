export const LightenDarkenColor = (color: string, scale: number) => {
  let hexColor = false;

  if (color[0] == '#') {
    color = color.slice(1);
    hexColor = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + scale;
  let g = (num & 0x0000ff) + scale;
  let b = ((num >> 8) & 0x00ff) + scale;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (hexColor ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};
