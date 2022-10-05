<template>
    <div class="requestUsuario">
        <div class="requestUsuarioId">
            <h2>Consultar usuario</h2>
            <form v-on:submit.prevent="processRequestUsuario">
                <input type="number" v-model="usuario.id" placeholder="id usuario" >
                <br>
                <button type="submit">CONSULTAR</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "RequestUsuario",
    data: function(){
    return {
            usuario:{
                id:""
            }
            
            }
        },
        methods: {
            processRequestUsuario: function(){
                axios.get(`https://homecare-app1/usuario/${this.usuario.id}`, {headers:{}}
                ) .then((result) => {
                   alert(JSON.stringify(result.data,null, ' '));
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
    
.requestUsuario{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

.requestUsuarioId {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 35%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.requestUsuario h2{
    color: #283747;
}
.requestUsuario form{
    width: 70%;
}
.requestUsuario input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}
.requestUsuario button
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
.requestUsuario button:hover
{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>