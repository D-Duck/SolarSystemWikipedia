<script>
export default {
  name: 'LogoComp',
}
</script>

<template>
  <div id="logo">
    <a href="/">
      <p>-Solar-</p>
      <img src="/img/objects_low/Sun.jpg" alt="SunLogo" />
      <p>-Wiki-</p>
    </a>
  </div>
</template>

<style scoped>
#logo {
  user-select: none;

  position: fixed;
  top: 0;
  left: 0;
  height: 5em;

  margin: 1em;
  border-top: solid 2px #ffffff55;
  border-bottom: solid 2px #ffffff55;
  border-radius: 3em;

  z-index: 100;
  display: flex;
  align-items: center;
  background-color: black;
}

img {
  margin-top: 0.45em;
  float: left;
  width: 4.5em;
  height: auto;
}

p {
  padding: 0;
  margin: 0;
  float: left;
  color: white;
  font-size: 50px;
}

a:hover,
a:focus {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
