/**
 * Created by jason on 5/5/16.
 */
var express = require('express');
var router = express.Router();
var Mock = require('mockjs')

var MockUser = require('../mock/user')

// TODO
//根据邮箱查找公司
router.get('/search/:email', function(req,res,next) {
	var page = req.params['page']
	var email = req.params['email']
	var suffix = /^(\w+)(\.\w+)*@(\w+(\.\w{2,3}){1,3})$/.exec(email)[3]
	var data = Mock.mock({
		suffix: suffix,
		'results|'
	})
})

// 该用户加入指定的公司
router.post('/join/:company_id')


//根据公司名称和公司邮箱快速建立一个公司
router.post('/establish/quick',function(req,res,next) {
	var body = req.body
	var name = body.name
	var email = body.email
	var suffix = /^(\w+)(\.\w+)*@(\w+(\.\w{2,3}){1,3})$/.exec(email)[3]
	var data = Mock.mock({
		id: '@ID',
		name: name,
		emailSuffix: suffix,
		establisher: JSON.parse(MockUser.mockUserInfo())
	})

	res.json(data)

})



module.exports = router;