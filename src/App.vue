<template>
  <div id="app">
    <header class="header">
      <div class="header__title">U.S. Naturalization Test Preparation</div>
      <nav class="nav">
        <button class="nav__button" @click="goToAllQuestions">
          All Questions
        </button>
        <button class="nav__button" @click="goToRandomQuestion" ref="randomQuestionButton">Random Question</button>
      </nav>
    </header>
    <router-view :key="this.$route.fullPath"/>
  </div>
</template>

<script>
export default {
  methods: {
    goToAllQuestions() {
      if (this.$route.name !== 'All') {
        this.$router.push('/all')
      }
    },
    goToRandomQuestion() {
      this.$refs.randomQuestionButton.blur();
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
html {
  background-color: #eee;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  font-family: 'Merriweather', serif;
}

.header {
  margin-top: 1rem;

  &__title {
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: darkred;
    margin-bottom: 1rem;
  }
}

.nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;

  &__button {
    display: inline-block;
    text-align: center;
    padding: 1rem;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.125);
    cursor: pointer;
    background-color: white;
    border: 0;
    transition: background-color 0.25s ease;

    &:hover, &:focus {
      background-color: mediumspringgreen;
    }
  }

  &.green {
    background-color: mediumspringgreen;
  }
}
</style>