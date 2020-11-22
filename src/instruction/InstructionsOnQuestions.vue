<template>
    <div id="instruction-questions">
        <div class="row mb-4">
            <div class="col">
                <div class="card">
                    <a class="card-header" data-toggle="collapse" href="#collapseInstructionsQuestions" aria-expanded="true" aria-controls="collapseInstructionsQuestions">
                        <h4> What is a question on temporal relation? (click to collapse) </h4>
                    </a>
                    <div id="collapseInstructionsQuestions" class="collapse show">
                        <div class="card-body">
                            <div class="card-text">
                                <strong>This section was NOT explained in detail in the real task, so all please read it carefully.</strong>
                                <hr>
                                <strong>A temporal relation describes the relation between two things with respect to time, e.g., something A {happens/starts/terminates/...} {immediately/shortly/usually/...} {before/after/during/...} something B. We can call this relation (A, type of relation, B) for convenience. See examples below.</strong><br/><br/>
                                <table>
                                    <tr>
                                        <th>Text</th>
                                        <th>A</th>
                                        <th>Type of Relation</th>
                                        <th>B</th>
                                        <th>(A, type of relation, B)</th>
                                    </tr>
                                    <tr>
                                        <td>I left the room after seeing him</td>
                                        <td>left</td>
                                        <td>after</td>
                                        <td>seeing</td>
                                        <td>(left, after, seeing)</td>
                                    </tr>
                                    <tr>
                                        <td>His leg was injured during a football game.</td>
                                        <td>injured</td>
                                        <td>during</td>
                                        <td>game</td>
                                        <td>(injured, during, game)</td>
                                    </tr>
                                    <tr>
                                        <td>The speech will start if every one is seated.</td>
                                        <td>speech</td>
                                        <td>start after</td>
                                        <td>seated</td>
                                        <td>(speech, start after, seated)</td>
                                    </tr>
                                    <tr>
                                        <td>I have been working here since 2011.</td>
                                        <td>working</td>
                                        <td>since</td>
                                        <td>2011</td>
                                        <td>(working, since, 2011)</td>
                                    </tr>
                                </table>
                                <br>
                                <strong><span style="color:Tomato">Then what do we mean by a "question about temporal relations"?</span> It means a question asking for A or B. That is (A, type of relation, ?) or (?, type of relation, B). One exception is that the answer must be an event, so if the answer to your question is "2011", then your question is not what we want. Following the examples above, please see these:</strong>

                                <table>
                                    <tr>
                                        <th>Relation: (A, type of relation, B)</th>
                                        <th>Question 1: (?, type of relation, B)</th>
                                        <th>Question 2: (A, type of relation, ?)</th>
                                    </tr>
                                    <tr>
                                        <td>(left, after, seeing)</td>
                                        <td>Q: What happened after I saw him? <br>A: left</td>
                                        <td>Q: What happened before I left the room? <br>A: seeing</td>
                                    </tr>
                                    <tr>
                                        <td>(injured, during, game)</td>
                                        <td>Q: What happened during the game? <br>A: injured</td>
                                        <td>Q: What was happening when his leg was injured? <br>A: game</td>
                                    </tr>
                                    <tr>
                                        <td>(speech, start after, seated)</td>
                                        <td>Q: What will start after everyone is seated? <br>A: speech</td>
                                        <td>Q: What should happen before the speech starts? <br>A: seated</td>
                                    </tr>
                                    <tr>
                                        <td>(working, since, 2011)</td>
                                        <td>Q: What has been happening since 2011? <br> A: working</td>
                                        <td>N/A</td>
                                    </tr>
                                </table>
                                <br/>
                                <strong><u>In short, we want gramatically correct questions that are about temporal relations and whose answers are events (we mark correct questions in blue and wrong questions in red for your convenience):</u></strong>
                                <strong>
                                    <ul>
                                        <li>Questions with gramatical errors are incorrect. Please mind the grammar (including tense). For instance, <span style="color:Tomato">"What happened in the future?" and "What will happen in the past?"</span> are incorrect.</li>
                                        <li>The answer to your question must be an event. For instance, <span style="color:Tomato">"When did I start working here?" and "Since when have I been working here?"</span> are both incorrect. This rule is very handy and can be applied to all the following mistakes:</li>
                                        <ul>
                                            <li>(A, ?, B) is NOT what we want. For instance, <span style="color:Tomato">"What is the relation between left and seeing?"</span> isn't correct.</li>
                                            <li>Some other questions are not querying a temporal relation at all. For instance, <span style="color:Tomato">"Who left the room?"</span> is obviously wrong. Tricky examples are <span style="color:Tomato">"Who left the room after seeing him?", "How was he injured during a game?", and "Where have I been working since 2011?"</span>, which have temporal relations in them, but what's being queried isn't an event, so they're wrong too. </li>
                                            <li>We don't want yes-no questions (e.g., <span style="color:Tomato">"Did I leave the room?"</span>).</li>
                                        </ul>
                                        <li>There're some special cases where your answer is an event, but still NOT what we want:</li>
                                        <ul>
                                            <li>We don't want alternative questions. For instance, <span style="color:Tomato">"Did I leave the room or stay in the room?"</span>. Although the answer is an event (i.e., "leave"), the question is still incorrect.</li>
                                            <li>We don't want questions asking for "causes". For instance, <span style="color:Tomato">"What caused his injury?" or "What led to his injury?"</span>. Although the answer is an event (i.e., "game"), the question is still incorrect (they're called "causal questions" instead of "temporal relation questions").</li>
                                        </ul>

                                        <li>Further restrictions to the scope of a correct question is allowed. For instance, instead of asking <span style="color:DodgerBlue">"What happened during the game?"</span>, one can also ask <span style="color:DodgerBlue">"What happened to his leg during the game?"</span>. Similarly, one can ask <span style="color:DodgerBlue">"What did I do after seeing him?"</span>, or even <span style="color:DodgerBlue">"What did he do after I saw him?"</span>, which is allowed although the last question doesn't have an answer in the original sentence.</li>
                                        <li>One can also add modifiers to a correct question. For instance, the following are all correct: <span style="color:DodgerBlue">"What *usually* happens after ...?", "What did *not* happen after ...?", "What *might* happen after ...?", "What *should have* happened but did not happen after ...?", and "*According to the spokesman*, what had happened before ...?"</span></li>
                                        <li>We don't have to use the word "happen". <span style="color:DodgerBlue">"What started after ...?", "What event began after ...?", "What event finished after ...?", "What event was ongoing during ...?" etc.</span> are all correct.</li>
                                    </ul>
                                </strong>
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
        name: 'InstructionsOnQuestions',
        props: {
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
    #instruction-questions {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        margin-top: 60px;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>
