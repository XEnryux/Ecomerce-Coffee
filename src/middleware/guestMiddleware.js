function guestMiddleware(req, res, next){
if (req.session && req.session.userLogin){
    res.send('Esta pagina es solo para invitados')
}else{
    next()
};
}

module.exports= guestMiddleware;