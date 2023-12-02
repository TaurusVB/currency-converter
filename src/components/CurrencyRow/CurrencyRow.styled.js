import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  font-size: 16px;
  outline: none;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #66afe9;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);
  }
`;

export const Select = styled.select`
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  font-size: 16px;
  outline: none;

  cursor: pointer;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #66afe9;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);
  }
`;
