<template>
    <div class="register-wrap">
        <div class="ms-register">
            <div class="ms-title">用户注册</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="用户名">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="密码"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="passwordConfirm">
                    <el-input
                        type="password"
                        placeholder="确认密码"
                        v-model="param.passwordConfirm"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="register-btn">
                    <el-button type="primary" @click="submitForm()">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import {register} from '../../api/user'
export default {
    
    data: function() {
        return {
            param: {
                username: '',
                password: '',
                passwordConfirm: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                passwordConfirm: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(async valid => {
                if (valid) {
                    if(this.param.password !== this.param.passwordConfirm){
                        this.$message.error('密码必须一致');
                        return
                    }
                    const userinfo = await register({
                        name:this.param.username,
                        username: this.param.username,
                        password: this.param.password
                    })
                    this.$message.success('注册成功');
                    localStorage.removeItem('ms_username')
                    localStorage.removeItem('ms_token')
                    this.$router.replace('/login');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.register-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-register {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.register-btn {
    text-align: center;
}
.register-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.register-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>