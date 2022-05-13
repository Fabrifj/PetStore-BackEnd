import express from 'express';
import { getAllAnimals, adoptAnimla } from '../controllers/PointController.js';

const router = express.Router()

router.get('/', getAllAnimals)
router.post('/', adoptAnimla)


export default router