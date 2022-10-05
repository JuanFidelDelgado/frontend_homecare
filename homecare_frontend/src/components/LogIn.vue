<template>
    <div class="logIn_usuario">
        <div class="contenedor_login">
            <h2>INICIO DE SESIÓN</h2>
            <form v-on:submit.prevent="processLogInUsuario" >
                <input type="text" v-model="usuario.username" placeholder="Username">
                <p></p>
                <input type="password" v-model="usuario.password" placeholder="Password">
                <p></p>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "LogIn",
        data: function(){
            return {
                usuario: {
                    username:"",
                    password:""
                }
            }
        },
        methods: {
        processLogInUsuario: function(){
            axios.post(
                "https://homecare-app1.herokuapp.com/login/",
                this.user,
                {headers: {}}
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.usuario.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
    
                    this.$emit('completedLogIn', dataLogIn)
    
                })
                .catch((error) => {
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                });
            }
        }
    }
</script>

<!--Los estilos se asocian con el nombre de la clase-->
<style>
.login_usuario{
    top: 0vmax;
    margin: 00;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenedor_login{
    border: 3 px solid #79b5f5;
    border-radius: 15 px;
    width: 25%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contenedor_login h2{
    color: #283747;
}

.login_usuario h2{
     color: #79b5f5;
}

.login_usuario form{
    width: 100%;
}

.login_usuario input{
    height: 40%;
    width: 100%;
    box-sizing: border-box;
    padding: 10 px 20 px;
    margin: 5 px 0;
    border: 1 px solid #79b5f5;
}

.login_usuario button{
    width: 100%;
    height: 40 px;
    color: #fff;
    background: #79b5f5;
    border: 1 px solid #fff;
    border-radius: 5 px;
    padding: 10 px 25 px;
    margin: 5 px;
    background-color:#283747;
}

.login_usuario button:hover{
    color: black;
    background: crimson;
    border: 1 px #79b5f5;
}
</style>