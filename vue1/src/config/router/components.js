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
	name: '活动发布',
	icon: 'inbox',
	component: Home,
	redirect: '/components/article/list',
	children: [
	{
		path: 'article',
		name: '文章管理1',
		icon: 'inbox',
		component: Content,
		redirect: '/components/article/list',
		children: [{
			path: 'list',
			name: '文章列表',
			icon: 'reorder',
			component: Modules.Demo.Article.List
		}, {
			path: 'edit',
			name: '添加文章',
			icon: 'edit',
			component: Modules.Demo.Article.Edit
		}]
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
