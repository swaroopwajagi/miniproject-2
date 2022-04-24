const router = require('express').Router();
const User = require('../models/user');
const address = require('../models/address');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const bodyParser = require('body-parser');
const checkAuth = require('../middleware/check-auth');
const maths = require('../models/maths');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            return res.json({success: false, message: "Hash not found"})
        }
        const user = new User({
            displayName: req.body.displayName,
            email: req.body.email,
            password:hash,
        });
        user.save()
            .then((_) => {
                res.json({success: true, message:"Account has been created"});
            }).catch((err) => {
                if(err.code === 11000) {
                    return res.json({success: false, message: "Email already Exits"})
                }
                res.json({success: false, message:"Auth Failed"});  
            })
    });
    
});

router.post('/customer',(req, res)=>{
    const add = new address ({
        Name:req.body.name,
        email:req.body.email,
        address:req.body.address,
    });
    add.save();
    res.json({
        
        message:"address added successfully",
    })
})

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email})
        .exec()
        .then((user) => {
            if(!user) {
                return res.json({success: false, message: "User not found"});
            }
            bcrypt.compare(req.body.password, user.password, (err, rb) => {
                if(rb) {
                    const payload = {
                        userId: user._id,
                    }
                    const token = JWT.sign(payload, "codex")
                    res.json({success: true, token:token, message: "Login Successfully"})
                }else{
                    return res.json({success: false, message:"Password do not matched"})
                }
            })
        }).catch((err) => {
            res.json({success: false, error: err})
        })
});

router.get('/profile', checkAuth, (req, res) => {
    const id = req.userData.userId
    User.findById(id)
        .exec()
        .then((user) => {
            if(user) {
                return res.json({success: true, data: user})
            }
            res.json({success: false, message: "Auth Failed"});
        }).catch((err) => {
            res.json({success: false, message: "Auth Faild"})
        })
});

router.post('/maths', (req, res) => {
   const posts = req.body;
   console.log(posts);
   res.json({
       message:'data added successfully',
   })
   
    
})



module.exports = router;