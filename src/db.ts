import {Sequelize} from 'sequelize'

export default new Sequelize('telegram_calculator', 'root', 'root', {
    host: 'ep-dark-leaf-17531119-pooler.eu-central-1.postgres.vercel-storage.com',
    port: 5432,
    dialect: 'postgres',
})