const state = {
    all: [],
    /*
    actual: {
        nombre:'',
        direccion:'',
        tlf:'',
        email:''
    }
    */
}

const getters = {
    tolosClientes: state => state.all
}

const mutations = {
    pushCliente (state, {cliente}) {
        state.all.push({
            cliente
        })
    },
    /*
    setActual (state, {cliente}){
        state.actual=cliente
    }
    */
}

const actions = {
    addCliente ({state, commit}, cliente){
        commit('pushCliente', {cliente})
        /*
        cliente= {
            nombre:'',
            direccion:'',
            tlf:'',
            email:''
        }
        commit('setActual',{cliente})
        */
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }