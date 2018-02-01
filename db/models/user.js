const Sequelize = require('sequelize');

module.export = (db) => {
    const user = db.difine('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        accesstype: Sequelize.STRING,
    });

    user.associate = () => {
    };
    
    return user;
};