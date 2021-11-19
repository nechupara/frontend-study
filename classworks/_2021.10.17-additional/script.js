 // To do list
// 0) Прокомментировать код
// 1) Добавить стили для кнопки удалить, нижнюю рамку для list item, небольшие отступы. 
// 2) Реализовать удаление элемента списка, после того, как в окне подтверждения (confirm)
// юзер нажмет ок
// 3) Реализовать зачеркивания списка
// 4) Добавить кнопку Удалить все, по клику на нее удаляется весь элемент списка
// 5) Реализовать Empty state приложения. Это значит, что когда список пустой - вместо него
// какой-то текст в стиле "добавьте дело". Когда есть хоть одно дело - то 
// этот текст прячется

const showError = () => {
    document.querySelector('.error').classList.remove('d-none')
}

const hideError = () => {
    document.querySelector('.error').classList.add('d-none')
}

const isValidValue = (value) => {
    if(!value || value.length < 2) {
      return false;
    }
    return true;
};


const addListItem = () => {
    const inputValue = document.getElementById("input").value;

    if(isValidValue(inputValue)) {
        hideError();
        const listContainer = document.getElementById("list");
        listContainer.insertAdjacentHTML(
          "beforeend",
          `
         <li>${inputValue}<span class="remove-button">x</span></li>`
        );
    } else {
        showError();
    }
}



const addListItemBtn = document.getElementById("addItem");

addListItemBtn.addEventListener("click", addListItem);