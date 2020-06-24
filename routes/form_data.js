var express = require("express");
var bodyParser = require("body-parser")
var multer = require("multer")
var router = express.Router();

var upload = multer();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
router.use(upload.array());
router.get("/",(req,res)=>{
    res.render("form_data")
})
router.post("/form_data",{
    
})