import React from 'react';
import { Button } from 'common/components/button';
import { Theme, ThemeContext } from 'core/theme';
import { ProductCard } from 'pods/productCard';

export const ProductListLayout: React.FunctionComponent = () => {
  const { theme, setTheme, palette } = React.useContext(ThemeContext);

  const onChangeTheme = () => {
    setTheme(theme === Theme.White ? Theme.Black : Theme.White);
  };

  return (
    <>
      <div>
        <Button
          onClick={onChangeTheme}
          buttonText="Change Theme"
          classes={['themeButton']}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', overflowY: 'scroll' }}>
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />{' '}
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
          <ProductCard
            imageUrl="https://1.bp.blogspot.com/-UTG_QBXdFvc/UGOBID_zYnI/AAAAAAAAAB8/2bviUM96llw/s1600/gatete.jpg"
            title="Gatete gafudo"
          />
        </div>
      </div>
    </>
  );
};
