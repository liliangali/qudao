import {
	gbs
} from 'config/settings.js';

module.exports = {
	name   : 'edit-article',
	data() {
		return {
			data: {
				discount   :'',
				min_money  : '',
				max_money  : '',
			},
			rules       : {
				discount  : [{
					required: true,
					message : '参数不能为空！',
					trigger : 'blur'
				}],
				min_money  : [{
					required: true,
					message : '参数不能为空！',
					trigger : 'blur'
				}],
				max_money  : [{
					required: true,
					message : '参数不能为空！',
					trigger : 'blur'
				}],
			},
		
		}
	},
	methods: {
		/**
		 * 提交表单
		 * @param  {string} formName 表单名称
		 */
		onSubmit(formName){
			var ref = this.$refs[formName];
			ref.validate((valid) => {
				if (valid) {
					this.$$api_user_editDiscount(this.data, data => {
						  this.$message('设置成功');
						this.$router.push('/demo/discount/edit');
					});
				}
			});
		}
	},

	mounted(){
			this.$$api_user_getDiscount({}, (data) => {
				this.data        = data.data;
			});
	}
}