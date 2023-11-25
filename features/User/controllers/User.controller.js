import UserModel from '../Models/User.model.js';
import jwt from "jsonwebtoken"
export  function addUser(req, res){
    const { name, email, password} = req.body;
    const data = UserModel.addUsers(name, email, password);
    res.status(201).send({success : true, msg : {data}})

}

export  function loginUser(req, res){
    const { email, password } = req.body;
    const userCheck = UserModel.checkLogin(email,password);

    if(userCheck){
        const token = jwt.sign({userId : userCheck.id, userName : userCheck.name},'malliwebvogue',{expiresIn : '1h'})
        res.cookie('jwttoken',token, {httponly : false});
        res.status(200).send({success : true, msg : 'Login Successfull'});
    }else{
        res.status(400).json({ success: false, msg: "invalid user details" });
    }
}