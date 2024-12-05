
const index = (req, res) => {
    // TODO: IMPLEMENT LOGIC TO RETURN ALL NOTES DATA
    res.status(200).json({
        message: 'GET /notes'
    });
}

const store = (req, res) => {
    // TODO: IMPLEMENT LOGIC TO STORE A NEW NOTE
    res.status(200).json({
        message: 'POST /notes'
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