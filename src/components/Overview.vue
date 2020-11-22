<template>
  <div>
      <div class="row mb-4 mt-4">
          <div class="col">
              <div class="card">
                  <div class="collapse show">
                      <div class="card-body">
                          <div class="card-text">
                              <strong>For participants who have experience with question-answering (QA), this task is very DIFFERENT from prior tasks you may have done. We focus on phenomena related to "time," so please read our instructions carefully.</strong>
                          <hr>
                          </div>
                          <p class="card-text">
<!--                              <strong>This is a small pilot job for a much larger one, where each participant is expected to receive hundreds of dollars. We try to be generous in this pilot study, and also distribute qualifications to those who are good at this pilot for the larger job. Previous participants reported that it typically took 45 min to fully digest the instruction. After that, each hit may take less than 30 min.</strong>-->
                              <strong>Congrats on passing our qualification test. You're going to use what you learned in the qualification test to finish your job here. It's strongly recommended that you open the training instructions <a href="https://qatmr-qualification.github.io/" target="_blank">there</a> in a different window and use it as a reference.</strong>
                          </p>
                          <div class="card-text">
                              <strong>A temporal relation describes the relation between two things with respect to time, e.g., something {happens/starts/terminates/...} {immediately/shortly/usually/...} {before/after/during/...} something else. In this task, you will see sentences that contain several events. Your job is to write questions that query temporal relations among these events and then provide single-word answer(s). To that end, you need to</strong>
                              <ol>
                                  <li><span style='color:DodgerBlue;'>Label all the events in the passage you see.</span> E.g., you may see a passage like <em>"I submitted the hit. The hit was approved, and then I was paid."</em> You need to identify the submission event (<em>"submitted"</em>),  the approval event (<em>"approved"</em>), and the payment event (<em>"paid"</em>).</li>
                                  <li>Repeatedly do the following before you submit it.
                                      <ul>
                                          <li><span style='color:DodgerBlue;'>Ask a temporal relation question and point out *all* events that can answer your question.</span> E.g., you may ask <em style='color:DodgerBlue;'>"what happened after I submitted the hit?"</em> and the answers are <em style='color:DodgerBlue;'>"the hit was approved"</em> and <em style='color:DodgerBlue;'>"I was paid"</em> (although you should realize that you only need to provide <em>"approved"</em> and <em>"paid"</em> as your answer). <span style='color:Tomato;'>
                                                        The two key points in this step are
                                                        <ul>
                                                            <li>a question about *temporal relations* (e.g., <em>"what did I submit?"</em> is not about temporal relation and is thus a wrong question)</li>
                                                            <li>*all* correct answers rather than only some of them (e.g., both "approved" and "paid" need to be labeled for the question above)</li>
                                                        </ul></span></li>

                                          <li><strong><u><span style="color:MediumVioletRed">NOTICE: This step wasn't taught in the qualification task. Please read it carefully (as well as the corresponding section in "Step-by-step examples". </span></u></strong><span style='color:DodgerBlue;'>Slightly modify your question and change your answers accordingly.</span> E.g., you can modify the question above to be <em style='color:DodgerBlue;'>"what happened <strong>before</strong> I submitted the hit?"</em>. For this modified question, there's no answer from the sentence, but it's ok and you're allowed to submit the question without answers if there're none. <span style='color:Tomato;'>Ideally, every question should be modified, but we don't enforce that in our interface to give you some flexibility. Two key points:
                                                            <ul>
                                                                <li>
                                                                    The modification should also be related to "temporal" (e.g., change "after" to "before" or other things as long as it's about time)
                                                                </li>
                                                                <li>
                                                                    The answers should change after the modification (e.g., <em>"what <strong>occurred</strong> after I submitted the hit?"</em> is essentially the same with the original question and is thus wrong)
                                                                </li>
                                                            </ul></span></li>
                                      </ul>
                                  </li>
                              </ol>
                              In other tabs, we will explain in detail how to label events, how to ask questions, and how to modify the questions.
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
  name: 'Overview',
  props: {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
