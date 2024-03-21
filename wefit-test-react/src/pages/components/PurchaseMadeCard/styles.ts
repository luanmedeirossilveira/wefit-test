import styled from "styled-components";
const PurchaseMadeCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  gap: 24px;
  border-radius: 4px;
  padding: 64px;
`;

const PurchaseMadeCardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #2f2e41;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #009edd;
  border: none;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
  gap: 12px;
  width: 173px;
  height: 40px;
`;

export {
  PurchaseMadeCardContainer,
  PurchaseMadeCardTitle
}