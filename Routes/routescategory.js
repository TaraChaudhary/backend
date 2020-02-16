const express = require ('express');
const Category=require('../Model/Category');

const routecategory=new express.Router()


routecategory.route("/category")
.post((req, res) => {
    var myData = new Category(req.body);
    myData.save();
    res.send();
})
.get((req, res) => {
    Category.find().then(function(user_data)
    {
        res.send(user_data);
    }).catch(function(e)
    {
        res.send(e);
    });
});
routecategory.route("/singlecat/:id")
.delete((req,res)=>
{
    Category.findByIdAndDelete(req.params.id).then(function()
    {
        res.send("deleted")
    }).catch(function(e)
{
    res.send(e);
})
})
.put((req,res)=>
{
    Category.findByIdAndUpdate({_id: req.params.id},req.body).then(function()
    {
        res.send("updated")}).catch(function(e)
    {
        res.send(e);
    })
})

module.exports=routecategory