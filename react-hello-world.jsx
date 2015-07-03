var cx = React.addons.classSet;

var helloWorld = ReactMeteor.createClass({

  mixins: [ReactMeteor.Mixin],

  templateName: "helloWorld",

  render: function(){
    return <div>Hello World</div>;
  }
});
