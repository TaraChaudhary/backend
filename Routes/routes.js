const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
const People=require('../Model/People');
const auth=require('../Middleware/auth');
const router=new express.Router()


router.route("/signup")
.post ((req, res,) => {
    var myData = new People(req.body);
    myData.save();
    res.send();
})
.get((req, res)=> {
    People.find().then(function (xyz) {
        res.send(xyz);
    }).catch(function (e) {
        res.send(e)
    });
});


  


router.post("/login", async function(req, res){     
    try{         
    const user = await People.checkCrediantialsDb(req.body.username, req.body.password)         
    const token = await  user.generateAuthToken()        
    
    res.send({token:token,
        _id:user._id,
        dob:user.dob,
        email:user.email,
        firstname:user.firstname,
        lastname:user.lastname,
        gender:user.gender,
        image:user.image,
        phone:user.phone,
        username:user.username,
        password:user.password});  
    }
    catch{
        res.send("please login");
    }       
});


router.route("/single/:id")
.get((req, res)=>{
    console.log(req.params.id)
    People.findById(req.params.id).then(function(user_data)
    {
        res.send(user_data);
        console.log(user_data)
    }).catch(function(e)
    {
        res.send(e);
    });
})

.put((req,res)=>
{
    People.findByIdAndUpdate({_id: req.params.id},req.body).then(function()
    {
        res.send("updated")}).catch(function(e)
    {
        res.send(e);
    })
})
.delete((req,res)=>
{
    People.findByIdAndDelete(req.params.id).then(function()
    {
        res.send("deleted")
    }).catch(function(e)
{
    res.send(e);
})
});




router.post('/logout', auth, async (req, res) => {
    try {
    req.user.tokens = req.user.tokens.filter((token) => {
    return token.token !== req.token
    })
    await req.user.save()
    res.send("logout success")
    } catch (e) {
    res.status(500).send("failed")
    }
   });



   router.route('/user/:id')
  .get((req, res) =>{
    People.findOne({_id :req.params.id}).then(function (xyz) {
        res.send(xyz);
    }).catch(function (e) {
        res.send(e)
    });
});


module.exports=router