var $ = require('jquery');

module.exports = {
	PostSwitchOn: function () {
  var url="http://localhost:3001/api/stuff.json";
  $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      cache:false,
      data:{
        Switch:'on',
      },
      success: function(Hub) {
        console.log('success');
          // console.log('success' + '{' + user.type + ' ' + user.status + '}');
      },
      error: function(xhr, status, err) {
          console.error(url, status, err.toString());
          console.log('fail to post');
      }
  });
},

PostSwitchOff: function() {
  var url="http://localhost:3001/api/stuff.json";
  $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      cache:false,
      data:{
          Switch:'off',
        },
      success: function(Hub) {
          //console.log('success' + '{' + user.type + ' ' + user.status + '}');
          console.log('success');
      },
      error: function(xhr, status, err) {
          console.error(url, status, err.toString());
          console.log('fail to post');
      }
  });
},

PostLightOn: function() {
  var url="http://localhost:3001/api/stuff.json";
  $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      cache:false,
      data:{
        Light: 'on',
      },
      success: function(Hub) {
        //  console.log('success' + '{' + user.type + ' ' + user.status + '}');
        console.log('success');
      },
      error: function(xhr, status, err) {
          console.error(url, status, err.toString());
          console.log('fail to post');
      }
  });
},

PostLightOff: function() {
  var url="http://localhost:3001/api/stuff.json";
  $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      cache:false,
      data:{
        Light: 'off',
      },
      success: function(Hub) {
        //  console.log('success' + '{' + user.type + ' ' + user.status + '}');
        console.log('success');
      },
      error: function(xhr, status, err) {
          console.error(url, status, err.toString());
          console.log('fail to post');
      }
  });
},

GetCall: function() {
  var url="http://localhost:3001/api/stuff.json";
  $.ajax({
    url: url,
    dataType: 'json',
    cache:false,
    success: function(Hub) {
        console.log('success' + '{' + Hub.Light + ' ' + Hub.Switch + '}');
        if (Hub.Light === 'on') {
            this.setState({alt_light: true});
            //console.log(this.state.alt_image);
        }
        else if (Hub.Light === 'off' ) {
            this.setState({alt_light: false});
            //console.log(this.state.alt_image);
        }
       if (Hub.Switch === 'on') {
            this.setState({alt_switch: true});
            //console.log(this.state.alt_image);
        }
      else if (Hub.Switch === 'off' ) {
            this.setState({alt_switch: false});
            //console.log(this.state.alt_image);
        }    
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(url, status, err.toString());
        console.log('fail to get');
    }
  });
 }
};
// close postSwitch

