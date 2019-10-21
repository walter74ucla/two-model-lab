const express = require('express');
const app     = express();




// home page
app.get('/',(req, res) => {
  res.render('index.ejs')
});


app.listen(3000, () => {
  console.log('server listening on port', 3000);
});
