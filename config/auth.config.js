const { getConfig } = require('./config');

const testUser = {
    testUser: {
        _id: 'whatever',
        name: 'User Test',
    },
};

const getAuthConfig = getConfig({
    development: {
        jwtSecret: 'jedi',
        jwtRequired: false,
        testUser,
    },

    test: {
        jwtSecret: 'jedi',
        jwtRequired: false,
        testUser,
    },

    production: {
        jwtSecret: process.env.JWT_SECRET || 'jedi',
        jwtRequired: false,
        testUser: null,
    },
});

module.export = getAuthConfig;