const mongoose = require('mongoose');
const Keys = require('../users/key');
const Settings = require('../settings/status');
const Userschema = require('../users/private/model');
const users_db = require('../core/db');
const users = users_db.model('users', Userschema);

 let Key = async function(req, res, next) {
  if (req.body.key) {
      let id = req.params.id;
      try {
          let user = await users.findOne({ _id: id }).exec();
          if (user.key != req.body.key) return res.send({success:false,msg:'Dont have valid key'}).status(Settings.HTTPStatus.NOT_FOUND);
          next();
      } catch(err) {
          console.log('error caught');
          console.log(err);
      }
  } else{
    return res.send({success:false,msg:'NO key'}).status(Settings.HTTPStatus.NOT_FOUND);
  }

};

module.exports = Key;
