const filterCollection = (arrToFilter, findStr, findAll, ...fields) => {
    const arrayOfWords = findStr.toLowerCase().split(" ");
    const condition = findAll ? 0 : arrayOfWords.length - 1;

    const callback = (elem, wordsToFind, pathArray) => {
        if (Array.isArray(elem)) {
            elem.forEach((el) => callback(el, wordsToFind, pathArray));
        } else {
            for (let key in elem) {
                pathArray[pathArray.length - 1] = key;
                const currentField = pathArray.join(".");

                if (typeof elem[key] === "object" && elem[key] !== null) {
                    callback(elem[key], wordsToFind, [...pathArray, null]);
                } else if (fields.includes(currentField)) {
                    const fieldValue = String(elem[key]).toLowerCase();
                    console.log(fieldValue);
                    const index = wordsToFind.findIndex((word) => word === fieldValue);
                    if (index !== -1) wordsToFind.splice(index, 1);
                }
            }
        }

        if (wordsToFind.length <= condition) {
            return true;
        }
        return false;
    };

    return arrToFilter.filter((el) => {
        return callback(el, [...arrayOfWords], [null]);
    });
};

////////////////////////////////////////////////////////////////////////
const arr = [
    { description: null },
    { locales: [{ name: "Toyota" }, { description: "En_US" }] },
    { contentType: { name: "Toyota" } },
    { fakefield: 10 },
];
const string = "en_US Toyota";
const doFindAll = true;
const fields = ["name", "description", "contentType.name", "locales.name", "locales.description"];

console.log(filterCollection(arr, string, doFindAll, ...fields));
