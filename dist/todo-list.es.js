var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;"undefined"!=typeof require&&require;import{LitElement as s,html as a,css as c}from"lit-element";customElements.define("todo-list",class extends s{static get properties(){return{todos:{type:Array}}}render(){return this.todos?a`
      <ol>
        ${this.todos.map((e=>a`
            <li>
              <input
                type="checkbox"
                .checked=${e.finished}
                @change=${o=>this._changeTodoFinished(o,e)}
              />
              ${e.text}
              <button @click=${()=>this._removeTodo(e)}>X</button>
            </li>
          `))}
      </ol>
    `:a``}_changeTodoFinished(e,o){const t={changedTodo:o,finished:e.target.checked};this.dispatchEvent(new CustomEvent("change-todo-finished",{detail:t}))}_removeTodo(e){this.dispatchEvent(new CustomEvent("remove-todo",{detail:e}))}});var h=c`
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
`;const l=a`
  <footer>Made with ❤ by <a target='_blank' href="${"www.github.com/cenarturkmen"}">${"cenar"}</a></footer>
`;customElements.define("todo-app",class extends s{static get properties(){return{todos:{type:Array}}}static get styles(){return h}constructor(){super(),this.todos=[{text:"Do A",finished:!0},{text:"Do B",finished:!1},{text:"Do C",finished:!1}]}render(){const e=this.todos.filter((e=>e.finished)).length,o=this.todos.length-e;return a`
    <div id="main">
      <h1>Todo app</h1>

      <input id="addTodoInput" placeholder="Name" />
      <button id='addButton' @click=${this._addTodo}>Add</button>

      <ol>
        ${this.todos.map((e=>a`
            <li>
              <input
                id="checkBox"
                type="checkbox"
                .checked=${e.finished}
                @change=${o=>this._changeTodoFinished(o,e)}
              />
              ${e.text}
              <button id="removeButton" @click=${()=>this._removeTodo(e)}>X</button>
            </li>
          `))}
      </ol>

      <div>Total finished: ${e}</div>
      <div>Total unfinished: ${o}</div>

      ${l}
      </div>
    `}_addTodo(){const e=this.shadowRoot.getElementById("addTodoInput"),o=e.value;e.value="",this.todos=[...this.todos,{text:o,finished:!1}]}_removeTodo(e){this.todos=this.todos.filter((o=>o!==e))}_changeTodoFinished(e,s){const a=e.target.checked;this.todos=this.todos.map((e=>{return e!==s?e:(c=((e,o)=>{for(var t in o||(o={}))d.call(o,t)&&n(e,t,o[t]);if(r)for(var t of r(o))i.call(o,t)&&n(e,t,o[t]);return e})({},s),o(c,t({finished:a})));var c}))}});
