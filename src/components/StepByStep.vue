<template>
  <div>

      <div class="row mb-4 mt-4">
          <div class="col">
              <div class="card">
                  <!--<a class="card-header" data-toggle="collapse" href="#collapseExample" aria-expanded="true" aria-controls="collapseExample">-->
                      <!--<h4>Step-by-step instructions (click to collapse) </h4>-->
                  <!--</a>-->
                  <div id="collapseExample" class="collapse show">
                      <!-- <div id="collapseExample" class="collapse"> -->
                      <div class="card-body">
                          <!-- <h5 class="card-text text-center">
                              Move your mouse over a question to highlight the answers to the question.
                          </h5> -->
                          <div class="container">
                              <div class="row">
                                  <div class="col-lg-4">
                                      <div class="card sticky-top">
                                          <div class="card-header">
                                              <h4>Example #1 (events highlighted)</h4>
                                          </div>
                                          <div class="card-body">
                                              <div id="passage-sample" class="card-text">
                                                  Heavy <mark>snow</mark> is <mark>causing</mark> <mark>disruption</mark> to <mark>transport</mark> across the UK, with heavy <mark>rainfall</mark> <mark>bringing</mark> <mark>flooding</mark> to the south-west of England. Rescuers <mark>searching</mark> for a woman <mark>trapped</mark> in a <mark>landslide</mark> at her home in Looe, Cornwall, <mark>said</mark> they had <mark>found</mark> a body.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-8" id="exampleQuestions">
                                      <div class="card mb-2">
                                          <div class="card-header">
                                              <h4>Step 1: Event labeling</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  The first thing is to label all the events. On the left, we have highlighted them in yellow.
                                              </div>
                                              <div class="card-text">
                                                  Some cases aren't clear until you ask a question about it in Step 2, so try your best in Step 1 and when you are stuck, move to Step 2 and see. You can then move back and edit your events.
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-header">
                                              <h4>Step 2: Ask questions about temporal relations</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  <strong>Put yourself at the time point when this passage was written</strong>, and you can ask
                                                  <ul style='color:DodgerBlue;'>
<!--                                                      <li><em>"What has happened?"</em></li>-->
                                                      <li><em>"What happened after the snow began?"</em></li>
                                                      <li><em>"What had started before a woman was trapped?"</em></li>
                                                  </ul>
                                                  <div><strong>Keep in mind some events are negative or uncertain, so in order to query them, you can involve confidence levels or negations in your question.</strong>
                                                  <ul style='color:DodgerBlue;'>
                                                      <li>
                                                          <em>
                                                              "What have possibly happened?"
                                                          </em>
                                                      </li>
                                                      <li>
                                                          <em>
                                                              "What should have happened but didn't happen?"
                                                          </em>
                                                      </li>
                                                  </ul></div>
                                                  <p><strong>The answer(s) to each question must be chosen from those events you labeled in Step 1 (that's why we ask you to create it first; feel free to go back to Step 1 and edit your event list).</strong></p>
                                                  <p>See the following examples.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What event has started?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >snow, causing, disruption, rainfall, bringing, flooding, searching, trapped, landslide, said, found</span> (all but "transport")<br/>
                                                  <b>Explanation: "Transport" in this sentence is only describing what type of a "disruption" it is. Another way to think of this is "the capability of transporting to places is limited", so although people are definitely transporting every day, the meaning behind this very "transport" is not a valid answer.</b>
                                              </p>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What has happened?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >causing, bringing, searching, trapped, landslide, said, found</span><br/>
                                                  <b>Explanation: When we ask "what happened before something" or "what has happened", it implies that the answer event has ended. <span style='color:Tomato;'>Events like "snow" and "disruption" have not necessarily ended yet according to the text, so they are not valid answers to "what has happened".</span></b>
                                              </p>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <div class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What happened after the snow began?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >causing, disruption, bringing, flooding, searching, trapped, landslide, said, found</span> (all but "snow", transport" and "rainfall")<br/>
                                              <p><b>Explanation: "Transport" is not in the answer for the same reason; as for "rainfall", we only know from the sentence that the "snow" and "rainfall" were at about the same time, but which one was earlier is not clear; "snow" is already in the question, so it's not in the answer.</b></p>
                                              <p><b><span style='color:Tomato;'>While "what has happened" implies that the answer event must have ended, "what happened after something" doesn't require the answer events to be ended. Please stop for a few seconds and digest this subtle thing of English.</span></b></p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What event had started before the woman was trapped?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >snow, causing, disruption, rainfall, bringing, flooding, searching, landslide</span><br/>
                                                  <b>Explanation: "Said" and "found" were after the woman was trapped.</b>
                                              </p>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-header">
                                              <h4 style="color:Tomato;">Common Mistakes in Step 2</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  <ul>
                                                      <li>
                                                          <span style='color:Tomato;'>Some participants provided questions irrelevant to temporal relations.</span> Some typical BAD questions are:
                                                          <ul style="color:Tomato;">
                                                              <li>
                                                                  <em>"What led to the death of a woman?"</em>
                                                              </li>
                                                              <li>
                                                                  <em>"What is heavy snow causing across the UK?"</em>
                                                              </li>
                                                              <li>
                                                                  <em>
                                                                      "Who were rescuers searching for?"
                                                                  </em>
                                                              </li>
                                                              <li>
                                                                  <em>
                                                                      "What happened to a woman in Looe, Cornwall?"
                                                                  </em>
                                                              </li>
                                                              <li>
                                                                  <em>
                                                                      "What had rescuers found?"
                                                                  </em>
                                                              </li>
                                                          </ul>
                                                          The key thing is that these bad questions aren't asking whether some event is before, after, or during another event. If you don't fully understand the subtlety here, we will come back to this when we explain Step 3. A bad question will make it very difficult/impossible to do Step 3.
                                                      </li>
                                                      <li>
                                                          <span style='color:Tomato;'>Some participants only provided one answer for each question.</span> Please carefully check the event list you created in Step 1 and select ALL valid answers. You will usually find multiple answers. It's definitely possible that some questions only has one answer (this is common for short passages), but you should stay alerted if this happens a lot and make sure you don't make the following mistake:
                                                      </li>
                                                      <li>
                                                          <span style='color:Tomato;'>Some participants provided multiple answers, but still not complete.</span> For instance, one passage may have two sentences, but some participants only choose answers from the 2nd sentence because their question was motivated by the 2nd sentence. Please note events from the entire passage should be considered when answering your questions.
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-header">
                                              <h4>Step 3: Slightly modify your question</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  Next, you modify your questions in Step 2 and also answer them. For instance, you can modify them as follows.
                                                  <ul style="color:DodgerBlue;">
<!--                                                      <li><em>"What has happened?"</em> ==> <em>"What will happen?", "What has started?"</em></li>-->
                                                      <li><em>"What happened after the snow began?"</em>==><em>"What happened/started/ended/... before/during/... the snow began/ended/...?"</em></li>
                                                      <li><em>"What event had started before the woman was trapped?"</em>==><em>"What event had ended before the woman was trapped?"</em></li>
                                                  </ul>
                                                  <strong>In summary:</strong>
                                                  <ul>
                                                      <li>You can change the temporal aspect (e.g., from "before" to "after", or to "during", "since", etc.).</li>
                                                      <li>You can change it to the start-time and end-time of events.
                                                      <li>You can also add descriptions such as from "after" to "immediately after" or "usually after."</li>
                                                      <li>However, don't change the event in your question. E.g., in the above, we ask about "snow" and "trapped;" our modified questions still talk about "snow" and "trapped."</li>
                                                      <li>It's ok if your modified question has no valid answers from the text. In that case, just submit an empty set of answers.</li>
                                                      <li><span style='color:Tomato;'>Make sure your modified question gives a different set of answers from those to your original question.</span> For instance, modifying <em>"What will happen in the future?"</em> to <em>"What may happen in the future?"</em> is not a valid modification.</li>
                                                  </ul>
                                                  <strong>If you find it difficult to modify your question from Step 2, then it probably means your question is wrong. You can refer to our instructions in the qualification task <a href="https://qatmr-qualification.github.io/">(link)</a> .</strong>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-header">
                                              <h4>Step 4</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  Repeat Step 2 and Step 3 until a certain number of questions are asked and then you can submit your HIT. <strong>You're encouraged to ask more and we will give you a bonus of ${{bonus_per_question}} for each extra question (up to ${{max_bonus}}).</strong>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <hr>
                              <div class="row">
                                  <div class="col-lg-4">
                                      <div class="card sticky-top">
                                          <div class="card-header">
                                              <h4>Example #2</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  Mr. Erdogan <mark>accepted</mark> the Israeli <mark>apology</mark>, the prime minister's office <mark>said</mark>. Mr. Erdogan has long <mark>sought</mark> an <mark>apology</mark> for the <mark>raid</mark> in May 2010 on the Mavi Marmara, which <mark>was</mark> part of a flotilla that <mark>sought</mark> to <mark>break</mark> Israel's <mark>blockade</mark> of Gaza.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-8">
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What happened after the Israeli apology?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >accepted, said</span><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What happened before the Israeli apology?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >sought, raid, was, sought</span><br/>
                                                  <strong>Explanation: "Blockade" is not a valid answer because it's possible that the blockade hasn't stopped. In English, "what happened before something" means the event had stopped, while "what happened after something" means the event has started (not necessarily stopped). Compare with the following.</strong><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What had started before the Israeli apology?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >sought, raid, was, sought, blockade</span><br/>
                                                  <strong>Explanation: "Blockade" becomes valid because the question only concerns the start-time.</strong><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What happened when Israel apologized?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >accepted, said</span><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What happened during the Israeli apology?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >no answer at all</span><br/>
                                                  ...<br/>
                                                  <strong>You can either continue modifying existing questions, or ask a new question.</strong>
                                              </p>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What might happen after a flotilla sought something?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >break</span><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What might happen before a flotilla sought something?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >no answer at all</span><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What might terminate after a flotilla sought something?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >blockade</span><br/>
                                                  ...
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <hr>
                              <div class="row">
                                  <div class="col-lg-4">
                                      <div class="card sticky-top">
                                          <div class="card-header">
                                              <h4>Example #3</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  But Leon can still <mark>run</mark>. Two years after his brain-<mark>cancer</mark> <mark>diagnosis</mark>, he recently <mark>ran</mark> a sub-five-minute mile for the first time since high <mark>school</mark>.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-8">
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What can Leon do after his brain-cancer diagnosis?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >run</span><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What did Leon do after his brain-cancer diagnosis?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >ran</span><br/>
                                                  <strong>Explanation: In the two questions above, "what can" asks something general and "what did" asks specific past events.</strong><br/>
                                                  <!-- <b style='color:DodgerBlue;'>(Modified) Question: What happened after Leon's brain-cancer diagnosis?</b> <br/>
                                                  Answer: ran<br/> -->
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What did Leon do before his brain-cancer diagnosis?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >school</span><br/>
                                                  <strong>Explanation: "School" is an event here because it is a period of time of one's life in this context. Note if the text is "since he graduated from high school", then "school" isn't an event anymore. This is similar to our "breakfast" example in the beginning.</strong><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What event had started before Leon's brain-cancer diagnosis?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >cancer, school</span><br/>
                                                  <strong>Explanation: "Cancer" is a valid answer for this question but not for the previous one because cancer isn't something that Leon can do <u>subjectively</u>.</strong><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What happened before Leon's brain-cancer diagnosis?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >school</span><br/>
                                                  <strong>Explanation: "Cancer" is a invalid again because the question says "happened before something", which implies that the answer event must had finished. The cancer was obviously still there at the time of diagnosis. Note in contrast, "happened after something" doesn't require the answer event to be finished.</strong><br/>
                                              </p>
                                          </div>
                                      </div>
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>Question: What happened since high school?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >ran</span><br/>
                                                  <strong>Explanation: "Cancer" and "diagnosis" are not necessarily after his high school. "Leon can still run" is a recurrent event that describes Leon's capability instead of something that really happened.</strong><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) Question: What happened before high school?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >no answer at all</span><br/>
                                                  ...
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-lg-4">
                                      <div class="card sticky-top">
                                          <div class="card-header">
                                              <h4>Example #4</h4>
                                          </div>
                                          <div class="card-body">
                                              <div class="card-text">
                                                  He usually <mark>eats</mark> a sandwich for breakfast before <mark>going</mark> to school, but he didn't <mark>wake</mark> up on time and he didn't <mark>have</mark> his breakfast.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-8">
                                      <div class="card mb-2">
                                          <div class="card-body">
                                              <p class="card-text">
                                                  <b style='color:DodgerBlue;'>[Question] What does he usually do before going to school?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >eats</span><br/>
                                                  <strong>Explanation: This question asks for repetitive events.</strong><br/>
                                                  <b style='color:Tomato;'>[Bad Question] What does he usually eat before going to school?</b> <br/>
                                                  <strong>Explanation: The answer to this question is "a sandwich" which isn't an event.</strong><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What does he usually do after going to school?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >no answer at all</span><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What did he not do before going to school?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >wake, have</span><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What did he do before going to school?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >no answer at all</span><br/>
                                                  <strong>Explanation: Remember "wake" and "have" are negated events but the question itself isn't asking for negated events.</strong><br/>
                                                  <b style='color:DodgerBlue;'>(Modified) [Question] What did he not do after going to school?</b> <br/>
                                                  <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >no answer at all</span><br/>
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col">
              <h2>It's great that you have made it here. A quick recap:</h2>

              <ol>
                  <li>Don't forget to label noun events; if there're multiple words in a noun event (e.g., snow storm), use the last word (e.g., storm).</li>
                  <li>Don't forget negative or uncertain events.</li>
<!--                  <li>If you're stuck in Step 1, try your best and move to Step 2 and see.</li>-->
                  <li>Make sure your question is about temporal relations.
<!--                      A sanity check is to see if you can modify it easily in Step 3.-->
                  </li>
                  <li>How to modify your questions:
                      <ul>
                          <li>
                              Switch between relations like before, after, during, since, etc.
                          </li>
                          <li>
                              Don't just ask "what happened"; think of "what started", "what stopped", and anything similar.
                          </li>
                          <li>
                              It's fine if the modified question has no answer in text.
                          </li>
                          <li>
                              Make sure the answer to your new question is different from that to your old question.
                          </li>
                      </ul>
                  </li>
<!--                  <li>Since we require a minimal number of questions for each hit, modifying your questions is actually making it easier to meet the requirement. If you exceed the minimal number, you will get bonuses.</li>-->
                  <li>Make sure you provide all the answers. Keep in mind that it's rare to have a lot of questions that only have one answer.
                  <li>Despite of all the details, the core is still question-answering. If you're not sure about the answer to a specific question, just ask yourself whether this QA pair sounds reasonable to you as an English speaker.</li>
<!--                  <li>You can provide feedback to us at the bottom of this page.</li>-->
              </ol>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'StepByStep',
  props: {
      max_bonus: Number,
      bonus_per_question: Number
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
