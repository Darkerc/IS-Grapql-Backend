import { Sequelize } from "sequelize";

export default () => {
    const sequelize = new Sequelize('bd_nutricion','root','',{
        host:'localhost',
        dialect:"mysql"
      })
      
      try {
        sequelize.authenticate()
        console.log('auth success')
      } catch (error) {
        console.error('auth fail', error)
      }

    return sequelize; 
};
