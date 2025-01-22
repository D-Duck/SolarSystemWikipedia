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
  <div id="section">
    <h2>{{ data.title }}</h2>
    <p>
      {{ data.text }}
    </p>
  </div>
</template>

<style scoped>
#section {
  float: left;
  background-color: black;
  border-top: solid 2px #ffffff33;
  border-bottom: solid 2px #ffffff33;
  border-radius: 3em;
  padding: 2em;
  margin-top: 3em;
}

h2 {
  color: white;
  font-size: 3em;
}
</style>
