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
        return tile.section() == "socialmedia";s
      });
    });
}

// Activates knockout.js
ko.applyBindings(new TilesViewModel());
})();