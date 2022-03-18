<template>
    <b-container>
            <b-row align-v="stretch">
                <b-col>
                    <b-card
                        title="My Tasks"
                        class="mt-4 mb-4 shadow"
                        bg-variant="darker"
                        text-variant="light"
                    >
                        <b-table
                            id="tasksTable"
                            ref="tasksTable"
                            class="text-center"
                            head-variant="dark"
                            sticky-header="800"
                            :items="getTasks"
                            :fields="fields"
                            striped
                            dark
                            hover
                        >
                            <template #cell(completed)="row">
                                <b-icon-check-square
                                    v-if="row.item.completed > 0"
                                    variant="success"
                                />
                            </template>
                        </b-table>
                    </b-card>
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
import {
    BIconCheckSquare,
} from 'bootstrap-vue';

export default {
    components: {
        BIconCheckSquare,
    },
    data() {
        return {
            fields: [
                'title',
                'date',
                'completed',
            ],
            value: null
        }
    },
    methods: {
        getTasks() {
            return this.$axios.get(`/api/tasks/`).then((resp) => {
                this.taskList = resp.data.map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        completed: item.completed,
                        date: item.created_at,
                    }
                })
                return this.taskList || []
            })
        },
        getTask() {
            return this.$axios.get(`/api/tasks/?id=${id}`).then((resp) => {
                this.taskDetail = resp.data.map((item) => {
                    return{
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        completed: item.completed,
                        date: item.created_at,
                    }
                })
            })
        },
    },
}
</script>