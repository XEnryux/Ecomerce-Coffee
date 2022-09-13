const fs = requiere('fs'); 

function logMiddleware(req, res, next){
    fs.appendFileSync(login.txt, "se logeo..")
    
next();
}

module.exports = logMiddleware;
