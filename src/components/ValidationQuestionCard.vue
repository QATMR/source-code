<template>
    <div
        class="card mt-2 question-card"
        v-bind:class="{
            border: is_editing,
            'border-danger': is_editing,
            shadow: is_editing,
            'border-warning': this.question.is_default_question,
            'border-primary': !this.question.is_default_question
        }"
    >
        <div class="card-body">
            <p class="card-text small">
                <span v-if="is_editing">(Editing...)</span>
                <span style='color:DodgerBlue;'><strong>[Question] {{question.text}} </strong></span>
                <span style='color:red;' >[Answer] </span><span style='color:red; font-style: italic; border-bottom: thick solid rgb(0, 0, 255);' >{{answers_text_or_not_answered}}</span>
            </p>
            <div class="btn-group btn-group-sm" role="group" aria-label="move up and down">
                <button
                        class="btn btn-light btn-sm tooltip-big-text"
                        v-on:click="onPin"
                        data-balloon-pos="down"
                        pindata-balloon-length="fit"
                        aria-label="Pin the question to the top">
                    <i class="fas fa-thumbtack"></i>
                </button>
                <button
                        class="btn btn-light btn-sm tooltip-big-text"
                        v-on:click="onUp"
                        data-balloon-pos="down"
                        pindata-balloon-length="fit"
                        aria-label="Move this question card up"
                >
                    <i class="fas fa-arrow-up"></i>
                </button>
                <button
                        class="btn btn-light btn-sm mr-2 tooltip-big-text"
                        v-on:click="onDown"
                        data-balloon-pos="down"
                        pindata-balloon-length="fit"
                        aria-label="Move this question card down"
                >
                    <i class="fas fa-arrow-down"></i>
                </button>
            </div>


            <button
                    class="btn btn-warning btn-sm mr-2 tooltip-big-text"
                    v-if="!is_editing"
                    v-bind:class="{
                        'btn-warning': this.question.is_answered,
                        'btn-danger': !this.question.is_answered,
                    }"
                    v-on:click="onEdit"
                    data-toggle="tooltip"
                    :data-balloon-pos="edit_button_tooltip_loc"
                    :aria-label="edit_button_tooltip_text">
                <i class="fas fa-edit"> {{edit_question_text}} </i>
            </button>


        </div>
    </div>
</template>

<script>
    export default {
        name: 'QuestionCard',
        components: {

        },
        props: ['question', 'answer_text', 'is_editing'],

        mounted: function(){

        },

        computed: {

            edit_question_text: function(){
                if (this.question.is_answered){
                    return "Edit your answer";
                }else{
                    return "Answer this question";
                }
            },

            answers_text_or_not_answered: function(){
                return this.answer_text;

                // if (this.question.is_answered){
                //     return this.answer_text;
                // }else{
                //     // return "USE THE BUTTON BELOW TO ANSWER THIS WARM-UP QUESTION.";
                //     return "(Not answered yet; if there's no answer, press the red button below and save an empty answer)";
                // }
            },

            edit_button_tooltip_loc: function(){
                return this.question.is_default_question? "right":"down";
            },

            edit_button_tooltip_text: function(){
                let default_text = "This button is to edit this question and overwrite it.";
                if(this.question.is_default_question){
                    default_text += " This is a default question and you cannot delete it."
                }
                return default_text;
                // return this.question.is_default_question? "This button is to edit this question and overwrite it.":"down";
            },


        },

        methods: {

            onEdit: function(){
                this.$emit("edit");
            },

            onPin: function(){
                this.$emit("pin");
            },
            onUp: function(){
                this.$emit("up");
            },
            onDown: function(){
                this.$emit("down");
            },
        },
    }
</script>

<style>
</style>
