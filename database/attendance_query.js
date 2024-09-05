
const { getTempCheckin, getAttendance } = require("./db_controller");

let currentDate;
let time;
let tempcheckCollection;
let attendanceCollection;

async function setDateAndCollection() {
     date = new Date();
     time = date.getHours() * 60 + date.getMinutes();
     currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
     tempcheckCollection = await getTempCheckin();
     attendanceCollection = await getAttendance();
    
}


async function checkout(empId) {

    await setDateAndCollection();
    const temp = await tempcheckCollection.findOne({ empId: empId });

    if (temp == null) {

        return;
    }
    else {

        const duration = time - temp.time;
        await tempcheckCollection.deleteOne({ empId: empId, time: temp.time });

        const attendence = await attendanceCollection.findOne({ date: currentDate, empId: empId });
        await attendanceCollection.updateOne({ date: currentDate, empId: empId }, { $set: { checkout: time, duration: duration + attendence.duration } });



    }



}

async function checkin(empId) {


    try {

        await setDateAndCollection();
        console.log(await tempcheckCollection.insertOne({ empId: empId, time: time }));

        const attend = await attendanceCollection.findOne({ date: currentDate, empId: empId });


        if (attend == null) {
            await attendanceCollection.insertOne({ date: currentDate, empId: empId, checkin: time, checkout: 0, duration: 0 });

        }



    }
    catch (e) {
        console.log("Error in checkintempId");
        //console.error(e);
    }


}

async function getAttendanceAll(startDate , endDate, limit) {
    try {

    }
    catch (e) {
        console.log("Error in getAttendance");
        //console.error(e);
    }
}

async function getAttendanceById(empId, startDate, endDate) {
    try {

    }
    catch (e) {
        console.log("Error in getAttendanceById");
        //console.error(e);
    }
}
 

module.exports = { checkin, checkout };
