<template>
  <div class="section login mw-450 mx-auto">
    <div class="section-head text-center">
      <img class="mb-4" src="../assets/img/logo.svg" />
      <h4 class="mb-4">Welcome to ArchIntel</h4>
    </div>
    <form class="section-body">
      <b-row class="mb-md">
        <b-col cols="12" md="6">
          <button
            type="button"
            class="btn btn-dark d-flex align-items-center justify-content-center gap-10 padding-xs w-100"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_105_28614)">
                <path
                  d="M4.70496 0.0078125C2.11975 0.0078125 0.00390625 2.1236 0.00390625 4.70886V19.297C0.00390625 21.8823 2.1197 23.9973 4.70496 23.9973H19.2932C21.8784 23.9973 23.9935 21.8823 23.9935 19.297V4.70886C23.9935 2.12365 21.8784 0.0078125 19.2932 0.0078125H4.70496ZM5.88735 3.96656C7.1269 3.96656 7.89042 4.78031 7.91399 5.84996C7.91399 6.896 7.12686 7.73262 5.86337 7.73262H5.84012C4.62416 7.73262 3.83823 6.89605 3.83823 5.84996C3.83823 4.78033 4.64794 3.96656 5.88733 3.96656H5.88735ZM16.5693 8.966C18.9532 8.966 20.7403 10.5241 20.7403 13.8725V20.1232H17.1174V14.2916C17.1174 12.8261 16.5931 11.8263 15.282 11.8263C14.2811 11.8263 13.6845 12.5002 13.4225 13.1512C13.3268 13.3841 13.3033 13.7093 13.3033 14.0351V20.1232H9.68044C9.68044 20.1232 9.72798 10.2445 9.68044 9.22165H13.3041V10.7654C13.7855 10.0226 14.6467 8.96598 16.5693 8.96598V8.966ZM4.05192 9.22244H7.6748V20.1233H4.05192V9.22244Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_28614">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Login via LinkedIn
          </button>
        </b-col>
        <b-col cols="12" md="6">
          <button
            type="button"
            class="btn btn-dark d-flex align-items-center justify-content-center gap-10 padding-xs w-100"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_105_28620)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12.14 19.018C8.272 19.018 5.14 15.878 5.14 12C5.14 8.122 8.272 4.982 12.14 4.982C14.03 4.982 15.61 5.679 16.822 6.811L14.848 8.789V8.785C14.113 8.083 13.181 7.723 12.14 7.723C9.83 7.723 7.953 9.679 7.953 11.996C7.953 14.311 9.83 16.273 12.14 16.273C14.236 16.273 15.662 15.071 15.956 13.421H12.14V10.684H18.725C18.813 11.154 18.86 11.644 18.86 12.158C18.86 16.168 16.183 19.018 12.14 19.018Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_28620">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Login via LinkedIn
          </button>
        </b-col>
      </b-row>
      <div class="text-center mb-md hr-backward">
        <div class="">or login using credentials</div>
      </div>
      <b-form-group class="mb-sm">
        <label for="userName" class="form-label">Username</label>
        <input id="userName" type="text" class="form-control" placeholder="name@example.com" />
      </b-form-group>
      <b-form-group class="mb-sm">
        <label for="userPass" class="form-label">Password</label>
        <input id="userPass" type="password" class="form-control" placeholder="••••••••••••••••" />
      </b-form-group>
      <b-form-group class="mb-base text-end">
        <a href="/forgot-password" class="text-neutral-7">Forgot Password?</a>
      </b-form-group>

      <b-form-group>
        <b-button
          type="submit"
          class="btn btn-primary w-100"
          @click="$router.push('/editor/dashboard')"
        >
          Login
        </b-button>
      </b-form-group>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
};
</script>

<style scoped></style>
