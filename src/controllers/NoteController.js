import Joi from 'joi';
import NoteModel from '../models/note.js';

const index = async (req, res) => {

    const [rows, fields] = await NoteModel.all();

    res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved all notes',
        data: rows,
    });
}

const store = async (req, res) => {
    // get body from request
    const note = req.body;

    // validate request
    const schema = Joi.object({
        title: Joi.string().required(),
        note: Joi.string().required(),
        datetime: Joi.date().iso().required()
    });

    const { error } = schema.validate(note);

    if (error) {
        return res.status(400).json({
            status: 'fail',
            message: error.details[0].message,
        });
    }

    // create note
    await NoteModel.create(note);

    res.status(200).json({
        status: 'success',
        message: 'Successfully created a new note',
    });
}

const update = (req, res) => {
    // TODO: IMPLEMENT LOGIC TO UPDATE A NOTE
    res.status(200).json({
        message: 'PUT /notes'
    });
}

const destroy = (req, res) => {
    // TODO: IMPLEMENT LOGIC TO DELETE A NOTE
    res.status(200).json({
        message: 'DELETE /notes'
    });
}

export default {
    index,
    store,
    update,
    destroy
}