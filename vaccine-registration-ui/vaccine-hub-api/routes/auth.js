const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//login and register endpoints
router.post("/register", async (req, res)=> {
    const {name, email, password} = req.body;

    //password 
    try {
        //generating salt with cost factor
        const saltRounds= 10;
        const salt= await bcrypt.genSalt(password, salt);

        //hashing the password
        const hashedPassword = await bcrypt.hash(password, salt)


        const createUserQuery = `INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING *` 
        
        const values= [name, email, hashedPassword];
        const result= await pool.query(createUserQuery, values)
    }
})



userRouter.get("*", (request, response) => {
  response.status(404).send("Error. Page not found.");
});
