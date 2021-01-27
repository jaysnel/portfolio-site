// imports
const dotenv = require('dotenv');
dotenv.config();

// variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { default: axios } = require('axios');

const emailServiceId = process.env.APP_SERVICE_ID;
const emailTemplateId = process.env.APP_TEMPLATE_ID;
const emailUserId = process.env.APP_USER_ID;

//security
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.send("Working.");
});


app.post('/email', (req, res) => {

  let formdata = req.body;
  let finalData = {
    service_id: emailServiceId,
    template_id: emailTemplateId,
    user_id: emailUserId,
    template_params: formdata
  }

  axios.post('https://api.emailjs.com/api/v1.0/email/send', finalData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    });


app.listen(3001, () => {
  console.log('listening on port 3001');
});