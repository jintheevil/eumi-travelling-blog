<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from "stores/user";
import {useRouter} from "vue-router";

const router = useRouter();

let loginData = ref({
  email: null,
  password: null,
});

const login = async () => {
  try {
    const response = await signInWithEmailAndPassword( getAuth(), loginData.value.email, loginData.value.password )

    if (response) {
      await useUserStore().setUser(response.user);
      alert("Login successful! Redirecting to the main page.");
      await router.push('/');
    }
  } catch (err) {
    alert("Login error. Please check your details and try again.")
    console.log(err)
  }
};

</script>

<template>
  <q-page class="flex flex-center login-page">
    <q-form>
      <h3>Login</h3>
      <q-input label="Email" type="email" v-model="loginData.email"></q-input>
      <q-input label="Password" type="password" v-model="loginData.password"></q-input>
      <q-btn label="Submit" color="primary" class="submit-button" @click="login"></q-btn>
    </q-form>
  </q-page>
</template>

<style lang="scss" scoped>
.login-page {
  min-height: calc(100vh - 5rem) !important;
}
.submit-button {
  margin-top: 2rem;
}
</style>
