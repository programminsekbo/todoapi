import express from 'express';
const router = express.Router();
import * as UsersController from "../app/controllers/UsersController.js";



// Users

router.post("/LoginService",UsersController.LoginService)








export default router;


