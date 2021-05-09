<template>
      <div class="column feature"
       v-editable="blok">
    {{ blok.name }}
    <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
  </div>
</template>
 
<script>
export default {
  props: ['blok']
}
</script>