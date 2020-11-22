<template>
    <div class="card">
        <div class="card-body">
            <p class="card-text">
                {{value}} &nbsp;
                <a
                        class="card-link text-danger"
                        style="cursor: pointer"
                        v-on:click="onDelete"
                >
                    <i class="fas fa-trash-alt"></i>
                </a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventCard',
        props: ['value'],
        computed: {
        },
        methods: {
            onDelete: function(){
                this.$emit("delete");
            },
        },
    }
</script>

<style>
</style>
