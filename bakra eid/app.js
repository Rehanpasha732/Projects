// var get = document.getElementById("eid_1_time").innerHTML

// var EidDay1 = new Date("july 10, 2022").getTime();
// var EidDayName1 = new Date("july 10, 2022").getDay();
// var EidDate1 = new Date("july 10, 2022").getDate();


// eid_1_time.innerHTML

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var currentDate = new Date().getTime();

var EidDay1 = new Date("july 10, 2022").getTime();
var EidDayName1 = new Date("july 10, 2022").getDay();
var EidDate1 = new Date("july 10, 2022").getDate();


var EidDay2 = new Date("july 11, 2022").getTime();
var EidDayName2 = new Date("july 11, 2022").getDay();
var EidDate2 = new Date("july 11, 2022").getDate();



var EidDay3 = new Date("july 12, 2022").getTime();
var EidDayName3 = new Date("july 12, 2022").getDay();
var EidDate3 = new Date("july 12, 2022").getDate();



console.log(days[EidDayName1] + " " + EidDate1)
console.log(days[EidDayName2] + " " + EidDate2)
console.log(days[EidDayName3] + " " + EidDate3)

var diff1 = EidDay1 - currentDate;
var diff2 = EidDay2 - currentDate;
var diff3 = EidDay3 - currentDate;


var firstEid = Math.ceil(diff1 / (1000 * 60 * 60 * 24))
var secEid = Math.ceil(diff2 / (1000 * 60 * 60 * 24))
var thirdEid = Math.ceil(diff3 / (1000 * 60 * 60 * 24))

var eid1 = document.getElementById('eid_1_time');
eid1.innerHTML = firstEid;

var eid2 = document.getElementById('eid_day_two');
eid2.innerHTML = secEid;

var eid3 = document.getElementById('eid_day_third');
eid3.innerHTML = thirdEid;

var firstEidHours = Math.ceil(diff1 / (1000 * 60* 60))
var SecEidHours = Math.ceil(diff2 / (1000 * 60* 60))
var thirdEidHours = Math.ceil(diff3 / (1000 * 60 * 60))

var firstEid = document.getElementById("first_eid_hr")
firstEid.innerHTML = firstEidHours

var secondEid = document.getElementById("second_eid_hr")
secondEid.innerHTML = SecEidHours

var thirdEid = document.getElementById("third_eid_hr")
thirdEid.innerHTML = thirdEidHours


// Hours
// var firstEidHours = Math.ceil(diff1 / (1000 * 60 * 60))
// var SecEidHours = Math.ceil(diff2 / (1000 * 60 * 60))
// var thirdEidHours = Math.ceil(diff3 / (1000 * 60 * 60))

// var third_Eid = document.getElementById("third_eid_Hours")
// third_Eid.innerHTML = thirdEidHours
