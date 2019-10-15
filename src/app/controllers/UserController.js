import User from '../models/User';

class UserController {
  async store(req, res) {
    // Não preciso fazer isso pois o Schema já trata isso
    // const { name, email, password_hash } = req.body;
    // const user = await User.create({
    //   name,
    //   email,
    //   password_hash
    // })
    const userExists = await User.findOne({ where: { email: req.body.email }});
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);
    return res.json({
      id, name, email, provider
    });
  }
}

export default new UserController();
