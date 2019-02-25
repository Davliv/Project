
const express = require('express');
const bs = require('body-parser');
const validation = require('./components/core/validator');



const AppConfigs = require('./components/settings/configs');

const app = express();

app.use(bs.json());
app.use(bs.urlencoded({extended: false}));

const ServicesRouter = require('./components/services/api');
const UsersRouter = require('./components/users/api');

//app.use(cors({origin: 'http://localhost:3000'}));
app.use('/api/v1/services', ServicesRouter);
app.use('/api/v1/users', UsersRouter);



app.listen(AppConfigs.PORT);
