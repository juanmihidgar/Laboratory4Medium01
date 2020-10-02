import { Palette } from 'core/theme/viewModel/palette.vm';

interface UseDefineComponentStyle {
  palette: Palette;
  generateStyles: (Palette) => Palette;
  generateSpecificStyles?: (Palette) => string[];
  classes?: string[];
}

export const useDefineComponentStyle = (
  palette,
  // Review types of functions
  generateStyles,
  generateSpecificStyles,
  classes = []
) => {
  let className = '';

  const defaultClasses = generateStyles(palette);
  const specificStyles = generateSpecificStyles(palette);

  for (const value in { ...defaultClasses, ...specificStyles }) {
    className += `${
      defaultClasses[value] !== undefined
        ? defaultClasses[value]
        : specificStyles[value]
    } `;
  }

  //  classes.forEach(item => (className += `specificStyles[item] `));

  return {
    className,
  };
};
