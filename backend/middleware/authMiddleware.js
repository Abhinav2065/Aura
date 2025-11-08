const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret-key"; // Secret Key 


const verifyToken = (req,res,next) => {

    const token = req.header("Authorization")?.replace("Bearer","");


    if (!token) {
        return res.status(401).json({
            error:true,
            message: "No Tokens Provided, Acess Denied"
        });
    }

    try {

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            error:true,
            message: "Either you have an Invalid Token Or your Token is Expired."
        });

    }

}



module.exports = verifyToken;