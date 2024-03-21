import Button from "../Button/Button";
import {
  CommunicatedCardContainer,
  CommunicatedCardTitle,
} from "./styles";

interface CommunicatedCardProps {
  handleNavigate: () => void;
  message: string;
  image: string;
  descriptionImage: string;
  width: number;
  height: number;
  buttonTitle: string;
}
export default function CommunicatedCard({
  buttonTitle,
  descriptionImage,
  handleNavigate,
  image,
  message,
  width,
  height,
}: CommunicatedCardProps) {
  return (
    <CommunicatedCardContainer>
      <CommunicatedCardTitle>{message}</CommunicatedCardTitle>
      <img src={image} alt={descriptionImage} width={width} height={height} />
      <Button onClick={() => handleNavigate()}>{buttonTitle}</Button>
    </CommunicatedCardContainer>
  );
}
