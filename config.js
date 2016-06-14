/**
 * Created by AlphTech-Don on 6/14/2016.
 */

//set up a config module to easy to use any global value 
module.exports={
    "database":"mongodb://ok:ok@ds021943.mlab.com:21943/test123",
    "port":process.env.PORT || 3000,
    "secretKey": "YourSecretKey"

}