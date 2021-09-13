import '../todo-list/todo-list.js';
import { LitElement, html } from 'lit-element';
import styles from './styles/todoAppStyles.js'

const author = 'cenar';
const page = 'www.github.com/cenarturkmen';
const footerTemplate = html`
  <footer>Made with ❤ by <a target='_blank' href="${page}">${author}</a></footer>
`;

class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }
  static get styles(){
    return styles;
  }

  constructor() {
    super();
    this.todos = [
      { text: 'Do A', finished: true },
      { text: 'Do B', finished: false },
      { text: 'Do C', finished: false },
    ];
  }

  render() {
    const finishedCount = this.todos.filter((e) => e.finished).length;
    const unfinishedCount = this.todos.length - finishedCount;

    return html`
    <div id="main">
      <h1>Todo app</h1>

      <input id="addTodoInput" placeholder="Name" />
      <button id='addButton' @click=${this._addTodo}>Add</button>

      <ol>
        ${this.todos.map(
          (todo) => html`
            <li>
              <input
                id="checkBox"
                type="checkbox"
                .checked=${todo.finished}
                @change=${(e) => this._changeTodoFinished(e, todo)}
              />
              ${todo.text}
              <button id="removeButton" @click=${() => this._removeTodo(todo)}>X</button>
            </li>
          `
        )}
      </ol>

      <div>Total finished: ${finishedCount}</div>
      <div>Total unfinished: ${unfinishedCount}</div>

      ${footerTemplate}
      </div>
    `;
  }

  _addTodo() {
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';

    this.todos = [...this.todos, { text, finished: false }];
  }

  _removeTodo(todo) {
    this.todos = this.todos.filter((e) => e !== todo);
  }

  _changeTodoFinished(e, changedTodo) {
    const finished = e.target.checked;

    this.todos = this.todos.map((todo) => {
      if (todo !== changedTodo) {
        return todo;
      }
      return { ...changedTodo, finished };
    });
  }
}

customElements.define('todo-app', TodoApp);
