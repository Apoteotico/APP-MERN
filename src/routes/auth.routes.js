// Router es una funcin de express
import {Router} from "express"
import {login, register} from "../controllers/auth.controller.js"

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);
export default router