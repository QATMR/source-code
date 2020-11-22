<template>
    <div>
        <div class="row mb-4 mt-4">
            <div class="col">
                <div class="card">
                    <div class="collapse show">
                        <div class="card-body">
                            <div class="card-text">
                                <strong>This is the answer validation step. In this step, your job is to correct mistakes in the answer candidates given to you. You can add new answers or delete wrong answers in every question you see.</strong>
                                <hr>
                                <strong>Remember, you can only choose from the events given to you. The events you see here are already validated in the event validation step. It's likely that you still see some wrong events, but you don't need to correct them, and you only need to judge if the answers to each question are correct.</strong>
                                <hr>
                                <strong>Similar to what you have seen in the event validation step, for almost every passage, we know the gold answer to some of the answer candidates you see, and if your performance is unreasonably bad on these, we keep the right to reject your hits. The only goal is to avoid spammers, so don't worry if you are doing it carefully.</strong>
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
