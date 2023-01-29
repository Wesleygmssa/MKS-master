import React from "react";
import { Container } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../../hooks/carts";
import { Alert } from "antd";

interface Props {
  setIsModalVisible: (boolean: boolean) => void;
}

const Menu: React.FC<Props> = ({ setIsModalVisible }) => {
  const { setCountCart, countCart } = useAuth();
  const notify = () => toast("Carrinho vazio!");
  return (
    <>
        <Container>
        <ToastContainer/>
      <h1>MKS</h1>
      <p>Sistemas</p>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          padding: "1rem",
          borderRadius: "5px",
          position: "relative",
          left: "-9rem",
          alignItems: "center",
          background: "#fff",
          gap: 10,
        }}
        onClick={() => {
          setIsModalVisible(true);
          // if(countCart.length === 0)
          // notify();
          
        }}
      >
        <FiShoppingCart />
        <div className="cart-item" title={
            countCart.length === 0 ? "Carrinho vazio" : ""
        }>{countCart?.length}</div>
      </div>

    </Container>
 

{
      countCart.length > 0 && <Alert message="Verificamos item no carrinho, finalize a compra!" type="warning"  style={{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        }} />
    }
   
    </>

  );
};

export default Menu;
