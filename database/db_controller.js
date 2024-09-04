const e = require("express");
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://akash:dVW7xKvVgSqhLRHI@cluster0.nt88y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function getTempCheckin() {
    const connection = await client.connect();
    return connection.db("Company").collection("tempCheckin");
    
}

async function getAttendance() {
    const connection = await client.connect();
    return connection.db("Company").collection("attendance");
    
}


async function getComany() {
    const connection = await client.connect();
    return connection.db("Company").collection("company");
    
}

async function getEmployeesCollection() {

    const connection = await client.connect();
    //console.log(connection.db("Company").collection("employees"));
    
    return  connection.db("Company").collection("employees");
   
}







module.exports =  {getEmployeesCollection, getComany, getAttendance, getTempCheckin};