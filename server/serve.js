// imports
const emailjs = require('emailjs-com');
const dotenv = require('dotenv');
dotenv.config();

// variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// const emailServiceId = process.env.APP_SERVICE_ID;
// const emailTemplateId = process.env.APP_TEMPLATE_ID;
const emailUserId = process.env.APP_USER_ID;

//security
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


// defining an array to work as the database (temporary solution)

app.get('/', (req, res) => {
  res.send(ads);
});

app.get('/email', (req, res) => {
    res.send("hello, will add emailjs another time");
    //   try {
    //     console.log("trying...");
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
    //     'YOUR_USER_ID', {
    //       name: this.name,
    //       email: this.email,
    //       message: this.message
    //     })
    //   console.log("finished")
    //   } catch(error) {
    //       console.log({error})
    //   }

    })


app.listen(3001, () => {
  console.log('listening on port 3001');
});