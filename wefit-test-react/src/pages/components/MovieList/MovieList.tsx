import { MdAddShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../../../store/shopping-cart";
import { formatCurrencyBR } from "../../../utils/formatCurrency";
import { Button, ButtonContent, ButtonShoppingCart, CardContent, CardDescription, CardTitle, CardWrapper, MovieListContainer } from "./styles";

interface MovieListProps {
  products: {
    id: string;
    title: string;
    image: string;
    price: number;
  }[];
}

export default function MovieList({ products }: MovieListProps) {
  const shoppingCart = useShoppingCart();

  const handleAddToCart = (product: MovieListProps["products"][0]) => {
    shoppingCart.setProducts([...shoppingCart.products, product]);
  }

  const quatityProducts = (id: string) => {
    return shoppingCart.products.filter((product) => product.id === id).length
  }

  return (
    <MovieListContainer>
      {products?.map((product) => (
        <CardWrapper key={product.id}>
          <CardContent>
            <img
              src={product.image}
              alt={product.title}
              width={147}
              height={188}
            />
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{formatCurrencyBR(product.price)}</CardDescription>
            <Button className="active" onClick={() => handleAddToCart(product)}>
              <ButtonContent>
                <ButtonShoppingCart>
                  <MdAddShoppingCart size={13} />
                  <span>{quatityProducts(product.id)}</span>
                </ButtonShoppingCart>
                <span>Adicionar ao Carrinho</span>
              </ButtonContent>
            </Button>
          </CardContent>
        </CardWrapper>
      ))}
    </MovieListContainer>
  );
}
