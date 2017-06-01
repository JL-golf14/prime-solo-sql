new Vue({

    el:'#app',

    mounted()

    data: {
        name:'',
        description:'',

    },

    methods:{
        onSubmit() {
            axios.post('/projects', this.$data)
        }
    }
})