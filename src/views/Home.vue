<template>
    <div class="home">
        <i class="el-icon-back" size="small" @click="handleChangeAside"></i>
        <!-- current -->
        <el-container class="home-main">
            <div class="page page1" v-show="this.$store.state.home.page1">
                <el-timeline>
                    <el-timeline-item v-for="item in itemList" :timestamp="item.timestamp" placement="top" type="primary">
                        <el-card>
                            <el-collapse style="border:none">
                                <el-collapse-item :title="item.title">
                                    <div class="content">{{ item.content }}</div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <div class="page page2" v-show="this.$store.state.home.page2">
                <div class="radio">
                    排序：
                    <el-radio-group v-model="reverse">
                        <el-radio :label="true">倒序</el-radio>
                        <el-radio :label="false">正序</el-radio>
                    </el-radio-group>
                </div>

                <el-timeline :reverse="reverse">
                    <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </div>
        </el-container>
        <!-- history -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            itemList: [
                {
                    title: '1 item',
                    timestamp: '2020/03/2',
                    content: 'this is the 1 item'
                },
                {
                    title: '2 item',
                    timestamp: '2020/03/42',
                    content: 'this is the 2 item'
                },
                {
                    title: '3 item',
                    timestamp: '2020/03/21',
                    content: 'this is the 3 item'
                },
                {
                    title: '1 item',
                    timestamp: '2020/03/2',
                    content: 'this is the 1 item'
                },
                {
                    title: '2 item',
                    timestamp: '2020/03/42',
                    content: 'this is the 2 item'
                },
                {
                    title: '3 item',
                    timestamp: '2020/03/21',
                    content: 'this is the 3 item'
                }
            ],
            reverse: true,
            activities: [{
                content: '活动按期开始',
                timestamp: '2018-04-15'
            }, {
                content: '通过审核',
                timestamp: '2018-04-13'
            }, {
                content: '创建成功',
                timestamp: '2018-04-11'
            },
            {
                content: '活动按期开始',
                timestamp: '2018-04-15'
            }, {
                content: '通过审核',
                timestamp: '2018-04-13'
            }, {
                content: '创建成功',
                timestamp: '2018-04-11'
            },
            {
                content: '活动按期开始',
                timestamp: '2018-04-15'
            }, {
                content: '通过审核',
                timestamp: '2018-04-13'
            }, {
                content: '创建成功',
                timestamp: '2018-04-11'
            },
            {
                content: '活动按期开始',
                timestamp: '2018-04-15'
            }, {
                content: '通过审核',
                timestamp: '2018-04-13'
            }, {
                content: '创建成功',
                timestamp: '2018-04-11'
            },
            {
                content: '活动按期开始',
                timestamp: '2018-04-15'
            }, {
                content: '通过审核',
                timestamp: '2018-04-13'
            }, {
                content: '创建成功',
                timestamp: '2018-04-11'
            }],
        };
    },
    methods: {
        handleChangeAside() {
            this.$store.commit('changePage');
            console.log(this.$store.state.aside.triggerPage1)
        }
    },
    computed: {
    }
}
</script>

<style lang="less" scoped>
.home::-webkit-scrollbar {
    display: none
}

.home {
    width: 100%;
    height: calc(100vh - 67px);
    background-color: #afadb2;
    overflow-y: auto;
    position: absolute;

    i {
        position: relative;
        left: -500px;

        text-align: center;
        line-height: 50px;
        width: 50px;
        height: 50px;
        font-size: 25px;
        cursor: pointer;
    }

    .home-main {
        width: 80%;
        position: relative;

        .page{
            
        }
    }
}
</style>