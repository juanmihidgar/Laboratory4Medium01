import React from 'react';
import { Button } from 'common/components/button/button';
import { Theme, ThemeContext } from 'core/theme';
import { ProductCard } from 'pods/productCard';

export const ProductListLayout: React.FunctionComponent<{
  onToggle: () => void;
}> = ({ onToggle }) => {
  const { theme, setTheme, palette } = React.useContext(ThemeContext);

  const onChangeTheme = () => {
    setTheme(theme === Theme.White ? Theme.Black : Theme.White);
  };

  return (
    <>
      <Button
        onClick={onChangeTheme}
        buttonText="Change Theme"
        classes={['themeButton']}
      />
      <ProductCard
        imageUrl="https://lh3.googleusercontent.com/proxy/-X7rqaEJQOn0o_2JckefUDSVjjCskbBbl77Uc3yvQukrUZqX0KioNOiCVQx43Rnjm10MEhtGNf3TmEOcWyvQF_xjEGpJA7jdXoFELPdX8eKTcmpuJV1AEV4"
        title="Gatete gafudo"
      />
      <button onClick={onToggle}>Toggleame</button>
    </>
  );
};
