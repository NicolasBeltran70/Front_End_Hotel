<template>
<div id="App">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hotel MisionTIC</title>
        <link rel="shortcut icon" href="../img/misionTic.png" type="image/x-icon">
        <link rel="stylesheet" href="../css/estilos1.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet">

    </head>
    <body>
        <header>           
            <table style="width: 100%">
                <tbody>
                  <tr>
                    <td style="width: 249.067px;"><img src="../img/logo.jpg" alt="Logo"          
                        title="Loo" style="width: 270px; height: 120px;"><br>
                    </td>
                    <td ><br>
                    </td>
                    <td><router-link to="/">INICIO</router-link></td>
                    <td><router-link to="/consulta/calendario">CALENDARIO RESERVA</router-link></td>
                    <td><router-link to="/consulta/reserva">CONSULTA TU RESERVA</router-link></td>          
                  </tr>
                </tbody>
            </table>          
        </header>
        <main>  
            <div class="cuerpo">           
                <article class="contenedor"> 
                    <router-view></router-view>            
                </article>                
                <article class= "contenedor">
                    <img src="../img/estandar_simple_1.jpg" alt="" class ="imagen-habitacion">
                </article>               
            </div>     

        </main>
        <footer>
            <div class ="contenedor-footer">
                <div class="contenedor-foo">
                    <h4>Teléfono</h4>
                    <p>057 3589045</p>                
                </div>
                <div class="contenedor-foo">
                    <h4>E mail</h4>
                    <p>info@misionticresort.com</p>                
                </div>
                <div class="contenedor-foo">
                    <h4>Ubicación</h4>
                    <p>Bogotá - Colombia</p>                
                </div>        
            </div>
        </footer>
    </body>   

</div>
</template>



<script>
export default {
  name: 'App'
}
</script>

<style>
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

body{
    font-family: 'open sans';    
}

header{     
  
    width: 100%;
    height: 122px;
    background:#1e2649;  
}

td {
    text-align: center;
}
  
td >a{
    color:#fff;
    font-weight: 200;
    text-decoration: none;
    margin-right: 30px;
}
td >a:hover{
    text-decoration: underline;
    color:#4c62c4;
}

article{     
  
    width: 100%;
    height: 100%; 
}

.cuerpo{
    display: grid;
    grid-template-areas:
    "img1 img2";         
    padding: 20px 20px 20px 20px;
    gap:20px;
}

.imagen-habitacion{  
    width: 100%;
    height:100%;     
    border-radius: 10px; 
    display: flex;   
}

.contenedor:nth-of-type(1){
    grid-area: img1;
}
.contenedor:nth-of-type(2){
    grid-area: img2;
}

form{       
    background: #fff;
    border-radius:10px;
    box-shadow: 0 0 6px 0 rgba(17, 27, 70, 0.8); 
    margin: auto;
    text-align: left;    
    padding: 30px 30px 30px 30px;      
  }

form h1{
    text-align: center;
    color: #1e2649;
    padding: 0 0 20px 0;


}
label{
    color:#4c62c4;
    display: block;
    font-size: 18px;
    padding: 10px 0 10px 0;   
}

input{
    color:#1e2649;
    font-size: 18px;
    display: block;
    padding: 10px 10px 10px 10px; 
}
select{
    font-size: 18px;
    display: block;
    padding: 10px 10px 10px 10px;   
}

  button{
    background:#1e2649;
    display:block;
    width: 200px;
    height: 60px;
    border:none;
    color:#fff;
    border-radius: 4px;
    font-size: 20px;
    margin: 10px auto;
    cursor: pointer;
}


footer{
    background: #1b2138;
    padding: 10px 0 30px 0;
    margin: auto;
    overflow: hidden;
}


.contenedor-footer{
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    margin: auto;
    padding-bottom: 50px;    
}

.contenedor-foo{
    text-align: center;
}

.contenedor-foo h4{
    color: #fff;
    border-bottom: 3px solid #fff;
    padding-bottom: 5px;
    margin-bottom: 10px;

}

.contenedor-foo p{
    color: #fff
}



</style>

