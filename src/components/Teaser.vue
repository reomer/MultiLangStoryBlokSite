<template>
  <!-- TEASER COMPONENT -->
  <div class="teaser"
       v-editable="blok">
    {{ blok.headline }}
  </div>
</template>
 
   <!-- 
<template>
  <div class="teaser">
    {{ blok.headline }}
  </div>
</template>
    -->
<script>
export default {
  props: ['blok']
}
</script>