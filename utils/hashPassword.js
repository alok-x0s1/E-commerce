const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
    return hash;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

const verifyPassword = async (password, hash) => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

module.exports = { hashPassword, verifyPassword };