import Vue from 'vue';
import App from './App.vue';
import Todo from './todo.vue';
import Input from './Input.vue';
import moment from './moment.vue';

Vue.component('app-todo',Todo);

new Vue({
  el: '#app',


  render: h => h(App)
})
