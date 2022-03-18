<template>
    <b-container>
        <b-row>
            <b-col 
                md="6"
                offset-md="3"
            >
                <div
                    class="fixed-top d-flex align-items-center justify-content-center"
                    style="bottom: 0; overflow-y: auto"
                >
                <b-card
                    bg-variant="darker"
                    text-variant="light"
                    title="Sign In"
                    class="mx-auto mt-4 shadow"
                    align="center"
                    style="width: 400px"
                    border-variant="secondary"
                >
                    <b-card
                        bg-variant="secondary"
                        text-variant="dark"
                        class="mt-4 shadow"
                        align="center"
                    >
                        <section class="login">
                            <div class="auth-form">
                                <b-field label="Username">
                                    <b-form-input
                                        v-model="user.username"
                                        type="text"
                                        placeholder="Username"
                                        size="lg"
                                    />
                                </b-field>
                                <br>
                                <b-field label="Password">
                                    <b-form-input
                                        v-model="user.password"
                                        type="password"
                                        placeholder="Password"
                                        size="lg"
                                    />
                                </b-field>
                                <br>
                                <b-button variant="success" @click="login">Login</b-button>
                            </div>
                        </section>
                    </b-card>
                </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    layout: 'login',
    data() {
        return {
        user: {}
        }
    },
    methods: {
        async login() {
        try {
            await this.$auth.loginWith('local', {
            data: this.user
            })
            this.$toasted.global.defaultSuccess({
            msg: 'Login Successful'
            })
        } catch (err) {
            this.$toasted.global.defaultError({
            msg: 'Invalid Credentials.'
            })
        }
        }
    }
}
</script>