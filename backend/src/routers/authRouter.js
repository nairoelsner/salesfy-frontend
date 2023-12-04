const authController = require('../controllers/authController')
const router = require('express').Router();

router.post('/login', async (req, res) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    
    const response = await authController.login(email, password);
    if(response.authorized){
        res.status(200).send(response.user);
    }else{
        res.sendStatus(401)
    }
})

router.post('/register', async (req, res) => {
    const body = req.body
    const newUserInfos = {name: body.name, email: body.email, password: body.password, managerId: body.managerId}
    
    response = await authController.register(newUserInfos)
    if(response.success){
        res.sendStatus(200)
    }else{
        res.sendStatus(401)
    }
})

module.exports = router