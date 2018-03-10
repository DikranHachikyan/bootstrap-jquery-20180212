
const appConfig = {
    title: 'My App',
    src : './src',
    assets: './public/assets/'
};

console.log('Config:', appConfig);

appConfig.title = 'My Blog';

console.log('Config:', appConfig);

delete appConfig.assets;

console.log('Config:', appConfig);

appConfig.url = 'http://site.com';

console.log('Config:', appConfig);

appConfig = {
    a:1,
    b:2,
    c:3
};

console.log('Config:', appConfig);

