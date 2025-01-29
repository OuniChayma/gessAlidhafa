const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PompisteRout = require('./router/PompisteRouter.js');
const autentificationRouter = require('./router/autentificationRouter.js');
const BenifiquePiRouter = require('./router/benifiquePiRouter.js');
const benifiqueAepRouter = require('./router/benifiqueAepRouter.js');
const Membre = require('./router/membreRouter.js');
const detteBenifique = require('./router/detteBenifiqueRouter.js');
const DetteGess = require('./router/detteGessRouter.js');

const app = express();

mongoose.connect('mongodb+srv://mhamdisaber02102004:gess@gess.o1kwq.mongodb.net/')
.then(()=>{console.log('database connect !')})
.catch(()=>{console.log('database non connect !')});

app.use(cors());

//json
app.use(express.json());

//autentification router
app.use('/login', autentificationRouter);

//pompiste routers
app.use('/pi/pompiste', PompisteRout);
app.use('/aep/pompiste', PompisteRout);

//benifique routers
app.use('/pi/benifique', BenifiquePiRouter);
app.use('/aep/benifique', benifiqueAepRouter);

//membre router
app.use('/pi/membre',Membre);
app.use('/aep/membre',Membre);

//dette benifique router
app.use('/pi/dettebenifique',detteBenifique);
app.use('/aep/dettebenifique',detteBenifique);

// dette gess router
app.use('/pi/dettegess' , DetteGess)
app.use('/aep/dettegess' , DetteGess)

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server damarée sur http://localhost:3000");
})