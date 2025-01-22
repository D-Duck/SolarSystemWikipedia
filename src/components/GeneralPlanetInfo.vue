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
    <h3>Info about {{ this.data.name }}</h3>
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
  </div>
</template>

<style scoped>
h1 {
  color: white;
}

h3 {
  font-size: 2em;
  color: white;
  text-align: center;
}

#general_planet_info {
  position: fixed;
  z-index: 1;
  bottom: 4em;
  right: 4em;
  width: 30em;
  height: 30em;
  padding: 2.5em;

  border-radius: 3em;

  background-color: #3a3a3acc;
}
</style>
