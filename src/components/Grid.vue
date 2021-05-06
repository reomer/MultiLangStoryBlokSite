<template>
  <!-- GRID COMPONENT -->
  <div class="grid"
       v-editable="blok">
    <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
  </div>
</template>
   <!-- 
   <template>
  <div class="grid">
    <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
  </div>
</template>
    -->

<scrip>
export default {
  props: ['blok']
}
</scrip>
