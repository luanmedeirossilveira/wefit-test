// styles.ts
import styled from "styled-components";
import { Card } from "../../../components/Card/styles";

const CardCustom = styled(Card)`
  width: 328px;
  gap: 24px;

  @media screen and (min-width: 1060px) {
    width: 1048px;
  }
`;

const CardContent = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1060px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const CardColumns = styled.div`
  p {
    display: none;
  }

  @media screen and (min-width: 1060px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px 16px;

    p {
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: #999999;
      text-transform: uppercase;
    }
  }
`;

const CardItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .card-header_product {
    display: flex;
    align-items: center;
    gap: 16px;

    .card-header_product_title {
      display: flex;
      flex-direction: column;
      gap: 8px;

      h1 {
        font-size: 14px;
        font-weight: bold;
      }
      p {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .card-header_quantity {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    .card-header_quantity_action {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .card-header_subtotal {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    p {
      display: none;
    }

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .card-header_trash {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }

  @media screen and (max-width: 1060px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "product trash"
      "quantity subtotal";

    .card-header_product {
      grid-area: product;
      display: flex;
      align-items: start;
      gap: 16px;

      .card-header_product_image {
        grid-area: image;
      }

      .card-header_product_title {
        grid-area: title;
        display: flex;
        gap: 8px;

        h1 {
          font-size: 14px;
          font-weight: bold;
        }
        p {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }

    .card-header_quantity {
      grid-area: quantity;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-end;
      gap: 16px;
      margin: 0 0 0 100px;

      .card-header_quantity_action {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    .card-header_subtotal {
      grid-area: subtotal;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      gap: 16px;

      p {
        display: block;
        font-size: 12px;
        font-weight: bold;
        color: #999999;
        text-transform: uppercase;
      }

      span {
        font-size: 16px;
        font-weight: bold;
      }
    }

    .card-header_trash {
      grid-area: trash;
      display: flex;
      align-items: start;
      justify-content: flex-end;
      gap: 16px;
    }
  }
`;

const CardFooter = styled.div`
  display: grid;
  grid-template-areas:
    "total"
    "btn";
  grid-gap: 16px;
  font-size: 14px;

  .card-footer_total {
    grid-area: total;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    p {
      font-size: 14px;
      font-weight: bold;
      color: #999999;
      text-transform: uppercase;
    }

    span {
      font-size: 24px;
      font-weight: bold;
      color: #2f2e41;
    }
  }
  .card-footer_btn {
    grid-area: btn;
  }
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
  CardColumns,
  CardCustom,
  CardContent,
  CardItems,
  CardFooter,
  InputNumber,
};
