
import { useNavigate } from "react-router-dom";

import { useShoppingCart } from "../../../store/shopping-cart";
import { PurchaseMadeCardContainer, PurchaseMadeCardTitle, Button } from "./styles";

export default function PurchaseMadeCard() {
  const navigate = useNavigate();
  const shoppingCart = useShoppingCart();

  const returnHomePage = () => {
    shoppingCart.setProducts([]);
    navigate("/");
  };

  return (
    <PurchaseMadeCardContainer>
      <PurchaseMadeCardTitle>
        Compra realizada com sucesso!
      </PurchaseMadeCardTitle>
      <img src="/purchase-made.png" alt="wefit" />
      <Button onClick={returnHomePage}>Voltar</Button>
    </PurchaseMadeCardContainer>
  );
}
