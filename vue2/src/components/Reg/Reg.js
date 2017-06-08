
import {
    gbs
} from 'config/settings.js';
module.exports = {
    name: 'reg',
    data() {
             var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.data.checkPass !== '') {
                        this.$refs.data.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.data.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
             var validatePhone = (rule, value, callback) => {
                this.paytime.disa = true;
                if (value === '') {
                    callback(new Error('手机号不能为空！'));
                } else {
                    const reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
                    if(!reg.test(this.data.user_name))
                    {
                        callback(new Error('请输入正确的手机号码!'));
                        return;
                    } 
                    this.paytime.disa = false;
                    callback();
                }
            };
            var validateOption =  (rule, value, callback) => {
                if (typeof this.data.option != 'object') {
                    callback(new Error('请选择商铺地址'));
                } else {
                    callback();
                }
            };
             var validateImageUrl =  (rule, value, callback) => {
            //    console.log(this.$refs.data.imageUrl)
                //  console.log(this.data.imageUrl);
                if (!this.$refs.data.imageUrl) {
                    callback(new Error('请上传营业执照'));
                } else {
                    callback();
                }
            };

        return {
            winSize: {
                width: '',
                height: ''
            },

            formOffset: {
                position: 'absolute',
                left: '',
                top: ''
            },

            remumber: this.$store.state.user.remumber,

            login_actions: {
                disabled: false
            },

            data: {
                user_name: '',
                pass: '',
                checkPass: '',
                // token: ''
            },
            region:{//地区列表
                p:{},
                s:{},
            },
             imageUrl: '',
             uploadUrl:gbs.host+"/auth/imgup",

            rule_data: {
                email: [{
                    required: true,
                    message: '邮箱不能为空！',
                    trigger: 'blur'
                }],
               pass: [
                    { validator: validatePass, trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                user_name: [
                    { validator: validatePhone, trigger: 'blur' }
                ],
                phonecode: [
                    {required: true,message: '手机验证码不能为空！',trigger: 'blur'},
                ],
                zuzhi: [{
                    required: true,
                    message: '组织机构代码不能为空！',
                    trigger: 'blur'
                 }],
                 shangpu: [
                     {required: true,message: '商铺名称不能为空！',trigger: 'blur'}
                 ],
                 selectedOptions2: [
                     { validator: validateOption, trigger: 'blur' }
                 ],
                 imageUrl: [
                     { validator: validateImageUrl, trigger: 'blur' }
                 ],
                 address: [
                     {required: true,message: '商铺详细地址必须不能为空！',trigger: 'blur'}
                 ],
                
            },
             options: [],
         selectedOptions: [],
        selectedOptions2: [],
        paytime:{
            time:'获取验证码',
            disa:true,
            limit_time:30,
            t:{},
        },
            
        }
    },
    methods: {
        setSize() {
            this.winSize.width = $(window).width() + "px";
            // this.winSize.height = $(window).height() + "px";
            //  this.winSize.height = "1000px";

            this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px';
            this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
        },
        plan:function(event){    //用户点击后准备进入倒计时状态 
            //发送验证码
            this.$$api_system_sendCode({mobile:this.data.user_name,mobile_rule:'check_mobile_unique'}, data => {
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
        reg(){
             this.$router.push('login');
        },
        handleChange(value) {
            this.$refs.data.validateField('selectedOptions2');//change之后重新 验证
        },
       handleAvatarSuccess(res, file) {
        
        this.$refs.data.imageUrl = res.data.img_url;
        this.data.imageUrl = res.data.img_url;
        this.imageUrl = res.data.img_url;
        this.$refs.data.validateField('imageUrl');//change之后重新 验证
                // console.log(this.$refs.data)
      },
      beforeAvatarUpload(file) {
        var isJPG = false;
        if(file.type === 'image/jpeg' || file.type === 'image/png')
        {
            isJPG = true;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
        login(ref) {
            this.$refs[ref].validate((valid) => {
                if (valid) {
                 this.$$api_user_register(this[ref], data => {
                                   this.$alert(data.msg, '注册成功提示', {
                                confirmButtonText: '确定',
                                callback: action => {
                                     this.$router.push('login');
                                }
                                 });
                    });
                }
            });
        },

        resetForm(ref) {
            this.$refs[ref].resetFields();
        }
    },
    created() {
        this.setSize();
        $(window).resize(() => {
            this.setSize();
        });
    },
 
    mounted() 
    {
         this.$$api_system_getRegion({rid:-1}, data => {
            this.options = data.data;

        });
    }
}