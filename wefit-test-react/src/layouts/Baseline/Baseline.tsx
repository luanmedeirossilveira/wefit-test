import { MdShoppingBasket } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../store/shopping-cart";
import {
  BaselineContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderShoppingCart,
  HeaderItens,
} from "./styles";

export default function Baseline() {
  const navigate = useNavigate();
  const shoppingCart = useShoppingCart();

  return (
    <BaselineContainer>
      <HeaderContainer>
        <HeaderTitle onClick={() => navigate("/")}>WeMovies</HeaderTitle>

        <HeaderShoppingCart onClick={() => navigate("/shopping-cart")}>
          <HeaderItens>{shoppingCart.products.length} itens</HeaderItens>
          <MdShoppingBasket size="24px" />
        </HeaderShoppingCart>
      </HeaderContainer>
      <Outlet />
    </BaselineContainer>
  );
}
