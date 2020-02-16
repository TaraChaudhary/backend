const mongoose = require ('mongoose');



mongoose.connect('mongodb://localhost:27017/Traffic-Rule-and-sign-quiz-app',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
