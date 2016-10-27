
            var BrowserDetect = { 
  init: function () { 
  this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; 
  this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; 
  this.OS = this.searchString(this.dataOS) || "an unknown OS"; 
  }, 
  searchString: function (data) { 
  for (var i=0;i<data.length;i++) { 
  var dataString = data[i].string; 
  var dataProp = data[i].prop; 
  this.versionSearchString = data[i].versionSearch || data[i].identity; 
  if (dataString) { 
  if (dataString.indexOf(data[i].subString) != -1) 
  return data[i].identity; 
  } 
  else if (dataProp) 
  return data[i].identity; 
  } 
  }, 
  searchVersion: function (dataString) { 
  var index = dataString.indexOf(this.versionSearchString); 
  if (index == -1) return; 
  return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); 
  }, 
  dataBrowser: [ 
  { 
  string: navigator.userAgent, 
  subString: "Chrome", 
  identity: "Chrome" 
  }, 
  { string: navigator.userAgent, 
  subString: "OmniWeb", 
  versionSearch: "OmniWeb/", 
  identity: "OmniWeb" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "Apple", 
  identity: "Safari", 
  versionSearch: "Version" 
  }, 
  { 
  prop: window.opera, 
  identity: "Opera", 
  versionSearch: "Version" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "iCab", 
  identity: "iCab" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "KDE", 
  identity: "Konqueror" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "Firefox", 
  identity: "Firefox" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "Camino", 
  identity: "Camino" 
  }, 
  {  
  /* For Newer Netscapes (6+) */ 
  string: navigator.userAgent, 
  subString: "Netscape", 
  identity: "Netscape" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "MSIE", 
  identity: "Internet Explorer", 
  versionSearch: "MSIE" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "Gecko", 
  identity: "Mozilla", 
  versionSearch: "rv" 
  }, 
  {  
  /* For Older Netscapes (4-) */ 
  string: navigator.userAgent, 
  subString: "Mozilla", 
  identity: "Netscape", 
  versionSearch: "Mozilla" 
  } 
  ], 
  dataOS : [ 
  { 
  string: navigator.platform, 
  subString: "Win", 
  identity: "Windows" 
  }, 
  { 
  string: navigator.platform, 
  subString: "Mac", 
  identity: "Mac" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "iPhone", 
  identity: "iPhone/iPod" 
  }, 
  { 
  string: navigator.platform, 
  subString: "Linux", 
  identity: "Linux" 
  } 
  ] 

}; 
BrowserDetect.init(); 
 $(window).load(function() {
     

     var i = 0
     var t = 0

     function sticks() {
         if (arguments.length == 0) {
             $("#StickyBox").sticky({
                 topSpacing: 50,
             })
         };
     }

     if ($(window).width() > 765) {
         sticks()
         t++;
     } else {
         $("#StickyBox").addClass('posstick')
     }
     var widthli = 0;
     var heightli = 0
     var width = $('#navbar li a').each(function(index, element) {
         widthli += $(element).outerWidth()
         heightli += $(element).outerHeight()
     })
     widthli += 40;
     heightli += 40;

     function menu() {
         if ($("body").width() < widthli + 10) {
             $('#navbar li').addClass('togglemenuli')
             $('#navbar ul').addClass('togglemenuul')
             $('#navbar .but-taggle').show()

         } else if ($("body").width() > widthli + 10) {

             $('#navbar li').removeClass('togglemenuli')
             $('#navbar ul').removeClass('togglemenuul')
             $('#navbar ul').removeClass('ulanim')
             $('#navbar .but-taggle').hide()
             $('#navbar ul').height(0)

         }



     }
     menu()

     $(window).resize(function() {
         i++

         if ($(window).width() + (BrowserDetect.browser =="Chrome" || "Mozilla" ? 14 : 11)> 765) {
             i == 1 && t != 1 ? sticks() : false

             $("#StickyBox").removeClass('posstick')
         } else {
             i == 1 && t != 1 ? sticks() : false
             $("#StickyBox").addClass('posstick')
         }

         menu()

     })

     $(".but-taggle").click(function() {
         if ($('#navbar ul').height() > 0) {
             $('#navbar ul').height(0)
         } else
             $('#navbar ul').height(heightli)

         $('#navbar ul').addClass('ulanim')


     })


$('span.five').text(dtime(-5))
$('span.four').text(dtime(-4))
$('span.three').text(dtime(-3))
$('span.two').text(dtime(-2))
$('span.one').text(dtime(-1))
$('.divider1').text(dtime(-1))

 });
      
function dtime(d) {

        var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

        var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

        var now = new Date();
        now.setDate(now.getDate() + d + 1);
        return dayNames[now.getDay()] + ", " + (now.getDate()) + " " +monthNames[now.getMonth()] + ", " + now.getFullYear();
    }
      function addcomm() {
                            alert('Thank you for your comment!');

                            return true;
                        }


