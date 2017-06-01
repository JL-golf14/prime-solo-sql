<template>
 <div id="app">
<app-todo></app-todo>
 </div>
</template>

<script>
Object.definePrototype(Vue.prototype, '$moment', { value: moment });
Vue.component('app-todo',Todo);
export default {
  
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    },

  created() {
    console.log('The time is ' . this.$moment().format("HH:mm"));
  }
}
  

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
