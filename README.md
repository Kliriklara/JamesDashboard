# Admin-Dashboard with KnockoutJS and BootMetro
The Dashboard should provide a collection of all necessary websites, resources, wikis, social media accounts, which come along with our masterproject [J#MES](https://www.facebook.com/pages/JAMES/222346854538989). We work with pivotaltracker, confluence, we look up many documentations while working (ember.js, rails, rspec, ...) and we have some social media accounts (facebook, twitter, instagram). It would be really nice to have them all in one place, rather than bookmarking the sites or typing in the URL every single time. 

This article describes some differences between KnockoutJS and EmberJS and shows how to set up a basic dashboard-app with the UI-focused JavaScript Framework [KnockoutJS](https://github.com/SteveSanderson/knockout) and the JavaScript/CSS Framework [Bootmetro](http://aozora.github.com/bootmetro/) for the Modern UI Webapp Style.

## What is KnockoutJS?
[KnockoutJS](https://github.com/SteveSanderson/knockout) is an open source JavaScript framework which allows developers, to create rich user interfaces with a clean underlying data model. It implements the Model-View-ViewModel (MVVM) pattern  which is specially targeted at modern UI platform development. It is known for its declarative bindings and the automatic UI updates when the underlying data model changes. In addition it is very lightweight and has no dependencies. The MVVM pattern attempts to separate the development of user-interface from the logic and the behaviour in an application. The Model represents the domain-specific data (in the dashboard-project it would be one tile with its attributes). The formatting of data, data-bindings, events and behaviours which require an understanding of the Model and ViewModel are handled by the view. The logic, which interacts with the model is placed in the ViewModel. In KnockoutJS the model often makes Ajax calls to a server-side service to read and write data. 

## EmberJS vs. KnockoutJS 
Since we are using Ember.js in our masterproject, i was keen on figuring out the main differences between those two Frameworks. 
Both agreed on making use of model-view seperation. Ember has implemented the MVC pattern and Knockout has the MVVM pattern. Both have data-binding and auto updating views.

Main differences are:

Ember: 
* Ember has bulit-in string-based templates which are mandatory
* Router is included since version 1.0.0
* Built in data-storage, which can be overwritten 
* has computed properties

Knockout: 
* DOM-based templates (optional, can do string-based too)
* URL routing is NOT included
* Data-Storage is also NOT included
* Implement custom behaviours as new declarative bindings
* has very nice interactive tutorials
* has KO Observables

KO Observables is somewhat equivalent to Ember properties. But are some differences. In Ember, the dependencies of properties are defined by the developer. In Knockout they are automatically determined. Ember has also a great implementation of only updating the part of the DOM that actually changes when a object is updated. It wraps some metamorph code around the code. That might affect the legibility of the source code but does not have any impacts on the application itself. The metamorph code looks like that: 

```
<script id="metamorph-105-start" type="text/x-placeholder"></script>
```

I also found a chart, which says that KnockoutJS is faster than EmberJS: http://jsperf.com/angular-vs-knockout-vs-ember/10. But that should not be the main criteria when choosing between those two. 


## Bootmetro
[Bootmetro](http://aozora.github.com/bootmetro/) is a Windows 8 Metro style web library, which is built on top of Twitter Bootstrap and provides some styles and javascript snippets for a Windows 8 App feeling. 

### Other Modern UI Style Libraries

There are other interesting libraries for creating Windows 8 style web applications: 
* Template http://metro-webdesign.info/
* Droptiles https://github.com/oazabir/Droptiles
* MetroJS http://www.drewgreenwell.com/projects/metrojs
* jQuery Metro http://jqmetro.codeplex.com/


## How it works 

### Include Bootmetro 
Include styles which come with the Bootmetro Library at the top of the application and the javasript files at the bottom. 

```
<!-- top -->
<link rel="stylesheet" type="text/css" href="bootmetro/css/bootmetro.css">
<!-- bottom -->
<script type="text/javascript" src="bootmetro/scripts/bootmetro.js"></script>
```
Then you should already be able to use some predefined classes like "container-fluid", "row-fluid" (from twitter bootstrap) and "metro-sections", "tile" for some nice modern UI style rectangles. 

### Working with KnockoutJS
Include the framework. 

```
<!-- top -->
<script type='text/javascript' src='knockout-2.2.1.js'></script>
```

The most important line is the following: 
```
ko.applyBindings(new TilesViewModel());
```
It is called on the KnockoutJS namespace ko and activates the important "data-bind" attribute of KnockoutJS. 

Now we can use Observables, which are special JavaScript objects, that can notify subscribers about changes and automatically detect dependencies. This allows us to syncronize Models and ViewModels when the value of a Model attribute is modified. 

```
self.name = ko.observable();
self.color = ko.observable(); 
```

### Organization of the application
Model: 
```
function Tile(data) {
  var self = this; 
  self.name = ko.observable(data.name); 
  self.color = ko.observable(data.color); 
  self.link = ko.observable(data.link); 
  self.section = ko.observable(data.section);
}
```
ViewModel: 
```
function TilesViewModel() {
  addTile = function() {};                      // add a tile
  removeTile = function() {};                   // remove a tile
  self.availableColors = [];                    // array with predefined colors
  self.sections = [];                           // array with predefined sections
  self.tiles = ko.observableArray([]);
  self.developmentTiles = ko.computed(function() {}
}
```

View: 
```
<div data-bind="foreach:developmentTiles">
   <a class="tile" data-bind="attr: { href: link, title: name}" target="_blank"> 
      <span class="app-label" data-bind="text: name"></span>
   </a>
</div>
```

## Improvements 
drag&drop
server
edit 


## Copyright

Copyright (c) 2013 Klara Pum. Released under the terms of the BCD license.