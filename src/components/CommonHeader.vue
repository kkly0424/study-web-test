<template>
    <div class="top">
        <el-dropdown @command="handleCommandUser">
            <el-link :underline="false" class="icon user el-dropdown-link" v-if="true" icon="el-icon-more-outline"></el-link>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item command="user">个人中心</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <h3>{{this.$store.state.home.title}}</h3>
        <el-link :underline="false" :icon="`el-icon-${this.$store.state.aside.icon}`" @click="handleShow"></el-link>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed:{
    },
    methods: {
        handleCommandUser(command) {
            if (command === 'home') {
                this.$router.push('/home')
            } else if (command === 'user') {
                this.$router.push('/user')
            }
        },
        handleCommandAside(command) {
            // if (command === 'home') {
            //     this.$router.push('/home')
            // } else if (command === 'user') {
            //     this.$router.push('/user')
            // }
        },
        handleShow() {
            this.$store.commit('changeShow');
            console.log(this.$store.state.aside.icon)
        }
    }
}
</script>

<style lang="less" scoped>
.top {
    height: 67px;
    background-color: transparent;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .el-link {
        font-size: 25px;
        color: aliceblue;
    }
}
</style>