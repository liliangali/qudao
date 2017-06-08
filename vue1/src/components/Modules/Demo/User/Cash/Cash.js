module.exports = {
	name   : 'user',
	data() {
		return {
			user_data : {
				bank_card   : '',
				bank_address : '',
				bank : '',
				card_name     : '',
				phonecode : '',
				cash_money:'0.00',
				users:{
					user_name:'',
				},
				
			},
        	radio2: 0,
        	msg_status:true,
        	cash_status:false,
        	status:0,
        	money_status:true,
        	sub_status:false,

		}
	},
	methods: {
		save_user(userdata) {
	
			this.$$api_user_saveCash(this[userdata], data => {
				  this.$message('设置成功');
				   this.$router.back(-1);
			});
			
		},
		changeStatus(val){
			this.msg_status = true;
			this.user_data.status = val;
			if (val == 2 && this.status == 0) {
				this.msg_status = false;
			};
		},
		getView(){

				if (this.$route.query.id) {
		     	this.$$api_user_findCash({
		   			id: this.$route.query.id
				}, (data) => {
					this.user_data     = data.data;
					this.radio2 = data.data.status;
					this.status = this.user_data.status;
					if (this.user_data.status != 0) {
						this.cash_status = true;
						this.msg_status = true;
					};

					if (this.user_data.status == 1) {
						this.money_status = false;
					};

					if (this.user_data.status == 2 || this.user_data.status == 3) {
						this.sub_status = true;
					};
				
				});
			}
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