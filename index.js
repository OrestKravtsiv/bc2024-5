const express = require('express');
const app = express();
const { program } = require('commander');

//Налаштував потрібні аргументи
program
    .requiredOption('-h, --host <host>', 'address of the server')
    .requiredOption('-p, --port <port>', 'port of the server')
    .requiredOption('-c, --cache <path>', 'cache directory path')
    .configureOutput({
        outputError: (str, write) => {
            if (str.includes("-h")) console.error("Please, specify host address")
            else if (str.includes("-p")) console.error("Please, specify port")
            else if (str.includes("-c")) console.error("Please, specify cache path")

        }
    })
    .parse(process.argv);
//створив змінні для параметрів аргументів
const options = program.opts();
const host = options.host;
const port = options.port;
const cache = options.cache;


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});