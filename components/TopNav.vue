<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <top-nav-icon />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
            <nuxt-link to="/" class="nav-link">
            Home
            </nuxt-link>
        </b-nav-item>
        <b-nav-item>
            <nuxt-link to="tasks" class="nav-link">
            Tasks
            </nuxt-link>
        </b-nav-item>
        <b-nav-item>
            <nuxt-link to="about" class="nav-link">
            About
            </nuxt-link>
        </b-nav-item>
        <b-nav-item>
        <!-- Add v-if="loggedIn" to b-nav-item-dropdown tag below when vuex is working correctly -->
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              Profile
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