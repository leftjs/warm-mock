/**
 * Created by jason on 5/6/16.
 */
var Mock = require('mockjs')
var RandExp = require('randexp')

exports.mockUserInfo = function mockUserInfo(){
	var data = Mock.mock({
		id: '@ID',
		nickname: '@STRING(lower,6,10)',
		phone: new RandExp(/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).gen(),
		'sex|1': ['男', '女'],
		company: '上海动梨软件公司'
	})
	return JSON.stringify(data)
}

