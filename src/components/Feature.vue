 <template>
  <!-- FEATURE COMPONENT -->
  <div class="column feature"
       v-editable="blok">
    {{ blok.name }}
  </div>
</template>

 <!-- 
<template>
  <div class="column feature">
    {{ blok.name }}
  </div>
</template>
  -->

 
<script>
export default {
  props: ['blok']
}
</script>

