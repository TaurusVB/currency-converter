import { useEffect, useState } from 'react';
import { LuArrowDownUp } from 'react-icons/lu';

import axios from 'axios';

import CurrencyRow from 'components/CurrencyRow/CurrencyRow';
import { Title } from 'components/ui/Title.styled';
import { Wrapper } from 'components/ui/Wrapper.styled';

const API_KEY = 'e6bedc13ed752b40e6137f42';

const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/EUR`;

const CurrencyConverter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  const [fromValue, setFromValue] = useState('UAH');
  const [toValue, setToValue] = useState('UAH');

  const [amountTo, setAmountTo] = useState(1);
  const [amountFrom, setAmountToFrom] = useState(1);

  const [rates, setRates] = useState([]);

  useEffect(() => {
    async function fetchCurrencyOptions() {
      try {
        const {
          data: { conversion_rates },
        } = await axios.get(BASE_URL);

        setRates(conversion_rates);

        setCurrencyOptions([...Object.keys(conversion_rates)]);
      } catch (error) {
        console.log('FETCH_CURRENCY_OPTIONS_ERROR', error);
      }
    }

    fetchCurrencyOptions();
  }, []);

  function handleAmountToChange(amountTo) {
    setAmountToFrom(
      +((amountTo * rates[toValue]) / rates[fromValue]).toFixed(3)
    );
    setAmountTo(amountTo);
  }

  function handleFromValueChange(fromValue) {
    setAmountToFrom(
      +((amountTo * rates[toValue]) / rates[fromValue]).toFixed(3)
    );
    setFromValue(fromValue);
  }

  function handleAmountFromChange(amountFrom) {
    setAmountTo(+((amountFrom * rates[fromValue]) / rates[toValue]).toFixed(3));
    setAmountToFrom(amountFrom);
  }

  function handleToValueChange(toValue) {
    setAmountTo(+((amountFrom * rates[fromValue]) / rates[toValue]).toFixed(3));
    setToValue(toValue);
  }

  return (
    <Wrapper>
      <Title>Конвертер валют</Title>
      <CurrencyRow
        onAmountChange={handleAmountToChange}
        onCurrencyChange={handleFromValueChange}
        currencyOptions={currencyOptions}
        selectedCurrency={fromValue}
        amount={amountTo}
      />
      <LuArrowDownUp size={50} color="white" style={{ marginBottom: 25 }} />
      <CurrencyRow
        onAmountChange={handleAmountFromChange}
        onCurrencyChange={handleToValueChange}
        currencyOptions={currencyOptions}
        selectedCurrency={toValue}
        amount={amountFrom}
      />
    </Wrapper>
  );
};

export default CurrencyConverter;
