
const appConfig = {
    title: 'My App',
    src : './src',
    assets: './public/assets'
};

function getMessage(){
    return 'Hello Es6';
}

let htmlTpl = `<html>
    <head>
        <title>${appConfig.title}</title>
    </head>
    <body>
        <h1>${getMessage()}</h1>
        <img src="${appConfig.assets}/picture.png" alt="" />
        <p>${5 + 6}</p>
    </body>
</html>`;

console.log(htmlTpl);

let message =   'hello '
              + 'javascript';
