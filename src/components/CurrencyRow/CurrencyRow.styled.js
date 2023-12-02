import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Input = styled.input`
  width: 70%;
  margin-right: 10px;
  padding: 8px;

  background-color: #212529;
  border: 0;
  border-bottom: 3px solid #fff;
  border-radius: 7px;

  color: #fff;
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
  width: 30%;
  margin-right: 10px;
  padding: 8px;

  background-color: #212529;
  border: 0;
  border-bottom: 3px solid #fff;
  border-radius: 7px;

  color: #fff;
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
