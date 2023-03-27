import {
  modalDiscountInput,
  venderCode,
  modalCheckbox,
  modalForm,
  overlay,
} from './variables.js';
import modal from './modal.js';

// Функция присваивания номера ID
const generateVenderCode = () => {
  modal.openModal();
  modalDiscountInput.style.border = '1px solid #ffb0b0';
  venderCode.innerHTML = Math.floor(Math.random() *
   (99999999999999 - 10000000000000) + 10000000000000);
};

// Функция закрытия окна по клику вне формы или на крестик
const modalClose = e => {
  const target = e.target;
  if (target === overlay ||
   target.closest('.modal__close')) {
    modal.closeModal();
  }
};

// Проверка чекбокса на скидку
const discontCheck = () => {
  if (modalCheckbox.checked) {
    modalDiscountInput.removeAttribute('disabled');
    modalDiscountInput.style.border = 'none';
  } else {
    modalDiscountInput.value = '';
    modalDiscountInput.setAttribute('disabled', true);
    modalDiscountInput.style.border = '1px solid #ffb0b0';
  }
};

// Функция подсчета итоговой стоимости
const totalValue = () => {
  if (modalCheckbox.checked) {
    modalForm.total.textContent = `$${Math.floor(modalForm.count.value *
    modalForm.price.value * ((100 - modalForm.discount_count.value) / 100))}`;
  } else {
    modalForm.total.value = `$${modalForm.count.value *
     modalForm.price.value}`;
  }
};

export default {
  generateVenderCode,
  modalClose,
  discontCheck,
  totalValue,
};
