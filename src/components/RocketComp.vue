<template>
  <div class="rocket" @click="launchRocket">
    <img src="\img\objects_low\Rocket.png" alt="Rocket" class="rocket_img" />
  </div>
</template>

<script>
export default {
  name: 'RocketComp',
  methods: {
    launchRocket() {
      const rocket = this.$refs.rocket
      if (rocket) {
        rocket.classList.add('launch')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
  },
}
</script>

<style>
.rocket {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.rocket_img {
  width: 100px;
  transition: transform 2s ease-in-out;
}

.rocket_img.launch {
  transform: translateY(-200vh);
}
</style>
