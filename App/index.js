const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database"); // conect database

// formUserRegistration
const formUserRegistrationController = require("./userRegistration/userRegistration");


//mainPage
const mainPageController = require("./mainPage/mainPage");


// NewsController
const newsController = require("./News/news");

// FormMedicRegistration
const formMedicRegistrationController = require("./medicalRecord/medicalRecord")

// appointmentConsultation

const appointmentConsultationController = require("./appointmentConsultation/appointment consultation")

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());


// conexão com o banco de dados;
connection
    .authenticate()
    .then(()=>{
        console.log("conexão com banco de dados status 200");
    }).catch((erro)=>{
        console.log(erro);
    });

app.use("/", formUserRegistrationController);
app.use("/", mainPageController);
app.use("/", newsController);
app.use("/", formMedicRegistrationController);
app.use('/', appointmentConsultationController)
















app.listen(8080,()=>{
    console.log("Servidor rodando")
})