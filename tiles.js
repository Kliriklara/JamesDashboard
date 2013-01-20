(function() {

  function Tile(data) {
    var self = this; 
    self.name = ko.observable(data.name); 
    self.color = ko.observable(data.color); 
    self.link = ko.observable(data.link); 
    self.section = ko.observable(data.section);
    self.icon = data.icon;
    self.width = data.width;
    self.style = data.style;
    self.texty = data.texty;
    self.image = data.image; 
  }

  function TilesViewModel() {
      var self = this; 

      self.name = ko.observable();
      self.color = ko.observable(); 
      self.link = ko.observable();
      self.section = ko.observable();

      self.addTile = function() {
        var self = this; 
        var section = ""; 

        if (self.section().name === "documentations") { section = 1 }
        if (self.section().name === "socialmedia") { console.log("adf"); section = 2; }
        else section = 0; 

        if (self.name()) {
          self.tiles.push(new Tile({ 
            name: self.name(), 
            color: self.availableColors[2], 
            link: self.link(), 
            section: self.sections[section].name
          }));
        }
      };

      self.removeTile = function(tile) { self.tiles.remove(tile) }

      self.availableColors = [
        { name: "dark blue", key: "bg-color-blueDark" },
        { name: "orange", key: "bg-color-orange" },
        { name: "dark green", key: "bg-color-greenDark" },
        { name: "purple", key: "bg-color-purple" },
        { name: "red", key: "bg-color-red" },
        { name: "yellow", key: "bg-color-yellow" },
        { name: "blue", key: "bg-color-blue" }     
      ];

      self.sections = [
        { name: "development" },
        { name: "documentations"}, 
        { name: "socialmedia"}
      ];

      self.tiles = ko.observableArray([
        new Tile({ name: "localhost", section: "development", link: "localhost:3000", icon: "icon-home-3", style: "app "+self.availableColors[0].key}), 
        new Tile({ name: "confluence", section: "development", link: "http://goltermann.cc:8090/dashboard.action", icon: "icon-new", style: "app "+self.availableColors[2].key}), 
        new Tile({ name: "pivotaltracker", section: "development", link: "https://www.pivotaltracker.com/projects/464183", style: "wide imagetext "+self.availableColors[1].key, texty: "Pivotal Tracker is a simple, effective, agile project management tool that allows your team to collaborate ..."}), 
        new Tile({ name: "sublime text IDE", section: "development", link: " http://www.sublimetext.com/", icon: "icon-pen-alt2", style: "app "+self.availableColors[4].key}), 
   
        new Tile({ name: "twitter bootstrap", section: "documentations", link: "http://twitter.github.com/bootstrap/", style: "wide imagetext "+self.availableColors[6].key, image: "bootmetro/img/My Apps.png", texty: "Sleek, intuitive, and powerful front-end framework for faster and easier web development"}), 
        new Tile({ name: "ember.js", section: "documentations", link: "http://emberjs.com/", style: "wide imagetext "+self.availableColors[0].key, image: "bootmetro/img/My Apps.png", image: "bootmetro/img/RegEdit.png", texty: "A framework for creating ambitious web applications."}), 
        new Tile({ name: "SASS rails", section: "documentations", link: "https://github.com/rails/sass-rails", image: "bootmetro/img/Devices.png", style: "app "+self.availableColors[0].key}), 
        new Tile({ name: "Compass", section: "documentations", link: "http://compass-style.org/", style: "app "+self.availableColors[4].key}), 
        new Tile({ name: "Ruby Gems", section: "documentations", link: "http://rubygems.org/gems/rails", style: "app "+self.availableColors[2].key}), 

        new Tile({ name: "facebook", section: "socialmedia", link: "https://www.facebook.com/pages/JAMES/222346854538989", style: "app "+self.availableColors[6].key, icon: "icon-facebook-2"}), 
        new Tile({ name: "vimeo", section: "socialmedia", link: "http://vimeo.com/56994473", style: "app "+self.availableColors[5].key, icon: "icon-vimeo"}), 
        new Tile({ name: "twitter", section: "socialmedia", link: "https://twitter.com/jamesapp_com", style: "app "+self.availableColors[1].key, icon: "icon-twitter"}), 
        new Tile({ name: "instagram", section: "socialmedia", link: "http://vimeo.com/56994473", style: "app "+self.availableColors[4].key, icon: "icon-share"}), 
      ]); 

      self.developmentTiles = ko.computed(function() {
        return self.tiles().filter(function( tile ) {
          return tile.section() == "development";
        });
      });
      self.documentationsTiles = ko.computed(function() {
        return self.tiles().filter(function( tile ) {
          return tile.section() == "documentations";
        });
      });
      self.socialmediaTiles = ko.computed(function() {
        return self.tiles().filter(function( tile ) {
          return tile.section() == "socialmedia";
        });
      });
  }

  // Activates knockout.js
  ko.applyBindings(new TilesViewModel());

})();