import db from '../config/database.js';

const create = async (note) => {
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    const values = [note.title, note.datetime, note.note];

    return db.execute(query, values);
}

const all = async () => {
    const query = 'SELECT * FROM notes';
    return db.query(query);
}

export default {
    all,
    create
}