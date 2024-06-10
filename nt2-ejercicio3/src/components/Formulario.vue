<template>
  <section class="src-components-formulario">
    <div class="jumbotron">
      <h2>Ingreso de Usuario</h2>
      <hr>
      <br>
      
      <form @submit.prevent="enviar()">

        <!-- Campo nombre -->
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input 
            id="nombre" 
            type="text" 
            class="form-control" 
            v-model.trim="formData.nombre"
            @input="formDirty.nombre=true"
          >

          <!-- carteles de validación -->
          <div v-if="formDirty.nombre" class="mt-1">
            <div v-if="!formData.nombre" class="alert alert-danger">
              Campo requerido
            </div>
            <div v-else-if="formData.nombre.length < 5 || formData.nombre.length > 15" class="alert alert-danger">
              El nombre debe tener entre 5 y 15 caracteres
            </div>
          </div>
        </div>

        <!-- Campo edad -->
        <div class="form-group">
          <label for="edad">Edad</label>
          <input 
            id="edad" 
            type="number" 
            class="form-control" 
            v-model.trim="formData.edad"
            @input="formDirty.edad=true"
          >

          <!-- carteles de validación -->
          <div v-if="formDirty.edad" class="mt-1">
            <div v-if="!formData.edad" class="alert alert-danger">
              Campo requerido
            </div>
            <div v-else-if="formData.edad < 18 || formData.edad > 120" class="alert alert-danger">
              La edad debe ser entre 18 y 120 años
            </div>
          </div>
        </div>

        <!-- Campo email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email" 
            type="text" 
            class="form-control" 
            v-model.trim="formData.email"
            @input="formDirty.email=true"
          >

          <!-- carteles de validación -->
          <div v-if="formDirty.email" class="mt-1">
            <div v-if="!formData.email" class="alert alert-danger">
              Campo requerido
            </div>
            <div v-else-if="!validarEmail(formData.email)" class="alert alert-danger">
              Email no válido
            </div>
          </div>
        </div>

        <button class="btn btn-success my-3" :disabled="validarBotonEnvio()" type="submit">Enviar</button>
      </form>

      <br>
      <hr>

      <!-- Tabla para representar los datos ingresados -->
      <h2>Detalle de Usuarios</h2>
      <br>

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.edad }}</td>
              <td>{{ usuario.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay usuarios ingresados</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'src-components-formulario',
  data() {
    return {
      formData: this.getInitialData(),
      formDirty: this.getInitialData(),
      usuarios: []
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      };
    },
    validarEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validarBotonEnvio() {
      return (
        !this.formData.nombre ||
        this.formData.nombre.length < 5 ||
        this.formData.nombre.length > 15 ||
        !this.formData.edad ||
        this.formData.edad < 18 ||
        this.formData.edad > 120 ||
        !this.formData.email ||
        !this.validarEmail(this.formData.email)
      );
    },
    enviar() {
      if (!this.validarBotonEnvio()) {
        let usuario = { ...this.formData };
        this.usuarios.push(usuario);
        this.formData = this.getInitialData();
        this.formDirty = this.getInitialData();
      }
    }
  }
};
</script>

<style scoped>
.src-components-formulario {
  /* text-align: center;
  margin-top: 20px; */
}
.jumbotron {
  background-color: white;
  color: brown;
  padding: 20px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
}
form {
  margin-bottom: 10px;
}
h2 {
  color: aqua;
}

</style>