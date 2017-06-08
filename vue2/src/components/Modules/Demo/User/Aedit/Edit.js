module.exports = {
	name   : 'user',
	data() {
		return {
			user_data : {
				bank_card   : '',
				bank_address : '',
				bank : '',
				card_name     : '',
				phone_code:'',
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
				phone_code   : [{
					required   : 'true',
					message: '验证码必须填写',
					trigger: 'blur'
				}],

			},
			options: [],
           selectedOptions: [],
           selectedOptions2: [],
           selectedOptions3: [3, 4],
		   cstatus:true,
		   value:'',
		   paytime:{
	            time:'获取验证码',
	            disa:false,
	            limit_time:30,
	            t:{},
        	},

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
        },
      plan:function(event){    //用户点击后准备进入倒计时状态 
            //发送验证码
            this.$$api_system_sendCode({mobile:this.$store.state.user.userinfo.user_name}, data => {
            });
            this.paytime.disa = true;
            this.paytime.t = setInterval(()=> {
                this.paytime.time = this.paytime.limit_time;
                this.paytime.limit_time--
                if(this.paytime.limit_time <= 0)
                {
                      this.paytime.limit_time = 30;
                      this.paytime.disa = false;
                      this.paytime.time = '获取验证码';
                      clearTimeout(this.paytime.t);      
                }
           },1000)
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