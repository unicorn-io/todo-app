<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.finished}">
        <p>
            <input type='checkbox' v-on:change='markComplete'>
            {{todo.text}}
            <button @click="$emit('del-todo', todo.id)" class="del">x</button>
        </p>
            
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.finished = !this.todo.finished;
        }
    }
}
</script>

<style scoped>
    .todo-item {
        background: #F4F4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-complete {
        text-decoration: line-through;
    }
    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>