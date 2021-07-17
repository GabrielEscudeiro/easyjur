import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioLogado: {
      id: "001",
      nome: "Rafael",
    },
    mensagens: [
      {
        id: 0,
        lida: false,
        remetente: "Rafael ",
        destinatário: "Vinicius",
        titulo: "Reunião de amanhã",
        mensagem: "A reunião com o cliente está marcada para às 10h. O link foi mandado por email.",
      },
      {
        id: 1,
        lida: false,
        remetente: "Rafael",
        destinatário: "Lucas",
        titulo: "Fatura Futura",
        mensagem: "O lançamento da fatura ficou acertado para semana que vem. ",
      },
      {
        id: 2,
        lida: false,
        remetente: "Ricardo",
        destinatário: "Rafael",
        titulo: "Problema de impressora",
        mensagem: "Estamos tentando achar uma solução para o problema da impressora da Roberta.",
      },
      {
        id: 3,
        lida: true,
        remetente: "Clara",
        destinatário: "Rafael",
        titulo: "Ajustes de projeto",
        mensagem: "Se puder, realize uns ajustes no projeto. A lista está em anexo",
      },
    ],
    sidebar: false,
  },
  mutations: {
    ALTERNA_SIDEBAR(state) {
      state.sidebar = !state.sidebar;
    },
  },
  actions: {
    alternaSidebar(context) {
      context.commit("ALTERNA_SIDEBAR");
    },
  },
  getters: {
    mensagensNaoLidas(state) {
      return state.mensagens.filter((msg) => !msg.lida);
    },
  },
  modules: {},
});
