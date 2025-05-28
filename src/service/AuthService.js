import Api from "./Api"; //parece que Api lo toma como App
export default{
    login(credenciales){//funcion simple
        return Api().post("/v1/auth/login", credenciales);//esto es una promesa
    },
    registro: function(datos){//funcion anonima
        return Api().post("/v1/auth/register", datos);
    },
    perfil: () => {//funcion flecha
        return Api().get("/v1/auth/profile");
    },
    logout: () => {
        return Api().post("/v1/auth/logout");
    }


}