<template>
<div id="Inicio">
    <div class="formulario">
        <div class="formulario">              
                    <form action="" method="">
                        <h1>CALENDARIO DE RESERVAS</h1>
                        <label>Fecha de llegada</label>
                        <div>
                            <table style="width: 100%">
                                <tbody>
                                    <tr>
                                            <td>Dia<input v-model="fid" type="number" min="1" max="31"></td>
                                            <td>Mes<input v-model="fim" type="number" min="1" max="12"></td>
                                            <td>Año<input v-model="fia" type="number" min="2000" max="2050"></td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                        <label>Fecha de salida</label>
                        <div>
                            <table style="width: 100%">
                                <tbody>
                                    <tr>
                                            <td>Dia<input v-model="ffd" type="number" min="1" max="31"></td>
                                            <td>Mes<input v-model="ffm" type="number" min="1" max="12"></td>
                                            <td>Año<input v-model="ffa" type="number" min="2000" max="2050"></td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                        <label>Tipo de Habitaciones</label> 
                            <select v-model="type" name="tipo">
                                <option>simple</option>
                                <option>duplex</option>
                                <option>vip</option>                           
                            </select>
                        <label>No. Personas</label>
                            <select v-model="number" name="numero">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>                             
                        <button @click.prevent="getCalendario()">Buscar</button>
                        <p>{{cal[0]}}</p>         
                    </form> 
    </div>

</div>
</div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'

export default{
    name:"CCalendario",
    data: function(){
    return{
        ee: Object,
        cal: Object,
        fid: 0,
        fim: 0,
        fia: 0,
        ffd: 0,
        ffm: 0,
        ffa: 0,
        type: "",
        number: 0
    }
  },

  methods: {
    getCalendario(){
        axios.get('https://backh0tel.herokuapp.com/info/calendario?fid='+this.fid+'&fim='+this.fim+'&fia='+this.fia+'&ffd='+this.ffd+'&ffm='+this.ffm+'&ffa='+this.ffa+'&t_habitacion='+this.type+'&n_personas='+this.number)
        .then( response => {
        this.cal=response.data,
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
</style>