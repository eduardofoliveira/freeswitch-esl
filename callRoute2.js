const esl = require('modesl');

const eslServer = new esl.Server({ port: 8085, host: '0.0.0.0', myevents: true }, () => {
  console.log('esl ivr server is up');
}); // esl_server

eslServer.on('connection::ready', (conn) => {
	console.log(conn.channelData.headers[17].value);
	console.log(conn.channelData.headers[18].value);
	console.log(conn.channelData.headers[23]);

	conn.execute('set', 'effective_caller_id_number=551135880000');
	conn.execute('set', 'effective_caller_id_name=551135880000');
	conn.execute('bridge', 'sofia/gateway/Tfreeswitch/Eduardo');
}); // eslServer.on

eslServer.on('connection::open', (conn) => {
	console.log('Conexão aberta para ' + conn);
}); // eslServer.on

eslServer.on('connection::close', (conn) => {
	console.log('Conexão encerrada');
}); // eslServer.on

