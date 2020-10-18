import { Palette } from 'core/theme/viewModel/palette.vm';

interface UseDefineComponentStyle {
  palette: Palette;
  generateStyles: (Palette) => Palette;
  generateSpecificStyles?: (Palette) => string[];
}

export const useDefineComponentStyle = (
  palette,
  // Review types of functions
  generateStyles,
  generateSpecificStyles
) => {
  let className = '';
  const classNameArray = [];

  const defaultClasses = generateStyles(palette);
  const specificStyles = generateSpecificStyles(palette);

  for (const value in { ...defaultClasses, ...specificStyles }) {
    className += `${
      defaultClasses[value] !== undefined
        ? defaultClasses[value]
        : specificStyles[value]
    } `;

    classNameArray.push(
      defaultClasses[value] !== undefined
        ? defaultClasses[value]
        : specificStyles[value]
    );
  }

  return {
    className,
    classNameArray,
  };
};
