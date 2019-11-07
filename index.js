express = require('express');
const app = express();





app.use('*', (req, res, next) => {
    console.log(req.url);
    next();
});
app.use(express.static('public'))

app.listen(3000, () => console.log('Hello from the web server side...'))