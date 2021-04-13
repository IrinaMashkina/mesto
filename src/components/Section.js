
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(api) {
    api.then((data) =>
      data
        .forEach((item) => this.addItem(this._renderer(item)))
        .catch((err) => console.log(`Ошибка ${err}`))
    );
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
