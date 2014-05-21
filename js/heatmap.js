$( document ).ready(function() {
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
      "fillKey": "4",
      "value": 5
  },
  "DE": {
      "fillKey": "5",
      "value": 32
  },
  "FL": {
      "fillKey": "UNDECIDED",
      "value": 29
  },
  "GA": {
      "fillKey": "1",
      "value": 32
  },
  "HI": {
      "fillKey": "5",
      "value": 32
  },
  "ID": {
      "fillKey": "1",
      "value": 32
  },
  "IL": {
      "fillKey": "5",
      "value": 32
  },
  "IN": {
      "fillKey": "2",
      "value": 11
  },
  "IA": {
      "fillKey": "4",
      "value": 11
  },
  "KS": {
      "fillKey": "1",
      "value": 32
  },
  "KY": {
      "fillKey": "2",
      "value": 32
  },
  "LA": {
      "fillKey": "2",
      "value": 32
  },
  "MD": {
      "fillKey": "5",
      "value": 32
  },
  "ME": {
      "fillKey": "5",
      "value": 32
  },
  "MA": {
      "fillKey": "5",
      "value": 32
  },
  "MN": {
      "fillKey": "5",
      "value": 32
  },
  "MI": {
      "fillKey": "5",
      "value": 32
  },
  "MS": {
      "fillKey": "1",
      "value": 32
  },
  "MO": {
      "fillKey": "2",
      "value": 13
  },
  "MT": {
      "fillKey": "2",
      "value": 32
  },
  "NC": {
      "fillKey": "3",
      "value": 32
  },
  "NE": {
      "fillKey": "1",
      "value": 32
  },
  "NV": {
      "fillKey": "6",
      "value": 32
  },
  "NH": {
      "fillKey": "4",
      "value": 32
  },
  "NJ": {
      "fillKey": "5",
      "value": 32
  },
  "NY": {
      "fillKey": "5",
      "value": 32
  },
  "ND": {
      "fillKey": "1",
      "value": 32
  },
  "NM": {
      "fillKey": "5",
      "value": 32
  },
  "OH": {
      "fillKey": "UNDECIDED",
      "value": 32
  },
  "OK": {
      "fillKey": "2",
      "value": 32
  },
  "OR": {
      "fillKey": "5",
      "value": 32
  },
  "PA": {
      "fillKey": "5",
      "value": 32
  },
  "RI": {
      "fillKey": "5",
      "value": 32
  },
  "SC": {
      "fillKey": "2",
      "value": 32
  },
  "SD": {
      "fillKey": "2",
      "value": 32
  },
  "TN": {
      "fillKey": "2",
      "value": 32
  },
  "TX": {
      "fillKey": "1",
      "value": 32
  },
  "UT": {
      "fillKey": "1",
      "value": 32
  },
  "WI": {
      "fillKey": "5",
      "value": 32
  },
  "VA": {
      "fillKey": "4",
      "value": 32
  },
  "VT": {
      "fillKey": "5",
      "value": 32
  },
  "WA": {
      "fillKey": "5",
      "value": 32
  },
  "WV": {
      "fillKey": "2",
      "value": 32
  },
  "WY": {
      "fillKey": "2",
      "value": 32
  },
  "CA": {
      "fillKey": "5",
      "value": 32
  },
  "CT": {
      "fillKey": "5",
      "value": 32
  },
  "AK": {
      "fillKey": "2",
      "value": 32
  },
  "AR": {
      "fillKey": "2",
      "value": 32
  },
  "AL": {
      "fillKey": "2",
      "value": 32
  }
}
});
election.labels();
});