import styled, { keyframes } from "styled-components";


const heartBeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;


export const Container = styled.div<any>`
  width: 100%;
  height: 10rem;
  position: fixed; /* Set the navbar to fixed position */
  z-index: 50!important;

  background: rgba(15, 82, 186, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & {
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      margin-left: calc(100% - 100%);
      /* border: 1px solid red; */
    }
  }

  p {
    width: 100%;
    color: #ffffff;
    margin-left: -2rem;
    margin-top: 1rem;
    line-height: 19px;
  }

  .card-icon {
    width: 5rem;
    height: 5rem;
    display: flex;
    background: #ffffff;

    .cart-item {
      display: flex;
      width: 1.6rem;
      height: 1.7rem;
    }
  }
  svg {
    display: flex;
    font-size: 2rem;
    color: #000;
    animation: ${heartBeat} 3s;
    /* animation-iteration-count: infinite; */
    animation-timing-function: ease-in-out;
    
  }

  h1 {
    padding: 3rem;
    margin-left: 5rem;
    font-size: 4rem;
    color: white;
  }
`;
