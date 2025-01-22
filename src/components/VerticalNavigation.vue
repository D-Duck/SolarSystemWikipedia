<script>
import NavigationButton from './NavigationButton.vue'

export default {
  name: 'VerticalNavigation',
  components: {
    NavigationButton,
  },
}
</script>

<template>
  <div class="navigation">
    <NavigationButton data="Mercury" />
    <NavigationButton data="Venus" />
    <NavigationButton data="Earth" />
    <NavigationButton data="Mars" />
    <NavigationButton data="Jupiter" />
    <NavigationButton data="Saturn" />
    <NavigationButton data="Uranus" />
    <NavigationButton data="Neptune" />
  </div>
</template>

<style scoped>
.navigation {
  background-color: black;
  padding: 0.8em;
  padding-bottom: 2.5em;
  padding-right: 0;
  user-select: none;

  position: fixed;
  top: 7em;
  left: -20em;

  height: auto;
  width: 25em;

  z-index: 100;
  border: 2px solid white;
  border-radius: 2em;
  transition: 0.3s;
}

.navigation:hover {
  left: -6em;
  transition: 0.3s;
}
</style>
