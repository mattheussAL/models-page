import styled from 'styled-components';
import ModeloImage from '../../assets/modelo_3.jpg'


export const Container = styled.div`
  position: absolute;
  width: 91.6%;
  height: 100%;

  right: 0;
  background-image: url(${ModeloImage});
  background-size: cover;
  background-position: center;
`;

export const Info = styled.div`
  position: absolute;

  top: 25%;
  left: 5%;

  width: 425px;

  color: #F4FBF8;

  h1 {
    font-size: 46px;
    letter-spacing: 2px;
    margin-bottom: 22px;
  }

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    margin-bottom: 62px;
  }

  .pulse {
    position: absolute;
    left: 20px;

    width: 50px;
    height: 50px;

    transform: translate(-50%, -50%);

    background: #2f458fa1;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
      font-size: 2rem;
      color: #F4FBF8;
      opacity: 0.8;
    }

    &::before, &::after  {
      content: '';
      display: block;
      position: absolute;
      border: 50%;
      border: 1px solid #2F458F;

      top: -20px;
      right: -20px;
      bottom: -20px;
      left: -20px;

      border-radius: 50%;
      opacity: 0;
      backface-visibility: hidden;
      animation: animate 1.5s linear infinite;

      &::after { animation-delay: .5s }

      @keyframes animate {
        0% {
          transform: scale(.5);
          opacity: 0;
        }
        50% {  opacity: 1 }
        100% {
          transform: scale(1.2);
          opacity: 0;
        }
      }
    }
  }

  label {
    position: absolute;

    top: 95%;
    left: 22%;

    font-size: 22px;
    letter-spacing: 2px;

    cursor: pointer;
  }
`;

export const ButtonNext = styled.button`
  position: absolute;

  top: 45%;
  right: 0;

  width: 120px;
  height: 120px;

  background: rgba(255, 255, 255, 0.09);
  border: none;
  border-radius: 8px 0 0 8px;

  font-size: 32px;
  color: #F4FBF8;

  outline: none;

  cursor: pointer;

  svg {
    font-size: 6rem;
    opacity: 0.2;
    cursor: pointer;

    transition: all .3s ease-in-out;

    &:hover {
      opacity: .5;
      transform: scale(1.1);
    }
  }
`;
