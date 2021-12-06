const messages = [];
exports.createMessage = (req,res)=>{
    const {user, content} = req.body;
    const date =  new Date().toTimeString().slice(0,8);
    messages.push({user, content, date})
    // sent to ALL messages.length-1
}

exports.updateMessage = (req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      });
      response.write({retry: 10000})
}