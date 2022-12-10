<template>
<div class="wrapper">
  <div class="form">
    <input type="text" class="form__input">
    <input type="text" class="form__input">
    <button>Create post</button>
  </div>
  <div class="posts">
    <div class="post" v-for="post in posts">
      <div class="post__title">
        {{post.title}}
      </div>
      <div class="post__body">
        {{post.body}}
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      posts: [
        {title: "title", body: "body"},
        {title: "title", body: "body"},
        {title: "title", body: "body"},

      ]
    }
  }
}
</script>

<style>

</style>
