<template>
  <div id="app">
    <div id="nav">
      <button @click="goToRandomQuestion()">Random Question</button>
    </div>
    <router-view :key="this.$route.fullPath"/>
  </div>
</template>

<script>
export default {
  methods: {
    goToRandomQuestion() {
      this.$router.push('/' + this.getRandomQuestionIndex().toString())
    },
    getRandomQuestionIndex() {
      const index = Math.round(Math.random() * this.$store.state.questions.length)
      if (this.$route.params.index && index === parseInt(this.$route.params.index)) {
        this.getRandomQuestionIndex()
      } else {
        return index;
      }
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
