<template>
    <div class="aside">
        <div class="userinfor">
            <div class="userpic">
                <el-link @click=handleToUser :underline="false"><el-avatar :size="75"
                        :src="circleUrl"></el-avatar></el-link>
            </div>
            <i class="username" style="color:white">莫问前程</i>
            <div class="userquote">萨库的路径分厘卡即使到了开封缉拿卢卡省的麻烦</div>
            <el-row :gutter="0">
                <el-col :span="6" style="border-right:2px solid grey">
                    <div class="grid-content bg-purple">
                        <el-link >
                            <p>收藏</p>
                            <span>33</span>
                        </el-link>
                    </div>
                </el-col>
                <el-col :span="6" style="border-right:2px solid grey">
                    <div class="grid-content bg-purple">
                        <el-link>
                            <p>分类</p>
                            <span>33</span>
                        </el-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <el-link>
                            <p>标签</p>
                            <span>33</span>
                        </el-link>
                    </div>
                </el-col>
            </el-row>
            <div class="links">
                <el-link>link one</el-link>
                <el-link>link two</el-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            circleUrl: require('../assets/bg/user.jpg')
        }
    },
    methods: {
        handleToUser() {
            this.$router.push('/user')
        }
    }
}
</script>
<style lang="less" scoped>
.aside {
    width: 100%;

    .el-divider {
        background-color: white;
        margin: 15px;
    }

    .userpic {
        .el-avatar {
            cursor: pointer;
        }
    }

    .userinfor {
        width: 80%;
        margin: 0 auto 0;
        padding-top: 100px;

        .userquote {
            border-bottom: 2px solid grey;
            padding-bottom: 15px;
            padding-top: 15px;

            color: white;
        }

        .el-row {
            margin: 15px auto 0;
            background-color: transparent;
            width: 80%;
            height: 75px;
            padding-left: 8px;

            .el-col {
                width: 32%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                .grid-content {
                    color: white;

                    .el-link {
                        color: aliceblue;

                        p {
                            font-size: 18px;
                        }
                    }
                }
            }
        }

        .links {
            display: flex;
            justify-content: space-evenly;

            .el-link {
                color: aliceblue;
            }
        }
    }
}
</style>