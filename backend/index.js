const express = require('express');
const cors = require('cors');
require('./db/Config');
const User = require('./db/User');
const Jwt = require("jsonwebtoken");
const jwtKey = 'e-dash';
const app = express();
app.use(cors());
app.use(express.json());


app.post("/register-forms", (req, res) => {                        
  console.log("Frontend sent:", req.body); // ✅

  let user = new User(req.body);

  user.save()
    .then(result => {
      console.log("Saved user:", result); // ✅
      result = result.toObject();
      delete result.Password; 

      Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          return res.send({ result: "Something went wrong" });
        }
        res.send({ result, auth: token });
      });
    })

    .catch(err => {
      console.error("Save failed:", err); // ✅
      res.status(500).send({ error: err.message });
    });
});



function verifyToken( req, resp, next) {
    let token = req.headers['authorization'];
    if(token) {
        token = token.split(' ')[1];
        console.warn("middleware , called", token)
        Jwt.verify(token, jwtKey, (err, valid) => {
            if(err) {
                resp.status(401).send({result:"Please provide valid token"})
            }else {
                next();
            }
        })
    }

else {
    resp.status(403).send({result: "Please add token with header"})
}
//next();
}

app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
});




