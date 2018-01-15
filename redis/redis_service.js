
const Redis = require('ioredis')
const redis = new Redis()

const ACFUN_ID_SET_REDIS_KEY = 'acfun_id_set'

async function generateAcfunIdsToRedis(min, max) {
	for (let i = min; i < max; i++) {
		const arr = new Array(10000)
		for (let j = 0; j < 10000; j++) {
			arr.push(i * 10000 + j)
		}
		await sadd(ACFUN_ID_SET_REDIS_KEY, ...arr)
	}

}


module.exports = {
	generateAcfunIdsToRedis,
}