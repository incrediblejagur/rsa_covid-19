module.exports = () => {

const useSecureProtocol = (req,res,next) => {
    if(req.header['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production'){
        return res.redirect('https://'+req.headers.host+req.url)
    }else{
        return next();
    }
}


    return{
        useSecureProtocol
    }
}