/**
 * Задание 2.
 *
 * Написать имплементацию метода Object.freeze().
 *
 * Метод должен:
 * - Предотвращать возможность добавления новых свойств к объекту;
 * - Предотвращать возможность удаления существующих свойств объекта;
 * - Предотвращать возможность изменения дескрипторов свойств объекта;
 * - Предотвращать возможность изменения значения свойств объекта.
 *
 * Условия:
 * - Встроенным методом Object.freeze() пользоваться запрещено;
 * - Встроенным методом Object.preventExtensions() пользоваться можно.
 */

// Object.freeze()

function freeze(target) {
    Object.preventExtensions(target)

    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            Object.defineProperty(target, key, {
                writable: false,
                configurable: false,
            })
        }
    }

    return target;
}

const user = freeze({
    name: 'John',
    s_name: 'Watson',
    job: 'frontend_dev',
});

console.log(user);
user.name = 'Hana';
console.log(user.name);