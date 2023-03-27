import {
  row,
  tr,
  venderCode,
  modalForm,
  goods,
} from './variables.js';
import modal from './modal.js';

// Функция для добавления нового товара в верстку
export const createRow = obj => {
  const newRow = document.createElement('tr');
  newRow.insertAdjacentHTML('afterbegin', `
    <td class="table__cell"></td>
    <td class="table__cell table__cell_left table__cell_name"
      data-id="${obj.id}">
      <span class="table__cell-id">id: ${obj.id}</span>
        ${obj.title}
    </td>
    <td class="table__cell table__cell_left">${obj.category}</td>
    <td class="table__cell">${obj.units}</td>
    <td class="table__cell">${obj.count}</td>
    <td class="table__cell">$${obj.price}</td>
    <td class="table__cell">$${obj.price * obj.count}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
    `);
  return newRow;
};

// Функция для генерации товаров
export const renderGoods = arr => {
  arr.map((item) => row.append(createRow(item)));
};

// Функция для определения порядкового номера в таблице товаров
export const orderNumber = e => {
  for (let i = 1; i < tr.length; i++) {
    tr[i].cells[0].innerHTML = i;
  }
};

// Функция обработки нажатия на кнопку добавления товара в форме
export const addItemFormBtn = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newGoods = [];
  newGoods.push(Object.fromEntries(formData));
  newGoods[0].id = venderCode.textContent;
  goods.push(Object.fromEntries(formData));
  goods[goods.length - 1].id = venderCode.textContent;
  renderGoods(newGoods);
  orderNumber(tr);
  modalForm.reset();
  modal.closeModal();
  modal.totalPrice(tr);
};

// Функция удаления товара из таблицы
export const delItemTable = e => {
  const target = e.target;
  if (target.closest('.table__btn_del')) {
    target.closest('tr').remove(); // Удаление строки, по которой был клик
    // Удаление объекта, по которому был клик, из базы данных
    const delItem = target.closest('tr').querySelector(
      '.table__cell_name').getAttribute('data-id');
    for (let i = 0; i < goods.length; i++) {
      if (+delItem === goods[i].id) {
        goods.splice(i, 1);
        console.log(goods);
      }
    }
    orderNumber(tr);
    modal.totalPrice(tr);
  }
};
