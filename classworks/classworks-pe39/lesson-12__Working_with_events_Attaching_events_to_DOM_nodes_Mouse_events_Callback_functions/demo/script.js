document.addEventListener('DOMContentLoaded', () => {
  console.log(
    'Сработало событие: document.DOMContentLoaded (HTML загружен в страницу и доступен для манипуляций).',
  );

  const message = document.querySelector('h1');
  const button = document.querySelector('button');
  let counter = 0;

  button.addEventListener('click', () => {
    counter += 1;

    message.innerText = `Счётчик: ${counter}`;
  });
});

window.addEventListener('load', () => {
  console.log(
    'Сработало событие: window.load (загружены и обработаны все внешние ресурсы: CSS, JavaScript, изображения...)',
  );
});
