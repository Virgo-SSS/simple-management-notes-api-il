import NoteModel from '../models/note.js';

const index = async (req, res) => {
    try {
        const [rows, fields] = await NoteModel.all();
        
        res.status(200).json({
            status: 'success',
            message: 'Successfully retrieved all notes',
            data: rows,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
}

const store = async (req, res) => {
    // get body from request
    const note = req.body;

    try {
        await NoteModel.create(note);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

    res.status(200).json({
        status: 'success',
        message: 'Successfully created a new note',
    });
}

const update = async (req, res) => {
    const id = req.params.noteId;
    const body = req.body;

    // get note id from request
    if (!id) {
        res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
        });
    }

    try {
        const note = await NoteModel.findById(id);

        if(!note) {
            res.status(404).json({
                status: 'error',
                message: 'Note not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

    try {
        await NoteModel.update(id, body);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

    res.status(200).json({
        status: 'success',
        message: 'Successfully updated a note',
    });
}

const destroy = async (req, res) => {

    // get note id from request
    const id = req.params.noteId;

    if (!id) {
        res.status(400).json({
            status: 'error',
            message: 'Invalid request data',
        });
    }

    try {
        const note = await NoteModel.findById(id);

        if(!note) {
            res.status(404).json({
                status: 'error',
                message: 'Note not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

    try {
        await NoteModel.destroy(id);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
    // TODO: IMPLEMENT LOGIC TO DELETE A NOTE
    res.status(200).json({
        status: 'success',
        message: 'Successfully deleted a note',
    });
}

export default {
    index,
    store,
    update,
    destroy
}