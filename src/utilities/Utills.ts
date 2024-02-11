import {eachDayOfInterval, endOfMonth, setMonth, startOfMonth} from "date-fns";

const getAllDaysOfMonthByDate = (date: Date) => {
    const firstDayOfMonth = startOfMonth(date);
    const lastDayOfMonth = endOfMonth(date);
    const fullMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    });

    return fullMonth;
};

const getRestDaysOfPrevMonth = (prevMonth: Date[], dateOfCurrentMonth: Date) => {
    const firstDayOfCurrentMonth = startOfMonth(dateOfCurrentMonth).getDay();

    if (firstDayOfCurrentMonth === 0) {
        return [];
    }

    const daysInPrevMonth = prevMonth.length;

    return prevMonth.slice(daysInPrevMonth - firstDayOfCurrentMonth, daysInPrevMonth);
};

const getRestDaysOfNextMonth = (nextMonth: Date[], dateOfCurrentMonth: Date) => {
    const lastDayOfCurrentMonth = endOfMonth(dateOfCurrentMonth).getDay();

    if (lastDayOfCurrentMonth === 6) {
        return [];
    }

    return nextMonth.slice(0, 6 - lastDayOfCurrentMonth);
}

export const generateMonthToShow = (date: Date) => {
    const prevFullMonth = getAllDaysOfMonthByDate(setMonth(date, date.getMonth() - 1));
    const nextFullMonth = getAllDaysOfMonthByDate(setMonth(date, date.getMonth() + 1));


    const currentFullMonth = getAllDaysOfMonthByDate(date)

    return [...getRestDaysOfPrevMonth(prevFullMonth, date), ...currentFullMonth, ...getRestDaysOfNextMonth(nextFullMonth, date)];
}