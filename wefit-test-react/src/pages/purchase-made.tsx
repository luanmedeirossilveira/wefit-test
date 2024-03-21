import { useNavigate } from "react-router-dom";
import CommunicatedCard from "../components/CommunicatedCard/CommunicatedCard";
import { useShoppingCart } from "../store/shopping-cart";

export default function PurchaseMade() {
  const shoppingCart = useShoppingCart();
  const navigate = useNavigate();

  const returnHomePage = () => {
    shoppingCart.setProducts([]);
    navigate("/");
  };

  return (
    <CommunicatedCard
      message="Compra realizada com sucesso!"
      image="/purchase-made.png"
      buttonTitle="Voltar para o início"
      descriptionImage="wefit"
      width={178.63}
      height={265.36}
      handleNavigate={returnHomePage}
    />
  );
}
