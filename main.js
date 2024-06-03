const pastMonth = document.getElementById('past-month')
const pastMonthDay = document.getElementById('past-month-day')
const pastWeek = document.getElementById('past-week')
const pastWeekDay = document.getElementById('past-week-day')
const pastDay = document.getElementById('past-day')

const leftMonth = document.getElementById('left-month')
const leftMonthDay = document.getElementById('left-month-day')
const leftWeek = document.getElementById('left-week')
const leftWeekDay = document.getElementById('left-week-day')
const leftDay = document.getElementById('left-day')

const formatNum = num => num < 10 ? `0${num}` : num;

let timer = setInterval(() => {
    let currentDate = new Date();
    let conceptionDate = new Date(2024, 0, 13);
    let birthDate = new Date(2024, 9, 13);
    let past = Date.parse(currentDate) - Date.parse(conceptionDate);
    let left = Date.parse(birthDate) - Date.parse(currentDate);

    let pastMonthValue = Math.floor(past / 1000 / 60 / 60 / 24 / 30);
    let pastMonthDayValue = Math.floor((past / 1000 / 60 / 60 / 24) % 30);
    let pastWeekValue = Math.floor(past / 1000 / 60 / 60 / 24 / 7);
    let pastWeekDayValue = Math.floor((past / 1000 / 60 / 60 / 24) % 7);
    let pastDayValue = Math.floor(past / 1000 / 60 / 60 / 24);

    let leftMonthValue = Math.floor(left / 1000 / 60 / 60 / 24 / 30);
    let leftMonthDayValue = Math.floor((left / 1000 / 60 / 60 / 24) % 30);
    let leftWeekValue = Math.floor(left / 1000 / 60 / 60 / 24 / 7);
    let leftWeekDayValue = Math.floor((left / 1000 / 60 / 60 / 24) % 7);
    let leftDayValue = Math.floor(left / 1000 / 60 / 60 / 24);
        
    pastMonth.textContent = pastMonthValue;
    pastMonthDay.textContent = pastMonthDayValue;
    pastWeek.textContent = pastWeekValue;
    pastWeekDay.textContent = pastWeekDayValue;
    pastDay.textContent = pastDayValue;

    leftMonth.textContent = leftMonthValue;
    leftMonthDay.textContent = leftMonthDayValue;
    leftWeek.textContent = leftWeekValue;
    leftWeekDay.textContent = leftWeekDayValue;
    leftDay.textContent = leftDayValue;

}, 1000)