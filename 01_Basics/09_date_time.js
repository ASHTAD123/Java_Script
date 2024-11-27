let date = new Date()
console.log(date)
console.log("Date String : " +date.toDateString())
console.log("Local String : " +date.toLocaleString())
console.log("Date is type of : " +typeof date)
console.log()

console.log("Date : ");
let myDate = new Date(2024,0,27) //month starts with 0 in js cuz it's array
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log();
console.log("Date with time : ");
let myDateAndTime = new Date(2024,0,27,11,45,0)
console.log(myDateAndTime)
console.log();

//YY MM DD
let yyMMDD = new Date("2024-1-27")
console.log("YY:MM:DD : " + yyMMDD)

console.log();

//DD MM YY
let ddMMYY = new Date("1-1-2204")
console.log("DD:MM:YY : " + ddMMYY)

console.log();

//Time stamp
let timeStamp = Date.now();
console.log("Time stamp from Date.now(): ")
console.log(timeStamp);

console.log();

console.log("Removing time from date : ")
console.log(ddMMYY.getTime())

console.log(" Convert miliseconds to seconds ")
console.log( Math.floor (Date.now()/1000))

console.log()
let d = new Date()
console.log(d)
console.log("Month : "+d.getMonth() +1)
console.log("Day : "+d.getDay())
console.log("Year : "+d.getFullYear())

d.toLocaleString('default' ,{

    weekday:"long",
})