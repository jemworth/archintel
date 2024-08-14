<template>
  <div class="admin main-container">
    <div class="sidebar-container" :class="{ slideNav: isActive }">
      <div class="head">
        <img class="logo" src="../assets/img/logo-white.svg" />
        <div class="site-title">ArchIntel</div>
        <a class="closebtn" @click="isActive = !isActive">&times;</a>
      </div>
      <Menu />
    </div>
    <!-- Push Main Content <div class="content" :class="{ slideContent: isActive }"></div> -->
    <div class="content-container">
      <div class="header">
        <span style="font-size: 30px; cursor: pointer" @click="isActive = !isActive">&#9776; open</span>
      </div>
      <div class="container">
        <transition name="fade">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../router/Menu.vue";

export default {
  name: "LeftSidebarLayout",
  components: {
    Menu,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
