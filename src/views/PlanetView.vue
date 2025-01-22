<script>
import SolarSystem from '../../src/json/SolarSystem.json'
import VerticalNavigation from '../components/VerticalNavigation.vue'
import LogoComp from '../components/LogoComp.vue'
import GeneralPlanetInfo from '@/components/GeneralPlanetInfo.vue'
import SectionComp from '@/components/SectionComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import RocketComp from '@/components/RocketComp.vue'

export default {
  name: 'PlanetView',
  data() {
    return {
      type: String,
      data: Array,
    }
  },
  mounted() {
    this.setData()
  },
  components: {
    RocketComp,
    FooterComp,
    SectionComp,
    GeneralPlanetInfo,
    VerticalNavigation,
    LogoComp,
  },
  computed: {
    computedImgSrc() {
      return `/img/objects/${this.data.name}.jpg`
    },
  },
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
  <main>
    <LogoComp />
    <FooterComp />
    <RocketComp />
    <VerticalNavigation />
    <GeneralPlanetInfo />
    <img class="img_bg_planet" :src="computedImgSrc" :alt="data.name" />
    <div class="outer_container">
      <div class="sections">
        <h1>{{ this.data.name }}</h1>
        <SectionComp :data="{ title: 'About', text: this.data.description_1 }" />
        <SectionComp :data="{ title: '', text: this.data.description_2 }" />
        <SectionComp :data="{ title: 'Detailed description', text: this.data.text }" />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  float: left;
  width: 50vw;
  color: white;
  font-size: 90px;
}

.outer_container {
  position: absolute;
  top: 0;
  left: 30em;
  margin-top: 10em;
  margin-bottom: 30em;
  width: 45vw;
}

.img_bg_planet {
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
