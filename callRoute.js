var call_handler = function(info) {
    console.log(info);
  this
  .command('bridge','sofia/gateway/Tfreeswitch/Eduardo')
  .then(function() {
     
  })
  .then(function() {
    this.hangup() // hang-up the call
  })
  .then(function() {
    this.exit()   // tell FreeSwitch we're disconnecting
  })
};

require('esl').server(call_handler).listen(8085);

