import { css } from 'lit-element';

export default css`
  * {
    font-family: 'Alegreya Sans', sans-serif;
  }
  #main {
    display: flex-column;
  }
  h1 {
    font-size: 3.5rem;
  }
  #addTodoInput {
    width: 632px;
    height: 100px;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0.5rem;
    border: 0;
    opacity: 0.95;
    padding:0;
    background-color:#f9faf9dd;
  }
  #addTodoInput:focus{
      border:0;
      padding:0;
      background-color:#f2f8f2;
  }
  #addTodoInput:hover{
      border:0;
      padding:0;
      background-color:#f2f8f2;
  }
  #addButton {
    color: #fdfffc;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 2rem;
    padding: 2rem 2.5rem;
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #4dd40a;
  }
  #addButton:hover {
      background-color: #286808;
    }
  ol {
    font-size: 2.5rem;
    display: flex-column;
    justify-content: center;
  }
  #removeButton {

    background-color: #df3207;
    color:white;
    border: 0;
    margin-left: 20px;
    font-size: 2.5rem;
    border-radius: 0.5rem;
  }
  #removeButton:hover{
    background-color: #831e05;
  }
  #checkBox {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
  }
  div {
    font-size: 2rem;
  }
  footer {
    font-size: 1.5rem;
  }
`;
