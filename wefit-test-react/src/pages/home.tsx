import Loading from "../components/Loading/Loading";
import ReloadPage from "../components/ReloadPage/ReloadPage";
import MovieList from "./components/MovieList/MovieList";
import { useQuery } from "react-query";

export default function Home() {
  const { data, isLoading } = useQuery("shopping-cart", () => {
    return fetch("https://wefit-movies.vercel.app/api/movies").then((res) =>
      res.json()
    );
  });

  if (isLoading) return <Loading />;

  if (data?.error) return <div>Error: {data.error}</div>;

  const products = data?.products || [];

  if (!products) return <ReloadPage />;

  return (
    <>
      {isLoading ? <Loading /> : <MovieList products={products} />}
    </>
  );
}
