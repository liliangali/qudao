module.exports = {
	name   : 'user',
	data() {
	var checkMoney = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('金额不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < this.dicsount.min_money) {
              callback(new Error('最小提现金额为'+this.dicsount.min_money));
            } 
            else if (value > this.dicsount.max_money) {
            	callback(new Error('最大提现金额为'+this.dicsount.max_money));
            }
            else {
              callback();
            }


          }
        }, 500);
      };

		return {
			user_data : {
				bank_card   : '',
				bank_address : '',
				bank : '',
				card_name     : '',
				phonecode : '',
				money:'',
			},
			user_rules: {
				phonecode   : [{
					required   : 'true',
					message: '验证码必须填写',
					trigger: 'blur'
				}],

				money   : [
					 {validator: checkMoney, trigger: 'blur' },
				],
			

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
        	dicsount:{
        		discount:'',
        		max_money:'',
        		min_money:'',
        	},
        	limit_money:'',


		}
	},
	methods: {
		save_user(userdata) {
			this.$refs[userdata].validate((valid) => {
				if (valid) {
					this.$$api_user_saveCash(this[userdata], data => {
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
					this.limit_money = this.user_data.money;
					this.user_data.money = '';
					if (!this.user_data.id) 
					{
					   this.$alert('尚未绑定银行卡', '绑定银行卡', {
				          confirmButtonText: '确定',
				          callback: action => {
				             this.$router.push('/adv/bank/edit');
				          }
				        });
					}
				});

	     	     this.$$api_user_getBank({}, data1 => {
   				 		this.options = data1.data;
				 });

				   this.$$api_user_getDiscount({}, data1 => {
   				 		this.dicsount = data1.data;
				 });



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