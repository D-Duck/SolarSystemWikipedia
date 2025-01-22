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
    <img :src="computedImgSrc" alt="planet" />
  </div>
</template>

<style scoped>
#fav_drawer {
  width: 4em;
}
</style>
