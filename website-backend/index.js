
var express = require('express');
const Connect = require('./controllers/connect');
var cors = require('cors');
var bodyParser = require('body-parser')



const app = express()
const port = process.env.PORT || 6100


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) =>  {
    console.log('data' , req.body)
    res.send(`data ==> ${req.body}`)})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


Connect();




app.get('/', function (req, res) {
    res.send('Hello World!');
});




// import routes
const authRouter        = require('./routes/auth');
const adminRouter       = require('./routes/admin');

const productRouter        = require('./routes/product');
const productImagesRouter       = require('./routes/productImages');
const projectRouter        = require('./routes/project');








// set routes
app.use('/api', authRouter)
app.use('/api/admin', adminRouter)
app.use('/api/product', productRouter)
app.use('/api/productImages', productImagesRouter)
app.use('/api/project', projectRouter)












