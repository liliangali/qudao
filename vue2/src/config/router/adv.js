/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/adv',
	name: '我的账户',
	icon: 'inbox',
	component: Home,
	redirect: '/adv/bank',
	children: [ 
	{
		path: 'bank',
		name: '账户管理',
		icon: 'inbox',
		component: Content,
		redirect: '/adv/bank/edit',
		children: [
		{
			path: 'edit',
			name: '绑定银行卡',
			icon: 'edit',
			component: Modules.Demo.User.Aedit
		}, 
		{
			path: 'tixian',
			name: '我要提现',
			icon: 'edit',
			component: Modules.Demo.User.Cash
		}, 
		{
			path: 'log',
			name: '提现记录',
			icon: 'edit',
			component: Modules.Demo.User.Clist
		}, 

		// {
		// 	path: 'list',
		// 	name: '文章列表',
		// 	icon: 'reorder',
		// 	component: Modules.Adv.Article.List
		// }, {
		// 	path: 'edit',
		// 	name: '编辑文章',
		// 	icon: 'edit',
		// 	component: Modules.Adv.Article.Edit
		// }
		]
	}, /*{
		path: 'wangeditor',
		name: 'wangeditor富文本',
		icon: 'inbox',
		component: Content,
		redirect: '/adv/wangeditor/one',
		children: [{
			path: 'one',
			name: '单个',
			icon: 'reorder',
			component: Modules.Adv.Wangeditor.One
		}, {
			path: 'many',
			name: '多个',
			icon: 'edit',
			component: Modules.Adv.Wangeditor.Many
		}]
	},*/ 
	// {
	// 	path: 'open',
	// 	name: '第三方接入',
	// 	icon: 'inbox',
	// 	component: Content,
	// 	redirect: '/adv/open/qiniu',
	// 	children: [{
	// 		path: 'qiniu',
	// 		name: '七牛',
	// 		icon: 'reorder',
	// 		component: Modules.Adv.Open.Qiniu
	// 	}]
	// }
	]
}];
