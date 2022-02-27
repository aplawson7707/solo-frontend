<template>
  <b-container>
    <b-row class="pt-3">
      <b-col cols="7">
        <b-card>
            <h1>This is the About page</h1>
            <h4>/pages/about/index.vue</h4>
        </b-card>
        <b-card class="mt-4">
          <b-card-img
            :src="cardImage.img"
            max-width="500"
            max-height="500"/>
          <b-card-body>
            <h4>Card 1 Title</h4>
            <p>
              Test Test Test.
            </p>
            <p>
              <b>Shouting!</b>
              Test Test Test
            </p>
            <p>
            </p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="5">
        <b-card>
          <b-card-img
            :src="cardImage.img"
            style="height: 100; width: 100px;"
          />
          <b-card-body>
            <h4>Card 2 Title</h4>
            <h6>
              <a href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Some Link
              </a>
            </h6>
            <p>
              Test Test Test.
            </p>
          </b-card-body>
        </b-card>
        <b-card>
          <b-card-img
            :src="cardImage.img"
            style="height: 100; width: 100px;"
          />
          <b-card-body>
            <h4>Card 3 Title</h4>
            <h6>
              <a href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Some other link
              </a>
            </h6>
            <p>
              Test Test Test.
            </p>
          </b-card-body>
        </b-card>
        <b-card>
          <b-card-img
            :src="cardImage.img"
            style="height: 100; width: 100px;"
          />
          <b-card-body>
            <h4>Card 4 Title</h4>
            <a href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Some OTHER other link
            </a>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    data () {
        return {
          cardImage: {
            img: '/500x500Logo.png',
            alt: 'Solo Logo',
            class: 'bg-dark rounded p-1'
          },
        }
    },
}
</script>