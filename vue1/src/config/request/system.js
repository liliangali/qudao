/**
 * Created by liang.li on 2017/4/30.
 */
/**
 * 系统设置
 * @type {Object}
 */
module.exports = [
	{
		name:'获取系统设置信息',
		method:'getSetting',
		path:'/System/getSetting',
		type:'get',
	},
	{
		name:'修改系统设置信息',
		method:'updateSetting',
		path:'/System/updateSetting',
		type:'post',
	},
	{
		name:'获取二级联动地区列表',
		method:'getRegion',
		path:'/role/region',
		type:'get',
	},
	{
		name:'发送验证码',
		method:'sendCode',
		path:'/role/pcode',
		type:'post',
	}
];