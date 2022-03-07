<template>
    <b-container>
        <b-row>
            <b-col cols="3">
                <b-calendar class="mt-4">
                </b-calendar>
            </b-col>
            <b-col>
                <b-card title="My Tasks" class="mt-4">
                    <b-table
                        id="tasksTable"
                        ref="tasksTable"
                        :items="getTasks"
                        :fields="fields"
                        striped
                        sticky-header="true"
                        head-variant="dark"
                        hover
                    >
                        <template #cell(completed)="row">
                            <b-icon-check-square
                                v-if="row.item.completed > 0"
                                variant="success"
                                class="align-middle"
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
                'description',
                'date',
                'completed',
            ],
        }
    },
    methods: {
        getTasks() {
            return this.$axios.get(`/api/tasks/`).then((resp) => {
                this.taskList = resp.data.map((item) => {
                    return {
                        title: item.title,
                        description: item.description,
                        completed: item.completed,
                        date: item.created_at,
                    }
                })
                return this.taskList || []
            })
        },
    },
}
</script>