$( document ).ready(function() {
//example file
  var txt = "";
  
  // $.ajax({
  //   type: 'GET',
  //   url: 'example.csv',
  //   success: function (data) {
  //      txt = data; 
  //   }
  // });

    // var xmlhttpnew XMLHttpRequest();
    // xmlhttp.open("GET","example.csv",true);
    // xmlhttp.send();
    // xmlhttp.onreadystatechange=function()
    //   {
    //   if (xmlhttp.readyState==4 && xmlhttp.status==200)
    //     {
    //         txt=xmlhttp.responseText;
    //     }
    //   }
  
  var election = new Datamap({
  scope: 'usa',
  element: document.getElementById('heatmap'),
  geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
    return '<div class="hoverinfo"><strong>' + geography.properties.name + 
      '</strong> <br />value:' +  data.value + ' </div>'
    },
    highlightBorderWidth: 3
  },

  fills: {
    '1': '#990000',
    '2': '#FF0000',
    '3': '#FF9933',
    '4': '#FFFF00',
    '5': '#99CC00',
    '6': '#66FF99',
    defaultFill: '#FFFFFF'
  },

  data:{
    "AZ": {
        "fillKey": "2",
        "value": 5
    },
    "CO": {
        "fillKey": "2",
        "value": 5
    },
    "DE": {
        "fillKey": "6",
        "value": 32
    },
    "FL": {
        "fillKey": "5",
        "value": 29
    },
    "GA": {
        "fillKey": "6",
        "value": 32
    },
    "HI": {
        "fillKey": "6",
        "value": 32
    },
    "ID": {
        "fillKey": "6",
        "value": 32
    },
    "IL": {
        "fillKey": "4",
        "value": 20
    },
    "IN": {
        "fillKey": "3",
        "value": 11
    },
    "IA": {
        "fillKey": "3",
        "value": 11
    },
    "KS": {
        "fillKey": "6",
        "value": 32
    },
    "KY": {
        "fillKey": "5",
        "value": 27
    },
    "LA": {
        "fillKey": "6",
        "value": 32
    },
    "MD": {
        "fillKey": "2",
        "value": 8
    },
    "ME": {
        "fillKey": "6",
        "value": 32
    },
    "MA": {
        "fillKey": "6",
        "value": 32
    },
    "MN": {
        "fillKey": "1",
        "value": 2
    },
    "MI": {
        "fillKey": "1",
        "value": 2
    },
    "MS": {
        "fillKey": "6",
        "value": 32
    },
    "MO": {
        "fillKey": "3",
        "value": 13
    },
    "MT": {
        "fillKey": "6",
        "value": 32
    },
    "NC": {
        "fillKey": "5",
        "value": 26
    },
    "NE": {
        "fillKey": "6",
        "value": 32
    },
    "NV": {
        "fillKey": "6",
        "value": 32
    },
    "NH": {
        "fillKey": "4",
        "value": 19
    },
    "NJ": {
        "fillKey": "6",
        "value": 32
    },
    "NY": {
        "fillKey": "2",
        "value": 10
    },
    "ND": {
        "fillKey": "6",
        "value": 32
    },
    "NM": {
        "fillKey": "2",
        "value": 12
    },
    "OH": {
        "fillKey": "5",
        "value": 26
    },
    "OK": {
        "fillKey": "6",
        "value": 32
    },
    "OR": {
        "fillKey": "3",
        "value": 15
    },
    "PA": {
        "fillKey": "5",
        "value": 28
    },
    "RI": {
        "fillKey": "3",
        "value": 15
    },
    "SC": {
        "fillKey": "2",
        "value": 8
    },
    "SD": {
        "fillKey": "2",
        "value": 8
    },
    "TN": {
        "fillKey": "2",
        "value": 9
    },
    "TX": {
        "fillKey": "1",
        "value": 2
    },
    "UT": {
        "fillKey": "1",
        "value": 1
    },
    "WI": {
        "fillKey": "1",
        "value": 3
    },
    "VA": {
        "fillKey": "4",
        "value": 23
    },
    "VT": {
        "fillKey": "5",
        "value": 26
    },
    "WA": {
        "fillKey": "5",
        "value": 26
    },
    "WV": {
        "fillKey": "2",
        "value": 11
    },
    "WY": {
        "fillKey": "2",
        "value": 12
    },
    "CA": {
        "fillKey": "4",
        "value": 20
    },
    "CT": {
        "fillKey": "3",
        "value": 18
    },
    "AK": {
        "fillKey": "3",
        "value": 18
    },
    "AR": {
        "fillKey": "2",
        "value": 10
    },
    "AL": {
        "fillKey": "2",
        "value": 12
    }
  }
});
election.labels();
});