import express from 'express';
import { addItem } from '../controllers/listing/groceries.js';

const router = express.Router();

router.post('/additem', addItem);

export default router;