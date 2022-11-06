function guestMiddleware(req, res, next){
if (req.session && req.session.userToLogin){
    res.send('Esta pagina es solo para invitados')
}else{
    next()
};
}

module.exports= guestMiddleware;