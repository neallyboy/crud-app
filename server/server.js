import express from 'express';

// Express related imports
// other node package imports
...

import models, { sequelize } from './models';

const app = express();

// additional Express stuff: middleware, routes, ...


const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});