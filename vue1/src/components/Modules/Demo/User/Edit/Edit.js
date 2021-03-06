module.exports = {
	name   : 'user',
	data() {
		return {
			user_data : {
				email   : '',
				user_name: '',
				address : '',
				region : [],
				sex     : '3',
				cstatus  : true,
				is_service:0,
				password:'',
				member_type:0,
			},
			user_rules: {
				email   : [{
					type   : 'email',
					message: '邮箱格式不正确！',
					trigger: 'blur'
				}],
				user_name: [{
					required: true,
					message : '用户名不能为空！',
					trigger : 'blur'
				}],

			},
			options: [],
           selectedOptions: [],
           selectedOptions2: [],
           selectedOptions3: [3, 4],
		   cstatus:true,
		   is_qudao:false,

		}
	},
	methods: {
		save_user(userdata) {


			this.$refs[userdata].validate((valid) => {
				if (valid) {
					// console.log(this[userdata]);

					// console.log(this[userdata].status);

					//测试：强制修改用户名或者状态时，接口返回不允许修改的错误信息
					/*if (this[userdata].id) {
					 // this[userdata].username='testupdatename';

					 // this[userdata].status=!this[userdata].status;
					 }*/

					this.$$api_user_saveUser(this[userdata], data => {
						 this.$router.back(-1)
					});
				}
			});
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
		changeQudao(val) {
			if (val) 
			{
				this.user_data.member_type = 1;
			}
			else
			{
				this.user_data.member_type = 0;
			}
		},
		getView(){
			if (this.$route.query.id) {
				//地区联动
			  
		     		this.$$api_user_findUser({
						id: this.$route.query.id
					}, (data) => {
						this.user_data        = data.data;
						this.user_data.region = [parseInt(this.user_data.region[0]),parseInt(this.user_data.region[1])]; 
						this.cstatus = this.user_data.is_service == 1 ? true : false;
						this.is_qudao =  this.user_data.member_type == 1 ? true : false;
					});

		     	     this.$$api_system_getRegion({rid:-1}, data1 => {
       				 this.options = data1.data;
   				 	});
			

			}else{
				this.$delete(this.user_data,'id');
				this.$refs.user_data.resetFields();
			}
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