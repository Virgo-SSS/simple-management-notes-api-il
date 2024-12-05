import express from 'express';
import 'dotenv/config'

const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000} and ready to accept requests!`);
});