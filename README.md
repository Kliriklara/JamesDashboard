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
* has KO Observables

KO Observables is somewhat equivalent to Ember properties. But are some differences. In Ember, the dependencies of properties are defined by the developer. In Knockout Observables are automatically determined. 


When I loop through my collection in handlebars I end up with a bunch of metamorph code around my items:
<script id="metamorph-105-start" type="text/x-placeholder"></script>

ember.js a little bit more magic. only updating the dom where something changed. with metamorphs 
ows for the most declarative code and has a significant amount of effort put into only updating the part of the DOM that changes on object update (uses metamorph, it's a clever hack).

schneller 
http://jsperf.com/angular-vs-knockout-vs-ember/10


## Bootmetro
[Bootmetro](http://aozora.github.com/bootmetro/) is a Windows 8 Metro style web library, which is built on top of Twitter Bootstrap and provides some styles and javascript snippets for a Windows 8 App feeling. 
### Other Modern UI Style Libraries
I found some interesting 

Template http://metro-webdesign.info/
https://github.com/oazabir/Droptiles
This one is built using ASP.NET

jquery plugin easily enable metro interfaces on the web 
http://www.drewgreenwell.com/projects/metrojs
http://jqmetro.codeplex.com/


## How it works 

The most important .. to realise ... is the method observables(). It is called on the KnockoutJS namespace ko. Observables are special JavaScript objects, that can notify subscribers about changes and automatically detect dependencies. This allows us to syncronize Models and ViewModels when the value of a Model attribute is modified. 


```
node start.js
```
## Improvements 
drag&drop
server
edit 


## Copyright

Copyright (c) 2013 Klara Pum. Released under the terms of the BCD license.