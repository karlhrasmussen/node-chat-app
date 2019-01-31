var env = process.env.NODE_ENV || 'development';
console.log('env *****', env);

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    })
}
else {
    process.env.MONGODB_URI = 'mongodb://karlrasmussen:mkarl0907@ds229552.mlab.com:29552/nodejsclass';
}

// if(env === 'development') {
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// }else if (env === 'test') {
//     process.env.PORT = 3000;
// //    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
//     process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';
// }
// else {
//     process.env.MONGODB_URI = 'mongodb://karlrasmussen:mkarl0907@ds229552.mlab.com:29552/nodejsclass';
// }
