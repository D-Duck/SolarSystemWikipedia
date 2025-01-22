<script setup>
import VerticalNavigation from '../components/VerticalNavigation.vue'
import LogoComp from '../components/LogoComp.vue'
</script>

<template>
  <main>
    <LogoComp />
    <VerticalNavigation />
    <img id="img_bg_sun" src="/img/objects/Sun.jpg" />
    <h1>Solar System</h1>
  </main>
</template>

<style scoped>
h1 {
  position: absolute;
  top: 1.5em;
  left: center;

  float: right;
  margin-left: -4em;

  color: white;
  font-size: 90px;
}

#img_bg_sun {
  user-select: none;
  position: absolute;
  top: -40vh;
  right: -20vw;
  width: 50vw;
  height: auto;
  animation: spin360 280s linear infinite;
}

@keyframes spin360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
