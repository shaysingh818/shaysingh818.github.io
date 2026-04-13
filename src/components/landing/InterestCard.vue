
<template>
  <div class="interest-card">
    <component :is="icon" class="interest-icon" />
    <div class="interest-card-text-section">
      <h1> {{ title }} </h1>
      <p> {{ description }} </p> 
    </div>

  </div>
    
</template>

<script>

export default {
  name: 'InterestCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: Object,
      required: true
    },
  }
}


</script>

<style scoped>

.interest-card {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 10px;
  background-color: #403E3E;
  width: 20%;
  height: 100%;  
  border-radius: 5px;
  gap: 1.0rem; 
}

.interest-card-text-section { 
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  text-align: center;
  height: 50%;
}

.interest-icon {
  width: 150px;
  height: 150px;
} 

svg {
  fill: #F05F5F;
}


h1 {
  font-size: 15px;
  color: white; 
}

p {
  font-size: 12px;
  font-weight: normal; 
}


@media (max-width: 992px) {

  .interest-card {
    width: 100%; 
    height: auto; 
  }

}


@media (max-width: 768px) {

  .interest-card {
    width: 100%; 
    height: auto; 
  }

}


@media (max-width: 480px) {


  .interest-card {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding: 10px;
    background-color: #403E3E;
    width: 100%;
    height: 20%;  
    border-radius: 5px;
    gap: 1.0rem; 
  }


}
</style>
