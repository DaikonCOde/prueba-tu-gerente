import styled from "styled-components";

export const ContentModal = styled.div`
  position: fixed;
  top: 0 ;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;

  .modal {
    width: 600px;
    height: 800px;
    background: #fff;
    z-index: 100;
    position: relative;
    top: calc(50% - 400px);
    left: calc(50% - 300px);
    padding: 40px 20px;
    border-radius: 20px;
    border: 1px solid #ddd;

    .body {
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 720px;
      &::-webkit-scrollbar {
        width: 5px;
        background: #fff;
      }
      &::-webkit-scrollbar-thumb {
        width: 5px;
        background: #eee;
        border-radius: 3px
      }
    }

    .title {
      text-align: center;
      margin: 0 0 20px;
    }

    .content-fields {
      display: flex;
      flex-wrap: wrap;
      gap: 20px
    }

    .field {
      width: 250px;

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

    .list-answer {
      
      .list {
        margin: 0 0 10px;
        .label {
          display:block;
          font-weight: 700;
          margin: 0 0 5px 0;
          font-size: 12px;
        }
        .answer {
          font-size: 10px;
        }

      }
    }

    .list-image {
      padding: 0;
      margin: 0;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;

      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
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