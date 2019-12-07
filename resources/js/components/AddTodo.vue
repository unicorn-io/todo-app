<template>
    <div>
        <form @submit='addTodo'>
            <input type="text" v-model="text" name="text" placeholder="AddTodo...">
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';
export default {
    name: "AddTodo",
    data() {
        return {
            text: ""
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const t = this;
                axios.post('/todos', {text: text, finished: false})
                    .then(({data}) => {
                        t.todos.unshift(data);
                    });

            this.$emit('add-todo', newTodo);
            this.text= "";
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex:2;
    }
</style>