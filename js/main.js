'use strict';

const goods = [
  {
    'id': 1,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    // eslint-disable-next-line max-len
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 2,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    // eslint-disable-next-line max-len
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 3,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    // eslint-disable-next-line max-len
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 4,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    // eslint-disable-next-line max-len
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'м',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const modal = document.querySelector('.modal'); // Модальное окно
const modalTitle = document.querySelector(
  '.modal__title'); // Заголовок модального окна
const venderCode = document.querySelector('.vendor-code__id');
const modalForm = document.querySelector(
  '.modal__form'); // Форма модального окна
const modalCheckbox = document.querySelector(
  '.modal__checkbox'); // Чекбокс со скидкой
const modalDiscountInput = document.querySelector(
  '.modal__input_discount'); // Окно с суммой скидки
const btnAddGoods = document.querySelector(
  '.panel__add-goods'); // Кнопка добавления товара
const overlay = document.querySelector('.overlay'); // Оверлей
const row = document.querySelector('.table__body'); // Строки с товарами
const tr = document.getElementsByTagName('tr'); // Все строки из таблицы

// Функция для добавления нового товара в верстку
const createRow = obj => {
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
const renderGoods = arr => {
  arr.map((item) => row.append(createRow(item)));
};

// Функция для определения порядкового номера в таблице товаров
const orderNumber = e => {
  for (let i = 1; i < tr.length; i++) {
    tr[i].cells[0].innerHTML = i;
  }
};

renderGoods(goods); // Генерация верстки
orderNumber(tr); // Присваивание правильных порядковых номеров

// Функция вызова модального окна с добавлением товара
const openModal = () =>{
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

totalPrice(tr); // Подсчет стоимости на странице

btnAddGoods.addEventListener('click', () => {
  openModal();
  venderCode.innerHTML = Math.floor(Math.random() *
   (99999999999999 - 10000000000000) + 10000000000000);
  console.log('venderID: ', venderCode.textContent);
});

overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay ||
   target.closest('.modal__close')) {
    closeModal();
  }
});

console.log(goods);

// Удаление товара из таблицы
row.addEventListener('click', e => {
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
    totalPrice(tr);
  }
});

// Проверка чекбокса на скидку
modalCheckbox.addEventListener('click', () => {
  if (modalCheckbox.checked) {
    modalDiscountInput.removeAttribute('disabled');
  } else {
    modalDiscountInput.value = '';
    modalDiscountInput.setAttribute('disabled', true);
  }
});

// Подсчет итоговой стоимости в форме
modalForm.addEventListener('change', () => {
  if (modalCheckbox.checked) {
    modalForm.total.textContent = `$${Math.floor(modalForm.count.value *
      modalForm.price.value * ((100 - modalForm.discount_count.value) / 100))}`;
  } else {
    modalForm.total.value = `$${modalForm.count.value *
      modalForm.price.value}`;
  }
});

// Создание и добавление товара в верстку после нажатия на кнопку
modalForm.addEventListener('submit', e => {
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
  closeModal();
  totalPrice(tr);
});
