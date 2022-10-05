<template>
    <div class="deleteUsuario">
        <div class="deleteUsuarioId">
            <h2>Eliminar usuario</h2>
            <form v-on:submit.prevent="processDeleteUsuario">
                <input type="number" v-model="Usuario.id" placeholder="id usuario" >
                <br>
                <button type="submit">Eliminar</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "DeleteUsuario",
    data: function(){
    return {
            Usuario:{
                id:""
            }
            
            }
        },
        methods: {
            processDeleteUsuario: function(){
                axios.delete(`https://homecare-app1.herokuapp.com/Usuario/${this.Usuario.id}`, {headers:{}}
                ) .then((result) => {
                   alert("Usuario eliminado");
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
.deleteUsuario{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

.deleteUsuarioid {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 35%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.deleteUsuario h2{
    color: #283747;
}

.deleteUsuario form{
    width: 70%;
}

.deleteUsuario input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}

.deleteUsuario button
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

.deleteUsuario button:hover
{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>