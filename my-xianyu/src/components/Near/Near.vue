<template>
  <div class="container">nears
    <ul>
      <li v-for="(list,index) in nears" :key="index" class="list">
        <div>
          233
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Near',
  props: {
    nears: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>

