import express from 'express';
import NoteController from '../controllers/NoteController.js';

const router = express.Router();

router.get('/notes', NoteController.index);
router.post('/notes', NoteController.store);
router.put('/notes', NoteController.update);
router.delete('/notes', NoteController.destroy);

export default router;