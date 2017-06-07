<template>
    <div id="list">
        <h3>这是图书列表组件</h3>
        <div class="col-md-3" v-for="book in books">
            <div class="panel panel-warning">
                <!-- 面板头部 -->
                <div class="panel-heading">书名：<span>{{book.bookname}}</span></div>
                <!-- 面板主体 -->
                <div class="panel-body">
                    <img :src="book.bookcover" alt="">
                </div>
                <!-- 面板底部 -->
                <div class="panel-footer">
                    价格：<span>{{book.price}}</span>
                    <router-link :to="{name: 'detail', params:this.params}">详情</router-link>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
           return {books: null, param: {id:123}}
        },
        beforeMount() { // 在list组件挂载前 获取图书列表初始数据
            this.$http.get('/books').then(res => {
                this.books = res.body;
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>
<style lang="css" scoped>
    #list img {
        width: 150px;
        height: 180px;
    }
</style>