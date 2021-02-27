import { createStore } from 'vuex'
import { authState } from './modules/auth.state'
const publicPath = process.env.BASE_URL

export default createStore({
  state: {
    movieCollections: [],
    topMovies: [],
    searchTerm: '',
    heroImg: `${publicPath}imgs/img1landscape.jpg`,
    img: ''
  },
  mutations: {
    setMovieCollections: (state, payload) => state.movieCollections = payload,
    setTopMovies: (state, payload) => state.topMovies = payload,
    setSearchTerm: (state, payload) => state.searchTerm = payload
  },
  actions: {
    async getMovieCollections({ commit }) {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2831d779a92f033897043c753b3e9cd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const p = await res.json()
      console.log(p)
      commit('setMovieCollections', p)
    }
  },
  getters: {
    heroImage: state => state.heroImg
  },
  modules: {
    authState
  }
})
