var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
var jwt = require('jsonwebtoken')
var RandExp = require('randexp')



//获取短信验证码,调用云片网api
router.get('/register/:phone/code', function(req, res, next) {
	var phone = req.params["phone"]
	var data = Mock.mock({
	  code: '@STRING("number",6)',
		'phone': phone
	})
	res.json(data)
})

////短信验证码验证,是否需要待讨论
//router.get('/register/:phone/validate', function(req,res,next) {
//
//})

//Data Types
//Common Name	type	format	Comments
//integer	integer	int32	signed 32 bits
//long	integer	int64	signed 64 bits
//float	number	float
//double	number	double
//string	string
//byte	string	byte	base64 encoded characters
//binary	string	binary	any sequence of octets
//boolean	boolean
//date	string	date	As defined by full-date - RFC3339
//dateTime	string	date-time	As defined by date-time - RFC3339
//password	string	password	Used to hint UIs the input needs to be obscured.

//用户注册信息的提交
router.post('/register', function(req, res, next) {
	var body = req.body
	var nickname = body.nickname
	var phone = body.phone
	var sex = body.sex

	var data = Mock.mock({
		id: '@ID',
		nickname: nickname,
		phone: phone,
		sex: sex
	})
	res.json(data)
})


//用户登录
router.post('/login', function(req,res,next) {
	var body = req.body
	var phone = body.phone
	var token = jwt.sign({phone: phone}, 'warm api')
	var expiredTime = 3600 * 24 * 7 * 1000

	var data = Mock.mock({
		userId: '@ID',
		token: token,
		expiredTime: Date.now() + expiredTime
	})

	res.json(data)
})


// 获取某个用户的个人信息
router.get('/:id', function(req,res,next) {
	var data = Mock.mock({
		id: req.params['id'],
		nickname: '@STRING(lower,6,10)',
		phone: new RandExp(/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).gen(),
		'sex|1': ['男', '女'],
		company: '上海动梨软件公司'
	})
	res.json(data)
})



//个人信息的更新
router.put('/:id',function(req,res,next) {

})



module.exports = router;
