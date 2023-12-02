import { Container, Input, Select } from './CurrencyRow.styled';

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  amount,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <Container>
      <Input
        type="number"
        value={amount}
        onChange={evt => onAmountChange(evt.target.value)}
        readonly
      />
      <Select
        value={selectedCurrency}
        onChange={evt => onCurrencyChange(evt.target.value)}
      >
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default CurrencyRow;
