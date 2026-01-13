const jwt = require("jsonwebtoken");
const user = require("../models/User");

const protect = async(req,res, next) => {
    try{
        let token;
        // 1. Header se token nikalo 
        if(
            req.headers.authorization && req.headers.authorization.startswith("Bearer")
        ) {
            token = req.headers.authorization.split("")[1];
        }

        //2. token nahi milega 
        if(!token) {
            return res.status(401).json( {message: "Not authorized, no token"} );
        }
        //3. token verify karo 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //4. User nikalo (Important)
        req.user = await User.findByTd(decoded.id).select("-password");

        //5. Next route
        next();
    } catch(error) {
        res.status(401).json( {message: "Not authorized, token failed"} );
    }
};

module.exports = { protect };