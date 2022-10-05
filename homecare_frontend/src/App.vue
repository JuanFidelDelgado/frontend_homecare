<template>
  <div id="app" class="app">
      <div class="header">
          <h1></h1>
          <nav>
            <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
            <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
            <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
            <button v-if="is_auth" v-on:click="loadRequestUsuario"> Consultar Usuario </button>
            <button v-if="is_auth" v-on:click="loadDeleteUsuario"> Eliminar Usuario </button>
            <button v-if="is_auth" v-on:click="loadPutUsuario"> Modificar Usuario </button>
            <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
          </nav>
      </div>
      <div class="main-component">
        <router-view
          v-on:completedLogIn="completedLogIn"
          v-on:completedSignUp="completedSignUp"
          v-on:logOut="logOut"
          v-on:loadRequestUsuario="loadRequestUsuario"
          v-on:loadDeleteUsuario="loadDeleteUsuario"
          v-on:loadPutUsuario="loadPutUsuario">
        </router-view>
      </div>
      <div class="footer">
        <h2>HOMECARE - Desarrollado por FullStack-2022</h2>
      </div>
  </div>
</template>

<script>
  export default{
    name: 'App',
    data: function(){
      return{
        is_auth:false
      }
    },
    components:{},
    methods:{
      verifyAuth: function(){        
        this.is_auth = localStorage.getItem("isAuth") || false;
        if(this.is_auth == false)
          this.$router.push({name: "logIn"});       
        else 
          this.$router.push({ name: "Home" });  
        
      },
      loadLogIn: function(){
        this.$router.push({name: "logIn"})
      },
      loadSignUp: function(){
        this.$router.push({name: "signUp"})
      },
      completedLogIn: function(data) {
        localStorage.setItem('isAuth', true);
        localStorage.setItem("username", data.username);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        alert("Autenticación Exitosa");
        this.verifyAuth();
        },
      completedSignUp: function(data) {
        alert("Registro Exitoso");
        this.completedLogIn(data);
      },
      loadHome: function(){
        this.$router.push({name: "Home"});
      },
      logOut: function(){
        localStorage.clear();
        alert("Sesion Finalizada");
        this.verifyAuth();
      },
      loadRequestUsuario: function(){
        this.$router.push({name:"RequestUsuario"});
      }, 
      loadDeleteUsuario: function(){
        this.$router.push({name:"DeleteUsuario"});
      }, 
      loadPutUsuario: function(){
        this.$router.push({name:"PutUsuario"});
      },
      completedRequestUsuario: function(data){
        alert("Consulta exitosa");
        this.completedRequestUsuario(data);
      },
      loadPostpsalud: function(){
        this.$router.push({name:"Postpsalud"});
      },
      loaddeletepsalud: function(){
        this.$router.push({name:"deletepsalud"});
      },
      loadgetpsalud: function(){
        this.$router.push({name:"getpsalud"});
      },
      loadputpsalud: function(){
        this.$router.push({name:"putpsalud"});
      },
    },
    created: function(){
      this.verifyAuth()
    }
  }
</script>

<style>
body{
  margin: 10 10 10 10;
}
.header{
  margin:0;
  padding:0;
  width:100%;
  height:20vh;
  min-height:100px;
  background-color: #84c8ea;
  color:#E5E7E9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("./images/homeCareLogo.jfif");
  background-repeat: no-repeat;
}
.header h1{
  width: 20%;
  text-align: center;
}
.header nav{
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button{
  color: #E5E7E9;
  background:#283747;
  border:2px solid #283747;
  border-radius:5px;
  padding: 10px 20px;
  font-size: small;
}
.header nav button:hover {
  color:black;
  background: white;
  border: 2px solid white;
}
.main-component{
  height:75vh;
  margin: 0%;
  padding: 0%;
  background-image: url('./images/left-img.jpg');
  background-size: auto;
  opacity: 0.8;
}
.footer{
  margin:0;
  padding:0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #84c8ea;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}  
</style>