<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Vue.js</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item">
        <router-link to="page1" class="nav-link">page1</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/page2" class="nav-link">page2</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/page3" class="nav-link">page3</router-link>
      </li>
       <li class="nav-item">
        <router-link to="/aboutus" class="nav-link">aboutus</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
}
</script>


