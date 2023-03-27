import {
  goods,
  tr,
  btnAddGoods,
  overlay,
  row,
  modalCheckbox,
  modalForm,
} from './modules/variables.js';
import {
  renderGoods,
  orderNumber,
  addItemFormBtn,
  delItemTable,
} from './modules/render.js';
import price from './modules/modal.js';
import form from './modules/form.js';

{
  const init = () => {
    renderGoods(goods); // Генерация верстки
    orderNumber(tr); // Присваивание правильных порядковых номеров

    price.totalPrice(tr); // Подсчет стоимости на странице

    btnAddGoods.addEventListener('click', () => {
      form.generateVenderCode();
    });

    overlay.addEventListener('click', e => {
      form.modalClose(e);
    });

    console.log(goods);

    // Удаление товара из таблицы
    row.addEventListener('click', e => {
      delItemTable(e);
    });

    // Проверка чекбокса на скидку
    modalCheckbox.addEventListener('click', () => {
      form.discontCheck();
    });

    // Подсчет итоговой стоимости в форме
    modalForm.addEventListener('change', () => {
      form.totalValue();
    });

    // Создание и добавление товара в верстку после нажатия на кнопку
    modalForm.addEventListener('submit', e => {
      addItemFormBtn(e);
    });
  };

  window.init = init;
}
