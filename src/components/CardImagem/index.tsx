import { Container, SpinContainer } from "./styles";

import { RiShoppingBag3Line } from "react-icons/ri";
import { useAuth } from "../../hooks/carts";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Props {
  setIsModalVisible: (isModalVisible: boolean) => void;
}

interface CardImagem {
  data: any
  setIsModalVisible: (isModalVisible: boolean) => void;
}

const CardImagem = ({data}:CardImagem) => {
  const notify = () => toast("Produto já adicionado ao carrinho!");
  const notify2 = () => toast("Produto adicionado ao carrinho!");
  const { setCountCart , countCart} = useAuth();
  // const [infoVisible, setInfoVisible] = React.useState(false);

  const checkExistsItem = (object: any) => {
    let verify = countCart.find((item: any) => item.id === object.id);
    if (verify) {
      // setInfoVisible(true);
      notify();
    } else {
      setCountCart((old: any) => [...old, object]);
      // notify2();
      // setInfoVisible(false);
    }
    window.scrollTo(0, 0);
  };




 
  return (
    <>
    <ToastContainer  />
   
    <Container>
    
      {data.length > 0 && data.map((item: any) => (
        <div className="card" key={item.id}>
          <img alt="imagem" src={item?.photo} />
          <div className="card-btn">
            <h2>{item?.name}</h2>
            <p>
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </p>
          </div>
          <p style={{
            height: 150,
          }}>{item.description}</p>
          <button
            onClick={() => {
              let object = {
                id: item?.id,
                name: item?.name,
                price: Number(item?.price),
                photo: item?.photo,
                quant: 1,
                valorItem: Number(item?.price),
              };
               checkExistsItem(object)
            }}
          >
            <RiShoppingBag3Line />
            COMPRAR
          </button>
        </div>
      ))}
    </Container>
    </>
  );
};

export default CardImagem;
