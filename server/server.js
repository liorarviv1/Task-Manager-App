const express=require('express');
const userRouter= require('./routers/userRouter');
var cors=require('cors') //מבטלים את החסימה


const app = express();

app.use(cors())
require('./confing/database') //התחברות לדטהביס

app.use(express.json())

app.use("/api/users",userRouter);

app.listen(8000);