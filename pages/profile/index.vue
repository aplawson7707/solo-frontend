<template>
  <b-container class="p-4">
    <b-card class="mt-4 mb-4" bg-variant="secondary" text-variant="light">
      <b-row>
        <b-col>
          <b-skeleton-img animation="throb"></b-skeleton-img>
        </b-col>
        <b-col>
          <b-skeleton-img animation="throb"></b-skeleton-img>
        </b-col>
        <b-col cols="12" class="mt-3">
          <b-skeleton-img
            animation="throb"
            no-aspect
            height="150px"
          ></b-skeleton-img>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="mt-4 mb-4" bg-variant="secondary" text-variant="light">
      <b-row>
        <b-col cols="12" md="6">
          <h5>Image top</h5>
          <b-card
            class="mt-4 mb-4"
            bg-variant="secondary"
            text-variant="light"
            no-body
            img-top
          >
            <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
            <b-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra nunc sapien, non rhoncus elit tincidunt vitae.
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <h5>Image bottom</h5>
          <b-card
            class="mt-4 mb-4"
            bg-variant="secondary"
            text-variant="light"
            no-body
            img-bottom
          >
            <b-card-body>
              Vestibulum maximus, ligula eu feugiat molestie, massa diam
              imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut
              molestie est.
            </b-card-body>
            <b-skeleton-img card-img="bottom" aspect="3:1"></b-skeleton-img>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="mt-4 mb-4" bg-variant="secondary" text-variant="light">
      <b-row class="mt-md-3">
        <b-col cols="12" md="6">
          <h5>Image left</h5>
          <b-card
            class="mt-4 mb-4"
            bg-variant="secondary"
            text-variant="light"
            no-body
            img-left
          >
            <b-skeleton-img card-img="left" width="225px"></b-skeleton-img>
            <b-card-body>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus at consequat dui.
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <h5>Image right</h5>
          <b-card
            class="mt-4 mb-4"
            bg-variant="secondary"
            text-variant="light"
            no-body
            img-right
          >
            <b-skeleton-img card-img="right" width="225px"></b-skeleton-img>
            <b-card-body>
              Aenean tristique sagittis quam, sit amet sollicitudin neque
              sodales in.
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>