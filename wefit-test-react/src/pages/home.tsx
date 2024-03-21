import CommunicatedCard from "../components/CommunicatedCard/CommunicatedCard";
import Loading from "../components/Loading/Loading";
import MovieList from "./components/MovieList/MovieList";
import { useQuery } from "react-query";

export default function Home() {
  const { data, isLoading } = useQuery("shopping-cart", () => {
    return fetch("https://wefit-movies.vercel.app/api/movies").then((res) =>
      res.json()
    );
  });
  
  const reloadPage = () => {
      window.location.reload();
    };

  if (isLoading) return <Loading />;

  if (data?.error) return <div>Error: {data.error}</div>;

  const products = data?.products || [];

  if (!products)
    
    return (
      <CommunicatedCard
        message={`Parece que não há nada por aqui :(`}
        image="/reload-page.png"
        buttonTitle="Recarregar página"
        descriptionImage="wefit"
        width={178.63}
        height={265.36}
        handleNavigate={reloadPage}
      />
    );

  return <>{isLoading ? <Loading /> : <MovieList products={products} />}</>;
}
