
  //Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('AvatarShuffle/dist/avatar-shuffle'));


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/avatar-shuffle/index.html'));
});

console.log(__dirname);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, ()=>{
    console.log("server has started on port 8080")
});