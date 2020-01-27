import { NextFunction, Request, Response } from 'express';

import { User } from '../../models/user.model';
const fs = require('fs');

export const get = (req: Request, res: Response, next: NextFunction) => {
  let fileName = req.header.name;
  let path;
  if (fileName === 'romeo') {
    path = './src/services/download/data/Romeo.enc';
  } else {
    path = './src/services/download/data/Hamlet.enc';
  }
  let file = fs.createReadStream(path);
  file.pipe(res);
  file.destroy();
  // return res;
};
