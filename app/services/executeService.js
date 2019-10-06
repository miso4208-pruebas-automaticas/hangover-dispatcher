'use strict'
const Client = require('node-rest-client').Client;

var client = new Client();


module.exports.executeTest = function (data, success, error) {
    console.log("data service:", JSON.stringify(data));

    switch (data.subType) {
        case 'random':
            executeRandom(data);
            break;
        case 'BDD':
            executeBDD(data);
            break;
        default:
            console.log('NO EJECUCION');
    }
    success('executeTest');

};

/**
 * 
 * @param {*} info 
 */
function executeBDD(info) {
    console.log('executeBDD...');

    var args = {
        data: {
            app: info.aplication,
            code: info.code,
            path_project: "/Users/leonardovalbuena/Documents/workspaceUniandes/pruebasAut/Android_worker"
        },
        headers: { "Content-Type": "application/json" }
    };

    console.log('ARGS post: ', JSON.stringify(args));
    client.post("http://localhost:8002/test/calabash", args, function (data, response) {
        console.log("WORKER CALL: ", data);
        console.log("WORKER RESP: ", response);
    });
}

/**
 * 
 */
function executeRandom(info) {
    console.log('executeRandom...');
    var args = {
        data: {
            app: info.aplication,
            number: info.numberExecution,
            code: info.code,
            path_project: "/Users/leonardovalbuena/Documents/workspaceUniandes/pruebasAut/Android_worker"
        },
        headers: { "Content-Type": "application/json" }
    };

    console.log('ARGS post: ', JSON.stringify(args));
    client.post("http://localhost:8002/test/random", args, function (data, response) {
        console.log("WORKER CALL: ", data);
        console.log("WORKER RESP: ", response);
    });
}

