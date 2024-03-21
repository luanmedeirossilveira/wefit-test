import styled from "styled-components";

const ReloadPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  gap: 24px;
  border-radius: 4px;
  padding: 64px;
`;

const ReloadPageTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #2f2e41;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #009edd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
`;

export {
  ReloadPageContainer,
  ReloadPageTitle,
  Button
}