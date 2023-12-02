import { Box } from './CurrencyBox.styled';

const CurrencyBox = ({ currencyCode, value }) => {
  return (
    <Box>
      {value} {currencyCode}
    </Box>
  );
};

export default CurrencyBox;
