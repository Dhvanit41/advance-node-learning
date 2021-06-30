const {clearHash} = require('../services/cache');

module.export= async(req,res,next)=>{
    await next();
    clearHash(eq.user.id)
}