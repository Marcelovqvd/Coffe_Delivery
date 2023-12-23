import { Info, ShoppingCart } from '@phosphor-icons/react';
import { Heading, Hero, HeroContent } from './styles';
import { useTheme } from 'styled-components';

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </Info>
          </div>
        </HeroContent>
      </Hero>
    </div>
  );
}
