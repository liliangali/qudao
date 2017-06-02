/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 文章管理
 * @type {Object}
 */
module.exports = [
	{
		name:'获取文章列表',
		method:'selectArticle',
		path:'/article/show',
		type:'get',
	},
	{
		name:'添加/修改文章',
		method:'saveArticle',
		path:'/article/save',
		type:'post',
	},

	{
		name:'删除文章',
		method:'deleteArticle',
		path:'/article/delete',
		type:'post',
	},
	{
		name:'查看文章详情',
		method:'findArticle',
		path:'/article/one',
		type:'get',
	}
];