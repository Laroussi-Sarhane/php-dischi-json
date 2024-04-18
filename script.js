const {createApp} = Vue;

createApp({
  data(){
    return{
      title:'dischi da stampare',
      apiUrl: 'server.php',
      list: [],
      newdisco:{
        title: '',
        author:'',
        year: '',
        poster:'',
        genre: ''
      }
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result=>{
        console.log(result.data);
        this.list = result.data;
      })
    },

    addNewDisco(){
      console.log(this.newdisco);
      // per far leggere al server php devo strutturare i dati come se fossero dentro ad un form
      // invio con axios i post in data e poi aggiorno con i dati che ricevo
      const data = new FormData();
      data.append('newDiscoTitle', this.newdisco.title);
      data.append('newDiscoAuthor', this.newdisco.author);
      data.append('newDiscoYear', this.newdisco.year);
      data.append('newDiscoPoster', this.newdisco.poster);
      data.append('newDiscoGenre', this.newdisco.genre);

      axios.post(this.apiUrl, data)
      .then(result=> {
        this.list = result.data;
      })

    }

  },

  mounted(){
    this.getApi();
  }
}).mount('#app')