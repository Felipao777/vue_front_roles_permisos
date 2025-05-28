<template>
    <h1>Gestión Usuarios</h1>
    {{ usuarios }}
    <br>
    <label for="">Ingresar Nombre</label>
    <input type="text" v-model="usuario.name">
    <br>
    <label for="">Ingresar Correo</label>
    <input type="email" v-model="usuario.email">
    <br>   
    <label for="">Ingresar Contraseña</label>
    <input type="password" v-model="usuario.password"> 
    <br>
    <button type="button" @click="guardarUsuario()">Guardar Usuario</button>


    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>CORREO</th>
                <th>CREADO EN</th>
                <th>GESTIÓN</th>
            </tr>            
        </thead>
        <tbody>
            <tr v-for="u in usuarios" :key="u.id">
                <td>{{ u.id }}</td>
                <td>{{ u.name }}</td>
                <td>{{ u.email }}</td>
                <td>{{ u.created_at }}</td>
                <td>
                    <button type="button" @click="editarUsuario(u)">editar</button>
                    <button type="button" @click="eliminarUsuario(u)">eliminar</button>
                </td>
            </tr>
        </tbody>


    </table>


</template>

<script setup>
//importaciones
import UsuarioService from '@/service/UsuarioService';
import { ref, onMounted } from 'vue';
//import UsuarioService from "./../../../service/UsuarioService.js"

//declaracion de variables o constantes o estados
const usuarios= ref([])
const usuario=ref({name:"", email:"", password:""})

//ciclo de vida de un componente
onMounted(()=>{ //es como un constructor y es lo 1ero q carga y hay varios on...
    getUsuarios()
})

// metodos o funciones
const getUsuarios= async()=>{
    const{data}= await UsuarioService.listar()
    usuarios.value=data.data
    
}

const guardarUsuario= async()=>{

    if(usuario.value.id){
        await UsuarioService.modificar(usuario.value.id, usuario.value)
    }else{
        await UsuarioService.guardar(usuario.value)
    }

    usuario.value={name:"", email:"", password:""}

    getUsuarios()
}

const editarUsuario=(us)=>{
    usuario.value=us
}

const eliminarUsuario=async(us)=>{

    if(confirm("Esta seguro de eliminar al usuario?")){
        try {
            await UsuarioService.eliminar(us.id)
            getUsuarios()
            
        } catch (error) {
            console.log(error);            
        }

    }
}


</script>