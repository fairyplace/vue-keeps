<template>
  <div class="notes" v-masonry item-selector=".note" gutter="20">
    <div v-masonry-tile class="note" v-for="note in notes">
      <div class="note__title">
        {{ note.title }}
      </div>
      <div class="note__body">
        {{ note.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.notes {
  margin: 60px 0px;
}
.note {
  width: calc(33.33% - 63px);
  padding: 25px;
  background: #39314e;
  border-radius: 10px;
  margin-bottom: 20px;
}
.note__title {
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  margin-bottom: 20px;
}
.note__body {
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
}
</style>
