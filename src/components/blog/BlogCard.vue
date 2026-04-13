<template>
  <div class="blog-card">

    <div class="blog-image" :style="{ backgroundImage: `url(${obj.thumbnail})`}">
      
    </div>

    <div class="blog-info">
      <div class="blog-title">
        <h1> {{ obj.title }} </h1> 
      </div>

      <div class="blog-tags">
        <Badge v-for="(tag, index) in obj.tags" :key="index" :title="tag" />  
      </div>

    </div>

    <div class="blog-footer">

        <p1 :style="{ fontWeight: 'bold'}"> By: {{ obj.author }} </p1> 

        <p1> Last Modified: {{ obj.modifyDate }} </p1> 

    </div>

  </div>
</template>

<script>
import Badge from "../shared/Badge.vue";


export default {
  name: 'BlogCard',
  components: { Badge }, 
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.blog-card {
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  background-color: #403E3E;
  height: 200px;
  border-radius: 10px;
}

.blog-image {
  width: 100%;
  height: 100%;
  margin-bottom: auto; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: auto;
  border-radius: 10px 10px 0 0;
}

.blog-info {
  height: 100%; 
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: stretch;
  padding: 5px;
  flex-wrap: wrap;
  gap: 0.5rem; 
}

.blog-tags {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center; 
  width: 100%;
}

.blog-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  padding: 5px;
  width: 100%;
}

.blog-title {
  padding: 5px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid white; 
}

h1 {
  font-size: 12px; 
}

p1 {
  font-size: 10px;
}

</style>


