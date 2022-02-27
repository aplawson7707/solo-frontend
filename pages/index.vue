<template>
  <div>
    <b-jumbotron text-variant="dark" fluid>
      <template #header>This is the Home page</template>

      <template #lead>
        /index.vue
      </template>

      <hr class="my-4">

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>
      <NuxtLink to="/about">
              About (internal link that belongs to the Nuxt App)
      </NuxtLink>
      <br>
      <a href="https://nuxtjs.org">
        External Link to another page
      </a>
    </b-jumbotron>
  </div>
</template>
