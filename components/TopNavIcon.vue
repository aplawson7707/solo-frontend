<template>
  <span>
    <img :class="icon.class"
        :alt="icon.alt"
        :src="icon.img"
        :width="icon.width"
        :height="icon.height"
    />
  </span>
</template>

<script>
export default {
  data () {
    return {
      origin: null,
      icon: {
        img: '/500x500Logo.png',
        alt: 'Solo Logo',
        class: 'object-scale-down h-20 w-20',
        width: '60',
        height: '60',
      }
    }
  },
}
</script>