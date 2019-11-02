'use strict'

module.exports.getTypes = function (data, success, error) {
    let query = "SELECT * FROM `TYPES` ORDER BY name ASC";
    db.query(query, (err, result) => {
        if (err) throw error;        
        success(result);
    });
};

module.exports.createTypes = function (data, success, error) {
    let query = "INSERT INTO `hangover`.`TYPES` (`name`, `description`) VALUES ('" + data.name + "', '" + data.description + "');";
    db.query(query, (err, result) => {
        if (err) throw error;        
        success(result);
    });
};

/**
 * Consulta los niveles de pruebas en la base de datos
 */
module.exports.getLevels = function (data, success, error) {
    let query = "SELECT * FROM `LEVELS` ORDER BY name ASC";
    db.query(query, (err, result) => {
        if (err) throw error;        
        success(result);
    });
};

module.exports.createLevel = function (data, success, error) {
    let query = "INSERT INTO `hangover`.`LEVELS` (`name`, `description`) VALUES ('" + data.name + "', '" + data.description + "');";
    db.query(query, (err, result) => {
        if (err) throw error;        
        success(result);
    });
};

module.exports.getApplications = function (data, success, error) {
    let query = "SELECT * FROM `APPLICATIONS` app inner join `APPLICATIONS_TYPE` at on app.id_application=at.id_application  ORDER BY app.name ASC";
    console.log(query);
    db.query(query, (err, result) => {
        if (err) throw error;
        success(result);
    });
};

/**
 * Crea una nueva aplicacion
 */
module.exports.createApplication = function(data, success, error) {    
    let insert = "INSERT INTO `hangover`.`APPLICATIONS` (`id_application`, `name`, `description`) VALUES ('" + data.id_application + "','" + data.name + "','" + data.desc + "');";
    let insert2 = "INSERT INTO `hangover`.`APPLICATIONS_TYPE` (`id_application`, `type_application_name`, `url`, `apk`) VALUES ('" + data.id_application + "', '" + data.type + "', '" + data.url + "', '" + data.apk + "');";
    console.log(insert);
    db.query(insert, (err, result) => {
        if (err) throw error;                
        db.query(insert2, (err, result) => {
            if (err) throw error;
            success(result);
        });
    });
};


module.exports.saveExecuteTest = function(data, success, error) {    
    let insert = "INSERT INTO `hangover`.`EXECUTION_TESTS` (`code`, `id_application`, `type_application_name`, `level_name`, `type_name`, `type_execution_name`, `number_executions`, `execution_time`, `repetitions`, `status`)" 
        +  "VALUES ('" + data.code + "', '" + data.aplication + "', '" + data.typeAplication + "', '" + data.level + "', '" + data.type + "', '" + data.subType + "', '" + data.numberExecution + "', '" + data.executionTime + "', '" + data.repetitions + "', '" + data.status + "');";
    console.log(insert);
    db.query(insert, (err, result) => {
        if (err) throw error;
        success(result);
    });  
};