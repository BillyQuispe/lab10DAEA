const { Sequelize } = require('sequelize');
var username = 'sa';
var password = 'SQL#1234'; // Asegúrate de que coincida con tu contraseña
var host = 'sql-server'; // Nombre del servicio en el swarm
var dbName = 'GymStudents';

var sequelize = new Sequelize(dbName, username, password, {
    dialect: 'mssql',
    host: host,
    port: 1433,
    dialectOptions: {
        requestTimeout: 30000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Successful connection to SQL Server.');
    })
    .catch(err => {
        console.error('** SQL Server connection failed: ', err);
        process.exit(1);
    });

var Student = sequelize.define('student', {
    name: Sequelize.STRING,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

Student.sync();

module.exports = { Students: Student };
