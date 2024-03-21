import styled from "styled-components";

const BaselineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 31px 16px;
  background-color: transparent;
  z-index: 999;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

const HeaderShoppingCart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderItens = styled.span`
  font-size: 0.75rem;
  font-weight: light;
  color: #999999;
`;

export {
  BaselineContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderShoppingCart,
  HeaderItens,
}