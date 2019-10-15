import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async(req, res) => {
  const user = await User.create({
    name: 'Patrick Maciel',
    email: 'patrickmaciel.info@gmail.com',
    password_hash: '123412341234',
  });

  return res.json(user);
});

export default routes;
