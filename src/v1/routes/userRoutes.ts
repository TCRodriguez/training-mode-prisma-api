import express from "express";
import usersController from "../controllers/usersController";

const router = express.Router();

router.get('/', usersController.index);

router.get('/:user', usersController.show);

router.post('/:user', usersController.create);

router.put('/:user', usersController.edit);

router.delete('/:user', usersController.deleteUser);


export default router;