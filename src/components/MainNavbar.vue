<template>
	<nav class="navbar navbar-default top-nav" role="navigation">
      <div class="container">
        <ul class="nav navbar-nav row">
          <li class="col-xs-3">
            <router-link to="/recommend">
            <i class="glyphicon glyphicon-align-justify"></i>
            </router-link>
          </li>
          <li class="col-xs-6 text-center middle">文章列表</li>
           <li class="col-xs-3"></li>
        </ul>
      </div>
    </nav>
</template>

<style scoped>

nav.top-nav {
  background: #68ccca;
  color: #fff;
  line-height: 40px;

}
nav.top-nav li >a {
  color: #fff;
}
.navbar {
  margin-bottom: 0;
  border: none;
}

</style>

