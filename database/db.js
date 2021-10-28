var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'mongodb+srv://Vinzdb:abc2072006993@cluster0.fxdb1.mongodb.net/Vinzdb?retryWrites=true&w=majority';
try {
if(url == 'mongodb+srv://Vinzdb:abc2072006993@cluster0.fxdb1.mongodb.net/Vinzdb?retryWrites=true&w=majority') throw console.log(color('Configurasi database, var url belum diisi','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, Sneazy ampi','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nGagal connect ke database, \ncek configurasi database apakah Connection URL sudah benar','red'))
	})
	

module.exports = db
