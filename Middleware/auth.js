const jwt = require('jsonwebtoken') 
const User = require('../Model/People') 
 
const auth = async (req, res, next) => {   
      try {       
        const token = req.header('Authorization').replace('Bearer ', '')        
        const decoded = jwt.verify(token, 'thisismynewcourse')         
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token
     }) 
 
        if (!user) {         
                throw new Error()   
         } 
 
        req.token = token
        req.user = user  
        
        req.user_type=user.user_type
        
        next()  
     } catch (e) {  
         res.status(401).send({ error: 'Please authenticate.' })   
      } 
    } 

    module.exports = auth 
 