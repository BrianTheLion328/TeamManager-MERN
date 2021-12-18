const express = require("express")
const app = express();
const cors = require('cors')
const PORT = 8000;

require('./config/mongoose.config')

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) );

const PlayerRoutes = require('./routes/player.routes')
PlayerRoutes(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
