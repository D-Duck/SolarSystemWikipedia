<script>
import SolarSystem from '../../src/json/SolarSystem.json'

export default {
  name: 'NavigationButton',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      text: '',
      url: '',
      img: '',
    }
  },
  mounted() {
    this.setData()
  },
  methods: {
    setData() {
      const planets = SolarSystem['planets']
      for (let key in planets) {
        const planet = planets[key]

        if (planet.name === this.data) {
          this.text = planet.name
          this.url = '/' + planet.name
          this.img = 'img/objects_low/' + planet.name + '.jpg'
        }
      }
    },
  },
}
</script>

<template>
  <a :href="url">
    <div class="button">
      <p>{{ text }}</p>
      <img :src="img" :alt="this.text" />
    </div>
  </a>
</template>

<style scoped>
.button {
  float: right;
  justify-content: center;
  align-items: center;
  display: flex;
  float: left;
  width: 100%;
  height: 3.5em;
  background-color: black;
}

img {
  float: right;

  height: 100%;
  width: auto;
}

p {
  color: white;
  margin-bottom: 5px;
  width: 6em;
  font-size: 3em;
  text-align: right;
  padding-right: 10px;
  float: right;
  text-decoration: underline;
}

a:hover,
a:focus {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
