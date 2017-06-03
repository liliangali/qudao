var env = process.env;

var settings = {

	//全局设置
	gbs: {
		// host: '//slsadmin.api.' + (env.NODE_ENV === 'development' ? 'sls' : 'sailengsi') + '.com',
		// host: '/slsAdminApi', //接口根地址。本地代理到slsadmin.api.sls.com,线上使用的是Nginx代理
		host:  (env.NODE_ENV === 'development' ? 'http://dev.dingo.com/api' : 'http://dingo.mfd.p.day900.com/api'),
		db_prefix: 'sls_admin_', //本地存储的key
	},

	//回调
	cbs: {
		/**
		 * ajax请求成功，返回的状态码不是200时调用
		 * @param  {object} err 返回的对象，包含错误码和错误信息
		 */
		statusError(err) {

			if (err.error == 'token_expired') 
			{
				this.$router.push('/login');
				return;
			}

			if (err.status == 1) {
				this.$message({
					showClose: true,
					message: '返回错误：' + err.msg,
					type: 'error'
				});
			} else {

				this.$store.dispatch('remove_userinfo').then(() => {
					this.$alert(err.status + ',' + err.msg + '！', '登录错误', {
						confirmButtonText: '确定',
						callback: action => {
							this.$router.push('/login');
						}
					});
				});
			}
		},

		/**
		 * ajax请求网络出错时调用
		 */
		requestError(err) {

			if (err.response.error == 'token_expired') 
			{
				this.$router.push('/login');
				return;
			}
			if (err.response.status == 401) //token过期重新登录
			{
					this.$store.dispatch('remove_userinfo').then(() => {
					this.$alert(err.status + ',' + err.msg + '！', '登录错误', {
						confirmButtonText: '确定',
						callback: action => {
							this.$router.push('/login');
						}
					});
				});
				return;
			}

			this.$message({
				showClose: true,
				message: '请求错误：' + (err.response ? err.response.status : '') + ',' + (err.response ? err.response.statusText : ''),
				type: 'error'
			});
		}
	}
};


module.exports = settings;