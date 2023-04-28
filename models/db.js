const Sequelize = require('sequelize');
//Conexão com o banco de dados
const sequelize = new Sequelize('epiz_34100685_postapp','epiz_34100685','digdog2002',{
    host: 'sql305.epizy.com',
    port: '3306',
    dialect: 'mysql'
});

//Vamos exportar as variáveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}