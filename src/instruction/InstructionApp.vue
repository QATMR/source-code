<template>
  <div class="container">
      <div class="row mb-4">
          <div class="col">
              <h1 class="text-center">Instruction for Question-Answering on Temporal Relations</h1>
          </div>
      </div>

      <nav>
          <div class="nav nav-pills nav-fill" id="nav-tab" role="tablist">
              <a class="nav-item nav-link"
                 v-on:click="active_tab = 'Events'"
                 v-bind:class="{
                  'active': active_tab === 'Events'
                 }"
              >Events</a>

              <a class="nav-item nav-link"
                 v-on:click="active_tab = 'Question'"
                 v-bind:class="{
                  'active': active_tab === 'Question'
                 }"
              >Questions</a>

              <a class="nav-item nav-link"
                 v-on:click="active_tab = 'Answer'"
                 v-bind:class="{
                  'active': active_tab === 'Answer'
                 }"
              >Answers</a>
          </div>
      </nav>

      <div v-if="active_tab === 'Events'">
            <i-event></i-event>
      </div>
      <div v-if="active_tab === 'Question'">
            <i-question></i-question>
      </div>
      <div v-if="active_tab === 'Answer'">
        <i-qa></i-qa>
      </div>
  </div>
</template>

<script>

import InstructionEvent from "./Instruction"
import InstructionQuestion from "./InstructionsOnQuestions"
import InstructionQA from "./InstructionsQA"

export default {
  name: 'Instruction',
  components: {
      "i-event": InstructionEvent,
      "i-question": InstructionQuestion,
      "i-qa": InstructionQA,
  },
  data : function(){
      return {
          active_tab: 'Events'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .nav-item.active{
        /*color: red !important;*/
        border-bottom-style: solid !important;
        border-bottom: 0px red !important;
        cursor: pointer;
    }

    .nav-item{
        /*color: red !important;*/
        border-bottom: 2px grey !important;
        border-bottom-style: dotted !important;

        cursor: pointer;
    }

</style>
