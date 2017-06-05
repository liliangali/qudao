/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/tongji',
	name: '统计分析',
	icon: 'inbox',
	component: Home,
	redirect: '/tongji/user',
	children: [ 
	{
		path: 'user',
		name: '用户管理',
		icon: 'inbox',
		component: Content,
		redirect: '/tongji/user/list',
		children: [
		{
			path: 'list',
			name: '用户列表',
			icon: 'reorder',
			component: Modules.Demo.User.Alist
		}, 
		{
			path: 'edit',
			name: '编辑会员',
			icon: 'edit',
			hidden   : true,
			component: Modules.Demo.User.Edit
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
	}, 



	{
		path: 'cash',
		name: '提现管理',
		icon: 'inbox',
		component: Content,
		redirect: '/tongji/cash/list',
		children: [
			{
				path: 'list',
				name: '提现列表',
				icon: 'reorder',
				component: Modules.Demo.User.Clist
			}, 
			{
				path: 'shenhe',
				name: '提现审核',
				icon: 'edit',
				hidden   : true,
				component: Modules.Demo.User.Cash
			}, 
		]
	},
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
