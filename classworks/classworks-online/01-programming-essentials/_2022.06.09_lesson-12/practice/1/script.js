/**
 * Задание 1.
 *
 * Написать программа для редактирования количества остатка продуктов на складе магазина.
 *
 * Программа должна запрашивать название товара для редактирования.
 * Если ввёденного товара на складе нет — программа проводит повторный запрос названия товара
 * до тех пор, пока соответствующее название не будет введено.
 *
 * После чего программа запрашивает новое количество товара.
 * После чего программа вносит изменения на веб-страницу: заменяет остаток указанного товара его новым количеством.
 */

const makeProductList = (selector) => {
    const list = document.querySelectorAll(selector);

    const result = [];
    list.forEach((el) => {
        result.push(el.innerText.split(":")[0].toLowerCase());
    });

    return result;
};

const checkProductList = (productList, productName) => {
    return productList.indexOf(productName.toLowerCase()) !== -1;
};

const replaceAmount = (htmlEl, newNumber) => {
    const newString = `${htmlEl.innerText.split(": ")[0]}: ${newNumber}`;
    htmlEl.innerText = newString;
    // return newString;
};

const getProductName = (productListSelector) => {
    let productName = prompt("Enter name of product:");
    while (!checkProductList(makeProductList(productListSelector), productName)) {
        productName = prompt("Product is not avaliable. Enter product name:");
    }
    let newQuantity = +prompt("Enter new quantity:");

    const listItemsArray = document.querySelectorAll(productListSelector);

    const index = makeProductList(productListSelector).indexOf(productName.toLocaleLowerCase());

    replaceAmount(listItemsArray[index], newQuantity);
};

getProductName(".store li");
