import { Router } from "express";

import { signUp, signIn, signOut } from '../controllers/auth.controller.js';

const authRouter = Router();

// - /api/v1/auth/sign-up -> POST BODY -> { name, email, password } -> CREATES A NEW USER

// Path: /api/v1/auth/sign-up (POST)
authRouter.post( '/sign-up', signUp);
authRouter.post( '/sign-in', signIn);
authRouter.post( '/sign-out', signOut);

export default authRouter;