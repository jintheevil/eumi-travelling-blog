<script setup>
import { ref } from "vue"
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth"
import { useQuasar } from "quasar";
import { useUserStore } from "stores/user";

const quasar = useQuasar();

// Variables
let registerForm = ref({
  email: '',
  name: '',
  password: '',
})

// Functions
let submitRegistration = async () => {
  try {
    if (!registerForm.value.email) {
      return alert("Please ensure that your email is valid.")
    }
    if (!registerForm.value.name) {
      return alert("Please enter a valid display name.")
    }
    if (!registerForm.value.password) {
      return alert("Password required.")
    }

    quasar.loading.show();
    const response = await createUserWithEmailAndPassword( getAuth(), registerForm.value.email, registerForm.value.password)

    if (response) {
      updateProfile(getAuth().currentUser, { displayName: registerForm.value.name }).then(() => {

        getAuth().onAuthStateChanged((user) => {

          if (user) {
            useUserStore().setUser(user)
            quasar.loading.hide();
            alert("Registration Successful! Redirecting you to the homepage.");
            // window.location.href = "/";
          }
        })
      });
    }
  } catch (err) {
    quasar.loading.hide();
    alert("Error occurred. Check the console log for more details.")
    console.log(err)
  }
}

</script>

<template>
  <q-page class="flex flex-center register-page">
    <q-form>
      <h3>
        Register an account
      </h3>
      <h6>
        ...to plan and log your future journeys with us today!
      </h6>
      <form>
        <q-input label="Email" type="email" v-model="registerForm.email"></q-input>
        <q-input label="Display Name" type="text" v-model="registerForm.name"></q-input>
        <q-input label="Password" type="password" v-model="registerForm.password"></q-input>
        <q-btn class="submit-button" label="Submit" color="primary" @click="submitRegistration"></q-btn>
      </form>
    </q-form>
  </q-page>
</template>

<style lang="scss" scoped>
.register-page {
  min-height: calc(100vh - 5rem) !important;
}

.submit-button {
  margin-top: 2rem;
}
</style>
