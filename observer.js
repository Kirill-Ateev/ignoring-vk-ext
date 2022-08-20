//Version 0.7
let target = document.querySelector(".im-page--chat-body");

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
  childList: true,
  subtree: true,
};

// Колбэк-функция при срабатывании мутации
const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    const vdovin = document.querySelectorAll('[data-peer="17382564"]');
    const shares = document.querySelectorAll('[post_view_hash="1f6aa1e2eff7ae5715"]');

    Array.prototype.forEach.call([...vdovin, ...shares], function (node) {
      node.parentNode.removeChild(node);
    });
  }
};

// Создаём экземпляр наблюдателя с указанной функцией колбэка
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(target, config);
