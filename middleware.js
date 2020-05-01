module.exports = () => {

const useSecureProtocol = (req,res,next) => {
    if(req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production'){
        console.log(`protocol: ${req.headers['x-forwarded-proto']}`)
        console.log(`header: ${req.headers.host}`)
        console.log(`url: ${req.url}`)
        return res.redirect('https://'+req.headers.host+req.url)
    }else{
        return next();
    }
}


    return{
        useSecureProtocol
    }
}