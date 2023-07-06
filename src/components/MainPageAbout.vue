<script setup>
</script>

<template>
  <q-page>
    <div class="half-half">
      <q-card>
        <q-card-section class="about-us-section title-background">
          <h2>
            Who we are
          </h2>
        </q-card-section>
        <q-card-section class="about-us-section">
          <h4>
            What happens when an introverted extrovert meets an extroverted introvert? We are the result of that chaotic combination!
            <br>
            <br>
            We are an adventurous couple who want to experience the world and share that experience with you!
          </h4>
        </q-card-section>
      </q-card>
      <div class="instagram-area">
        <div v-for="i in 3" :key="i" class="instagram-post">
          <div class="instagram-image"></div>
          <div class="instagram-comments-section"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
.half-half {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 2rem;
}

.about-us-section {
  text-align: center;

  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-shadow: 0.3rem 0.4rem 0.2rem var(--q-secondary);
  }
  h4 {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }
}

.title-background {
  background: var(--q-accent);
}

.instagram-area {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  .instagram-post {
    border: 0.5px solid #aaa;
    padding: 2rem;
    border-radius: 0.5rem;

    .instagram-image {
      height: 15rem;
      width: 15rem;
      background: #aaa
    }
  }
}
</style>
