import {Sequelize} from 'sequelize'

export default new Sequelize('telegram_calculator', 'root', 'root', {
    host: 'master.c3e325dc-e1d1-4aff-8a0a-b3377bebf5e9.c.dbaas.selcloud.ru',
    port: 5432,
    dialect: 'postgres',
})