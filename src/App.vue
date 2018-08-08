<template>
  <div>
    <p>vue demo</p>
    <router-view/>
  </div>
</template>

<script>
import "./styles/index.scss";

let a = 2;
a = 1;
console.log(a);
export default {
  data() {
    return {
      a,
    };
  },
};
</script>

<style lang="scss">
body {
  display: flex;
  justify-content: center;
}
</style>
