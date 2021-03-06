import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  authorize: function(jqXHR) {
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.token'))) {
      jqXHR.setRequestHeader('Authorization', 'Token: ' + this.get('session.token'));
    }
  }
});
