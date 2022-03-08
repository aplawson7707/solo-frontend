<template>
    <b-container>
        <b-row>
            <b-col cols="4">
                <b-card class="mt-4 text-center">
                    <b-calendar v-model="value" value-as-date locale="en">
                        <div class="d-flex" dir="ltr">
                            <b-button
                                size="sm"
                                variant="outline-danger"
                                v-if="value"
                                @click="clearDate"
                            >
                                Clear Date
                            </b-button>
                            
                            <b-button
                                size="sm"
                                variant="outline-primary"
                                class="ml-auto"
                                @click="setToday"
                            >
                                Set Today
                            </b-button>
                        </div>
                    </b-calendar>
                </b-card>
            </b-col>
            <b-col>
                <b-card title="My Tasks" class="mt-4">
                    <b-table
                        id="tasksTable"
                        ref="tasksTable"
                        class="text-center"
                        head-variant="dark"
                        sticky-header="true"
                        :items="getTasks"
                        :fields="fields"
                        striped
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
        setToday() {
            const now = new Date()
            this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        },
        clearDate() {
            this.value = ''
        },
    },
}
</script>