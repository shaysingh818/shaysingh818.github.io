<template>

  <div class="career-position">

    <div class="career-header">

      <div class="career-thumbnail" :style="{ backgroundImage: `url(${position.imageUrl})` }" >        
      </div>

      <div class="career-description">
        <h2> {{ position.title }} </h2> 
        <p1> {{ position.company }} - {{ position.timeStatus }} </p1>
        <p2> {{ position.fromDate }} - {{ position.toDate }}</p2>
      </div>

    </div>

    <div class="career-detail">

      <div class="career-sub-position" v-for="(sub, index) in position.subPositions" :key="index">

        <div class="career-sub-position-header">
          <h3> {{ sub.title }} </h3>
          <p2>{{ sub.fromDate }} - {{ sub.toDate }} </p2>

          <div class="career-sub-position-description">
            <ul>
              <li v-for="(desc, i) in sub.descriptions" :key="i">{{ desc }}</li>
            </ul> 
          </div>
        </div>
      </div>

    </div>

  </div>

</template>


<script>
export default {
  name: 'CareerPosition',
  props: {
    position: {
      type: Object,
      required: true
    }
  }
}
</script>


<style>

.career-position { 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  width: 50%;
}

.career-header {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem; 
  width: 100%;
  padding: 10px; 
  height: 95px;
}

.career-thumbnail {
  width: 80px; 
  height: 80px; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: auto;
  border-radius: 10px;
}

.career-description {
  flex: 1;
  display: flex; 
  flex-direction: column;
  justify-content: start;
}

.career-detail {
  display: flex; 
  flex-direction: column; 
  width: 100%;
  padding: 15px;
  gap: 0.5rem; 
}

.career-sub-position {
  display: flex; 
  flex-direction: column;
}

.career-sub-position-header {
  display: flex; 
  flex-direction: column; 
}

.career-sub-position-description {
  display: flex; 
  flex-direction: column;
  margin-left: 15px; 
}

h2 {
  font-size: 20px; 
}

h3 {
  font-size: 15px;
  color: white;
  font-weight: bold; 
}


p1 {
  font-size: 13px;
  font-weight: normal;
  color: white; 
}

p2 {
  font-size: 10px;
  font-weight: normal;
  color: #C3BCBC; 
}

ul {
    list-style-type: disc;
}

li {
  font-size: 10px;
  font-weight: normal;
  color: white; 
}


@media (max-width: 660px) {

  .career-position {
    width: 100%;
  }

}

</style>
