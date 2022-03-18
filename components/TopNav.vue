<template>
  <b-navbar toggleable="lg" type="light" variant="success" class="shadow">
    <b-navbar-brand to="/" class="mx-4">
      <h1>SOLO</h1>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
            <nuxt-link to="/" class="nav-link">
              <strong> Home </strong>
            </nuxt-link>
        </b-nav-item>
        <b-nav-item>
            <nuxt-link to="tasks" class="nav-link">
              <strong> Tasks </strong>
            </nuxt-link>
        </b-nav-item>
        <b-nav-item>
            <nuxt-link to="about" class="nav-link">
              <strong> About </strong>
            </nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-avatar class="mt-2 mr-4"></b-avatar>
        <b-nav-item>
        <!-- Add v-if="loggedIn" to b-nav-item-dropdown tag below when vuex is working correctly -->
          <b-nav-item-dropdown class="mr-4" right>
            <template #button-content>
              <strong> User </strong>
            </template>
            <b-dropdown-item href="#">
              <nuxt-link to="profile">
                <b-button variant="outline-primary"> Profile </b-button>
              </nuxt-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <nuxt-link to="logout">
                Sign Out
              </nuxt-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  // computed: {
  //   ...mapState('auth', ['loggedIn'])
  // }
}
</script>