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
		path  : '/auth/login',
		type  : 'post',
	},
	{
		name  : '注册',
		method: 'register',
		path  : '/auth/register',
		type  : 'post',
	},
	{
		name  : '获取用户列表',
		method: 'selectUser',
		path  : '/users/all',
		type  : 'get',
	},
	{
		name  : '添加修改用户公用接口',
		method: 'saveUser',
		path  : '/users/save',
		type  : 'post',
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
		path  : '/users/one',
		type  : 'get',
	},
	{
		name  : '获得网银相关信息',
		method: 'findBank',
		path  : '/users/bank',
		type  : 'get',
	},
	{
		name  : '修改网银信息',
		method: 'saveBank',
		path  : '/users/bank',
		type  : 'post',
	},
	{
		name  : '银行列表',
		method: 'getBank',
		path  : '/users/bankl',
		type  : 'get',
	},
	{
		name  : '提现申请',
		method: 'saveCash',
		path  : '/users/cash',
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