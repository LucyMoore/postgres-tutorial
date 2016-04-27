var pg = require("pg")

var accessDB = 'postgres://testuser:test@localhost/flowers'

var Client = new pg.Client(accessDB)

Client.connect(function(err){
	if(err){
		return console.log('connection error', err)
	}
	Client.query('SELECT * FROM flower', function(err, result){
		if(err){
			return console.log('error reciving data', err)
		} else{
		return console.log(result)
		}
		Client.end()
	})
})