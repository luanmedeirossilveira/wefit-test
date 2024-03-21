// styles.ts
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #ffffff;
  color: #2d3748;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 328px;
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;

  .header {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .title-description {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;

      .header-title-amount {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    .choice {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;

      .choice-quantity {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .choice-subtotal {
        display: flex;
        align-items: center;
        flex-direction: column;

        p {
          font-size: 12px;
          font-weight: bold;
          color: #999999;
        }
      }
    }
  }
`;

const CardTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const CardDescription = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  p {
    font-size: 14px;
    font-weight: bold;
    color: #999999;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #2f2e41;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #009edd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
`;

const InputNumber = styled.input.attrs({ type: "number" })`
  width: 56px;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  outline: none;
  text-align: center;
`;

export {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
  InputNumber,
};
