module.exports = {
	name   : 'user',
	data() {
		return {
			user_data : {
				bank_card   : '',
				bank_address : '',
				bank : '',
				card_name     : '',
			},
			user_rules: {
				bank_card   : [{
					required   : 'true',
					message: '银行卡必须填写！',
					trigger: 'blur'
				}],
				bank_address   : [{
					required   : 'true',
					message: '开户地址必须填写',
					trigger: 'blur'
				}],
				bank   : [{
					required   : true,
					message: '开户银行必须填写',
					trigger: 'blur'
				}],
				card_name: [{
					required: true,
					message : '开户姓名必须填写',
					trigger : 'blur'
				}],

			},
			options: [],
           selectedOptions: [],
           selectedOptions2: [],
           selectedOptions3: [3, 4],
		   cstatus:true,
		   value:''

		}
	},
	methods: {
		save_user(userdata) {
			this.$refs[userdata].validate((valid) => {
				if (valid) {
					this.$$api_user_saveBank(this[userdata], data => {
						  this.$message('设置成功');
						  this.$router.push('/adv/bank/edit');
					});
				}
			});
		},
		selectbank(val) {
			this.user_data.bank = val;
		},
		reset_user(userdata) {
			this.$refs[userdata].resetFields();
		},
		changeStatus(val) {
			this.user_data.is_service = 0;
			if (val) 
			{
				this.user_data.is_service = 1;
			}
		},
		getView(){
		   		this.$$api_user_findBank({
				}, (data) => {
					this.user_data     = data.data.bank_info;
				});

	     	     this.$$api_user_getBank({}, data1 => {
   				 		this.options = data1.data;
				 });
		},
		 handleChange(value) {

            //this.$refs.data.validateField('selectedOptions2');//change之后重新 验证
        },
	},
	mounted() {
		this.getView();
	},

	watch: {
		$route(to, from){
			this.getView();
		}
	}
}