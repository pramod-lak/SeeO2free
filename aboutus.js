new Vue({
  el: '#app',
  data: {
      comments: [],
      newComment: {
          name: '',
          comment: ''
      }
  },
  methods: {
      addComment() {
          this.comments.push({ ...this.newComment });
          this.newComment.name = '';
          this.newComment.comment = '';
      }
  }
});