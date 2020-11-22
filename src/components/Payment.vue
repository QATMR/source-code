<template>
  <div>
      <div class="row">
          <div class="col">
              <div class="card">
                  <div class="collapse show">
                      <div class="card-body">
                          <div class="card-text">
                              <h2>Spam policy & extra bonus:</h2>

                              <ol>
                                  <li>As we occasionally find people, who passed all our qualifications, but weirdly submitted meaningless annotations to us (e.g., submitting a question like "whaat before gagoioiraog??" If we later find that your performance is significantly lower than what you did in the qualification task, we keep the right not to dispense bonus or even reject your HITs. <strong>For non-spammers, don't worry; we're not harsh on this because all we want to do is to avoid spammers.</strong> Thanks for your understanding.</li>
                                  <li>Every hit requires a minimum number of questions before you can submit. If you provide more than the required number of questions, we will reward you ${{bonus_per_question}} for each extra question (up to ${{max_bonus}}). You are able to see your bonus in real time in your working area. Many of you should have already received this type of bonus before.</li>
                                  <li>Finally, we will validate your answers manually and rank the performance of all workers (about 50 others). The performance is judged by precision and completeness. Precision means how many of your answers are indeed correct, and completeness means how many of the real correct answers are found out by you. In other words, if you submit a wrong answer, it hurts your precision, and if you miss a correct answer, it hurst your completeness.
                                      <ul><strong>
                                          <li>
                                              The best worker receives $50.
                                          </li>
                                          <li>
                                              The 2nd worker receives $30.
                                          </li>
                                          <li>
                                              The 3rd receives $20.
                                          </li>
                                          <li>
                                              The 4th-10th each receives $10.
                                          </li>
                                      </strong></ul>
                                  </li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  props: {
      max_bonus: Number,
      bonus_per_question: Number
  },
    filters: {
        currency: function(value){
            return value.toFixed(2);
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
