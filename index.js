// Your code here

function createEmployeeRecord(arry){
    return {
    firstName :arry[0],
    familyName : arry[1],
    title : arry[2], 
    payPerHour: arry[3],
    timeInEvents: [],
    timeOutEvents: []}
}

function createEmployeeRecords(altArry){
    return (altArry.map(ar => createEmployeeRecord(ar)))
}

function createTimeInEvent(name, time){    
    const [day, hours] = time.split(" ")
    
    //console.log(day, hours)


    name.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hours, 10),
        date: day
    })
    return (name);
    //console.log(day)
    //console.log(hours)
    

    
}

function createTimeOutEvent(name, time){    
    const [day, hours] = time.split(" ")

    name.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hours, 10),
        date:day
    })
     return (name)
}

function hoursWorkedOnDate(name, dateWorked ){
   // console.log(dateWorked)
     const inTime = name.timeInEvents.find(t => t.date === dateWorked)
    const outTime = name.timeOutEvents.find(t => t.date === dateWorked)

    return ((outTime.hour - inTime.hour)/100)

    
}

function wagesEarnedOnDate(name, date){ 
    const wages = hoursWorkedOnDate(name, date) * name.payPerHour
    return parseFloat(wages.toString())
}

function allWagesFor(name){ 
     let dates = name.timeInEvents.map(event => event.date)
    

     let payable = dates.reduce((memo, d) => memo + wagesEarnedOnDate(name, d), 0)

   return payable
}

function findEmployeeByFirstName(arry, firstName){  
   return arry.find(rec => rec.firstName === firstName
    )
}

function calculatePayroll(records){
   return records.reduce((memo, rec) => memo + allWagesFor(rec), 0)    
}
