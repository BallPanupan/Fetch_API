
(function() {
    var cURL = window.location.href.split('#');
    //var propertyID = cURL[1];
    var propertyID = "1234";

    console.log(propertyID);
    if (propertyID) {
        fetch("https://app.dropoffer.com/v1/api/contacts/savedproperties/"+ propertyID)
        .then(res => res.text())
        .then(
            (results) => {
                try {
                        var result = JSON.parse(results);
                        var pData = result.data;
                        var ga_link = '';
                        //var ga_link = "?_ga=2.186452138.2060230552.1622596110-6069708.1621579030";

                        //for background-image
                        var location = [pData.Latitude,pData.Longitude]
                        var bg_image = "https://maps.googleapis.com/maps/api/streetview?size=640x400&location="+ location[0] + ","+ location[1] + "&fov=80&heading=70&pitch=0&key=xxxx";
                        document.querySelector("#image_java_bg div").style.backgroundImage = 'url("'+ bg_image + '")';

                        
                        console.log(pData);
                        if (pData.Name) { document.querySelector("#property-name h2").innerHTML = pData.Name; }
                        if (pData.City) { document.querySelector("#property-city h2").innerHTML = pData.City; }
                        if (pData.Home_Images[0]) {  }
    
                        document.querySelector("#property-btn-accept a").href = "https://portal.dropoffer.com/respond/"+ propertyID + "/?mode=accept" + ga_link;
                        document.querySelector("#property-btn-decline a").href = "https://portal.dropoffer.com/respond/"+ propertyID + "/?mode=Decline" + ga_link;
                        document.querySelector("#property-btn-counteroffer a").href = "https://portal.dropoffer.com/respond/"+ propertyID + "/?mode=CounterOffer" + ga_link;

                  } catch(error) {
                    console.log('jSon Error:', error);
                }
            }, (error) => {
                console.log('Fetch Rrror:', error);
            }
        );
    }
  })();
