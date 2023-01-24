const { Sequelize, DataTypes,Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const sequelizes = new Sequelize('test','root','root',{
  dialect:"mysql",
host :"localhost"

});

sequelize.sync().then(() => {
  console.log('task table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

const Task = sequelize.define('Tasks', {
  // Model attributes are defined here
id_task:{type:DataTypes.INTEGER}

  ,
  title: {type:DataTypes.STRING},
    
  description:{type: DataTypes.STRING}
    // allowNull defaults to true
  ,
  dateofcompletion:{type:DataTypes.DATE}
    // allowNull defaults to true
  ,
  level: {type:DataTypes.INTEGER}
    // allowNull defaults to true
  
});

// `sequelize.define` also returns the model
