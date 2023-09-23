const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000
const router = express.Router()
const cors = require('cors')

app.use(cors());


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+"/public/view/index.html"));
})
router.get('/producto/:id',function(req,res){
  res.sendFile(path.join(__dirname+"/public/view/producto.html"));
})
router.get('/historial',function(req,res){
  res.sendFile(path.join(__dirname+"/public/view/historial.html"));
})
router.get('/contacto',function(req,res){
  res.sendFile(path.join(__dirname+"/public/view/contacto.html"));
})

router.get('/share',function(req,res){
  res.sendFile(path.join(__dirname+"/public/view/share.html"));
})

//add the router
app.use(express.static(__dirname + '/public'))
app.use('/', router);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

