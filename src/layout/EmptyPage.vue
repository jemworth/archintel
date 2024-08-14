<template>
  <div class="emptyLayout">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: "EmptyPageLayout",
};
</script>
