import styled from "styled-components";
import { Modal } from "antd";

export const Container = styled.div`
  height: 100vh;
  /* width: 80%; */
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.6rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  align-items: center;
  margin-top: 15rem;
`;

export const ModalContainer = styled(Modal)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999!important; ;

  .modal-resumo {
    /* width: 300px; */
    margin-left: 10px;
    border-radius: 6px;
    padding: 20px;

    button {
      width: 100%;
      background: #00bfff;
      color: white;
      border-radius: 5px;
      font-size: 20px;
      display: flex;
      margin-top: 9px;
      justify-content: center;
    }
  }

  .chekout-title {
    display: flex;
    justify-content: space-around;
    gap: 100px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 1.1rem;
    color: white;
    h1 {
      color: white;
    }
  }
  .btn-compra {
    width: 100%;
    background: #000000;
    color: white;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const Checkout = styled.div`
  width: 100%;
  box-shadow: 0 2px 10px gray;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  background: #ffffff;
  margin-left: 2rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  & {
    @media screen and (max-width: 500px) {
      gap: 2rem;
      grid-template-columns: repeat(1, 1fr);
      margin-left: calc(100% - 100%);
      position: relative;
      width: 100%;
      height: 40%;

      .checkout-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }

      img {
        width: 19rem;
        height: 14rem;
      }
    }
  }

  .checkout-modal {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
  }
  .btn {
    background: white;
    color: #00bfff;
    font-size: 2rem;
    gap: 0.01rem;
    align-items: center;
    display: flex;
    justify-content: center;

    input {
      height: 2rem;
      width: 1.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
`;
