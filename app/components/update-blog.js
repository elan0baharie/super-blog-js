import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
