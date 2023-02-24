module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define('test', {
        test_data: {
            type: DataTypes.TEXT,
        },
    }, {
        freezeTableName: true,
    });

    return Test;
};