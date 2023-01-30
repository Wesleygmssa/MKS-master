import styled, { keyframes } from "styled-components";

const heartBeat = keyframes`
  0%
  {
    transform: scale( .90 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .90 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .90 );
  }
  100%
  {
    transform: scale( .90 );
  }
`;

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

  & {
    @media screen and (max-width: 940px) {
      gap: 3rem;
      grid-template-columns: repeat(1, 1fr);
      font-size: 2rem;
    }
  }

  & {
    @media screen and (min-width: 663px) {
      gap: 3rem;
      grid-template-columns: repeat(3, 1fr);
      font-size: 2rem;
    }
  }

  .card {
    box-shadow: 0 2px 10px gray;
    border-radius: 8px;
    padding: 1rem;

    img {
      width: 15rem;
      height: 23vh;
    }

    @media (min-width: 414px) {
      width: 100%;
      gap: 3rem;
      /* grid-template-columns: repeat(2, 1fr); */
      /* border: 1px solid red; */
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c2c2c;
  }

  .card-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      width: 9rem;
      height: 2.5rem;
      font-size: 1.2rem;
      margin-top: 1rem;
      border-radius: 5px;
      color: #ffffff;
      background: #373737;
      font-weight: 700;
      text-align: center;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    background: #0f52ba;
    color: white;
    border-radius: 5px;
    font-size: 2.4rem;
    font-weight: 600px;
    padding: 1rem;
    transition: 0.1s ;
    animation: ${heartBeat} 2s;
    svg {
      font-size: 2.6rem;
    }

    &:hover {
      background: #2877ee;
      color: white;
          animation: ${heartBeat} 2s;
    }
  }
`;


export const SpinContainer = styled.div` 
display: flex ;
align-items: center;
justify-content: center;  
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 999;

`;