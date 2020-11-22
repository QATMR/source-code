<template>
    <div class="container">

        <div class="row mb-4">
          <div class="col">
            <h1 class="text-center">Question-Answering on Temporal Relations</h1>
          </div>
        </div>


      <nav>
        <div class="nav nav-pills nav-fill" id="nav-tab" role="tablist">
          <a class="nav-item nav-link"
             v-on:click="switch_tab('overview')"
             v-bind:class="{
              'active': active_tab === 'overview'
             }"
          >Overview</a>

          <a class="nav-item nav-link"
             v-on:click="switch_tab('step-by-step')"
             v-bind:class="{
              'active': active_tab === 'step-by-step'
             }"
          >Step-by-step Examples</a>

          <a class="nav-item nav-link"
             v-on:click="switch_tab('payment')"
             v-bind:class="{
              'active': active_tab === 'payment'
             }"
          >Payment & Bonus</a>

          <a class="nav-item nav-link"
             v-on:click="switch_tab('working')"
             v-bind:class="{
              'active': active_tab === 'working'
             }"
          >Working Area</a>
        </div>
      </nav>

      <div v-if="active_tab === 'overview'">
        <overview></overview>
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <button
                    type="button"
                    class="btn btn-info btn-lg"
                    v-on:click="switch_tab('step-by-step'); focus_nav_tab();"
            >Read the step-by-step instructions</button>
          </div>
        </div>
      </div>

      <div v-if="active_tab === 'step-by-step'">
        <step-by-step v-bind:max_bonus="max_bonus" v-bind:bonus_per_question="bonus_per_question"></step-by-step>
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <button
                    type="button"
                    class="btn btn-info btn-lg"
                    v-on:click="switch_tab('payment'); focus_nav_tab();"
            >Learn how we pay bonus.</button>
          </div>
        </div>
      </div>

      <div v-if="active_tab === 'payment'">
        <payment v-bind:max_bonus="max_bonus" v-bind:bonus_per_question="bonus_per_question"></payment>
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <button
                    type="button"
                    class="btn btn-info btn-lg"
                    v-on:click="switch_tab('working'); focus_nav_tab();"
            >Start working now!</button>
          </div>
        </div>
      </div>


      <div v-if="show_tab_working">
        <div class="card mb-4">

          <!--Title infos-->
          <div class="card-header">
            <h2>Your working area</h2>
          </div>

          <!---->
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="card-body">
                  <div class="card-text">
                    <span style='color:Tomato;'>[WARNING] </span><strong>Refreshing this page will randomly reload *new* passages and you will also *lose* all your answers, but using the passage navigation buttons won't delete anything.</strong>
                  </div>
                  <div class="card-text">
                    <span style='color:DodgerBlue;'>[TIP 1] </span><strong>We put reminders as tooltips for many of the buttons below. Move your mouse above the question marks beside these buttons to see (if a pop-up instruction doesn't disappear, just click on any empty space).</strong>
                  </div>
                  <div class="card-text">
                    <span style='color:DodgerBlue;'>[TIP 2] </span><strong>If you are here, you must have worked on our qualification task. You may remember that we put more details about how to judge the validity of an event, a question, or an answer. It's highly recommended that you open that task <a target="_blank" href="https://qatmr-qualification.github.io/">here</a> in a new window and use it as a reference when you're not sure about certain rules.</strong>
                  </div>

                </div>
              </div>
              <div class="row">

                <!--Left panel for selecting events-->
                <div class="col-lg-4" style="z-index: 0">
                  <div class="card sticky-top">
                    <div class="card-header">
                      <h4
                              style="text-align: center"
                      >
                        <button
                                type="button"
                                class="btn btn-secondary"
                                style="float: left"
                                v-on:click="previous_passage"
                                data-balloon-pos="up"
                                data-balloon-length="large"
                                aria-label="You can move back and forth without losing your annotations. However, do not refresh this page using the refresh button of your browser."
                        ><i class="fas fa-chevron-left"></i></button>
                        <span
                                style="margin:0 auto; display: inline-block"
                        >
                          Passage {{staging.passage_id + 1}} / {{number_of_passages}}
                      </span>

                        <button
                                type="button"
                                class="btn btn-secondary"
                                style="float: right"
                                v-on:click="next_passage"
                                data-balloon-pos="up"
                                data-balloon-length="large"
                                aria-label="You don't need to use all passages if you can get enough good questions from some of them. If you do use more than one passage, please ask a similar number of questions per passage."
                        ><i class="fas fa-chevron-right"></i></button>
                      </h4>
                    </div>
                    <div class="card" v-if="staging.showing_qa_panel
                    && staging.current_question.text!==null
                    && staging.current_question.text!==undefined
                    && staging.current_question.text!==''">
                      <div class="card-body">
                        <p>
                          <strong>
                          <span style='color:DodgerBlue;'>[Question] {{staging.current_question.text}}</span>
                          </strong>
                        </p>
                      </div>
                    </div>
                    <div class="card-body passage-display-box">
                      <div class="card-text" v-if="data_loaded">
                        <div>
                          <div class="passage-text" v-on:mouseleave="invalidate_selection">
                          <span
                                  v-for="(char, index) in staging.passage"
                                  v-bind:key="char.index"
                                  v-on:mousedown="mousedown_text(index)"
                                  v-on:mouseup="mouseup_text(index)"
                                  v-on:mouseenter="mouseenter_text(index)"
                                  v-on:dblclick="double_clicked_text(index)"
                                  class="noselect"
                                  v-bind:class="{
                                    highlight: should_highlight(index),
                                    select_highlight: is_in_selection_highlight(index),
                                    is_selected_answer: is_selected_answer_highlight(index),
                                  }"
                          >{{char}}</span>
                          </div>
                          <!--  Make sure there is NO space between the actual data and the span tag. Otherwise it will mess up the display format.-->
                          <div class="spinner-border" role="status" v-if="!data_loaded">
                            <span class="sr-only"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="alert alert-danger fade show" role="alert" v-if="has_event_error">
                      <strong>{{event_selection_error_message}}</strong>
                    </div>

                    <div class="card-body">
                      <p v-if="!staging.showing_qa_panel">
                        <strong>
                          <span id="eventSelIns"><small>Double-click on single words (words connected by "-" are single) as events in the passage. <span style="color:Tomato">Only verbs or nouns, including "be" verbs, are qualified, but not all of them are events</span>; see <a href="https://qatmr-qualification.github.io/?tab=training-event" target="_blank">event instructions</a>.</small>
                        </span>
                        </strong>
                      </p>

                      <div
                              class="input-group mb-3"
                              v-if="!staging.showing_qa_panel"
                      >
                        <input
                                type="text"
                                class="form-control"
                                v-bind:value="display_selected_text"
                                placeholder="Event not selected"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2" disabled>
                        <div class="input-group-append">
                          <button
                                  class="btn btn-primary"
                                  type="button"
                                  v-on:click="add_event"
                                  :disabled="is_selection_empty"
                          >Add Event</button>
                        </div>
                        <div class="input-group-append">
                          <button
                                  class="btn btn-outline-danger"
                                  type="button"
                                  v-on:click="clear_selection(false)"
                                  data-balloon-pos="up"
                                  aria-label="Clear selection"
                          ><i class="fas fa-times"></i></button>
                        </div>
                      </div>

                      <button
                              type="button"
                              id="next_question-event"
                              class="btn btn-primary mt-4"
                              v-on:click="event_selection_button_clicked">
                        {{event_selection_button_text}}
                        <span
                              class="button-question-tooltip"
                              data-balloon-pos="up"
                              data-balloon-length="large"
                              :aria-label="event_selection_button_tooltip_text"
                        > ?
                        </span>
                      </button>

                      <div
                              v-if="!staging.showing_qa_panel"
                      >
                        <event-card class=""
                                    v-for="(event, idx) in sorted_staging_events"
                                    v-bind:key="idx"
                                    v-bind:value="event_text(event)"
                                    @delete="delete_event(event)"
                        >
                        </event-card>
                      </div>

                    </div>
                    <div class="card">
                      <div class="card-header"
                           v-bind:class="{
                            'bg-danger': !questions_created_satisfied || !questions_warmup_satisfied,
                            'bg-warning': questions_created_satisfied && questions_warmup_satisfied && !questions_modified_satisfied,
                            'bg-success': questions_created_satisfied && questions_modified_satisfied && questions_warmup_satisfied,
                          }"
                      >
                        <strong>Overall Progress on All Passages</strong>
                      </div>

                      <ul class="list-group list-group-flush">
                        <li class="list-group-item"
                            v-bind:class="{
                            'list-group-item-danger': !questions_created_satisfied,
                            'list-group-item-success': questions_created_satisfied,
                          }"
                        >
                          Questions created [required]: <span style="float: right">{{current.question_created}} / {{this.required_question_count}}</span>
                        </li>
                        <li class="list-group-item"
                            v-bind:class="{
                            'list-group-item-danger': !questions_warmup_satisfied,
                            'list-group-item-success': questions_warmup_satisfied,
                          }"
                        >
                          Warm-up questions [required]: <span style="float: right">{{current.default_question_answered_count}} / {{current.default_question_count}}</span>
                        </li>
                        <li class="list-group-item"
                            v-bind:class="{
                            'list-group-item-warning': !questions_modified_satisfied,
                            'list-group-item-success': questions_modified_satisfied,
                          }"
                        >
                          Questions modified [suggested]: <span style="float: right">{{current.question_modified}} / {{suggested_modified_question_count}}</span>
                        </li>
                        <li class="list-group-item"
                            v-bind:class="{
                            'list-group-item-light': !(questions_created_satisfied && questions_modified_satisfied && questions_warmup_satisfied),
                            'list-group-item-success': questions_created_satisfied && questions_modified_satisfied && questions_warmup_satisfied,
                          }"
                        >
                          Pay: <span style="float: right">${{pay_base_amount | currency}} + $ {{ pay_bonus_amount | currency}} = $ {{ pay_total_amount | currency}}</span>
                        </li>

                      </ul>
                    </div>
                    <div class="card">
                      <!--Submit button-->

                      <div class="row mb-4">
                        <div class="col text-center">
                          <button
                                  type="button"
                                  class="btn btn-info btn-sm"
                                  v-on:click="focus_feedback">
                            Give Us Feedback
                            <span
                                  class="button-question-tooltip"
                                  data-balloon-pos="down"
                                  data-balloon-length="large"
                                  aria-label="Type in the box below."
                            > ? </span>
                          </button>
                        </div>
                      </div>

                      <div class="row mb-4">
                        <div class="col text-center">
                          <button
                                  id="ready_submit"
                                  type="button"
                                  class="btn btn-secondary btn-sm"
                                  v-bind:class="{
                                  'btn-dark': !should_submit_enable,
                                  'btn-warning': should_submit_enable && !questions_modified_satisfied,
                                  'btn-success': should_submit_enable
                                }"
                                  v-on:click="check_before_submit"
                                  :disabled="!should_submit_enable">
                            {{submit_button_text}}
                            <span
                                    class="button-question-tooltip"
                                    data-balloon-pos="down"
                                    data-balloon-length="large"
                                    aria-label="When this button is yellow, you can still submit, but it's not suggested if you do this very often."
                            > ? </span>
                          </button>
                        </div>
                      </div>
                      <div class="alert alert-danger fade show" role="alert" v-if="has_submission_error">
                        <strong>{{submission_error_msg}}</strong>
                      </div>

                      <div class="row justify-content-center">
                        <form
                                name='mturk_form'
                                method='post'
                                id='mturk-external-submit-form'
                                v-bind:action="mturk_params.turkSubmitTo"
                                v-bind:class="{hidden: submission_not_ready}"
                        >
                          <input type='hidden' name='assignmentId' id='assignmentId' v-bind:value="mturk_params.assignmentId"/>
                          <input id="generated_answers" name="generated_answers" type="hidden" v-model="generated_answers">
                          <input id="generated_answers_event" name="generated_answers_event" type="hidden" v-model="generated_answers_event">
                          <!--<input type='submit' class="btn btn-success btn-sm" id='submitButton' name="submitButton" value='Click here to submit HIT'>-->
                        </form>
                      </div>
                    </div>
                  </div>

                </div>



                <!--Right panel for QA task-->
                <div class="col-lg-8" v-if="this.staging.showing_qa_panel">

                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h4>Write a question or modify an existing question</h4>
                          <div>
                            <small>We want gramatically correct questions that are about temporal relations and whose answers are events. See <a target="_blank" href="https://qatmr-qualification.github.io/?tab=training-question">question instructions</a>. </small>
                          </div>
                          <div><small>
                            Although not strictly enforced, please use the green "Derive New Question" button to modify at least half of your own questions (i.e., Step 3) according to the step-by-step instruction.
                          </small></div>
                          <input
                                  type="text"
                                  id="question-input"
                                  class="form-control"
                                  name="input-question"
                                  placeholder="Write a question here! The more you ask, the more bonus you will receive."
                                  v-model="staging.current_question.text"
                                  v-on:input="on_question_text_change"
                                  :disabled="staging.current_question.is_default_question"
                          >
                        </div>
                      </div>

                      <div class="alert alert-danger fade show" role="alert" v-if="has_qa_error">
                        <strong>{{qa_error_message}}</strong>
                      </div>


                      <div class="row mt-4">
                        <div class="col">
                          <h4>*All* valid answers from your event list</h4>
                          <small>
                          <ul>
                            <li>Double-click to select events in the passage and they will appear in the box below.</li>
                            <li>Answer your question from the time point when the passage was written.</li>
                            <li><span style="color:Tomato">Be careful of negative, hypothetical, and uncertain events (when you're not sure, check <a target="_blank" href="https://qatmr-qualification.github.io/?tab=training-qa">answer instructions</a>, and judge as an English speaker).</span></li>
                            <li><span style="color:Tomato">Spamming results in rejection of your hits. </span></li>
                          </ul>
                          </small>
                          <div
                                  class="input-group mb-3"
                          >
                            <input
                                    type="text"
                                    class="form-control"
                                    v-bind:value="display_selected_text"
                                    placeholder="Event not selected"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2" disabled>
                            <div class="input-group-append">
                              <button
                                      class="btn btn-primary"
                                      type="button"
                                      v-on:click="add_answer"
                                      :disabled="is_selection_empty">Add Answer
                                <span
                                        class="button-question-tooltip"
                                        data-balloon-pos="down"
                                        data-balloon-length="large"
                                        aria-label="Click to highlight your selected answer in text."
                                > ?
                                </span>
                              </button>
                            </div>
                            <div class="input-group-append">
                              <button
                                      class="btn btn-outline-danger"
                                      type="button"
                                      v-on:click="clear_selection(false)"
                                      data-balloon-pos="up"
                                      aria-label="Clear selection"
                              ><i class="fas fa-times"></i></button>
                            </div>
                          </div>

                          <!--<div class=""-->
                          <!--v-for="(event, idx) in staging.current_question.answers"-->
                          <!--v-bind:key="idx"-->
                          <!--&gt;-->


                          <!--</div>-->
                          <!--Show error messages-->
                          <div>

                          </div>

                          <button
                                  type="button"
                                  class="btn btn-primary mt-4"
                                  v-on:click="add_or_save_question">
                            <i class="fas fa-save"></i> {{save_question_button_text}}
                            <span
                                    class="button-question-tooltip"
                                    data-balloon-pos="right"
                                    data-balloon-length="large"
                                    aria-label="Click here to add your input in the above two boxes (i.e., question and answers). We will validate your answers manually; if you provide more reliable answers, you will receive extra bonus up to $50 (see details above). On the other hand, we will REJECT the hits from spammers."
                            > ?
                            </span>
                          </button>
                          <event-card class=""
                                      v-for="(event, idx) in sorted_staging_answers"
                                      v-bind:key="idx"
                                      v-bind:value="event_text(event)"
                                      @delete="delete_answer(event)"
                          >
                          </event-card>
                        </div>
                      </div>
                      <!--<div class="row"-->
                      <!--&gt;-->

                      <question-card
                              v-for="(q, idx) in sorted_questions"
                              v-bind:key="idx"
                              v-bind:question="q"
                              v-bind:answer_text="get_all_answer_surface_form(q)"
                              v-bind:is_editing="is_editing(q)"
                              @delete="delete_question(q)"
                              @edit="edit_question(q)"
                              @derive="derive_question(q)"

                              @pin="pin_to_top(q)"
                              @up="move_up(q)"
                              @down="move_down(q)"
                      ></question-card>
                      <!--</div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" >
          <div class="col" style="z-index: -1">
            <div class="card mb-4">
              <div class="card-header">
                <h3>
                  Please leave your feedback here
                </h3>
              </div>
              <div class="card-body">
                <div id="comment">
                <textarea
                        id="feedback-form"
                        rows="15"
                        class="form-control"
                        placeholder="Please leave your feedback here."
                        v-model="feedback">
                </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
import _ from "lodash"
import DataHandler from "./data_handler.js"
import QuestionCard from "./components/QuestionCard"
import EventCard from "./components/EventCard"
import Payment from "./components/Payment"
import Overview from "./components/Overview"
import StepByStep from "./components/StepByStep"

import Vue from 'vue'
import queryString from "query-string";

const question_keywords = ['before','after','since','when','until','earlier','later','while','during','meanwhile','meantime','in the future', 'in the past','what happens','start','begin','began','begun','end','stop'];
const default_questions = ['what has happened?', 'what happened?', 'what has happened so far?', 'what is happening?', 'what is happening now?', 'what is happening right now?', 'what will happen?', 'what will happen in the future?', 'what may happen in the future?', 'what may happen?', 'what might happen?', 'what might happen in the future?'];
const bad_question_keywords = [' causes', ' caused', ' cause', 'because ', ' lead to', ' led to', ' leads to'];

const number_of_passages = 4;
const required_question_count = 4;

export default {
  name: 'AnnotationInterface',
  components: {
    'question-card': QuestionCard,
    'event-card': EventCard,
    'payment': Payment,
    'overview': Overview,
    'step-by-step': StepByStep,
  },
  data: function(){
    return {

      /**
       *
       * Tab switching.
       *
       */
      active_tab: "overview",
      frozen: true,
      frozen_time: 3,
      seconds_remain: 180,

      required_question_count: required_question_count,
      number_of_passages: number_of_passages,
      max_bonus: 16.0,
      pay_base_amount: 8.0,
      bonus_per_question: 0.5,

      data_loaded: false, // Oneway flag.

      //We have methods that modify this data in an unwatched way, so HTML rendering should no reply
      // on anything from this object. Use render use staging object instead.
      annotations: {},

      /**
       * {
       *     passage_id: {
       *         events: [(0, 10), (56, 62)],
       *         questions: {
       *             qid: {
       *                    question_id,
       *                    isDefaultQuestion: true,
       *                    isAnswered: true,
       *                    answer: [(0, 10)],
       *                    text: []
       *                  }
       *         }
       *     }
       * }
       */

      // Current data displayed on interface.
      current: {
        selection_state: "none",
        selection: {
          start: -1,
          end: -1,
          current: -1,
        },

        selected_char_indices: {

        },


        selected_char_indices_for_answers: {

        },



        // Should never decrease.
        question_id_counter : 0,

        // faithful counter of how many question created. aka. should decrease when deleted.
        question_created: 0,

        question_modified: 0,

        // faithful counter of how many default question has been answered.
        default_question_count: 0,

        // How many default questions is created.
        default_question_answered_count: 0,
      },
/**
*      Staging data for current passage.
*/
      // Staged annotations.
      staging: {
        pinned_question_id: null,
        showing_qa_panel: false,
        passage_id: -1,
        passage: "",

        current_question: {
          _position: null,
          question_id: null,
          text: "",
          is_default_question: false,
          answers:{},
          question_is_derived_from: null,
        },

        events: {},
        questions: {},
        //   Example questions format.
        //   qid: {
        //      question_id: "",
        //      isDefaultQuestion: true,
        //      isAnswered: true,
        //      answer: [(0, 10)],
        //      text: ""
        //   }
      },

/**
 *      Misc data.
 */
      feedback: "",


      question_order_counter : 0,

/**
 *      Error reporting related data.
 */
      event_selection_error_message : "",
      has_event_error: false,

      qa_error_message : "",
      has_qa_error: false,

      submission_error_msg :"",
      has_submission_error:false,


/**
 *      Submission form control data.
 */
      submission_not_ready: true,
      generated_answers: "",
      generated_answers_event: "",

      mturk_params: {
        assignmentId: "",
        hitId: "",
        turkSubmitTo: "",
        workerId: "",
        isPreview: true,
      }
    };
  },

  mounted: async function(){
    // Parse the current query string.
    // console.log(location.search);
    const parsed_query_string = queryString.parse(location.search);
    // console.log(parsed_query_string);
    // console.log(parsed_query_string);

    const assignmentId = parsed_query_string.assignmentId;

    if (assignmentId === "ASSIGNMENT_ID_NOT_AVAILABLE"){
      console.log("Preview mode.");
      this.mturk_params.isPreview = true;
    }

    const hitId = parsed_query_string.hitId;
    const turkSubmitTo = parsed_query_string.turkSubmitTo;
    const workerId = parsed_query_string.workerId;

    this.mturk_params.turkSubmitTo = turkSubmitTo + "/mturk/externalSubmit";
    this.mturk_params.workerId = workerId;
    this.mturk_params.hitId = hitId;
    this.mturk_params.assignmentId = assignmentId;

    console.log(parsed_query_string.numPassage);

    this.pay_base_amount = 'basePay' in parsed_query_string ?  parseFloat(parsed_query_string.basePay): 8.0;
    this.required_question_count = "requiredQuestion" in parsed_query_string ? parseInt(parsed_query_string.requiredQuestion) : 16 ;
    this.number_of_passages = "numPassage" in parsed_query_string ? parseInt(parsed_query_string.numPassage) : 4 ;
    this.max_bonus = "maxBonus" in parsed_query_string ? parseFloat(parsed_query_string.maxBonus) : 4.0 ;
    this.bonus_per_question = "bonusPerQuestion" in parsed_query_string ? parseFloat(parsed_query_string.bonusPerQuestion) : 0.5 ;

    let data_url = 'https://crowdsourcing-raw-files.s3.amazonaws.com/QATMR-TE3-json/Platinum-only-sentences-long.json';
    if ("data_url" in parsed_query_string) {
      data_url = parsed_query_string.data_url;
    }

    const self = this;
    const passages = await DataHandler.fetchPassagesWithRetries(3, this.number_of_passages, data_url);
    console.log(passages);

    this.number_of_passages = passages.length;

    _.each(passages, (passage, idx) => {
      const real_passage_id = passage.passage_id;

      self.annotations[idx] = {
        passage: passage.passage,
        doc_id: passage.doc_id,
        sent_id: passage.sent_id,
        events: {},
        questions: {},
        passage_id: real_passage_id,
      };
    });

    this.data_loaded = true;
    this.stage_new_passage(0);

    // timer to release the submit button

    const update_remain_time_timer = setInterval(
            function(){
              self.seconds_remain -= 1;
              if (self.seconds_remain < 0){
                self.frozen = false;
                clearInterval(update_remain_time_timer);
              }
            }, 1000);

    // setTimeout(function(){
    //   }, 1000*60*self.frozen_time);



  },
  computed: {

    sorted_questions: function(){
        const self = this;
        return _.orderBy(this.staging.questions, function(q){
          if (q.question_id === self.staging.pinned_question_id){
            return -99999;
          }
          return -q._position;
        });
        // return [];
    },

    sorted_staging_events: function(){
      let ret = _.sortBy(Object.values(this.staging.events), [
        event => {
          return event.start;
        },
        event => {
          return event.end;
        }
      ]);
      return ret;
    },

    sorted_staging_answers: function(){
      let ret = _.sortBy(Object.values(this.staging.current_question.answers), [
      answer => {
      return answer.start;
      },
      answer => {
      return answer.end;
      }
      ]);
      return ret;
    },

    event_selection_button_text: function(){
      if (this.staging.showing_qa_panel){
        return "Edit Event Selection";
      }else{
        return "Finish Selection";
      }
    },

    event_selection_button_tooltip_text: function(){
      if (this.staging.showing_qa_panel){
        return "Click to add/delete your event selections.";
      }else{
        return "Click to highlight your event selections in text and then you can ask questions on the right panel.";
      }
    },

    save_question_button_text: function(){
      if (this.staging.current_question.question_id !== null){
        return "Save Question & Answer(s)";
      }

      if (this.staging.current_question.question_is_derived_from !== null){
        return "Add New Derived Question";
      }

      return "Add Question & Answer(s)";

    },


    /**
     * If the submit button should be disabled.
     *                               Questions created: <span style="float: right">{{current.question_created}} / {{this.required_question_count}}</span>
     *</li>
     **<li class="list-group-item">
     *    Default questions answered: <span style="float: right">{{current.default_question_answered_count}} / {{current.default_question_count}}</span>
     * @returns {boolean}
     */
    should_submit_enable: function(){
      if(this.frozen){
        return false;
      }
      return this.current.default_question_answered_count >= this.current.default_question_count && this.current.question_created >= this.required_question_count;
    },

    /**
     * If the Next passage button is disabled.
     * @returns {boolean}
     */
    next_passage_disabled: function(){
      return false;
    },


    /**
     * If the Previouse passage button is disabled.
     * @returns {boolean}
     */
    prev_passage_disabled: function(){
      return false;
    },

    /**
     * How many questions has the user created.
     * @returns {number}
     */

    pay_bonus_amount: function(){
      let total_bonus = Math.max(0, this.bonus_per_question * (this.current.question_created - this.required_question_count));
      return Math.min(total_bonus, this.max_bonus);
    },

    pay_total_amount: function(){
      return this.pay_bonus_amount + this.pay_base_amount;
    },

    /**
     * Display the current selection, if the current selection is too long, it will only show the first 19 chars.
     */
    display_selected_text: function(){
      if (this.current.selection.start >= 0 && this.current.selection.end >= 0){
        let surface = this.staging.passage.substring(this.current.selection.start, this.current.selection.end+1);
        if (surface.length > 20){
          return surface.substring(0, 19) + " ...";
        }
        return surface;
      }else{
        return "";
      }
    },

    is_selection_empty: function(){
      return (this.current.selection.start === -1) || (this.current.selection.end === -1);
    },

    show_tab_instruction: function(){
      return this.active_tab === "instruction";
    },

    show_tab_working: function(){
      return this.active_tab === "working";
    },

    submit_button_text: function(){
      if(!this.frozen){
        return "Submit Response on All Passages";
      }
      return "Submit (enables in "+this.seconds_remain+" seconds)";
    },

    suggested_modified_question_count: function(){
      return Math.ceil(this.required_question_count/3);
    },

    questions_created_satisfied: function(){
      return this.current.question_created >= this.required_question_count;
    },

    questions_warmup_satisfied: function(){
      return this.current.default_question_answered_count >= this.current.default_question_count;
    },

    questions_modified_satisfied: function () {
      return this.current.question_modified >= this.suggested_modified_question_count;
    }

  },

  methods: {
    switch_tab: function(tab){
      this.active_tab = tab;
    },
    focus_nav_tab: function(){
      document.getElementById('nav-tab').scrollIntoView();
    },
    /**
     *
     * Functions that handles error messages.
     *
     */

    hide_event_error: function(){
      this.has_event_error = false;
    },

    hide_qa_error: function(){
      this.has_qa_error=false;
    },

    hide_submission_error: function(){
      this.has_submission_error=false;
    },

    show_event_error: function(msg){
      this.event_selection_error_message = msg;
      this.has_event_error = true;
    },

    show_qa_error: function(msg){
      this.qa_error_message = msg;
      this.has_qa_error=true;
    },

    show_submission_error: function(msg){
      this.submission_error_msg = msg;
      this.has_submission_error=true;
    },
    /**
     *
     * Highlight related functions
     *
     */

    reset_highlight_map: function(){
      for (let i = 0; i < this.staging.passage.length; i++) {
        Vue.set(this.current.selected_char_indices, i, false);
        Vue.set(this.current.selected_char_indices_for_answers, i, false);
      }
    },


    /**
     *
     * Functions for handling event selections.
     *
     */
    event_text: function(event){
      return this.staging.passage.substring(event.start, event.end+1);
    },

    is_event_text_single_token: function(){
      let start = this.current.selection.start;
      let end = this.current.selection.end;

      if(this.staging.passage.substring(start, end+1).trim().includes(" ")){
        return false;
      }

      return true;
    },

    can_add_event: function(){
      let start = this.current.selection.start;
      let end = this.current.selection.end;
      let surface = this.staging.passage.substring(start, end+1).trim();
      if(surface.length === 0){
        this.show_event_error("The is event empty.");
        return false;
      }

      if(!this.is_event_text_single_token()){
        this.show_event_error("The correct event should be a single word");
        return false;
      }

      // By design, we cannot add any duplicated events as answers to the same questinos.
      // So we don't have to check for this case.
      // if(this.is_answer_duplicated()){
      //   this.show_qa_error("This answer is duplicated!");
      //   return false;
      // }

      this.hide_event_error();
      return true;
    },

    trim_start_end_to_nearest_space: function(){
      const old_start = this.current.selection.start;
      const old_end = this.current.selection.end;

      if (old_start === -1 || old_end === -1){
        return;
      }

      let new_start = old_start;
      let new_end = old_end;

      for(let i = old_start; i <= old_end; i++){
          if (this.staging.passage.charAt(i) !== " "){
            new_start = i;
            break;
          }
      }

      for(let i = old_end; i >= old_start; i--){
          if (this.staging.passage.charAt(i) !== " "){
            new_end = i;
            break;
          }
      }

      this.current.selection.start = new_start;
      this.current.selection.end = new_end;
    },

    add_event: function(){

      this.trim_start_end_to_nearest_space();

      let start = this.current.selection.start;
      let end = this.current.selection.end;
      let event_key = start + "_" + end;

      const event = {start, end, key: event_key};

      if (!this.can_add_event(event)){
          return false;
      }

      const existing_event_count = Object.keys(this.staging.events).length;
      
      Vue.set(this.staging.events, event_key, event);
      this.current.selection.start = -1;
      this.current.selection.end = -1;
      this.current.selection.current = -1;
      this.current.selection.state = "none";

      const updated_event_count = Object.keys(this.staging.events).length;

      const has_update = updated_event_count > existing_event_count;

      if (has_update) {
        if(updated_event_count === 1){
          this.add_default_questions_to_passage();
        }
      }

      // only add default questions when we have events annotated

      return true;
    },

    add_default_questions_to_passage: function(){
      let passage_id = this.staging.passage_id;
      let default_q0 =  {
        question_id: passage_id + "-question-d0",
        is_default_question: true,
        question_is_derived_from: null,
        is_answered: false,
        answers: {},
        text: "What event has already finished?",
        _position: this.get_new_question_order_counter()
      };

      let default_q1 =  {
        question_id: passage_id + "-question-d1",
        is_default_question: true,
        question_is_derived_from: null,
        is_answered: false,
        answers: {},
        text: "What event has begun but has not finished?",
        _position: this.get_new_question_order_counter()
      };

      let default_q2 =  {
        question_id: passage_id + "-question-d2",
        is_default_question: true,
        question_is_derived_from: null,
        is_answered: false,
        answers: {},
        text: "What will happen in the future?",
        _position: this.get_new_question_order_counter()
      };
      Vue.set(this.staging.questions, passage_id + "-question-d0", default_q0);
      Vue.set(this.staging.questions, passage_id + "-question-d1", default_q1);
      Vue.set(this.staging.questions, passage_id + "-question-d2", default_q2);
      this.current.default_question_count += 3;
    },

    delete_event: function(event){
      this.$delete(this.staging.events, event.key);
      if(Object.keys(this.staging.events).length===0){
        this.remove_default_questions_in_passage();
      }
    },

    remove_default_questions_in_passage: function(){
      let passage_id = this.staging.passage_id;
      Vue.delete(this.staging.questions,passage_id + "-question-d0");
      Vue.delete(this.staging.questions,passage_id + "-question-d1");
      Vue.delete(this.staging.questions,passage_id + "-question-d2");
      this.current.default_question_count -= 3;
    },

    should_highlight: function(index){
      return this.current.selected_char_indices[index] === true;
    },


    do_highlight_all_event_selection: function(){
      for (const key in this.staging.events){
        const event = this.staging.events[key];
        for(let i = event.start; i <= event.end; i++){
          Vue.set(this.current.selected_char_indices, i, true);
        }
      }
    },


    event_selection_button_clicked(){

      this.clear_selection();

      if(!this.staging.showing_qa_panel){
        // Currently not showing QA panel.
        // this.add_event();
        this.do_highlight_all_event_selection();
      }else{
        for(let i = 0; i <= this.staging.passage.length; i++){
          Vue.set(this.current.selected_char_indices, i, false);
        }
      }
      this.staging.showing_qa_panel = !this.staging.showing_qa_panel;
    },



    /**
     *
     *
     * Functions for modifying current answers.
     *
     *
     */

    is_answer_not_event: function(){
      let start = this.current.selection.start;
      let end = this.current.selection.end;
      let event_key = start + "_" + end;

      if (!this.staging.events.hasOwnProperty(event_key)){
        return true;
      }

      return false;
    },

    can_add_answer: function(event){
      if(event.start === -1 || event.end === -1){
        this.show_qa_error("The answer cannot be empty!");
        return false;
      }

      if (this.staging.current_question.text.length === 0){
        this.show_qa_error("This question is empty");
        return false;
      }


      // By design, we cannot add any duplicated events as answers to the same questinos.
      // So we don't have to check for this case.
      // if(this.is_answer_duplicated()){
      //   this.show_qa_error("This answer is duplicated!");
      //   return false;
      // }

      if(this.is_answer_not_event()){
        this.show_qa_error("Choose an answer from highlighted events! If you're sure of your answer, you can first add it to the event list by clicking the 'Edit Event Selection' button on the left!");
        return false;
      }

      this.hide_qa_error();
      return true;
    },

    add_answer: function(){

      this.trim_start_end_to_nearest_space();

      let start = this.current.selection.start;
      let end = this.current.selection.end;
      let event_key = start + "_" + end;

      const event = {start, end, key: event_key};

      if (!this.can_add_answer(event)){
        return false;
      }


      if(this.can_add_answer(event)){
        let start = this.current.selection.start;
        let end = this.current.selection.end;
        let event_key = start + "_" + end;
        const event = {start, end, key: event_key};
        console.log(event_key);
        Vue.set(this.staging.current_question.answers, event_key, event);
	console.log(this.staging.current_question.answers)
        console.log("Updating highlight map.");
        // Highlight the spans.
        for(let i = start; i <= end; i++){
          Vue.set(this.current.selected_char_indices_for_answers, i, true);
        }
      }else{
        console.log("Cannot add answer.");
      }
    },

    delete_answer: function(event){
      this.$delete(this.staging.current_question.answers, event.key);
      for(let i = event.start; i <= event.end; i++){
        Vue.set(this.current.selected_char_indices_for_answers, i, false);
      }
    },

    is_selected_answer_highlight: function(idx){
      return this.current.selected_char_indices_for_answers[idx] === true;
    },

    highlight_selected_answer: function(start, end){
      for(let i = start; i <= end; i++){
        Vue.set(this.current.selected_char_indices_for_answers, i, true);
      }
    },


    /**
     */

    is_question_suspicious: function(){
      let trimmedQuestion = this.staging.current_question.text.toLowerCase();
      // must not include the following words
      for (let id in bad_question_keywords){
        const keyword = bad_question_keywords[id];
        if (trimmedQuestion.includes(keyword)){
          return true;
        }
      }

      // must not be one of the default questions
      for (let id in default_questions){
        const keyword = default_questions[id];
        if (trimmedQuestion.includes(keyword)){
          return true;
        }
      }

      // must ends with ?
      // if(!trimmedQuestion.endsWith('?'))
      //   return true;

      // must include one or more of the following words
      for (let id in question_keywords){
        const keyword = question_keywords[id];
        if (trimmedQuestion.includes(keyword)){
          return false;
        }
      }

      return true;

    },

    on_question_text_change: function(){
      if(this.is_question_suspicious()){
       this.show_qa_error("This question is suspicious and fails to pass our auto-checker! You can still add it if you're sure.");
      }else{
        if (!this.staging.current_question.text.endsWith("?")){
          this.show_qa_error('You may forget to put "?" at the end of the question.');
        }else{
          this.hide_qa_error();
        }

      }
    },
    /**
     *
     * Save current question to staging area. This should update the question cards.
     *
     */

    current_question_is_duplicated: function(){
      for(const key in this.staging.questions){
        if (key === this.staging.current_question.question_id){
          // We are editing the existing question, we don't have to check it with the existing one.
          continue;
        }
        const question = this.staging.questions[key];
        if (this.staging.current_question.text === question.text){
          return true;
        }
      }
      return false;
    },

    can_add_question: function(){
      if (this.staging.current_question.text.length === 0){
        this.show_qa_error("This question is empty");
        return false;
      }

      if(this.current_question_is_duplicated()){
        this.show_qa_error("This question is the same as an existing one!");
        return false;
      }

      /**
       * Check for duplicated questions.
       */


      this.hide_qa_error();
      return true;
    },

    get_new_question_id: function(){
      const ret = this.current.question_id_counter;
      this.current.question_id_counter = this.current.question_id_counter + 1;
      return this.staging.passage_id + "-question-" + ret;
    },

    add_or_save_question: function(){
      if(this.can_add_question()){
          let question_id = this.staging.current_question.question_id;
          let is_new_question = false;

          if (question_id === null){
            question_id = this.get_new_question_id();
            is_new_question = true;
          }

          const _position = this.staging.current_question._position === null ? this.get_new_question_order_counter() : this.staging.current_question._position;

          if (this.staging.current_question.is_default_question && !this.staging.current_question.is_answered){
            this.current.default_question_answered_count = this.current.default_question_answered_count + 1;
          }

          Vue.set(this.staging.questions, question_id, {
            question_id: question_id,
            is_default_question: this.staging.current_question.is_default_question,
            is_answered: true,
            answers: _.cloneDeep(this.staging.current_question.answers),
            text: this.staging.current_question.text,
            question_is_derived_from: this.staging.current_question.question_is_derived_from,
            _position: _position
          });

          if (is_new_question){
            this.current.question_created = this.current.question_created + 1;
            if(this.staging.current_question.question_is_derived_from !== null){
              this.current.question_modified += 1;
            }
          }

        // Now we reset the working questions.
        this.staging.current_question.text = "";
        this.staging.current_question.is_default_question = false;
        this.staging.current_question._position = null;
        this.staging.current_question.question_id = null;
        this.staging.current_question.question_is_derived_from = null;
        this.staging.current_question.answers = {};
        this.clear_current_answer_highlight();

      }else{
        console.log("Cannot add question.");
      }
    },

    clear_current_answer_highlight: function(){
        for(let i = 0; i <= this.staging.passage.length; i++){
          Vue.set(this.current.selected_char_indices_for_answers, i, false);
        }
    },

    /**
     *
     * Handlers for buttons on question cards.
     *
     */
    delete_question: function(question){
      const question_id = question.question_id;

      this.$delete(this.staging.questions, question_id);
      this.current.question_created = this.current.question_created - 1;
      if(question.question_is_derived_from !== null){
        this.current.question_modified -= 1;
      }
    },

    derive_question: function(question){
      this.clear_current_answer_highlight();

      const question_id = question.question_id;

      this.staging.current_question.question_id = null;
      this.staging.current_question.text = question.text;
      this.staging.current_question.is_default_question = question.is_default_question;
      this.staging.current_question.question_is_derived_from = question_id;
      this.staging.current_question.answers = {};
      this.staging.current_question._position = null;
      this.staging.current_question.is_answered = question.is_answered;

      Vue.nextTick(function(){
        document.getElementById("question-input").focus();
      });
    },

    edit_question: function(question){
      this.clear_current_answer_highlight();

      const question_id = question.question_id;

      this.staging.current_question.question_id = question_id;
      this.staging.current_question.text = question.text;
      this.staging.current_question.is_default_question = question.is_default_question;
      this.staging.current_question.question_is_derived_from = question.question_is_derived_from;
      this.staging.current_question.answers = _.cloneDeep(question.answers);
      this.staging.current_question._position = question._position;
      this.staging.current_question.is_answered = question.is_answered;

      for (const key in question.answers){
        const event = question.answers[key];
        this.highlight_selected_answer(event.start, event.end);
      }

      Vue.nextTick(function(){
        document.getElementById("question-input").focus();
      });
    },

    is_editing: function(question){
      return this.staging.current_question.question_id === question.question_id;
    },

    pin_to_top: function(question){
      const current_pos = question._position;

      let poss = _.map(this.staging.questions, (q) => {return q._position}).sort().reverse();
      let current_top_question = poss[0];


      let pos_transfer_map = {};

      for (let i = 0; i < poss.length; i++) {
        const pos = poss[i];
        if (pos === current_pos){
          pos_transfer_map[pos] = current_top_question;
          break;
        }
        // Since i can never by the last index, we can safely access i-1;
        const new_pos = poss[i+1];
        pos_transfer_map[pos] = new_pos;
      }

      for (const qid in this.staging.questions) {
        const q2 = this.staging.questions[qid];
        if(q2._position in pos_transfer_map){
          q2._position = pos_transfer_map[q2._position];
        }
      }


    },

    move_up: function(question){
      // const current_pos = question._position;
      // let current_top_question = _.maxBy(this.staging.questions, function(q){return q._position});
      // let poss = _.map(this.staging.questions, (q) => {return q._position}).sort();

      const current_pos = question._position;
      let next_big_pos = null;
      let next_big_question = null;

      for (const qid in this.staging.questions){
        const q2 = this.staging.questions[qid];
        const p = q2._position;
        if (p > current_pos){
          if (next_big_pos === null || p < next_big_pos){
            next_big_pos = p;
            next_big_question = q2;
          }
        }
      }

      if (next_big_pos !== null){
        question._position = next_big_pos;
        next_big_question._position = current_pos;
      }


    },

    move_down: function(question){
      const current_pos = question._position;
      let next_small_pos = null;
      let next_small_question = null;

      for (const qid in this.staging.questions){
        const q2 = this.staging.questions[qid];
        const p = q2._position;
        if (p < current_pos){
          if (next_small_pos === null || p > next_small_pos){
            next_small_pos = p;
            next_small_question = q2;
          }
        }
      }

      if (next_small_pos !== null){
        question._position = next_small_pos;
        next_small_question._position = current_pos;
      }
    },

    /**
     * Functions that help question card display.
     */
    get_all_answer_surface_form: function(question){
      const answers = question.answers;
      if (Object.keys(answers).length === 0){
        return "(The answer is intentionally left empty)"
      }else{

        let answers_surface = [];

        for(const key in answers){
          const answer = answers[key];
          answers_surface.push(
                  this.staging.passage.substring(answer.start, answer.end+1)
          );
        }


        return _.join(answers_surface, ', ');
      }
    },

    /**
     * Submit user annotations to server.
     */

    can_submit_fast_check: function(){

      if(this.current.question_created < this.required_question_count){
        this.show_submission_error(`You have created only ${this.current.question_created} questions, which is less than the required ${this.required_question_count}. (Default questions do not count)`);
        return false;
      }

      if(this.current.default_question_answered_count < this.current.default_question_count){
        const diff = this.current.default_question_count - this.current.default_question_answered_count;
        this.show_submission_error(`You have ${diff} warm-up questions unanswered, you must answer all of them.`);
        return false;
      }

      return true;
    },

    create_submission_object: function(){
      let pass_check = true;

      let generated_events = {};
      let generated_qas = {
        feedback: this.feedback,
        mTurkAssignmentId: this.mturk_params.assignmentId,
      };

      // Do another check to make sure we have enough data to submit.
      let default_question_answered_count = 0;
      let question_count = 0;

      for (const key in this.annotations){
        const passage = this.annotations[key];

        const passage_id = passage.passage_id;
        const passage_text = passage.passage;

        const event_response = {
          answer: {
            spans: [],
            indices: [],
          },
          passageID: passage_id,
        };


        const annotated_events = passage.events;
        const annotated_qas = passage.questions;

        for(const qkey in annotated_qas){
          const question = annotated_qas[qkey];

          if (!question.is_answered){
            pass_check = false;
          }

          if (question.is_default_question){
            if (question.is_answered){
              default_question_answered_count++;
            }
          }else{
            question_count++;
          }

          const question_annotation = {
            question: question.text,
            answer: {
              spans: [],
              indices: [],
            },
            passageID: passage_id,
            question_id: question.question_id,
            isAnswered: question.is_answered,
            is_default_question: question.is_default_question,
            derived_from: question.question_is_derived_from,
          };

          for(const ekey in question.answers){
            const event = question.answers[ekey];
            question_annotation.answer.indices.push(`(${event.start},${event.end+1})`);
            question_annotation.answer.spans.push(passage_text.substring(event.start, event.end+1));
          }

          generated_qas[qkey] = question_annotation;
        }

        for(const ekey in annotated_events){
          const event = annotated_events[ekey];
          event_response.answer.indices.push(`(${event.start},${event.end+1})`);
          event_response.answer.spans.push(passage_text.substring(event.start, event.end+1));
        }

        const event_key = key + "-allEvents";
        generated_events[event_key] = event_response;
        // question_id: passage_id + "-question-d1",
        // is_default_question: true,
        // question_is_derived_from: null,
        // is_answered: false,
        // answers: {},
        // text: "What is happening?",
      }

      if (default_question_answered_count < 12){
        console.log("default_question_answered_count : ", default_question_answered_count)
      }

      if (question_count < this.required_question_count){
        console.log("question_count : ", question_count )
      }

      if (pass_check) {
        console.log("Passed check, ready to submit now.");
        this.generated_answers = JSON.stringify(generated_qas);
        this.generated_answers_event = JSON.stringify(generated_events);
        this.submission_not_ready = false;

        this.hide_submission_error();

        Vue.nextTick(function () {
          document.getElementById('mturk-external-submit-form').submit();
        });

        console.log(this.generated_answers);
        console.log(this.generated_answers_event);
      }else{
        console.log("Check not passed.");
        this.show_submission_error(`You may have unanswered questions.`);
      }
    },

    check_before_submit: function(){
      console.log(this.annotations);
      console.log(this.feedback);

      if(this.can_submit_fast_check()){
          this.create_submission_object();
      }

    },

    focus_feedback: function(){
      document.getElementById("feedback-form").focus();
    },

    /**
     *
     * Functions for handling passage switching.
     *
     */

    previous_passage: function(){
      // const passage_id = Math.max(this.staging.passage_id-1, 0);
      const total_num_of_passages = Object.keys(this.annotations).length;
      const passage_id = (this.staging.passage_id - 1 + total_num_of_passages) % total_num_of_passages;

      if (passage_id === this.staging.passage_id){
        return;
      }

      this.save_staged_passage();
      this.stage_new_passage(passage_id);
    },

    next_passage: function(){

      // const passage_id = Math.min(this.staging.passage_id+1, Object.keys(this.annotations).length - 1);
      const passage_id = (this.staging.passage_id+1) % Object.keys(this.annotations).length;

      if (passage_id === this.staging.passage_id){
        return;
      }

      this.save_staged_passage();
      this.stage_new_passage(passage_id);
    },


    stage_new_passage: function(passage_id){
      this.clear_selection();
      this.reset_highlight_map();
      this.staging.passage_id = passage_id;
      const annotation = this.annotations[passage_id];
      const has_events = Object.keys(annotation.events).length > 0;

      this.staging.passage = annotation.passage;
      this.staging.questions = annotation.questions;
      this.staging.events = annotation.events;

      if(has_events){
        this.staging.showing_qa_panel = true;
        this.do_highlight_all_event_selection();
      }else{
        this.staging.showing_qa_panel = false;
      }

    },
    /**
     * Save whatever user has changed.
     */
    save_staged_passage: function(){
      const existing_annotation = this.annotations[this.staging.passage_id];
      existing_annotation.events = this.staging.events;
      existing_annotation.questions = this.staging.questions;
    },

    /*************************************************************************************
     *
     * Below methods are used to handling span selections.
     *
     ************************************************************************************/

    mousedown_text: function(index){
      this.current.selection.start = index;
      this.current.selection.state = "selecting";
    },

    mouseup_text: function(index){
      this.current.selection.end = index;
      this.current.selection.state = "none";
      let _start = Math.min(this.current.selection.start, this.current.selection.end);
      let _end = Math.max(this.current.selection.start, this.current.selection.end);
      this.current.selection.start = _start;
      this.current.selection.end = _end;
    },

    mouseenter_text: function(index){
      this.current.selection.current = index;
    },

    /**
     * invalidate the current selection, this happens when mouse moved out of the selection scope.
     */
    invalidate_selection: function(){
      if (this.current.selection.state !== "none"){
        this.clear_selection();
      }

    },

    /**
     * Should the current char be highlighted as part of the selection process?
     */
    is_in_selection_highlight: function(idx){
      if(this.current.selection.state === "selecting"){
          return (idx >= Math.min(this.current.selection.current, this.current.selection.start)) && (idx <= Math.max(this.current.selection.current, this.current.selection.start))
      }

      if(this.current.selection.state === "none"){
        return (idx >= this.current.selection.start) && (idx <= this.current.selection.end);
      }

      return false;

    },
    /**
     * When double click on a char, it automatically expand to the entire word.
     */
    double_clicked_text: function(index){
      function shouldStop(char){
        return char === " " || char === "." ||
                char === "," || char === "?" ||
                char === "'" || char === '"' ||
                char === "!" || char === ";" ||
                char === ":"
                ;
      }
      let end = this.staging.passage.length - 1;
      for (let i = index; i < this.staging.passage.length; i++){
        if(shouldStop(this.staging.passage[i])){
          end = i - 1;
          break;
        }
      }

      let start = 0;
      for (let i = index; i > 0; i--){
        if(shouldStop(this.staging.passage[i])){
          start = i + 1;
          break;
        }
      }
      this.current.selection.start = start;
      this.current.selection.end = end;
    },

    clear_selection: function(remove_question = true){
      this.current.selection.state = "none";
      this.current.selection.start = -1;
      this.current.selection.end = -1;
      this.current.selection.current = -1;

      if (remove_question) {
        this.staging.current_question._position = null;
        this.staging.current_question.answers = {};
        this.staging.current_question.is_default_question = false;
        this.staging.current_question.question_id = null;
        this.staging.current_question.question_is_derived_from = null;
        this.staging.current_question.text = "";  
      }
      
    },

    get_new_question_order_counter: function(){
        let ret = this.question_order_counter;
        this.question_order_counter += 1;
        return ret;
    }

  },

  /**
   * For display formatting.
   */
  filters: {
    currency: function(value){
      return value.toFixed(2);
    }
  },

}
</script>

<style>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Opera and Firefox */
}

.passage-display-box span.highlight{
  background: yellow;
}

.passage-display-box .passage-text span{
  cursor: text
}
/*.passage-display-box span:hover{*/
  /*background: lightskyblue;*/
/*}*/

.passage-display-box span.select_highlight{
  background: lightskyblue;
}

form.hidden {
  display: none;
}

.passage-display-box span.is_selected_answer{
  color: red;
  font-style: italic;
  border-bottom: thick solid rgb(0, 0, 255);
}

div.inline_div{
  display: inline;
}

.flip-list-move {
  transition: transform 1s;
}
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
.button-question-tooltip{
  width: 1.5em;
  height: 1.5em;

  font-size: small;
  color: #CCC;
  text-shadow: 1px #CCC;

  border: 1px solid #CCC;
  border-radius: 25px;
  box-shadow: 0.1em #CCC;

  display: inline-block;
}
</style>
