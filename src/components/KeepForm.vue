<template>
  <div class="row">
    <!-- logo is separate component -->
    <div class="logo">Notes</div>
    <!-- too sep comp -->
    <button class="add-note">
      <!-- <img src="@/assets/icons/add-ico.svg" alt="Add Note"> -->
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  display: flex;
  gap: 20px;
}
.logo {

  align-self: flex-end;
  font-size: 2.625em;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
.add-note {
  background: #39314e;
  border-radius: 10px;
  
  width: 65px;
  height: 65px;
  background-image: url('@/assets/icons/add-ico.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 27px;
}
</style>
