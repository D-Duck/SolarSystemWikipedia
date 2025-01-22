<script>
import SolarSystem from '../../src/json/SolarSystem.json'

export default {
  name: 'GeneralPlanetInfo',
  data() {
    return {
      type: String,
      data: Array,
    }
  },
  mounted() {
    this.setData()
  },
  components: {},
  methods: {
    setData() {
      this.type = this.$route.params.planet

      const planets = SolarSystem['planets']
      for (let key in planets) {
        const planet = planets[key]

        if (planet.name === this.type) {
          this.data = planet
        }
      }
    },
  },
}
</script>

<template>
  <div id="general_planet_info">
    <h3>INFO</h3>
    <br />
    <ul>
      <li>Order: {{ this.data.order_from_sun }}</li>
      <li>Diameter: {{ this.data.diameter_km }}</li>
      <li>Orbital period: {{ this.data.orbital_period_days }}</li>
      <li>Moons: {{ this.data.moons }}</li>
      <li>Average temperature: {{ this.data.average_temperature_celsius }}°C</li>
      <li>Atmosphere composition: {{ this.data.atmosphere_composition }}</li>
      <li>Discovery year: {{ this.data.discovery_year }}</li>
    </ul>
    <img id="pull_arrow" src="\img\ui\left_arrow.png" />
  </div>
</template>

<style scoped>
h1 {
  color: white;
}

h3 {
  font-size: 2em;
  color: white;
  text-align: left;
}

#pull_arrow {
  height: 5em;
  position: absolute;
  bottom: 2em;
}

#general_planet_info {
  position: fixed;
  z-index: 1;
  bottom: 4em;
  right: -20em;
  width: 30em;
  height: 30em;
  padding: 2.5em;

  border-radius: 3em;

  color: #00000000;
  background-color: #3a3a3acc;
  transition: 3s;
}

#general_planet_info:hover {
  right: 0;
  right: -3em;
  transition: 3s;
  color: white;
}
</style>
