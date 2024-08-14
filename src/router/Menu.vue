<template>
  <div id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/editor/dashboard">
          <svg
            id="grid"
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            fill="none"
            viewBox="0 0 128 128"
          >
            <rect
              width="39"
              height="57"
              x="16"
              y="16"
              stroke="#fff"
              stroke-width="7"
              rx="14"
            ></rect>
            <rect
              width="39"
              height="57"
              x="111"
              y="112"
              stroke="#fff"
              stroke-width="7"
              rx="14"
              transform="rotate(-180 111 112)"
            ></rect>
            <rect
              width="39"
              height="21"
              x="16"
              y="91"
              stroke="#fff"
              stroke-width="7"
              rx="10.5"
            ></rect>
            <rect
              width="39"
              height="21"
              x="111"
              y="37"
              stroke="#fff"
              stroke-width="7"
              rx="10.5"
              transform="rotate(-180 111 37)"
            ></rect>
          </svg>
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/editor/articles">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            fill="none"
            viewBox="0 0 128 128"
          >
            <path
              stroke="#fff"
              stroke-width="7"
              d="M106.733 35.19C110.569 31.3542 110.569 25.1353 106.733 21.2995V21.2995C102.898 17.4637 96.6787 17.4637 92.843 21.2995L62.1638 51.9787C59.4267 54.7158 58.0581 56.0844 57.3017 57.8152C56.5453 59.5459 56.4705 61.4799 56.3209 65.3479L56.1484 69.8088C56.1093 70.8197 56.0897 71.3252 56.3988 71.6342C56.7078 71.9433 57.2132 71.9237 58.2242 71.8846L62.685 71.7121C66.553 71.5625 68.487 71.4877 70.2178 70.7313C71.9486 69.9749 73.3172 68.6063 76.0543 65.8692L106.733 35.19Z"
            ></path>
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="7"
              d="M66.5 16L64.5 16C44.347 16 34.2706 16 27.1934 21.1105C24.8537 22.8 22.8 24.8537 21.1105 27.1934C16 34.2705 16 44.347 16 64.5V64.5C16 84.6529 16 94.7294 21.1105 101.807C22.8 104.146 24.8537 106.2 27.1934 107.89C34.2706 113 44.347 113 64.5 113V113C84.653 113 94.7294 113 101.807 107.89C104.146 106.2 106.2 104.146 107.89 101.807C113 94.7294 113 84.653 113 64.5V64.5"
            ></path>
          </svg>
          Posts
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>
