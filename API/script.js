



console.log('hello world');

// Click Strikethrough
// $(".DE, .ES, .FR, .UR, .FA, .AR, .RU, .KZ, .PO").click(function() {
//    $(this).toggleClass("strike");
// });

// Translate ARABIC
$(".syllables").keyup(function() {
    var value = $(this).val();

function start() {
    // Initializes the client with the API key and the Translate API.
    gapi.client.init({
      'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
    }).then(function() {
      // Executes an API request, and returns a Promise.
      // The method name `language.translations.list` comes from the API discovery.
      return gapi.client.language.translations.list({
        q: value,
        source: 'en',
        target: 'ar',
      });
    }).then(function(response) {
      console.log(response.result.data.translations[0].translatedText);
if (value !== "") {
$(".AR").html(response.result.data.translations[0].translatedText);
  $( ".AR" ).mouseenter(function() {
// if (!$(".AR").hasClass("strike")) {
       responsiveVoice.speak($(".AR").html(), "Arabic Male", {rate: 1.2});
  //  }
});
} else {
  $(".AR").html("عربي");
}
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };
   // Loads the JavaScript client library and invokes `start` afterwards.
   gapi.load('client', start);



 })
 .keyup();


 // Translate GERMAN
 $(".syllables").keyup(function() {
     var value = $(this).val();

 function start() {
     // Initializes the client with the API key and the Translate API.
     gapi.client.init({
       'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
       'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
     }).then(function() {
       // Executes an API request, and returns a Promise.
       // The method name `language.translations.list` comes from the API discovery.
       return gapi.client.language.translations.list({
         q: value,
         source: 'en',
         target: 'de',
       });
     }).then(function(response) {
       console.log(response.result.data.translations[0].translatedText);
 if (value !== "") {
 $(".DE").html(response.result.data.translations[0].translatedText);
 $( ".DE" ).mouseenter(function() {
// if (!$(".AR").hasClass("strike")) {
      responsiveVoice.speak($(".DE").html(), "Deutsch Female", {rate: 1.2});
 //  }
});
 } else {
   $(".DE").html("Deutsch");
 }
     }, function(reason) {
       console.log('Error: ' + reason.result.error.message);
     });

   };
    // Loads the JavaScript client library and invokes `start` afterwards.
    gapi.load('client', start);

  })
  .keyup();


  // Translate FARSI
  $(".syllables").keyup(function() {
      var value = $(this).val();

  function start() {
      // Initializes the client with the API key and the Translate API.
      gapi.client.init({
        'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
      }).then(function() {
        // Executes an API request, and returns a Promise.
        // The method name `language.translations.list` comes from the API discovery.
        return gapi.client.language.translations.list({
          q: value,
          source: 'en',
          target: 'fa',
        });
      }).then(function(response) {
        console.log(response.result.data.translations[0].translatedText);
  if (value !== "") {
  $(".FA").html(response.result.data.translations[0].translatedText);
  $( ".FA" ).mouseenter(function() {
 // if (!$(".AR").hasClass("strike")) {
       responsiveVoice.speak($(".FA").html(), "Arabic Male", {rate: 1.2});
  //  }
 });
  } else {
    $(".FA").html("فارسى");
  }
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    };
     // Loads the JavaScript client library and invokes `start` afterwards.
     gapi.load('client', start);

   })
   .keyup();

   // Translate RUSSIAN
   $(".syllables").keyup(function() {
       var value = $(this).val();

   function start() {
       // Initializes the client with the API key and the Translate API.
       gapi.client.init({
         'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
         'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
       }).then(function() {
         // Executes an API request, and returns a Promise.
         // The method name `language.translations.list` comes from the API discovery.
         return gapi.client.language.translations.list({
           q: value,
           source: 'en',
           target: 'ru',
         });
       }).then(function(response) {
         console.log(response.result.data.translations[0].translatedText);
   if (value !== "") {
   $(".RU").html(response.result.data.translations[0].translatedText);
   $( ".RU" ).mouseenter(function() {
  // if (!$(".AR").hasClass("strike")) {
        responsiveVoice.speak($(".RU").html(), "Russian Female", {rate: 1.2});
   //  }
  });
   } else {
     $(".RU").html("Pусский");
   }
       }, function(reason) {
         console.log('Error: ' + reason.result.error.message);
       });
     };
      // Loads the JavaScript client library and invokes `start` afterwards.
      gapi.load('client', start);

    })
    .keyup();

    // Translate KAZAKH
    $(".syllables").keyup(function() {
        var value = $(this).val();

    function start() {
        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
          'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
        }).then(function() {
          // Executes an API request, and returns a Promise.
          // The method name `language.translations.list` comes from the API discovery.
          return gapi.client.language.translations.list({
            q: value,
            source: 'en',
            target: 'kk',
          });
        }).then(function(response) {
          console.log(response.result.data.translations[0].translatedText);
    if (value !== "") {
    $(".KZ").html(response.result.data.translations[0].translatedText);
    $( ".KZ" ).mouseenter(function() {
   // if (!$(".AR").hasClass("strike")) {
         responsiveVoice.speak($(".KZ").html(), "Russian Female", {rate: 1.2});
    //  }
   });
    } else {
      $(".KZ").html("Қазақ");
    }
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      };
       // Loads the JavaScript client library and invokes `start` afterwards.
       gapi.load('client', start);

     })
     .keyup();

     // Translate POLISH
     $(".syllables").keyup(function() {
         var value = $(this).val();

     function start() {
         // Initializes the client with the API key and the Translate API.
         gapi.client.init({
           'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
           'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
         }).then(function() {
           // Executes an API request, and returns a Promise.
           // The method name `language.translations.list` comes from the API discovery.
           return gapi.client.language.translations.list({
             q: value,
             source: 'en',
             target: 'pl',
           });
         }).then(function(response) {
           console.log(response.result.data.translations[0].translatedText);
     if (value !== "") {
     $(".PO").html(response.result.data.translations[0].translatedText);
     $( ".PO" ).mouseenter(function() {
    // if (!$(".AR").hasClass("strike")) {
          responsiveVoice.speak($(".PO").html(), "Polish Female", {rate: 1.2});
     //  }
    });
     } else {
       $(".PO").html("Polskie");
     }
         }, function(reason) {
           console.log('Error: ' + reason.result.error.message);
         });
       };
        // Loads the JavaScript client library and invokes `start` afterwards.
        gapi.load('client', start);

      })
      .keyup();

      // Translate URDU
      $(".syllables").keyup(function() {
          var value = $(this).val();

      function start() {
          // Initializes the client with the API key and the Translate API.
          gapi.client.init({
            'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
            'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
          }).then(function() {
            // Executes an API request, and returns a Promise.
            // The method name `language.translations.list` comes from the API discovery.
            return gapi.client.language.translations.list({
              q: value,
              source: 'en',
              target: 'ur',
            });
          }).then(function(response) {
            console.log(response.result.data.translations[0].translatedText);
      if (value !== "") {
      $(".UR").html(response.result.data.translations[0].translatedText);
      $( ".UR" ).mouseenter(function() {
     // if (!$(".AR").hasClass("strike")) {
           responsiveVoice.speak($(".UR").html(), "Arabic Male", {rate: 1.2});
      //  }
     });
      } else {
        $(".UR").html("اردو");
      }
          }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
          });
        };
         // Loads the JavaScript client library and invokes `start` afterwards.
         gapi.load('client', start);

       })
       .keyup();

       // Translate SPANISH
       $(".syllables").keyup(function() {
           var value = $(this).val();

       function start() {
           // Initializes the client with the API key and the Translate API.
           gapi.client.init({
             'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
             'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
           }).then(function() {
             // Executes an API request, and returns a Promise.
             // The method name `language.translations.list` comes from the API discovery.
             return gapi.client.language.translations.list({
               q: value,
               source: 'en',
               target: 'es',
             });
           }).then(function(response) {
             console.log(response.result.data.translations[0].translatedText);
       if (value !== "") {
       $(".ES").html(response.result.data.translations[0].translatedText);
       $( ".ES" ).mouseenter(function() {
      // if (!$(".AR").hasClass("strike")) {
            responsiveVoice.speak($(".ES").html(), "Spanish Female", {rate: 1.2});
       //  }
      });
       } else {
         $(".ES").html("Español");
       }
           }, function(reason) {
             console.log('Error: ' + reason.result.error.message);
           });
         };
          // Loads the JavaScript client library and invokes `start` afterwards.
          gapi.load('client', start);

        })
        .keyup();

        // Translate FRENCH
        $(".syllables").keyup(function() {
            var value = $(this).val();

         function start() {
            // Initializes the client with the API key and the Translate API.
            gapi.client.init({
              'apiKey': 'AIzaSyAp9FVZ1e6YuQwacKs04QWBNrfLwpzQW9Q',
              'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
            }).then(function() {
              // Executes an API request, and returns a Promise.
              // The method name `language.translations.list` comes from the API discovery.
              return gapi.client.language.translations.list({
                q: value,
                source: 'en',
                target: 'fr',
              });
            }).then(function(response) {
              console.log(response.result.data.translations[0].translatedText);
        if (value !== "") {
        $(".FR").html(response.result.data.translations[0].translatedText);
        $( ".FR" ).mouseenter(function() {
       // if (!$(".AR").hasClass("strike")) {
             responsiveVoice.speak($(".FR").html(), "French Female", {rate: 1.2});
        //  }
       });
        } else {
          $(".FR").html("Français");
        }
            }, function(reason) {
              console.log('Error: ' + reason.result.error.message);
            });
          };
           // Loads the JavaScript client library and invokes `start` afterwards.
           gapi.load('client', start);

         })
         .keyup();
