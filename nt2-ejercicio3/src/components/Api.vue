<template>

  <section class="src-components-api">

    <button class="btn btn-info my-3 mr-2" @click="getUsuarios">GET</button>
    <button class="btn btn-success my-3 mr-2" @click="postUsuario">POST</button>

    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-info">
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>email</th>
          <th>numeroTelefono</th>
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{usuario.id}}</td>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.email}}</td>
          <td>{{usuario.numeroTelefono}}</td>

          <td>
            <button class="btn btn-warning my-1 mr-2" @click="putUsuario(usuario.id)">PUT</button>
            <button class="btn btn-danger my-1 mr-2" @click="deleteUsuario(usuario.id)">DELETE</button>
          </td>
        </tr>
      </table>    
    </div>
    <h4 class="alert alert-danger" v-else>No se encontraron usuarios</h4>    
  </section>

</template>

<script>
  import * as servicioUsuarios from '../services/usuarios'
  export default  {
    name: 'src-components-api',
    props: [],
    mounted () {
    },
    data () {
      return {  
        usuarios: []
      }
    },
    methods: {
      
      async getUsuarios() {
        console.log('getUsuarios')
        const usuarios = await servicioUsuarios.getAll()
        this.usuarios = usuarios
      },
      
      async postUsuario() {
        const usuario = {
          "nombre": "JuanPerez",
          "email": "juanPerez@gmail.com",
          "telefono": "1165987458",
          
        }
        console.log('postUsuario', usuario)

        const usuarioGuardado = await servicioUsuarios.post(usuario)
        console.log(usuarioGuardado)

        this.usuarios.push(usuarioGuardado)
      },

      async putUsuario(id) {
        const usuario = {
          "nombre": "JuanPerez",
          "email": "juanPerez@gmail.com",
          "telefono": "1165987458",
        }
        console.log('putUsuario', id, usuario)

        const usuarioActualizado = await servicioUsuarios.put(id, usuario)
        console.log(usuarioActualizado)

        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioActualizado.id)
        this.usuarios.splice(index, 1, usuarioActualizado)
      },

      async deleteUsuario(id) {
        console.log('deleteUsuario', id)

        const usuarioEliminado = await servicioUsuarios.del(id)
        console.log(usuarioEliminado)

        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioEliminado.id)
        this.usuarios.splice(index, 1)
      },                  
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-api th {
    text-transform: uppercase;
  } 
</style>
