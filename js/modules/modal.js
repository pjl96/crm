import {overlay} from './variables.js';

// Функция вызова модального окна с добавлением товара
const openModal = () => {
  overlay.classList.add('active');
};

// Функция закрытия модального окна по клику на крестик или вне модального окна
const closeModal = () => {
  overlay.classList.remove('active');
};

// Функция подсчета итоговой стоимости на странице
const totalPrice = tr => {
  const totalPrice = document.querySelector('.cms__total-price');
  let total = 0;
  for (let i = 1; i < tr.length; i++) {
    total += Number(tr[i].cells[6].textContent.slice(1));
  }
  totalPrice.textContent = `$${total}.00`;
};

export default {
  openModal,
  closeModal,
  totalPrice,
};
