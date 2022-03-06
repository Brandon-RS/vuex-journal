<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: {id: 10} })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      Dolore sunt sunt sunt sit eu adipisicing. Exercitation culpa occaecat ad
      ullamco do ut quis fugiat. In laboris ea incididunt incididunt culpa. Id
      amet non magna occaecat qui ad eu duis Lorem tempor nostrud est ullamco
      sint.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 13px;
  }
}
</style>
