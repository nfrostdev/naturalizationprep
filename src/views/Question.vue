<template>
  <div v-if="question">
    <div class="question-card">
      <h1>{{ this.question.text }}</h1>
      <button v-if="!answersShown" @click="answersShown = true">Show Answers</button>

      <ul v-show="answersShown">
        <li v-for="(answer, index) in question.answers" :key="index">
          <a v-if="question.link" :href="question.link" target="_blank" rel="noopener">{{ answer }}</a>
          <span v-else>{{ answer }}</span>
        </li>
      </ul>
    </div>
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
    this.question = this.$store.state.questions[this.$route.params.index];
  }
}
</script>