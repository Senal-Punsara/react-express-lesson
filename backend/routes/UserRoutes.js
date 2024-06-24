import express from "express";
import {registerUser, loginUser} from '../controllers/UserController.js';

const router = express.Router();
//http://localhost:8000/users/
router.get('/',(req, res)=>{
    res.send("index of users");
  });
//http://localhost:8000/users/get-user
router.get('/get-user',(req, res)=>{
  res.send("user get");
});


router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/', allUser);

export default router;