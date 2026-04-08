<template> 
    <div class="badge">
      <p> {{ title }} </p>
    </div>
    
</template>

<script>

export default {
  name: 'Badge',
  props: {
    title: {
      type: String,
      required: true
    },
  }
}


</script>

<style scoped>

.badge {
  border-radius: 5px; 
  background-color: #F05F5F;
  padding: 2px;
  white-space: nowrap;
  flex-shrink: 0; 
}


p {
  font-weight: normal;
  font-size: 10px; 
}

</style>
