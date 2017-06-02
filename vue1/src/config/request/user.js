/**
 * Created by sailengsi on 2017/4/30.
 */

/**
 * 用户模块
 * @type {Object}
 */
module.exports = [
	{
		name  : '登录',
		method: 'login',
		path  : '/mfd/login',
		type  : 'post',
	},
	{
		name  : '注册',
		method: 'register',
		path  : '/auth/register',
		type  : 'post',
	},
	{
		name  : '获取渠道列表',
		method: 'selectUser',
		path  : '/mfd/users/all',
		type  : 'get',
	},
	{
		name  : '获取所有用户列表',
		method: 'selectUserList',
		path  : '/mfd/users/list',
		type  : 'post',
	},

	{
		name  : '添加修改用户公用接口',
		method: 'saveUser',
		path  : '/mfd/users/save',
		type  : 'post',
	},
	{
		name  : '修改渠道折扣',
		method: 'editDiscount',
		path  : '/mfd/users/discount',
		type  : 'post',
	},
	{
		name  : '获得渠道折扣',
		method: 'getDiscount',
		path  : '/mfd/users/discount',
		type  : 'get',
	},
	{
		name  : '删除用户',
		method: 'deleteUser',
		path  : '/User/deleteUser',
		type  : 'post',
	},
	{
		name  : '获取用户信息',
		method: 'findUser',
		path  : '/mfd/users/find',
		type  : 'get',
	},

	{
		name  : '修改密码',
		method: 'updatePass',
		path  : '/User/updatePass',
		type  : 'post',
	},
	{
		name  : '设置权限',
		method: 'updateUserAccess',
		path  : '/User/updateUserAccess',
		type  : 'post',
	},
	{
		name  : '设置用户状态',
		method: 'updateUserStatus',
		path  : '/User/updateUserStatus',
		type  : 'post',
	}
];