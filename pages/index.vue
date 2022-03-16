<template>
  <div>
    <b-jumbotron bg-variant="dark" text-variant="light" fluid>
      <template #header>This is the Home page</template>

      <template #lead>
        /index.vue
      </template>

      <template>
        <div>
          <b-button v-b-modal.modal-center variant="outline-primary">Launch demo modal</b-button>

          <b-modal 
            id="modal-center" 
            title="Example Modal"
            header-bg-variant="dark"
            header-text-variant="primary"
            header-border-variant="dark"
            body-bg-variant="dark" 
            body-text-variant="light"
            footer-bg-variant="dark"
            footer-text-variant="light"
            footer-border-variant="dark"
            content-class="shadow"
            centered
          >
            <p class="my-4">Hello from modal!</p>

            <b-dropdown
              id="dropdown-1"
              text="Dropdown Button"
              class="m-md-2"
              split
              split-variant="outline-primary"
              variant="primary"
            >
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </b-modal>
        </div>
      </template>
    </b-jumbotron>

    <b-container>
      <b-card class="mt-4" bg-variant="secondary" text-variant="light">
        <NuxtLink to="/about">
                About (internal link that belongs to the Nuxt App)
        </NuxtLink>
        <br>
        <a href="https://nuxtjs.org">
          External Link to another page
        </a>
      </b-card>
      
      <b-card class="mt-4 mb-4" bg-variant="secondary" text-variant="light">
        <p>
          "<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          <br>
          <br>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
          et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia 
          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
          commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
          esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
          nulla pariatur?"
        </p>
      </b-card>
    </b-container>
  </div>
</template>
