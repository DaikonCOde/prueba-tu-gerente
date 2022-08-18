import styled from "styled-components";

export const ContentSelectFilter = styled.div`
  
  position: relative;
  width: 650px;
  input[name="select"] {
    width: 100%;
    background: rgba(255,255,255);
    border-radius: 10px;
    padding: 10px 15px;
    border:1px solid #ddd;
    outline: none;
  }

  .list {
    position: relative;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 10px;
    overflow: hidden;
    list-style: none;
    background: #fff;
    padding: 0;
    margin: 10px 0 0 0;
    .add-button {
      border: none;
      background: linear-gradient(30deg, rgba(28,56,121,1) 0%, rgba(28,56,121,1) 100%);;
      color: #fff;
      padding: 10px 15px;
      border-radius: 10px;
      display: block;
      width: fit-content;
      margin: 20px auto ;
      font-weight: 600;
      transition: all .5s linear;
      i {
        display: inline-block;
        margin: 0 0 0 5px;
        vertical-align: middle;
      }
      &:hover {
        background: linear-gradient(30deg, rgba(28,56,121,1) 48%, rgba(96,126,170,1) 100%);
      }
    }

    .state {
      padding: 10px 15px;
      text-align: center;
    }
    .results{
      overflow-y: auto;
      max-height: 200px;
      &::-webkit-scrollbar {
        width: 4px;
        background: rgb(28, 56, 121, 0.3)
      }
      &::-webkit-scrollbar-thumb {
        width: 4px;
        background: rgb(28, 56, 121);
        border-radius: 4px;
      }
    }

    .item {
      padding: 10px 15px;
      display: grid;
      grid-template: 30px / 180px 50px 120px 100px 50px;
      gap: 20px;
      place-items: center;
      cursor: pointer;
      span {
        text-transform: capitalize;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
      }

      ${({filterBy}) => `.${filterBy}` } {
        background: rgb(234 227 210 / 40%);
        display: block;
        width: 100%;
        height: 100%;
        padding:  0 10px;
        border-radius: 5px;
        font-weight: 600;
      }
      &:last-child {
        margin: 0;
      }
      &:hover {
        background: #ddd
      }
    }
  }

`