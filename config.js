module.exports = {
  rethinkdb: {
    //host: 'localhost',
    host: 'RethinkDB-openparking.cloudapp.net',
    port: 28015,
    authKey: '',
    db: 'rethinkdb_ex'
  },
  express: {
     port: 3000
  },
  socketio: {
	port: 8091
  }
};