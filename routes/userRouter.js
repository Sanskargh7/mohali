const addressController=require('../controllers/addressController')
const userController=require('../controllers/userController')
const router=require('express').Router();
router.post('/userAddress',addressController.Uaddress);
router.get('getAddress',addressController.getAllAddress);
router.put('/:id',addressController.updateAddress);
router.get('/getOne',addressController.getOndeAddress);
// for user
router.post('/adduser',userController.addUser);
module.exports=router;