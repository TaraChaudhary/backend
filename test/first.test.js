// use the path of your model
const People = require('../model/People');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/Test'; 
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('People  Schema test anything', () => {
// the code below is for insert testing
    // it('Add People testing anything', () => {
    //     const people = {
    //         'firstname': 'Nokia',
    //         'phone': '21'
    //     };
        
    //     return People.create(people)
    //         .then((pro_ret) => {
    //             expect(pro_ret.firstname).toEqual('Nokia');
    //         });
    // });
// the code below is for delete testing
   // it('to test the delete product is working or not', async () => {
       // const status = await People.deleteMany();
    //    expect(status.ok).toBe(1);
});
//});


it('to test the update', async () => {

    return People.findOneAndUpdate({_id :Object('5e391289fc6d6e29f0caf757')}, {$set : {firstname:'sanjay'},$set:{phone:'mi'}})
    .then((pp)=>{
        expect(pp.firstname).toEqual('sanjay')
     
    })
  
});

    



