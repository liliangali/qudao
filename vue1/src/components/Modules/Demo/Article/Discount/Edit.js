import {
	gbs
} from 'config/settings.js';

module.exports = {
	name   : 'edit-article',
	data() {
		return {
			data: {
				discount  : '',
			},
			rules       : {
				discount  : [{
					required: true,
					message : '文章标题不能为空！',
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
						this.$router.push('/components/discount/edit');
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