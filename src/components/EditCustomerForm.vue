<template>
  <b-form class="mt-3">
    <b-row>
      <b-row>
        <h4 class="text-secondary">Contact Details</h4>
      </b-row>
      <b-col cols="6">
        <b-form-group id="first-name" label="First Name" label-for="first-name">
          <b-form-input
            id="first-name"
            v-model="customer.title"
            type="text"
            placeholder="First Name"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="last-name" label="Last Name" label-for="last-name">
          <b-form-input
            id="last-name"
            v-model="customer.image"
            type="text"
            placeholder="Last Name"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="6">
        <b-form-group id="email" label="E-Mail" label-for="email">
          <b-form-input
            id="email"
            v-model="customer.link"
            type="email"
            placeholder="example@crm.com"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <h4 class="text-secondary">Company Details</h4>
    </b-row>
    <b-row>
      <b-col cols="4">
        <b-form-group id="company_name" label="Company Name" label-for="company_name">
          <b-form-input
            id="company_name"
            v-model="customer.status"
            type="text"
            placeholder="XYZ Industries"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <b-form-group id="acquired_on" label="Acquired On" label-for="acquired_on">
          <b-form-input id="acquired_on" v-model="customer.date" type="date"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-form-checkbox
        id="customer_status"
        v-model="customer.status"
        name="customer-status"
        value="active"
        unchecked-value="inactive"
      >
        Customer is active
      </b-form-checkbox>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="3">
        <b-button variant="primary" class="px-5" @click="updateCustomer">
          Update Customer
        </b-button>
      </b-col>
      <b-col>
        <b-button variant="warning" @click="triggerClose">Close</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateCustomerModal",
  props: {
    customerId: Number,
  },
  data() {
    return {
      customer: {},
    };
  },
  mounted() {
    this.getCusomterByID();
  },
  methods: {
    triggerClose() {
      this.$emit("closeEditModal");
    },
    getCusomterByID() {
      axios
        .get(`http://localhost:3000/Articles/${this.customerId}`)
        .then((response) => {
          this.customer = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCustomer() {
      axios
        .put(`http://localhost:3000/Articles/${this.customerId}`, this.customer)
        .then((response) => {
          console.log(response.data);
          this.$emit("closeEditModal");
          this.$emit("reloadDataTable");
          this.$emit("showSuccessAlert");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
