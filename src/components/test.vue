<template><!-- <van-rate v-model="value" /> -->
  <div>
    <van-rate v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
  mounted() {
    // console.log(this.$store.state.test.msg);
  },
};
</script>

<style lang="scss">
</style>
