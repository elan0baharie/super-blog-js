import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    saveBlog1() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog2', params);
    }
  }


});
