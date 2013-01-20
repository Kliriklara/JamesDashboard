function Tile(name, link, initialColor) {
  var self = this; 
  self.name = name; 
  self.link = link; 
  self.color = ko.observable(initialColor); 
}

function TilesViewModel() {
    var self = this; 

    this.currentTile = new Tile();

    self.availableColors =[
      { value: "dark blue", key: "bg-color-blueDark" },
      { value: "orange", key: "bg-color-orange" },
      { value: "dark green", key: "bg-color-greenDark" },
      { value: "purple", key: "bg-color-purple" },
      { value: "red", key: "bg-color-red" },
      { value: "yellow", key: "bg-color-yellow" },
      { value: "blue", key: "bg-color-blue" }     
    ];

    self.tiles = ko.observableArray([
      new Tile("localhost", "localhost:3000", self.availableColors[0]), 
      new Tile("confluence", "http://goltermann.cc:8090/dashboard.action", self.availableColors[0])
    ]); 

    self.addTile = function(formData) {
      self.tiles.push(new Tile(formData[0].value, formData[1].value, formData[3].value));
    }
}

// Activates knockout.js
ko.applyBindings(new TilesViewModel());