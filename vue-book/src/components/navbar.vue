<template>
    <div id="navbar">
        <nav class="navbar navbar-default navbar-fixed-top">
            <!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
            <div class="container-fluid">
                <!-- 导航按钮部分 -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!--  logo部分 -->
                    <a class="navbar-brand" href="#">珠峰书店</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                    <!-- 导航部分 -->
                    <ul class="nav navbar-nav">
                        <li class="active"><router-link to="/list">图书列表</router-link></li>
                        <li><router-link to="/add">图书添加</router-link></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>
        </nav>
    </div>
</template>
<script>
    export default {

    }
</script>