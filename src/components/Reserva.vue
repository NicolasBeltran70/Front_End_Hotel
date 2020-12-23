<template>
<div id="Inicio">
    <div class="formulario">
        <form onsubmit="preventDefault()">
            <div class="form">
                <h2>CONSULTA TU RESERVA</h2>
                    <div class="grupo">
                        <label>Ingrese su No. de Cédula:</label>
                        <input v-model="cedula">                       
                    </div>
                        <button @click.prevent="getTodos()">Buscar</button> 
                        <div class="resultado">
                            <h4>Resultado de su reserva:</h4>
                            <br><br>

                            <table>
                                <tbody>
                                    <tr >
                                        <td>existe la reserva con el identificador:  </td><td>{{todos["id_reserva"]}}</td>
                                    </tr>
                                    <tr >
                                        <td>reservada a nombre de:  </td><td>{{todos["nom_usuario"]}}</td>
                                    </tr>
                                    <tr >
                                        <td>que reservo la habitacion de numero:  </td><td>{{todos["id_habitacion"]}}</td>
                                    </tr>
                                    <tr >
                                        <td>con un valor total de la reserva de:  </td><td>{{todos["precio_total"]}}</td>
                                    </tr>
                                    <tr >
                                        <td> la reserva que se encuentra actualmente en el estado de:  </td><td>{{todos["estado"]}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>                   
            </div>
        </form>
    </div>

</div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'

export default{
    name:"CReserva",
    data: function(){
    return{
      todos: Object,
      ee: Object,
      cedula:""
    }
  },

  methods: {
    getTodos(){
      axios.get('https://backh0tel.herokuapp.com/info/reserva/cc?cc='+this.cedula)
      .then( response => {
        this.todos=response.data,
        console.log(response.data)
       })
      .catch(e =>
      this.ee=e, 
      console.log(e))
    }


  }
}
</script>

<style >
div{
align-content: center;
}

tr {
    display: table-row-group;
    align-content: left;
    border-color: inherit;
}

</style>