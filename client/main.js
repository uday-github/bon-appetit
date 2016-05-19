
/// routing 

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
/* This is the default template to be used for layout. It is a global template with other templates inside it. */


/*  Now we configure different routes */

Router.route('/', function () {
  this.render('welcome', {
    to:"main"  /// Welcome template will be rendered into the main section in the application template 
  });
});



Router.route('/random-choice', function () {
  this.render('navbar', {
    to:"navbar" 
  });

  this.render('display', {
    to:"main" 
  });

});


/// Helper functions 


  Template.display.helpers({
     invalidContinent:function(){
      if(Session.get('validContinent')){
        return false;
      }
      else{
        return true;
      }
    }

  });
  
  Template.info_Display.helpers({
    /*
  	submitStatus:function(){
  		if(Session.get('userSubmit')){
        console.log('A continent from database is found!');
        return true;
  		}
  		else{
  			return false;
  		}
  	},
    */
    getRegion:function(){
      if(Session.get('userRegion')){
        var region = Session.get('userRegion');
        console.log('This is the country selected'+ region.Country);
        return region; 
      }
      else{
        return false;
      }

    },
    getLocation:function(){
      if(Session.get('userLocation')){
        var locale = Session.get('userLocation');
        return locale;
      }
      else{
        return false;
      }
    },
    localeStatus:function(){
      if(Session.get('userLocation')){
        return true;
      }
      else {
        return false;
      }
    },
    continentStatus:function(){
       if(Session.get('validContinent')){
        console.log('A continent is found from the database !');
        return true;
      }
      else {
        return false;
      }
    }


 });	
   
   Template.choice_form.events({
    "submit .js-submit-choice":function(event){
    	
            // Getting the continent out of the form 
            var user_continent = event.target.Continent.value;
            var user_location = event.target.Location.value;
            console.log("The location entered is "+ user_location); 
            console.log("The continent entered is "+ user_continent);


           // Code for displaying the Random country and the info.
            console.log(user_continent); 
            
             // var user = Cuisines.findOne({Continent:user_continent}); /* Find the object with same country as the one enetered */
             var user; 
             user = Cuisines.findOne({Continent:user_continent});

             if(!user){
              // No Continent is found out 
                Session.set('validContinent',false);
              }
              else {
                  
                 console.log(user);
         
                 // Pick a random country from an array of countries 
                 var items = user.Countries; 
                 console.log(items);
                 
                 var arraylength = items.length;
                 console.log(arraylength);
                 var random_index = Math.floor(Math.random()*arraylength);

                 var region = items[random_index];
                 //Session.set('userSubmit',true);
                 Session.set('validContinent',true);
                 Session.set('userRegion',region);
                 
                  if(!user_location){
                      Session.set('userLocation',false);
                    }
                  else {
                      Session.set('userLocation',user_location);
                  }
              }
        return false; // stops the browser from the default action, which is reloading in this case 
     }

   });

