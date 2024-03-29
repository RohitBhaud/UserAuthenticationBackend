const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticate = (req, res, next) => {
    const token = req.headers?.authorization;
    try {
        if (token) {
            const decoded = jwt.verify(token?.split(' ')[1], process.env.JWT_SECRET)
            if (decoded) {
                req.body.authorID = decoded.author_id
                req.body.authorName = decoded.author
                next();
            }
            else {
                res.status(401).send({
                    message: 'please login'
                })
            }
        }
        else {
            res.status(401).send({
                message: 'please login'
            })
        }
    } catch (error) {
        res.send({ error: error.message })
    }

}

module.exports = { authenticate };