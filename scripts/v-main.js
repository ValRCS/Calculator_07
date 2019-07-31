console.log('Started v-main');
// const myGlob = "Hmmmmm";

let app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ],
        seenval: true,
        message: 'Hello Vue!',
        dynamictitle: 'You loaded this page on ' + new Date().toLocaleString()
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('');
          this.todos[0].text = 'New Job on ' + new Date().toLocaleString();
        }
    }
  })