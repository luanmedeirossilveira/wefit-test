
import styled from "styled-components";
import ShoppingCartCard from "./components/ShoppingCartCard/ShoppingCartCard";
import { useShoppingCart } from "../store/shopping-cart";
import CommunicatedCard from "../components/CommunicatedCard/CommunicatedCard";
import { useNavigate } from "react-router-dom";


const ShoppingCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 312px;
`;

export default function ShoppingCart() {
  const shoppingCart = useShoppingCart();
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/");
  };

  return (
    <ShoppingCartContainer>
      {shoppingCart.products.length === 0 ? (
        <CommunicatedCard
          message={`Parece que não há nada por aqui :(`}
          image="/reload-page.png"
          buttonTitle="Voltar a Página Inicial"
          descriptionImage="wefit"
          width={178.63}
          height={265.36}
          handleNavigate={onNavigate}
        />
      ) : (
        <ShoppingCartCard />
      )}
    </ShoppingCartContainer>
  );
}
