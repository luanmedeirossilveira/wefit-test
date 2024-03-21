import styled from "styled-components";

const MovieListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 312px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px 16px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Button = styled.button`
  background-color: #009edd;
  border: none;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  width: 296px;
  height: 40px;
  color: #ffffff;

  .active {
    background-color: #039b00;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ButtonShoppingCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const CardWrapper = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #ffffff;
  color: #2d3748;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: auto;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.375rem;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  color: #333333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2f2e41;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;

export {
  MovieListContainer,
  Button,
  ButtonContent,
  ButtonShoppingCart,
  CardWrapper,
  CardHeader,
  CardImage,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};
