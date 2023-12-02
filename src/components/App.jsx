import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import Header from './Header/Header';

import { RootContainer } from './ui/RootContainer.styled';

export const App = () => {
  return (
    <RootContainer>
      <Header />
      <CurrencyConverter />
    </RootContainer>
  );
};
