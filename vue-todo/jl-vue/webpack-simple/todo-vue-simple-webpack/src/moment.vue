
<<script>
    
Vue.prototype.$moment = moment;
Object.definePrototype(Vue.prototype, '$moment', { value: moment });
export default {
  created() {
    console.log('The time is ' . this.$moment().format("HH:mm"));
  }
}
</script>