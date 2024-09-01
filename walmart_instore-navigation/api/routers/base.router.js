import express from 'express';
import { addCategoryLoc } from '../controllers//base_category/index.js';
import { getLocation } from '../controllers//base_category/index.js';

const router = express.Router();

router.post('/addlocation', addCategoryLoc);
router.get('/location', getLocation);

export default router;