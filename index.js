const path = require('path');
const express = require('express');
const app = express();
console.log('iiii');
app.use(express.static(path.resolve(__dirname, 'public')));
app.listen(4000);
