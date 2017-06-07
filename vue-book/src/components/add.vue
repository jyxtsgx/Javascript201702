<template>
    <div id="add">
        <h3>这是图书增加组件</h3>
        <form>
            <div class="form-group">
                <label for="name">书名</label>
                <input type="text" id="name" class="form-control" v-model="book.bookname">
            </div>
            <div class="form-group">
                <label for="cover">封面</label>
                <input type="text" id="cover" class="form-control" v-model="book.bookcover">
            </div>
            <div class="form-group">
                <label for="price">价格</label>
                <input type="text" id="price" class="form-control" v-model="book.price">
            </div>
            <button type="button" class="btn btn-primary" @click="add">添加</button>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
           return {book:{bookname: "", bookcover: "", price: ""}}
        },
        methods: {
            add(){
                this.$http.post('/books', this.book).then(res => {
                    console.log(res);
                    this.$router.push('/list');
                }).catch(err => {
                    console.log(err);
                });
            }
        }

    }
</script>