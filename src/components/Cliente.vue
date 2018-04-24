<template>
    <div>
        <input type="text" placeholder="nombre" v-model="cliente.nombre"/><br/>
        <input type="text" placeholder="direccion" v-model="cliente.direccion"/><br/>
        <input type="text" placeholder="tlf" v-model="cliente.tlf"/><br/>
        <input type="text" placeholder="email" v-model="cliente.email"/><br/>

        <button @click="addCliente(cliente)">Cliente para timón holandes</button>

        <ul>
            <li v-for="client in clientes">
                ----- {{ client.cliente.nombre }}
            </li>  
        </ul>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            cliente: {
                nombre:'',
                direccion:'',
                tlf:'',
                email:''
            }
        }
    },
    computed: mapGetters({
        clientes: 'tolosClientes'
    }),
    methods: mapActions ([
        'addCliente'
    ])
}
</script>



