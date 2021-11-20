const resetToMidnight = (date) => {
    // Сбрасываем время в объекте даты к полночи
    // Чтобы получить разницу между датами кратную ровно одному дню
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
};

const calcWorkDays = (allDays, currentDay) => {
    // Определяем количество рабочих дней. Дни с индексом 0 и 6 - выходные
    let summOfWorkDays = 0;
    for (let i = 0; i < allDays; i++) {
        if (currentDay >= 1 && currentDay <= 5) summOfWorkDays++;
        currentDay = currentDay === 6 ? 0 : ++currentDay;
    }
    return summOfWorkDays;
};

const calculateDeadlineTime = (membersSpeed, tasksTime, deadlineDate) => {
    const currentDate = new Date();
    resetToMidnight(currentDate);
    resetToMidnight(deadlineDate);

    // Количество дней от текущей даты включительно до дня дедлайна включительно
    const totalDaysToDeadline =
        (deadlineDate - currentDate) / (1000 * 60 * 60 * 24) + 1;

    // Ненужная примитивная проверка, была ли кратной одному дню разница между двумя датами
    if (!Number.isInteger(totalDaysToDeadline)) alert("Something went wrong!");

    const totalWorkDays = calcWorkDays(
        totalDaysToDeadline,
        currentDate.getDay()
    );

    const pointsPerDay = membersSpeed.reduce((acc, elem) => {
        return acc + elem;
    });

    const allTaskPoints = tasksTime.reduce((acc, elem) => {
        return acc + elem;
    });

    const workDaysPoints = pointsPerDay * totalWorkDays;

    if (workDaysPoints >= allTaskPoints) {
        const daysLeft = Math.floor(
            (workDaysPoints - allTaskPoints) / pointsPerDay
        );
        alert(
            `Все задачи будут успешно выполнены за ${daysLeft} до наступления дедлайна!`
        );
    } else {
        const pointsPerHour = pointsPerDay / 8;
        const extraHours = Math.ceil(
            (allTaskPoints - workDaysPoints) / pointsPerHour
        );
        alert(
            `Команде разработчиков придется потратить дополнительно ${extraHours} часов после дедлайна, чтобы выполнить все задачи в беклоге`
        );
    }
};

calculateDeadlineTime([10, 12], [10, 90], new Date(2021, 10, 30));
