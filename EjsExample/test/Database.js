const assert = require("assert");
const db = require("../app/database/MysqlUtil");

describe('MySql', function(done) {
  describe('#connection()', function(){
    it('db.connect should ...', function(done) {
      db.connect(function(err, result) {
        db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
          if (error) 
            throw error
          else 
            done();
        });        
      });
  });
  });
});