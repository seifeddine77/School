//importer express :
const express = require('express');
const app = express();


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/school');
// node module for upload documents
const multer = require('multer');
//// importer bcrypt :
const bcrypt = require('bcrypt');
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
////  importer Session model :
const Session = require('./models/session');
//// importer teacher model :
const Teacher = require('./models/teacher');
//importer category Model:
const Category = require('./models/category');
//importer training model :
const Training = require('./models/training');
/// importer student model :
const Student = require('./models/students');
// import body parser module
const bodyParser = require("body-parser");

const { json } = require('body-parser');
const { tokenToString, isJSDocUnknownType } = require('typescript');
const category = require('./models/category');
const training = require('./models/training');

// Prepare Response to JSON Object
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

////////////////teacher/////////////

////Add Teacher/////
app.post('/teachers', (req, res) => {
    console.log('here into add teacher', req.body);
    const teacher = new Teacher(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            subject: req.body.subject,
            phone: req.body.phone
        }
    )

    teacher.save().then((result) => {
        console.log('result after add', result);
    })

})
///// get all teachers ////
app.get('/teachers', (req, res) => {
    console.log('here into get all teachers');
    Teacher.find((err, docs) => {
        if (err) {
            console.log('here into err', err);

        }
        else {
            console.log('result', docs);
            res.status(200).json(

                {
                    allTeachers: docs
                }
            );

        }

    })
})
//// get Teacher by id/////
app.get('/teachers/:id', (req, res) => {
    console.log('here into get teacher by id');
    console.log('id teacher to find ', req.params.id);
    Teacher.findOne({ _id: req.params.id }).then((teacher) => {
        console.log('result after research', teacher);
        res.status(200).json(
            {
                findedTeacher: teacher
            }
        )
    })
})
/////////// delete Teacher///////////
app.delete('/teachers/:id', (req, res) => {

    console.log('here into delete teacher');
    console.log('id teacher to delete', req.params.id);
    Teacher.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('result', result);
        res.status(200).json(
            {
                message: ' teacher deleted with success !'
            }
        )
    })
})
///////edit teacher /////
app.put('/teachers/:id', (req, res) => {
    console.log('here into edit teacher ', req.body);
    console.log('here into id  teacher to  edit  ', req.params.id);
    const newTeacher = new Teacher(
        {
            _id: req.params.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            subject: req.body.subject,
            phone: req.body.phone
        }


    )
    Teacher.updateOne({ _id: req.params.id }, newTeacher).then((result) => {
        console.log('here result', result);
        res.status(200).json(
            {
                message: 'teacher has been updated with success !'
            }
        )
    })
})
////////////traitement logique category //////////
//add category /////
app.post('/categories', (req, res) => {
    console.log('here into add category', req.body);
    const category = new Category(
        {
            name: req.body.name,
            description: req.body.description
        }
    )
    category.save().then((result) => {
        console.log('result after add', result);
        if (result) {
            res.status(200).json(
                {
                    message: 'category added with success !'
                }
            )

        }
    })
})
///// get all categories ////
app.get('/categories', (req, res) => {
    console.log('here into get all categories');
    Category.find((err, docs) => {
        if (err) {
            console.log('here error', err);

        }
        else {
            console.log('categories', docs);
            res.status(200).json(
                {
                    allCategories: docs
                }
            )
        }
    })
})
///// get category by id ////
app.get('/categories/:id', (req, res) => {
    console.log('here into get category by id ');
    console.log('category id ', req.params.id);
    Category.findOne({ _id: req.params.id }).then((findedCategory) => {
        console.log('here findedCategory', findedCategory);
        if (findedCategory) {
            res.status(200).json(
                {
                    category: findedCategory
                }
            )

        }
    })
})
/////// edit category/////
app.put('/categories/:id', (req, res) => {

    console.log('here into edit category', req.body);
    console.log('id category to edit', req.params.id);
    const newCategory = new Category(
        {   _id:req.params.id,
            name: req.body.name,
            description: req.body.description
        }
    )
    Category.updateOne({_id:req.params.id}, newCategory).then((result)=>
    {
        console.log('result', result);
        if (result) {
            res.status(200).json(
                {
                    message:'category edited with success !'
                }

            )
            
        }
    })
})
///// delete category ////
app.delete('/categories/:id' , (req,res)=>
{
    console.log('here into delete category');
    console.log('id category to delete' ,req.params.id);
Category.deleteOne({_id:req.params.id}).then((result)=>
{
    console.log('result after delete ', result);
    if (result) {
        res.status(200).json(
            {
                message: ' category deleted with success !'
            }
        )
        
    }
})    
})

//////////////Trainings//////////////////
/////addTraining//////
app.post('/trainings' , (req,res)=>
{
    console.log('here into add training' , req.body);
const training = new Training(
    {
        title:req.body.title,
        duration:req.body.duration,
        date:req.body.date,
        price:req.body.price,
        description:req.body.description,
        teacher:req.body.teacher
    }
)    
training.save().then((result)=>
{
    console.log('result after add ' , result);
    if (result) {
        res.status(200).json(
            {
               message : 'training added with success !' 
            }
        )
        
    }
})
})
//// get all trainings ////
app.get('/trainings' , (req,res)=>
{
    console.log('here into get all trainings ');
  Training.find((err,docs)=>
  {
      if (err) {
          console.log('here error' , err);
          
      }
      else{
          console.log('here docs', docs);
          res.status(200).json(
              {
                  allTrainings :docs
              }
          )
      }
  })  
})

///////  get training by id ////
app.get('/trainings/:id' ,(req,res)=>
{
    console.log('here into get training by id ');
    console.log('id training to search ' , req.params.id);

    Training.findOne({_id:req.params.id}).then((result)=>
    {
        console.log('result after search' , result);
        if (result) {
            res.status(200).json(
                {
                  training : result  
                }
            )
            
        }
    })
})
//// delete training ///
app.delete('/trainings/:id' , (req,res)=>{
    console.log('here into delete training');
    console.log('id Training to deletet', req.params.id);
    Training.deleteOne({_id:req.params.id}).then((result)=>{
        console.log('result after delete' , result);
        if (result) {
            res.status(200).json(
                {
                    message : 'training deleted with success !'
                }
            )
            
        }
    })
})
//// edit Training //////
app.put('/trainings/:id' , (req,res)=>
{
    console.log('here into edit training' , req.body);
    console.log('id training to edit ' , req.params.id);
    const newTraining = new Training (
        {
        _id:req.params.id,    
        title:req.body.title,
        duration:req.body.duration,
        date:req.body.date,
        price:req.body.price,
        description:req.body.description,
        teacher:req.body.teacher
        }
    )
    Training.updateOne({_id:req.params.id} , newTraining).then(
        (result)=>
        {
            console.log('here result after edit training' , result);
            if (result) {
                res.status(200).json(
                   { message : 'training edited with success !'}
                )
                
            }
        }
    )
})
//////////////Student////////////
/////sign up //////////
app.post('/students/signup' , (req,res)=>
{
bcrypt.hash(req.body.pwd, 10).then((cryptedPwd)=>
{
    console.log('here into signup' , req.body);
 const student = new Student(
     {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        pwd:cryptedPwd,
        // confirmPwd:cryptedPwd,
        phone:req.body.phone,
        address:req.body.address,
        dateOfJoin:req.body.dateOfJoin
     }
 )  
 student.save().then((result)=>
 {
     console.log('result after signup' , result);
     if (result) {
         res.status(200).json(
             {
                 message : 'signup with success !'
             }
         )
         
     }
 }) 
})

})
///// get student by id :////
app.get('/students/:id' , (req,res)=>
{
    console.log('here into get student by id ');
    console.log('id student', req.params.id);
    Student.findOne({_id:req.params.id}).then( (result)=>
        {
          console.log('result after search', result);
          if (result) {
              res.status(200).json(
                  {
                      student: result
                  }
              )
              
          }
        }
    )
    
})
////////// get all students/////
app.get('/students' , (req,res)=>
{
    console.log('here into get all students');
    Student.find((err,docs)=>
    {
        if (err) {
            console.log('here error' ,err);
            
        }
        else{
            console.log('here result',docs);
            res.status(200).json(
                {
                    allStudents  : docs
                }
            )
        }
    })
})
//////////// delete student /////
app.delete('/students/:id' , (req,res)=>
{
    console.log('here into delete student');
    console.log('id user to delete ' , req.params.id);
    Student.deleteOne({_id:req.params.id}).then((result)=>
    {
        console.log('result after delete' , result);
        if (result) {
            res.status(200).json(
                {
                    message :' students had been deleted with success !'
                }
            )
            
        }
    })
})
///// edit student //////
app.put('/students/:id' , (req,res)=>
{
    console.log('here into edit student by id ');
    console.log('id student', req.params.id)
    const newStudent = new Student(
        {    _id:req.params.id,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            pwd:req.body.pwd,
            confirmPwd:req.body.confirmPwd,
            phone:req.body.phone,
            address:req.body.address,
            dateOfJoin:req.body.dateOfJoin 
        }
    )
    Student.updateOne({_id:req.params.id},newStudent).then((result)=>
    {
        console.log('here result after edit ' , result);
        if (result) {
            res.status(200).json(
                {
                    message : ' student edited with success !'
                }
            )
        }
    })

})
//// login /// 
app.post('/students/login'  , (req,res)=>
{
    console.log('here into login' , req.body.email );

    Student.findOne({email:req.body.email}).then((resultEmail)=>
    {
     console.log('here email', resultEmail);
     if (!resultEmail ) {
         res.status(200).json(
             {
                 message : '0'
             }
         )
         
     }
     //// comparer pwd :
     return bcrypt.compare(req.body.pwd, resultEmail.pwd).then((resultPwd)=>
     {
     console.log('here pwd', resultPwd);
     if (!resultPwd) {
         res.status(200).json(
             {
                 message :'1' // pwd incorrect !
             }
         )
     }
   ///// pwd and email are coorect
   Student.findOne({email : req.body.email}).then((result)=>
   {
       let findedStudent = {
           firstName : result.firstName ,
           lastName : result.lastName ,
           phone : result.phone,
           email : result.email,
           id:result._id
       }
       if (result) {
           res.status(200).json(
               {
                   loggedStudent : findedStudent,
                   message : '2'
               }
           )
       }
   })
     });

  
    
    })
 
})

////////////traitement logique Session //////////
//add session /////
app.post('/sessions', (req, res) => {
    console.log('here into add session', req.body);
    const session = new Session(
        {
            name: req.body.name,
            teacher:req.body.teacher,
            training:req.body.training        }
    )
    session.save().then((result) => {
        console.log('result after add', result);
        if (result) {
            res.status(200).json(
                {
                    message: 'session added with success !'
                }
            )

        }
    })
})
///// get all sessions ////
app.get('/sessions', (req, res) => {
    console.log('here into get all sessions');
    Session.find((err, docs) => {
        if (err) {
            console.log('here error', err);

        }
        else {
            console.log('sessions', docs);
            res.status(200).json(
                {
                    allSessions: docs
                }
            )
        }
    })
})
///// get session by id ////
app.get('/sessions/:id', (req, res) => {
    console.log('here into get session by id ');
    console.log('session id ', req.params.id);
    Session.findOne({ _id: req.params.id }).then((findedSession) => {
        console.log('here findedSession', findedSession);
        if (findedSession) {
            res.status(200).json(
                {
                    category: findedSession
                }
            )

        }
    })
})
/////// edit session/////
app.put('/sessions/:id', (req, res) => {

    console.log('here into edit session', req.body);
    console.log('id session to edit', req.params.id);
    const newSession = new Session(
        {   _id:req.params.id,
            name: req.body.name,
            teacher:req.body.teacher,
            training: req.body.training
        }
    )
    Session.updateOne({_id:req.params.id}, newSession).then((result)=>
    {
        console.log('result', result);
        if (result) {
            res.status(200).json(
                {
                    message:'session edited with success !'
                }

            )
            
        }
    })
})
///// delete session ////
app.delete('/sessions/:id' , (req,res)=>
{
    console.log('here into delete session');
    console.log('id session to delete' ,req.params.id);
Session.deleteOne({_id:req.params.id}).then((result)=>
{
    console.log('result after delete ', result);
    if (result) {
        res.status(200).json(
            {
                message: ' session deleted with success !'
            }
        )
        
    }
})    
})
module.exports = app;
