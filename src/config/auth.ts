export default {
	jwt: {
		secret: `${process.env.SECRET_MD5_KEY}`,
		expiresIn: '1d',
	},
};
