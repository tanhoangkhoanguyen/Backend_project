import express from 'express';

import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Love yNhi');
});

app.listen(PORT, () => {
    console.log(`Thuong thuong yNhi nhieu nhieu http://localhost:${PORT}`);
});

export default app;