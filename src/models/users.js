const user = (sequalize, DataTypes) => {
  
  // Define User table from PostgreSQL
  const User = sequalize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  // Method to login by username or email
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });

    if(!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }

    return user;
  }

  return User;
};

export default user;