const express = require('express');
const bodyParser = require('body-parser');
const routerTalker = require('./routerTalker/router');
const routerIdTalker = require('./routerTalker/routerId');
const routerLogin = require('./routerTalker/routerLogin');
const routerPost = require('./routerTalker/routerPostTalker');
const routerDelete = require('./routerTalker/routerDelete');
const routerEdit = require('./routerTalker/routerEdit');

const app = express();
app.use(bodyParser.json());
app.use(routerTalker);
app.use(routerIdTalker);
app.use(routerLogin);
app.use(routerPost);
app.use(routerEdit);
app.use(routerDelete);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
