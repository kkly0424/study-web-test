<template>
    <div class="login">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" class="left">
                <el-card class="loginCard">
                    <el-form :model="loginForm" class="loginForm" :rules="rules" ref="loginForm">
                        <el-form-item label="username" prop="username">
                            <el-input v-model="loginForm.username" placeholder="input your username"></el-input>
                        </el-form-item>
                        <el-form-item label="password" prop="password">
                            <el-input v-model="loginForm.password" placeholder="input your password"></el-input>
                        </el-form-item>
                        <el-form-item class="mannage">
                            <el-button type="primary" @click="submitForm">Login in</el-button>
                            <el-link type="primary" @click="registerBtn">register</el-link>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="12" class="right">
                <img src="../assets/bg/loginLOGO.png">
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: 'invalid username', trigger: 'blur' },
                    { min: 2, max: 5, message: 'lenth between 2-5', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'error password', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        registerBtn(){
            
        }
    }
}

</script>
<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .el-row {
        height: 100%;
        width: 100%;

        .left {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .loginCard {
                width: 400px;

                .loginForm {
                    .mannage {
                        .el-link{
                            margin-left: 30px;
                            font-size: 14px;
                        }
                    }
                }

            }
        }

        .right {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-bottom: 30px;
        }
    }
}
</style>