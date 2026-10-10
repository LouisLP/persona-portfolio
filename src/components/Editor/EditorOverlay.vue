<template>
  <!-- Editor: Film strip on sides -->
  <aside aria-hidden="true" class="film-strip left-0" />
  <aside aria-hidden="true" class="film-strip right-0" />
</template>

<style scoped>
.film-strip {
  position: absolute;
  inset-block: 0;
  width: 1.5rem;
  pointer-events: none;
  opacity: 0.08;
  background-image: repeating-linear-gradient(
    0deg,
    var(--ink) 0 15px,
    transparent 15px 25px
  );
}

@media (min-width: 768px) {
  .film-strip {
    width: 3rem;
  }
}
</style>
