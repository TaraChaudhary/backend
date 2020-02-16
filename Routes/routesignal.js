const express = require ('express');
const Signal=require('../Model/Signal');

const routesignal=new express.Router()


routesignal.route("/sign")
.post((req, res) => {
    var myData = new Signal(req.body);
    myData.save();
    res.send();
})
.get((req, res) => {
    Signal.find().then(function(user_data)
    {
        res.send(user_data);
    }).catch(function(e)
    {
        res.send(e);
    });
});

module.exports=routesignal