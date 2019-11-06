<template>
    <div class="col-5 p-2" :class="[background]">
        <h3 class="m-0">
            {{ option.n }}. {{ option.a }}
            <font-awesome-icon icon="check" class="float-right" v-if="option.c && result"/>
            <font-awesome-icon icon="times" class="float-right" v-if="!option.c && result"/>
        </h3>
    </div>
</template>

<script>
    export default {
        name: "TriviaOption",
        props: ['option', 'result'],
        computed: {
            background() {
                if (this.result) {
                    return this.option.c ? 'bg-green' : 'bg-red';
                } else {
                    return 'bg-green';
                }
            }
        }
    }
</script>

<style scoped>
    .bg-green {
        background-color: #00b8b0;
        border-radius: 5px;
    }

    .bg-red {
        background-color: #ff5959;
        border-radius: 5px;
    }
</style>