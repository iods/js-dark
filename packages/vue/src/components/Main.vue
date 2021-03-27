<template>
  <div class="text-large text-red-500">
    Hi There. Vue
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data() {
    return {
      choice: 'OK',
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>