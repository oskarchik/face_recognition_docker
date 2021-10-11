require('dotenv').config();
import config from './config/config';

import app from './app';
const { PORT } = config;

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
