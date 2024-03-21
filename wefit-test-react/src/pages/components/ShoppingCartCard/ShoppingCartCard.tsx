// ShoppingCartCard.tsx
import { IoMdTrash } from "react-icons/io";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCartState,
  useShoppingCart,
} from "../../../store/shopping-cart";
import { formatCurrencyBR } from "../../../utils/formatCurrency";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
  InputNumber,
} from "./styles";

const ShoppingCartCard = () => {
  const navigate = useNavigate();
  const shoppingCart = useShoppingCart();

  const filterRepeatedProducts = shoppingCart.products.filter(
    (product, index, self) =>
      index ===
      self.findIndex((p) => p.id === product.id && p.title === product.title)
  );

  const quantityFilterRepeatedProducts = (id: string) => {
    return shoppingCart.products.filter((product) => product.id === id).length;
  };

  const subtotalProduct = (id: string) => {
    return shoppingCart.products
      .filter((product) => product.id === id)
      .reduce((acc, product) => acc + product.price, 0);
  };

  const removeProduct = (id: string) => {
    if (shoppingCart.products.length === 1) {
      shoppingCart.removeProductAll(id);
    } else {
      shoppingCart.removeProduct(id);
    }
  };

  const addProduct = (product: ShoppingCartState["products"][0]) => {
    shoppingCart.setProducts([...shoppingCart.products, product]);
  };

  return (
    <Card>
      {filterRepeatedProducts.map((product) => (
        <CardContent key={product.id}>
          <img src={product.image} alt={product.title} width={64} height={82} />
          <div className="header">
            <div className="title-description">
              <CardTitle>{product.title}</CardTitle>
              <div className="header-title-amount">
                <CardDescription>
                  {formatCurrencyBR(product.price)}
                </CardDescription>
                <IoMdTrash
                  size={18}
                  color="#009edd"
                  onClick={() => removeProduct(product.id)}
                />
              </div>
            </div>

            <div className="choice">
              <div className="choice-quantity">
                <FiMinusCircle
                  size={18}
                  color="#009edd"
                  onClick={() => removeProduct(product.id)}
                />
                <InputNumber
                  type="number"
                  value={quantityFilterRepeatedProducts(product.id)}
                />
                <FiPlusCircle
                  size={18}
                  color="#009edd"
                  onClick={() => addProduct(product)}
                />
              </div>
              <div className="choice-subtotal">
                <p>Subtotal</p>
                <span>{formatCurrencyBR(subtotalProduct(product.id))}</span>
              </div>
            </div>
          </div>
        </CardContent>
      ))}

      <hr />

      <CardFooter>
        <p>Total</p>
        <span>
          {formatCurrencyBR(
            shoppingCart.products.reduce(
              (acc, product) => acc + product.price,
              0
            )
          )}
        </span>
      </CardFooter>

      <Button className="active" onClick={() => navigate("/purchase-made")}>
        Finalizar Pedido
      </Button>
    </Card>
  );
};

export default ShoppingCartCard;
