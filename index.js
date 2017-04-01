const app = require('./app');
require('babel-register');
const port = process.env.PORT || 3000
app.listen(port);
