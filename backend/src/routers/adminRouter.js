const adminController = require('../controllers/adminController')
const router = require('express').Router();

router.get('/admin/resume/:id', async (req, res) => {
    const managerId = req.params.id;
    const response = await adminController.getResume(managerId);
    if(response){
        res.status(200).send(response);
    }else{
        res.sendStatus(401);
    }
})

router.get('/admin/sellers-table/:id', async (req, res) => {
    const managerId = req.params.id;
    const response = await adminController.getSellersTable(managerId);
    if(response){
        res.status(200).send(response);
    }else{
        res.sendStatus(401);
    }
})

router.get('/admin/purchases-table/:id', async (req, res) => {
    const managerId = req.params.id;
    const response = await adminController.getPurchasesTable(managerId)
    if(response){
        res.status(200).send(response);
    }else{
        res.sendStatus(401);
    }
})

module.exports = router