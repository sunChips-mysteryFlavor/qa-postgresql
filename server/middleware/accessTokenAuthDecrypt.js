const crypto = require('crypto');

const algorithm = process.env.MW_AUTH_ALGORITHM;

const key = process.env.MW_AUTH_KEY;

//Decrypt
module.exports = (req, res, next) => {

  let decipher = crypto.createDecipheriv(algorithm, key, req.encryptedKey.iv);
  let decrypted = decipher.update(req.encryptedKey.encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  req.decryptedKey = decrypted

  next();
};

//DECIPHER
// //----
// const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';

// const key ='rrMbJsGJ4Pxxs0SVn8lfFzzeIhp8LQEJ';
// //----

// function decrypt(text) {

//   let decipher = crypto.createDecipheriv(algorithm, key, text.iv);

//   let decrypted = decipher.update(text.encryptedData, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');

//   return decrypted;
// }
