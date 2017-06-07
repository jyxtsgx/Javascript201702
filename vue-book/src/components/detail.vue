<template>
    <div id="detail">
        <h3>详情页</h3>
        <div class="panel panel-warning">
            <div class="panel-heading">
                书名：<span v-show="!flag">{{book.bookname}}</span>
                <input type="text" v-model="book.bookname" v-show="flag">
            </div>
            <div class="panel-body">
                <img :src="book.bookcover" alt="">
            </div>
            <div class="panel-footer">
                价格：<span v-show="!flag">{{book.price}}</span>
                <input type="text" v-model="book.price" v-show="flag">
                <button class="btn btn-danger" type="button" v-show="!flag" @click="remove">删除</button>
                <button class="btn btn-warning" type="button" @click="flag= true" v-show="!flag">修改</button>
                <button class="btn btn-primary" type="button" v-show="flag" @click="update">确认修改</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
          return {id: null, book: {id: "", bookname: "", bookcover: "", price: ""}, flag: false}
        },
        beforeMount() {
            this.id = this.$route.params.id;
            this.$http.get('/books?id='+this.id).then(res => {
                this.book = res.body;

            }).catch(err => {
                console.log(err);
            })

        },
        methods: {
            update(){
                this.$http.put('/books', this.book).then(res => {
                    console.log(res);
                    this.$router.push('/list');
                }).catch(err => {
                    console.log(err);
                })
            },
            remove() {
                this.$http.delete('/books?id='+this.book.id).then(res =>{
                    console.log(res);
                    this.$router.push('/list');
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>