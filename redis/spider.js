const RedisService = require('./redis_service')

switch (process.argv[2]) {
	case 'generate_ids':
		RedisService.generateAcfunIdsToRedis(process.argv[3], process.argv[4])
			.then(r => {
				console.log('done')
				process.exit(0)

			})
			.catch(e => {
				console.log(e)
				process.exit(1)
			})
}