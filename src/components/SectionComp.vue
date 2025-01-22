<script>
export default {
  name: 'SectionComp',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        text: '',
      }),
    },
  },
}
</script>

<template>
  <div class="section">
    <h2>{{ data.title }}</h2>
    <p>
      {{ data.text }}
    </p>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  float: left;
  background-color: black;
  border-top: solid 2px #ffffff33;
  border-bottom: solid 2px #ffffff33;
  border-radius: 3em;
  padding: 2em;
  margin-bottom: 3em;
  opacity: 0;
  animation: fadeInAnimation 2s ease-in forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h2 {
  color: white;
  font-size: 3em;
}
</style>
