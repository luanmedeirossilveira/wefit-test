
import styled from "styled-components";
import ShoppingCartCard from "./components/ShoppingCartCard/ShoppingCartCard";


const ShoppingCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 312px;
`;

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <ShoppingCartCard />
    </ShoppingCartContainer>
  );
}
