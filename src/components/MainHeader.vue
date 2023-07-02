<script setup>
import { computed } from "vue";
import { useUserStore } from "stores/user";
import { getAuth, signOut } from "firebase/auth";

let currentUser = computed(() => {
  return useUserStore().getUser
})

let tabs = [
  {
    name: 'Home',
    route: '/',
    icon: 'home'
  },
  {
    name: 'Blog',
    route: '/blog',
    icon: 'menu_book'
  },
  {
    name: 'About',
    route: '/about',
    icon: 'group'
  },
  {
    name: 'Planner',
    route: '/planner',
    icon: 'event'
  }
];

const signOutUser = async () => {
  try {
    const response = await signOut(getAuth());

    useUserStore().signOutUser();
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="header">
    <div class="sub-header">
      <div v-if="currentUser.displayName" class="empty"></div>
      <h6 v-else>Create an account or login to help plan your adventures with us!</h6>
      <div v-if="currentUser.displayName" class="logged-in">
        <h6>Hello there, <span>{{ currentUser.displayName }}</span></h6>
        <q-btn label="Logout" class="sub-fonts logout-btn" color="secondary" text-color="txt" @click="signOutUser()"></q-btn>
      </div>
      <div v-else class="user-area">
        <q-btn label="Login" to="/login" class="sub-fonts" flat></q-btn>
        <q-btn label="Register" to="/register" class="sub-fonts" flat></q-btn>
      </div>
    </div>
    <div class="main-header">
      <q-tabs
        inline-label
        indicator-color="transparent"
      >
        <q-route-tab v-for="tab in tabs.slice(0, 2)" :key="tab.name" :to="tab.route" :icon="tab.icon" :label="tab.name" class="nav-tab sub-fonts" exact exact-active-class="selected-tab"></q-route-tab>
      </q-tabs>
      <div class="main-logo">
        <h1>Eumi!</h1>
      </div>
      <q-tabs
        inline-label
        indicator-color="transparent"
      >
        <q-route-tab v-for="tab in tabs.slice(2, 4)" :key="tab.name" :to="tab.route" :icon="tab.icon" :label="tab.name" class="nav-tab sub-fonts" exact exact-active-class="selected-tab"></q-route-tab>
      </q-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  z-index: 2;
  position: fixed;
  background: #fafafa;
}

.sub-header {
  margin-left: -15rem;
  height: 3rem;
  width: 100vw;
  background: var(--q-accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-header {
  padding: 0 20rem;
  margin-left: -15rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .main-logo {
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      margin: 0;
    }
  }
}

.user-area {
  margin-left: 2rem;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
}

.nav-tab {
  margin-right: 2rem;
  border-radius: 0.5rem;
}

h6 {
  margin: 0 4rem !important;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  span {
    margin-left: 0.5rem;
    font-family: "Pacifico", serif;
    letter-spacing: 0.25rem;
  }
}

.sub-fonts {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.selected-tab {
  background: var(--q-primary);
}

.logged-in {
  display: flex;
}

.logout-btn {
  margin-right: 5rem;
}
</style>
