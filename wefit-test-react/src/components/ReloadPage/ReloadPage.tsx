import { ReloadPageContainer, ReloadPageTitle, Button } from "./styles";

export default function ReloadPage() {
  const reloadPage = () => {
    window.location.reload(); // Recarrega a página
  };

  return (
      <ReloadPageContainer>
        <ReloadPageTitle>
          Parece que não há nada por aqui {`:(`}
        </ReloadPageTitle>
        <img
          src="/reload-page.png"
          alt="wefit"
          width={178.63}
          height={265.36}
        />
        <Button onClick={reloadPage}>Recarregar página</Button>
      </ReloadPageContainer>
  );
}
