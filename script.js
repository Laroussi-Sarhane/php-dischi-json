const {createApp} = Vue;

createApp({
  data(){
    return{
      title:'dischi da stampare',
      apiUrl: 'server.php',
      list: []
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result=>{
        console.log(result.data);
        this.list = result.data;
      })
    }
  },

  mounted(){
    this.getApi();
  }
}).mount('#app')