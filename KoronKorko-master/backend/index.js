/**const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('../backend/config/db');
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const userRoutes = require('./routes/userRoutes');
const compoundInterestCalculationRoutes = require('./routes/compoundInterestCalculationRoutes');
const annualizedReturnCalculationRoutes = require('./routes/AnnualizedReturnCalculationRoutes');
const presentValueCalculationRoutes = require('./routes/PresentValueCalculationRoutes');
const investmentTimeCalculationRoutes = require('./routes/InvestmentTimeCalculationRoutes');
const breakEvenPointCalculationRoutes = require('./routes/BreakEvenPointCalculationRoutes');
const markupCalculationRoutes = require('./routes/MarkupCalculationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/compound-interest-calculations', compoundInterestCalculationRoutes);
app.use('/api/annualized-return-calculations', annualizedReturnCalculationRoutes);
app.use('/api/present-value-calculations', presentValueCalculationRoutes);
app.use('/api/investment-time-calculations', investmentTimeCalculationRoutes);
app.use('/api/break-even-point-calculations', breakEvenPointCalculationRoutes);
app.use('/api/markup-calculations', markupCalculationRoutes);

// Serve client
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('The application in not in production');
	});
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
**/
const express =require('express');
const cors=require("cors");
const path=require("path");


const app1=express();

app1.use(cors());
app1.use(express.json());



app1.listen(5001,console.log("server started!!"));

const _dirname = path.dirname("");
console.log(_dirname);
const buildpath = path.join(_dirname , "../build");
console.log(buildpath)
app1.use(express.static(buildpath)) 
app1.get("/*", function(req, res){
    console.log("here");
    res.sendFile(
        path.join(__dirname,"../build/index.html"),
        
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
});//



