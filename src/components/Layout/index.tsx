import  { useEffect, useState } from "react";
import HeaderMenu from "../Menu";
import CardImagem from "../CardImagem";
import { Alert, Spin } from "antd";


import {  notification} from 'antd';

import {
  Container,
  Wrapper,
  Content,
  Checkout,
  ModalContainer,
} from "./styles";

import { useCart } from "../../hooks/carts";
import axios from "axios";
import { SpinContainer } from "../CardImagem/styles";

const LayoutCompent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [total, setTotal] = useState<any>(0);
  const { countCart, setCountCart } = useCart();

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const instance = axios.create({
    baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });
  useEffect(() => {
    instance
      .get("/products", {
        params: {
          page: 1,
          rows: 50,
          sortBy: "name",
          orderBy: "DESC",
        },
      })
      .then((res) => {
        setData(res.data.products);
      });
  }, []);



  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const totalCheckout = () => {
    let total: number = 0;
    countCart.map((item: {
      price: number;
    }) => {
      total += Number(item.price);
    });

    setTotal(total);
    return total;
  };



const handleAdd = (id: number) => {
    const newCart = countCart.map((item:{
      id: number;
      name: string;
      price: number;  
      photo: string;
      quant: number;
      valorItem: number;
      
    }) => {
      if (item.id === id) {
        return {
          ...item,
          quant: item?.quant + 1,
          price: item?.price +  item?.valorItem
        };
      }
      return item;
    });
    setCountCart(newCart);
  };

  const handleRemove = (id: number) => {
    const newCart = countCart.map((item: {
      id: number;
      name: string;
      price: number;
      photo: string;
      quant: number;
      valorItem: number;
    }) => {
      if (item.id === id && item.quant > 0) {
        return {
          ...item,
          quant: item?.quant - 1,
          price: item?.price - item?.valorItem
        };
      }
      return item;
    });

   setCountCart(
      newCart.filter((item: {
        id: number;
        name: string;
        price: number;
        photo: string;
        quant: number;
        valorItem: number;
      }) => item.quant > 0)
   );
  };

  const checkout = () => {
    setLoading(true);
    const newCart = countCart.map((item: {
      id: number;
      name: string;
      price: number;
      photo: string;
      quant: number;
      valorItem: number;
    }) => {
      return {
        ...item,
        quant: 0,
        price: 0,
      };
    });


    setTimeout(() => {
    notification.success({
      message: 'Compra realizada com sucesso!',
      description:
        'Obrigado por comprar conosco!',
    });
    setLoading(false);
    handleCancel();
    setCountCart([]);
  }, 7000);
  };


  useEffect(() => {
    totalCheckout();
  }, [countCart]);

  return (
    <>
      {data.length === 0 && (
         <SpinContainer className="example">
         <Spin size="large" />
       </SpinContainer>
      )}

<Container>
      <HeaderMenu setIsModalVisible={setIsModalVisible} />
      <Wrapper>
        <Content>
          <ModalContainer
            title="Carrinho de compras"
            theme={{ background: "#0F52BA" }}
            visible={countCart.length ? isModalVisible : false}
            onOk={handleOk}
            onCancel={handleCancel}
            width={590}
            cancelText
            okText
            bodyStyle={{ background: "#0F52BA" }}
          >
            {loading ? (  
              <div style={{
                display: "flex",
                height: "73vh",
                justifyContent: "center",
                alignItems: "center",


              }}>
            <Spin  
            size="large"
            >
               <Alert
                   message="Aguarde"
                   description="Confirmando sua compra..."
                   type="info"
                   />
           </Spin>
              </div> 
           ): (    
           <div
              style={{
                display: "flex",
                height: "73vh",
              }}
            >
           
              <div>
                {countCart.map((item: {
                  id: number;
                  name: string;
                  price: number;
                  photo: string;
                  quant: number;
                }) => {
                  return (
                    <>
          
                      <Checkout key={item.id} >
                        <div className="checkout-modal">
                          <div>
                            <img src={item.photo} alt="" />
                          </div>
                          <div>{item.name}</div>

                          <div className="btn">
                            <button
                              onClick={() => handleRemove(item.id)}
                            >
                              -
                            </button>
                            {item.quant}
                            <button
                             
                             onClick={() => handleAdd(item.id)}
                            >
                              +
                            </button>
                          </div>

                          <div>
                            {Intl.NumberFormat("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            }).format(item.price)}
                          </div>
                        </div>
                      </Checkout>
                    </>
                  );
                })}
              </div>
            </div>)}
           
        
            <div className="total">
              <h1>Total</h1>{Intl.NumberFormat("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            }).format(total)}
            </div>
            <button className="btn-compra" onClick={checkout}>Finaliza Compra</button>
          </ModalContainer>
          <div
            style={{
              padding: 10,
            }}
          >
            <CardImagem setIsModalVisible={setIsModalVisible}  data={data}/>
          </div>
        </Content>
      </Wrapper>
    </Container>
    </>
   
  );
};

export default LayoutCompent;
