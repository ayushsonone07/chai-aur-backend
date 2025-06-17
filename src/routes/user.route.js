import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";

const router = Router();

/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           example:
 *             name: John Doe
 *             email: john@example.com
 *             password: secret123
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register", registerUser);

 /**
   * @swagger
   * /api/v1/users/register:
   *   get:
   *     summary: Register a user
   *     responses:
   *       200:
   *         description: OK
   */
router.get("/login", loginUser);

export default router;