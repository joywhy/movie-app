import { Component } from '../core/core';

export default class TextField extends Component {
  render() {
    this.el.innerHTML = /*html*/ `
        <input type>
        `;
    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      console.log(inputEl.value);
    });
  }
}
