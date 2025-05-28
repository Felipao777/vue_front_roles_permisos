import Api from "./Api"; //parece que Api lo toma como App
export default{
    listar(){
        return Api().get("/users");
    },
    guardar (datos){
        return Api().post("/users", datos);
    },
    mostrar(id) {
        return Api().get(`/users/${id}`);
    },
    modificar (id, datos){
        return Api().put(`/users/${id}`, datos);
    },
    eliminar(id) {
        return Api().delete(`/users/${id}`);
    },

}