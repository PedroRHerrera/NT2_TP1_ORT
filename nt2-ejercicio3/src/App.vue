<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1 class="display-4"><strong>nt2-ejercicio3</strong></h1>
      <h2>Alumno: Pedro Ricardo Herrera</h2>
      <br>

      <Navbar />
      <RouterView />

    </div>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  h1 {
    color: rgb(11, 11, 234);
  }
  h2 {
    color: rgb(248, 0, 0);
  }
</style>
