import styled from "styled-components";

export const ContentModal = styled.div`
  position: fixed;
  top: 0 ;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;

  .modal {
    width: 500px;
    height: 600px;
    background: #fff;
    z-index: 100;
    position: relative;
    top: calc(50% - 300px);
    left: calc(50% - 250px);
    padding: 40px 20px;
    border-radius: 20px;
    border: 1px solid #ddd;

    .title {
      text-align: center;
      margin: 0 0 20px;
    }

    .field {
      width: 300px;
      margin: 0 auto 20px;

      label {
        display: block;
        margin: 0 0 10px 0;
        font-size: 14px;
      }
      input {
        border-radius: 10px;
        border: 1px solid #ddd;
        padding: 10px 15px;
        width: 100%;
        display: block;
        outline: none;
        text-transform: capitalize;
      }
    }
    button {
      border: none;
      background: linear-gradient(30deg, rgba(28,56,121,1) 0%, rgba(28,56,121,1) 100%);;
      color: #fff;
      padding: 10px 15px;
      border-radius: 10px;
      display: block;
      width: 300px;
      margin: 40px auto 20px;
      font-weight: 600;
      transition: all .5s linear;
      &:hover {
        background: linear-gradient(30deg, rgba(28,56,121,1) 48%, rgba(96,126,170,1) 100%);
      }
    }

  }

  .overlay {
    background: #00000020;
    position: absolute;
    top: 0 ;
    left: 0;
    bottom: 0;
    right: 0;
  } 
`