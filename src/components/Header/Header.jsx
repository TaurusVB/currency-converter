import CurrencyBox from 'components/CurrencyBox/CurrencyBox';
import { HeaderST, Text } from './Header.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = `https://api.exchangerate-api.com/v4/latest/UAH`;

const Header = () => {
  const [dollar, setDollar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    async function fetchCurrencyValues() {
      try {
        const {
          data: { rates, date },
        } = await axios.get(API_URL);

        setDollar(rates['USD']);
        setEuro(rates['EUR']);
        setDate(date);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCurrencyValues();
  }, []);

  return (
    <HeaderST>
      <Text>Скільки ж зараз коштує українська гривня? А це</Text>
      <CurrencyBox value={dollar} currencyCode={'USD (Долар)'} />
      <CurrencyBox value={euro} currencyCode={'EUR (Євро)'} />
      <Text>cтаном на {date}</Text>
    </HeaderST>
  );
};

export default Header;
