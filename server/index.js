const express = require('express');
const app = express();
const msg = require('./controllers/messages');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, msg.create);
app.get(messagesBaseUrl, msg.read);
app.put(`${messagesBaseUrl}/:id`, msg.update);
app.delete(`${messagesBaseUrl}/:id`, msg.delete);

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});