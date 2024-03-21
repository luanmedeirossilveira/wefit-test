import styled from "styled-components";

const CommunicatedCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  gap: 24px;
  border-radius: 4px;
  padding: 64px;
`;

const CommunicatedCardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #2f2e41;
  text-align: center;
`;

export { CommunicatedCardContainer, CommunicatedCardTitle };
