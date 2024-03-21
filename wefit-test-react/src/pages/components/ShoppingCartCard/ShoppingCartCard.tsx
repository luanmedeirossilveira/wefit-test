import { IoMdTrash } from "react-icons/io";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCartState,
  useShoppingCart,
} from "../../../store/shopping-cart";
import { formatCurrencyBR } from "../../../utils/formatCurrency";
import {
  CardCustom,
  CardContent,
  CardFooter,
  InputNumber,
  CardItems,
  CardColumns,
} from "./styles";
import Button from "../../../components/Button/Button";

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

  const removeProductAll = (id: string) => {
    shoppingCart.removeProductAll(id);
  };

  const addProduct = (product: ShoppingCartState["products"][0]) => {
    shoppingCart.setProducts([...shoppingCart.products, product]);
  };

  return (
    <>
      <CardCustom>
        <CardColumns>
          <p>Produto</p>
          <p>Qtd</p>
          <p>Subtotal</p>
          <p></p>
        </CardColumns>
        {filterRepeatedProducts.map((product) => (
          <CardContent key={product.id}>
            <>
              <CardItems>
                <div className="card-header_product">
                  <img
                    className="card-header_product_image"
                    src={product.image}
                    alt={product.title}
                    width={64}
                    height={82}
                  />
                  <div className="card-header_product_title">
                    <h1>{product.title}</h1>
                    <p>{formatCurrencyBR(product.price)}</p>
                  </div>
                </div>

                <div className="card-header_quantity">
                  <div className="card-header_quantity_action">
                    <FiMinusCircle
                      size={18}
                      color="#009edd"
                      onClick={() => removeProduct(product.id)}
                    />
                    <InputNumber
                      type="number"
                      readOnly
                      value={quantityFilterRepeatedProducts(product.id)}
                    />
                    <FiPlusCircle
                      size={18}
                      color="#009edd"
                      onClick={() => addProduct(product)}
                    />
                  </div>
                </div>

                <div className="card-header_subtotal">
                  <div className="card-header_subtotal_amount">
                    <p>Subtotal</p>
                    <span>{formatCurrencyBR(subtotalProduct(product.id))}</span>
                  </div>
                </div>

                <div className="card-header_trash">
                  <IoMdTrash
                    cursor="pointer"
                    size={24}
                    color="#009edd"
                    onClick={() => removeProductAll(product.id)}
                  />
                </div>
              </CardItems>
            </>
          </CardContent>
        ))}

        <hr />

        <CardFooter>
          <Button
            className="card-footer_btn"
            onClick={() => navigate("/purchase-made")}
          >
            Finalizar Pedido
          </Button>
          <div className="card-footer_total">
            <p>Total</p>
            <span>
              {formatCurrencyBR(
                shoppingCart.products.reduce(
                  (acc, product) => acc + product.price,
                  0
                )
              )}
            </span>
          </div>
        </CardFooter>
      </CardCustom>
    </>
  );
};

export default ShoppingCartCard;
