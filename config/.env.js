var EnvChannel  = {
    DEVELOPMENT:0, 
    TEST:1,
    PRODUCTION:2
}
const ENV_CHANNEL = EnvChannel.DEVELOPMENT;
if(ENV_CHANNEL == EnvChannel.DEVELOPMENT){
    ENV_CONFIG = require('@/config/.env.dev.js');
}else if(ENV_CHANNEL == EnvChannel.TEST){
    ENV_CONFIG = require('@/config/.env.test.js');
}else if(ENV_CHANNEL == EnvChannel.PRODUCTION){
    ENV_CONFIG = require('@/config/.env.prod.js');
}
 
if (ENV_CONFIG) {
    process.uniEnv = {};
    for (let key in ENV_CONFIG) {
        process.uniEnv[key] = ENV_CONFIG[key];
    }
}