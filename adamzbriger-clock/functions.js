function Clock() {
	//Getting today object from new Date();
	var today = new Date();

	document.clockform.dateNOW.value = showDate(today);
	document.clockform.timeNOW.value = showTime(today);

	var days = calcDays(today);

	document.countDown.daysLeft.value = Math.floor(days);

var hours = (days - Math.floor(days))*24;

document.countDown.hoursLeft.value = Math.floor(hours);

var minutes = (hours - Math.floor(hours))*60;

document.countDown.minutesLeft.value = Math.floor(minutes);

var seconds = (minutes - Math.floor(minutes))*60

document.countDown.secondsLeft.value = Math.floor(seconds);

}

function startClock() {
	setInterval('Clock()', 1000);
}

function showDate(today) {
	todayDate = today.getDate();
	todayMonth = today.getMonth()+1;
	todayYear = today.getFullYear();

	todayDate = (todayDate < 10) ? "0"+todayDate : todayDate;
	todayMonth = (todayMonth < 10) ? "0"+todayMonth : todayMonth

	return todayMonth + "/" + todayDate + "/" + todayYear;

}

function showTime(today){
	todaySecond = today.getSeconds();
	todayMinute = today.getMinutes();
	todayHour = today.getHours();

	var ampm = (todayHour < 12) ? " a.m." : " p.m.";

	todayHour = (todayHour < 12) ? todayHour : todayHour - 12;

	todaySecond = (todaySecond < 10) ? "0"+todaySecond : todaySecond

	todayMinute = (todayMinute < 10) ? "0"+todayMinute : todayMinute

	todayHour = (todayHour < 10) ? "0"+todayHour : todayHour

	return todayHour + ":" + todayMinute + ":" + todaySecond + ampm;

}

function calcDays(currentDate) {
	newYear = new Date("June 10, 2017");
	nextYear = currentDate.getFullYear();
	newYear.setFullYear(nextYear);

	days = (newYear - currentDate)/(1000*60*60*24);
	return days;
}
