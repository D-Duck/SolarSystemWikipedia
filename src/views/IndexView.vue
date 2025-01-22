<script>
import VerticalNavigation from '../components/VerticalNavigation.vue'
import LogoComp from '../components/LogoComp.vue'
import SectionComp from '../components/SectionComp.vue'

export default {
  name: 'IndexView',
  components: {
    SectionComp,
    VerticalNavigation,
    LogoComp,
  },
}
</script>

<template>
  <main>
    <LogoComp />
    <VerticalNavigation />
    <img id="img_bg_sun" src="/img/objects/Sun.jpg" />
    <div id="sections">
      <h1>Solar System</h1>
      <SectionComp
        :data="{
          title: 'About',
          text: 'The Solar System is made up of the Sun, eight planets, moons, dwarf planets, asteroids, comets, and other celestial bodies, all held together by the Suns gravity. Located in the Milky Way galaxy, it includes a wide range of objects that orbit the Sun. The Sun is a star at the center, containing 99.86% of the Solar Systems mass, providing light, heat, and gravitational pull. The planets are divided into inner, rocky ones like Mercury, Venus, Earth, and Mars, and outer, gas and ice giants such as Jupiter, Saturn, Uranus, and Neptune. Many of the planets have moons, with Earth having one, while Jupiter and Saturn have dozens. There are also dwarf planets like Pluto, smaller bodies that orbit the Sun but havent cleared their orbits of other objects. The Asteroid Belt, located between Mars and Jupiter, contains rocky bodies, while comets, icy objects from the outer reaches, form tails when they approach the Sun. The Solar System formed about 4.6 billion years ago from a collapsing cloud of gas and dust, and all its objects follow elliptical orbits around the Sun. The average distance from Earth to the Sun is 93 million miles, known as one Astronomical Unit. The Solar System continues to be an important focus for scientific study, offering insights into the origins of planets and the potential for life beyond Earth.',
        }"
      />
      <SectionComp
        :data="{
          title: 'Fun facts',
          text: 'Here are some fun facts about the Solar System: The Sun is massive: The Sun accounts for 99.86% of the total mass of the Solar System. Its so large that about 1.3 million Earths could fit inside it!     Jupiters Great Red Spot: This giant storm has been raging for at least 400 years, and it’s so large that about three Earths could fit inside it.     A day on Venus is longer than a year: Venus takes 243 Earth days to rotate once, but only 225 Earth days to complete an orbit around the Sun.     Mars tallest volcano: Olympus Mons on Mars is the largest volcano in the Solar System. It about three times the height of Mount Everest!     Saturn’s moons: Saturn has at least 146 moons, with Titan being the largest. It’s even bigger than the planet Mercury.     Neptunes winds: Neptune has some of the fastest winds in the Solar System, reaching speeds of up to 2,100 kilometers per hour (1,300 miles per hour).     Plutos orbit: Pluto’s orbit is so tilted that for about 20 years of its 248-year orbit, it’s actually closer to the Sun than Neptune.     Mercury has extreme temperatures: The planet experiences some of the largest temperature swings in the Solar System—hot enough to melt lead during the day and freezing cold at night.     A year on Neptune is almost 165 Earth years: Neptune takes about 165 Earth years to orbit the Sun once due to its vast distance from the star.     The largest ring system: Saturn’s rings are the most extensive and most spectacular in the Solar System, though Jupiter, Uranus, and Neptune also have ring systems.',
        }"
      />
      <SectionComp
        :data="{
          title: 'Solar System',
          text: 'The Solar System is a vast and complex system, centered around the Sun, a medium-sized star located about 93 million miles from Earth. This star, which makes up 99.86% of the total mass of the Solar System, provides the energy necessary to sustain life on Earth and governs the orbits of the various celestial bodies that surround it. The Solar System contains eight planets, their moons, dwarf planets, asteroids, comets, and other small objects, all bound together by the Sun’s gravitational pull. At the heart of the Solar System is the Sun, a massive ball of hydrogen and helium gas undergoing nuclear fusion in its core. This process releases vast amounts of energy in the form of light and heat, which radiates out across the Solar System, providing the necessary conditions for life on Earth. The Sun’s gravity holds all the planets, moons, and other objects in orbit, and its energy drives the weather systems and climatic patterns across the planets. The eight planets of the Solar System are divided into two main categories: terrestrial and gas giants. The inner planets—Mercury, Venus, Earth, and Mars—are rocky and small. They are known as terrestrial planets because they have solid, rocky surfaces. Mercury, the closest planet to the Sun, has extreme temperature fluctuations due to its thin atmosphere. Venus, with its thick, toxic atmosphere, is the hottest planet, even hotter than Mercury, despite being farther from the Sun. Earth is the only planet known to support life, thanks to its liquid water, suitable atmosphere, and moderate temperatures. Mars, the fourth planet, is known for its red surface, which is rich in iron oxide, and it has been a key target for exploration due to its potential for past life. Beyond Mars lie the outer, gas giant planets—Jupiter, Saturn, Uranus, and Neptune. These planets are much larger than the terrestrial ones and are composed primarily of hydrogen, helium, and other gases. Jupiter, the largest planet in the Solar System, has a strong magnetic field and dozens of moons, including the largest moon, Ganymede. Saturn is famous for its spectacular ring system, which is made of ice and rock particles. Uranus and Neptune, often called ice giants, are composed mostly of water, ammonia, and methane ices, with their atmospheres containing traces of methane, which gives them their distinct blue-green color. Uranus is unique in that it rotates on its side, with its axis tilted at an extreme angle compared to most other planets. In addition to the planets, the Solar System contains numerous smaller objects. The asteroid belt, located between Mars and Jupiter, is a region filled with millions of rocky objects. Some of these asteroids are quite large, but most are small, with sizes ranging from tiny pebbles to objects hundreds of kilometers across. Beyond the asteroid belt lies the Kuiper Belt, which is home to many icy bodies and dwarf planets, including Pluto, the most famous dwarf planet. Pluto was once considered the ninth planet but was reclassified as a dwarf planet in 2006. Far beyond the Kuiper Belt lies the Oort Cloud, a hypothetical region that may contain billions of comets, although it remains largely unexplored. Comets are icy objects that orbit the Sun in highly elliptical paths. When a comet gets close to the Sun, the heat causes the ice to vaporize, creating a bright coma and often a tail that points away from the Sun due to solar wind. Comets are thought to originate from the Kuiper Belt and the Oort Cloud and are often referred to as dirty snowballs because of their icy and rocky composition. The Solar System is not only made up of planets and small objects; it also includes a wide variety of moons. Moons are natural satellites that orbit planets and dwarf planets. Some planets, like Earth, have just one moon, while others, like Jupiter and Saturn, have dozens. Many moons are geologically interesting and have unique features. For example, Europa, one of Jupiters moons, is believed to have a subsurface ocean beneath its icy crust, making it a prime candidate in the search for life beyond Earth. The Solar System also contains a range of other fascinating phenomena, such as planetary rings and magnetic fields. Saturn’s rings are the most spectacular and are made of ice and rock particles that range in size from tiny grains of sand to large chunks. Other gas giants like Jupiter, Uranus, and Neptune also have ring systems, though they are much less prominent. Each planet has its own unique magnetic field, which is generated by the motion of molten metals in their cores. These magnetic fields help protect the planets from harmful solar radiation. The Solar System formed around 4.6 billion years ago from a large cloud of gas and dust. This cloud collapsed under its own gravity, and as it did, it began to spin, forming a flat disk. Most of the material in the disk was pulled toward the center, forming the Sun, while the remaining material clumped together to form the planets and other objects. Over time, these objects collided and interacted, leading to the system we see today. Exploring the Solar System has been a key focus of human space exploration, and numerous missions have been sent to study its planets, moons, and other objects. Spacecraft like Voyager 1 and 2, which were launched in the 1970s, have provided valuable data on the outer planets and beyond. The exploration of Mars has been a particular focus, with missions like NASA’s Perseverance rover seeking signs of past life on the Red Planet. The Solar System is a fascinating and diverse region of space, with each planet and moon offering unique characteristics and mysteries. From the icy rings of Saturn to the volcanic surface of Io, the moons of Jupiter, and the icy giants at the edge of the system, the Solar System remains an area of intense scientific interest and discovery. As technology advances, we continue to learn more about this vast and intriguing corner of the universe.',
        }"
      />
    </div>
  </main>
</template>

<style scoped>
h1 {
  float: left;
  width: 40vw;
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
