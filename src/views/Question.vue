<template>
  <div v-if="question" class="question-card">
    <h1 class="question-card__title">{{ this.question.text }}</h1>
    <button class="question-card__button" v-if="!answersShown" @click="answersShown = true">Show Acceptable Answer(s)</button>

    <ul class="question-card__answers" v-show="answersShown">
      <li v-for="(answer, index) in question.answers" :key="index" class="question-card__answer">
        <a v-if="question.link" :href="question.link" target="_blank" rel="noopener">{{ answer }}</a>
        <span v-else>{{ answer }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answersShown: false
    }
  },
  mounted() {
    this.question = this.$store.state.questions[parseInt(this.$route.params.index) - 1];
  }
}
</script>

<style lang="scss" scoped>
.question-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 3rem;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.125);
  max-width: 28rem;

  &__title {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    color: #444;
    text-align: center;
    line-height: 2rem;
  }

  &__button {
    display: block;
    text-align: center;
    margin: 2rem auto 0;
    padding: 1rem;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.125);
    cursor: pointer;
    background-color: lightgreen;
    border: 0;
    transition: background-color 0.25s ease;

    &:hover, &:focus {
      background-color: mediumspringgreen;
    }
  }

  &__answer {
    margin: 1rem 0;
    color: green;

    a {
      text-decoration: underline;
      color: blue;
    }

    &:before {
      content: '✔  ';
    }

    &:last-child {
      margin-bottom: 0;
    }

    &s {
      display: inline-block;
      margin: 1rem auto 0;
      padding: 0;
      list-style: none;
    }
  }
}
</style>