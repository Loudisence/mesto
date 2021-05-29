export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(item) {
    this._container.append(item);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();
    this._initialArray.forEach(item => {
      this._renderer(item);
    });
  }
}
