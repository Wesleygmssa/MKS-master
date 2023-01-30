import React from "react";
import { Container } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../hooks/carts";
import { Alert, notification } from "antd";

interface Props {
  setIsModalVisible: (boolean: boolean) => void;
}

const Menu: React.FC<Props> = ({ setIsModalVisible }) => {
  const { countCart } = useCart();
  return (
    <>
        <Container countCart={countCart}  title={countCart.length === 0 ? "Carrinho vazio" : ""}>
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
          if(countCart.length === 0)
          notification.warning({
            message: 'Carrinho vazio!',
            description:
              'Adicione produtos ao carrinho',
          });
        }}
      >
        <FiShoppingCart />
        <div className="cart-item" >{countCart?.length}</div>
      </div>

    </Container>
 

{
      countCart.length > 0 &&  <Alert message="Verificamos item no carrinho, finalize a compra!" type="warning"  style={{
        fontSize: 16,
        height: 25,
        padding: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        zIndex: 999,
        position: 'relative',
        }} />
    }
    </>

  );
};

export default Menu;
