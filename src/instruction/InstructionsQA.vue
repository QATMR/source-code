<template>
    <div id="instruction-qa">
        <div class="row mb-4">
            <div class="col">
                <div class="card">
                    <a class="card-header" data-toggle="collapse" href="#collapseInstructionsQA" aria-expanded="true" aria-controls="collapseInstructionsQA">
                        <h4> How to judge an answer (click to collapse) </h4>
                    </a>
                    <div id="collapseInstructionsQA" class="collapse show">
                        <div class="card-body">
                            <div class="card-text">
                                <strong>This section was NOT explained in detail in the real task, so all please read it carefully.</strong>
                                <hr>
                                <strong>Now, you know how to label an event as a single word, and you also know what kind of questions we want. Then the next step in our *real* task is to answer these questions using those events. Here you don't have to answer them yourselves. We will show you a passage, a question, and a potential answer, and all you need to do is to judge if the answer is correct or not. There may be multiple answers to the question, but you only need to judge the one given to you.</strong><br/><br/>
                                <strong>The rule of thumb is to remember that this is a question-answering task. Although the rules that we are going to describe below are very natural in English, please still read it carefully as you may not realize all of them.</strong>
                                <ul>
                                    <li><span style="color:DodgerBlue">Put yourself at the time point when the sentence was written/spoken.</span> If you see a sentence saying "New York is welcoming the new year", then New York is welcoming *now*. If a question is "What is happening now?", then "welcoming" is a correct answer.</li>
                                    <li><span style="color:DodgerBlue">Only consider the information provided in the passage.</span> Do not imagine things. If a sentence says "The sun rose in the west yesterday", then take it true even if you don't believe it personally.</li>
<!--                                    <li><span style="color:DodgerBlue">Following the rule above, make sure you use *all* the information in the passage.</span> If a sentence says "'The sun rose from the west yesterday,' he lied.", then "trade" (as well as "resume") is now a correct answer to "what will happen in the future?"</li>-->
                                    <li><span style="color:DodgerBlue">Every question is implicitly from the stance of speaker of the passage you read, unless the question explicitly says "according to ..."</span> Stay alarmed when the speaker him/herself quotes someone else. When it's needed, you have to judge if the speaker agrees with what he/she quotes. If there's no obvious evidence of disagreement, you need to assume agreement.</li>
                                    <li><span style="color:DodgerBlue">Negative events.</span> If a sentence says "I didn't leave the room after seeing him", then "What didn't happen after I saw him?"--"leave"; however, if the question is "What happened after I saw him?", then "leave" is NOT a correct answer anymore.</li>
                                    <li><span style="color:DodgerBlue">Uncertain events.</span> If one says "he might have left the room", then "What might have happened?"--"left"; if the question is "What has happened?", then "left" is NOT a correct answer anymore.</li>
                                    <li><span style="color:DodgerBlue">Future events.</span> Nothing in the future can be guaranteed, so when answering questions about the future, we have to see what the speaker thinks. "Will" means according to the speaker, there's no uncertainty; If one says "The train will leave in 10 minutes", then we have to take it and "leave" is a correct answer to "What will happen?". Be careful when the speaker expresses uncertainty, for which you need to use the rule for uncertainty events above.</li>
<!--                                    <li>future events. If one says "The plane will leave in 10 minutes", then "what will happen in 10 minutes?" and "leave" is a correct answer. If one says "I called the police to report the body", then "what happened after I called the police?"&#45;&#45;report. But be careful though, if one says "I called the police to report the body. However, the line was busy.", then "what happened after I called the police?"&#45;&#45;(the line) was (busy) (here we say "was" because that's how we labeled the event).</li>-->
                                    <li><span style="color:DodgerBlue">Repetitive events.</span> If one sentence says "I jog every day", then "jog" is a correct answer to all the following questions: "What has happened so far?", "What will happen in the future?", and "What happens every day?". Repetitive events means those that can happen multiple times, either regularly or sporadically, and "jog" is an example.</li>
                                    <li><span style="color:DodgerBlue">A special note of "what (has) happened".</span> If a sentence says "The snow storm is causing interruptions", then "storm" is NOT a correct answer to "What has happened?". This is because "what has happened" implies the answer event has finished, while the snow storm hasn't finished. The same requirement also applies to questions like "what happened before something". In addition, "what happened after something A?" means this event started after A and finished before now. The requirement of having finished doesn't apply to questions like "what will happen".</li>
                                </ul>
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
        name: 'InstructionsOnQA',
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
    #instruction-qa {
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
