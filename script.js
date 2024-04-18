const {createApp} = Vue;

createApp({
  data(){
    return{
      title:'dischi da stampare',
      apiUrl: 'server.php',
      list: [],
      newdisco:{
        title: '',
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
      
    }

  },

  mounted(){
    this.getApi();
  }
}).mount('#app')