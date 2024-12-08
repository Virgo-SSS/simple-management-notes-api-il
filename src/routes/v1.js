import express from 'express';
import NoteController from '../controllers/NoteController.js';

const router = express.Router();

router.get('/notes', NoteController.index);
router.post('/notes', NoteController.store);
router.put('/notes/:noteId', NoteController.update);
router.delete('/notes/:noteId', NoteController.destroy);

export default router;