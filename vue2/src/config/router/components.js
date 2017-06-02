/**
 * Created by sailengsi on 2017/4/30.
 */

import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/components',
	name: '个人设置',
	icon: 'inbox',
	component: Home,
	redirect: '/components/form',
	children: [{
		path: 'form',
		name: '账户信息',
		icon: 'inbox',
		component: Modules.Components.Form.Form,
		redirect: '/components/form/edit',
		children: [
		 	{
			path: 'edit',
			name: '基本信息',
			icon: 'edit',
			component: Modules.Demo.User.Edit
			}, 
		]
	}, 
	// {
	// 	path: 'list',
	// 	name: '列表组件',
	// 	icon: 'inbox',
	// 	component: Content,
	// 	redirect: '/components/list/default',
	// 	children: [{
	// 		path: 'default',
	// 		name: '默认渲染列表',
	// 		icon: 'reorder',
	// 		component: Modules.Components.List.List
	// 	}, {
	// 		path: 'pagination',
	// 		name: '分页',
	// 		icon: 'edit',
	// 		component: Modules.Components.List.Pagination
	// 	}, {
	// 		path: 'search',
	// 		name: '搜索',
	// 		icon: 'edit',
	// 		component: Modules.Components.List.Search
	// 	}, {
	// 		path: 'default-btn',
	// 		name: '默认按钮',
	// 		icon: 'edit',
	// 		component: Modules.Components.List.DefaultBtn
	// 	}, {
	// 		path: 'custom-btn',
	// 		name: '自定义按钮',
	// 		icon: 'edit',
	// 		component: Modules.Components.List.CustomBtn
	// 	}
	// 	]
	// }
	]
}];
