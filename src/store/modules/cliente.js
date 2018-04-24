const state = {
    all: []
}

const getters = {
    tolosClientes: state => state.all
}

const mutations = {
    pushCliente (state, {cliente}) {
        state.all.push({
            cliente
        })
    }
}

const actions = {
    addCliente ({state, commit}, cliente){
        commit('pushCliente', {cliente})
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }