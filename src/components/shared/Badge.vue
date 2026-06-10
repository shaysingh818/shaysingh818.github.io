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
  background-color: #7c6af7;
  padding: 3px;
  white-space: nowrap;
  flex-shrink: 0; 
}


p {
  font-weight: bold;
  font-size: 9px;
}

</style>
