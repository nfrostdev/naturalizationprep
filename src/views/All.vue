<template>
  <div class="all-questions">
    <h1 class="all-questions__title">List of all Questions</h1>
    <div v-for="(question, index) in $store.state.questions" :key="index" class="question">

      <h2 class="all-questions__h2">
        <span>{{ index + 1 }}. {{ question.text }}</span>
        <router-link :to="{name: 'Question', params: {index: index}}" class="all-questions__link"
                     :title="'Go to Question #' + (index + 1)">→
        </router-link>
      </h2>
      <ul class="all-questions__answers">
        <li v-for="answer in question.answers" :key="answer">{{ answer }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.all-questions {
  background-color: white;
  padding: 3rem;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.125);
  max-width: 48rem;

  &__title {
    margin: 0;
    color: #444;
    text-align: center;
  }

  &__h2 {
    margin: 3rem 0 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #444;
  }

  &__link {
    display: inline-block;
    text-decoration: none;
    color: blue;
    margin-left: 0.5rem;
    position: relative;
    bottom: 0.25rem;
    transition: padding-left 0.25s ease;

    &:hover, &:focus {
      padding-left: 0.5rem;
    }
  }

  &__answers {
    color: green;
    margin: 0.5rem 0 0;
    line-height: 1.5rem;
  }
}
</style>