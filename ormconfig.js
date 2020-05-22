require('dotenv').config();

module.exports = {
	"type": "postgres",
	"host": process.env.TYPEORM_HOST,
	"port": process.env.TYPEORM_PORT,
	"username": process.env.TYPEORM_USERNAME,
	"password": process.env.TYPEORM_PASSWORD,
	"database": "gostack_gobarber",
	"migrations": [
		"./src/database/migrations/*.ts"
	],
	"cli": {
		migrationsDir: "./src/database/migrations"
	}
}
