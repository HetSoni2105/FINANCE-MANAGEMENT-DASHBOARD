import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import User from './models/user.js'
import { protect } from './middleware/authtoken.js'
import jwt from 'jsonwebtoken'
import Transaction from './models/transaction.js'

// add this temporarily at the top of server.js

const app =express()
app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongodb Connected: ",process.env.MONGO_URI))
.catch(err => console.log("Mongodb err: ", err))

app.post('/auth/register', async (req,res) => {
    try{
        const {name, email, password} = req.body;

        if (!name || !email || !password)
            return res.status(400).json({error : "All fields are required"})

        const exists = await User.findOne ({email})
        if(exists)
            return res.status(401).json({error : "Email already exist"})

        const hash = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hash})
        
        res.status(201).json({id: user._id, name: user.name, email: user.email})
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

app.post('/auth/login', async (req,res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email})
        if(!user)
            return res.status(401).json({error: "Invalid email or password"})

        const match = await bcrypt.compare(password, user.password)
        if( !match)
            return res.status(401).json({error: "Invalid email or password"})

        const token = jwt.sign({ id: user._id },process.env.JWT_SECRET,
           { expiresIn: '7d' });

        res.json({token: token,user: {id: user._id, name: user.name, email: user.email}})
    }catch(err){
        return res.status(500).json({error: err.message});
    }
});


app.get('/auth/me', protect, async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user._id, name: user.name, email: user.email });
});

app.post('/api/transaction',protect, async (req,res) => {
    try{const {date, amount, from, to , type, category, status, note} = req.body;
    
    const exists = await Transaction.findOne
    ({userId : req.userId,date,amount,from,to,type,category,status,note,});

    if (exists){
         return res.status(409).json({ error: 'This transaction already exists' });
    }

    const transaction = await Transaction.create(
        {userId : req.userId,date,amount,from,to,type,category,status,note,}
    );
    res.status(201).json(transaction);}
    catch(err){
            res.status(500).json({ error: err.message });
    }
})

app.listen(process.env.PORT, () =>
    console.log(`Auth server running on :${process.env.PORT}`)
);