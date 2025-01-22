<script>
export default {
  name: 'FavoritePLanet',
  props: {
    name: String,
  },
  computed: {
    computedImgSrc() {
      return `/img/objects_low/${this.name}.jpg`
    },
  },
}
</script>

<template>
  <div class="fav_icon">
    <a :href="'/' + this.name">
      <img :src="computedImgSrc" alt="planet" />
    </a>
  </div>
</template>

<style scoped>
img {
  height: 3em;
  float: left;
}
</style>
