<template>
    <div class="putUsuario">
        <div class="putUsuarioId">
            <h2>ACTUALIZAR DATOS</h2>
            <form v-on:submit.prevent="processPutUsuario" >
                <input type="text" v-model="usuario.username" placeholder="Username">
                <br>
                <input type="password" v-model="usuario.password" placeholder="Password">
                <br>
                <select type="text" v-model="usuario.rol" name="Rol" class="select_rol">
                    <option value="" disabled selected>Perfil</option>
                    <option value="Medico">Medico</option>
                    <option value="Paciente">Paciente</option>
                    <option value="Familiar">Familiar</option>
                    <option value="Enfermero">Enfermero</option>
                </select>
                <br>
                <input type="text" v-model="usuario.nombres" placeholder="Nombres">
                <br>
                <input type="text" v-model="usuario.apellidos" placeholder="Apellidos">
                <br>
                <input type="text" v-model="usuario.celular" placeholder="Celular">
                <br>
                <select type="text" v-model="usuario.genero" name="Genero" class="select_genero">
                    <option value="" disabled selected>Género</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                </select>
                <br>
                <input type="text" v-model="usuario.direccion" placeholder="Direccion">
                <br>
                <input type="text" v-model="usuario.ciudad" placeholder="Ciudad">
                <br>
                <button type="submit">Modificar</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "PutUsuario",
    data: function(){
    return {
        usuario: {
                username: "",
                password: "",
                rol: "",
                nombres: "",
                apellidos: "",
                celular: "",
                genero: "",
                direccion: "",
                ciudad: ""
                }
            }
        },
        methods: {
            processPutUsuario: function(){
                axios.put(`https://homecare-app1.herokuapp.com/usuario/${this.usuario.id}`, this.usuario, {headers:{}}
                ) .then((result) => {
                    console.log(result)
                   alert("Elemento modificado");
                }) 
                .catch((error) => {
                console.log(error)
                alert("Error");
            });
            }
        }    
    }
</script>

<style>
.putUsuarior{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.putUsuarioId {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 35%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.putUsuario h2{
    color: #283747;
}
.putUsuario form{
    width: 70%;
}
.putUsuario input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}
.putUsuario button
{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
}
.putUsuario button:hover
{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
.select_rol
{
    color:#283747;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}
.select_rol option{
    color:black;
    font-size: 14px;
    
}
.select_genero
{
    color:#283747;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}
.select_genero option{
    color:black;
    font-size: 14px;
    
}
</style>