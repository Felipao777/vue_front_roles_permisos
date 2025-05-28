<template>
    <div>
        <h1>Ingresar</h1>
        {{ usuario }}
        <form @submit="funIngresar">
            <label for="">Ingrese Correo:</label>
            <input type="email" v-model="usuario.email">
            {{ errores.email }}

            <br>
            <label for="">Ingrese Contraseña:</label>
            <input type="password" v-model="usuario.password">
            {{ errores.password }}

            <br>
            <input type="submit">
        </form>
        {{ errores }}
    </div>
</template>


<!--template>
    <div>
        <h1>Ingresar</h1>
        <h1>{{ titulo }}</h1>

    </div>
</template-->
  
<!--script>vue2 Opciones api
export default{
    data(){
        return{
            titulo:"Hola Mundo"
        }
    }
}
</script-->

<!--script> Composition API antiguo
import {ref} from 'vue'
export default{
    setup(){
        const titulo =ref('Hola mundo con Composition API');
        return {titulo} ;
    }
}
</script-->

<!--script setup> Composition API nuevo
import {ref} from 'vue'
const titulo =ref('Hola mundo con Composition API 3');
</script-->

<script setup>
import router from '@/router';
import authService from '@/service/AuthService';
//import AuthService from './../../service/AuthService'; de la rutal actual(./)salimos una carpeta(../) y asi...
import {ref} from 'vue'
import { useRouter } from 'vue-router';
//const titulo =ref('Hola mundo con Composition API 3');
const usuario = ref({email: "", password: ""})
const errores=ref({})

const funIngresar = async (e) => {
    e.preventDefault();//es para prevenir la recarga
    errores.value={}
    //alert("INGRESANDO...")
    try {
        const {data}=await authService.login(usuario.value) //es una promesa

        console.log(data);
        
        localStorage.setItem("token", data.access_token)


        router.push({name: 'admin'})

        //alert("Bienvenido....")
        
    } catch (error) {
        console.log("ERROR EN COMPONENTE LOGIN",error.response.data)
        if(error.response.data.errors){
            errores.value=error.response.data.errors

        }else{
            alert(error.response.data.message)
        }
        
    }
}

</script>