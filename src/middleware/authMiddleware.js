function authMiddleware(req, res, next){
    if (req.session.userToLogin != undefined){
    next();
    }else{
        res.send('Esta pagina es solo para usuarios logueados')
    }
    }
    
    module.exports= authMiddleware;