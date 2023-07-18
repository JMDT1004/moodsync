

function attachColor(moodDisplay) {
    const rating = parseFloat(moodDisplay.number);
  
    switch (moodDisplay.property) {
      case 'joy':
        // Handle joy property
        if (rating >= 0 && rating <= 10) {
          moodDisplay.color = "red";
        } else if (rating > 10 && rating <= 20) {
          moodDisplay.color = "orange";
        } else if (rating > 20 && rating <= 30) {
          moodDisplay.color = "yellow";
        } else if (rating > 30 && rating <= 40) {
          moodDisplay.color = "green";
        } else if (rating > 40 && rating <= 50) {
          moodDisplay.color = "lightgreen";
        } else if (rating > 50 && rating <= 60) {
          moodDisplay.color = "blue";
        } else if (rating > 60 && rating <= 70) {
          moodDisplay.color = "cyan";
        } else if (rating > 70 && rating <= 80) {
          moodDisplay.color = "purple";
        } else if (rating > 80 && rating <= 90) {
          moodDisplay.color = "pink";
        } else if (rating > 90 && rating <= 100) {
          moodDisplay.color = "magenta";
        } else {
          // Handle other cases
        }
        break;
      case 'sadness':
        // Handle sadness property
        // Handle sadness property
        if (rating >= 0 && rating <= 10) {
          moodDisplay.color = "lightblue";
        } else if (rating > 10 && rating <= 20) {
          moodDisplay.color = "blue";
        } else if (rating > 20 && rating <= 30) {
          moodDisplay.color = "darkblue";
        } else if (rating > 30 && rating <= 40) {
          moodDisplay.color = "skyblue";
        } else if (rating > 40 && rating <= 50) {
          moodDisplay.color = "steelblue";
        } else if (rating > 50 && rating <= 60) {
          moodDisplay.color = "navy";
        } else if (rating > 60 && rating <= 70) {
          moodDisplay.color = "teal";
        } else if (rating > 70 && rating <= 80) {
          moodDisplay.color = "indigo";
        } else if (rating > 80 && rating <= 90) {
          moodDisplay.color = "slateblue";
        } else if (rating > 90 && rating <= 100) {
          moodDisplay.color = "mediumblue";
        } else {
          // Handle other cases
        }
        break;
      case 'fear':
        // Handle fear property
        if (rating >= 0 && rating <= 10) {
          moodDisplay.color = "gray";
        } else if (rating > 10 && rating <= 20) {
          moodDisplay.color = "darkgray";
        } else if (rating > 20 && rating <= 30) {
          moodDisplay.color = "lightgray";
        } else if (rating > 30 && rating <= 40) {
          moodDisplay.color = "silver";
        } else if (rating > 40 && rating <= 50) {
          moodDisplay.color = "dimgray";
        } else if (rating > 50 && rating <= 60) {
          moodDisplay.color = "slategray";
        } else if (rating > 60 && rating <= 70) {
          moodDisplay.color = "darkslategray";
        } else if (rating > 70 && rating <= 80) {
          moodDisplay.color = "lightslategrey";
        } else if (rating > 80 && rating <= 90) {
          moodDisplay.color = "rosybrown";
        } else if (rating > 90 && rating <= 100) {
          moodDisplay.color = "peru";
        } else {
          // Handle other cases
        }
        break;
      case 'anger':
        // Handle anger property
        if (rating >= 0 && rating <= 10) {
          moodDisplay.color = "red";
        } else if (rating > 10 && rating <= 20) {
          moodDisplay.color = "darkred";
        } else if (rating > 20 && rating <= 30) {
          moodDisplay.color = "firebrick";
        } else if (rating > 30 && rating <= 40) {
          moodDisplay.color = "crimson";
        } else if (rating > 40 && rating <= 50) {
          moodDisplay.color = "indianred";
        } else if (rating > 50 && rating <= 60) {
          moodDisplay.color = "orangered";
        } else if (rating > 60 && rating <= 70) {
          moodDisplay.color = "tomato";
        } else if (rating > 70 && rating <= 80) {
          moodDisplay.color = "coral";
        } else if (rating > 80 && rating <= 90) {
          moodDisplay.color = "darkorange";
        } else if (rating > 90 && rating <= 100) {
          moodDisplay.color = "chocolate";
        } else {
          // Handle other cases
        }
        break;
      case 'surprise':
        // Handle surprise property
        if (rating >= 0 && rating <= 10) {
          moodDisplay.color = "yellow";
        } else if (rating > 10 && rating <= 20) {
          moodDisplay.color = "gold";
        } else if (rating > 20 && rating <= 30) {
          moodDisplay.color = "lightyellow";
        } else if (rating > 30 && rating <= 40) {
          moodDisplay.color = "khaki";
        } else if (rating > 40 && rating <= 50) {
          moodDisplay.color = "lemonchiffon";
        } else if (rating > 50 && rating <= 60) {
          moodDisplay.color = "palegoldenrod";
        } else if (rating > 60 && rating <= 70) {
          moodDisplay.color = "darkkhaki";
        } else if (rating > 70 && rating <= 80) {
          moodDisplay.color = "lightgoldenrodyellow";
        } else if (rating > 80 && rating <= 90) {
          moodDisplay.color = "moccasin";
        } else if (rating > 90 && rating <= 100) {
          moodDisplay.color = "peachpuff";
        } else {
          // Handle other cases
        }
        break;
      case 'disgust':
        // Handle disgust property
        if (rating >= 0 && rating <= 10) {
          moodDisplay.color = "green";
        } else if (rating > 10 && rating <= 20) {
          moodDisplay.color = "lime";
        } else if (rating > 20 && rating <= 30) {
          moodDisplay.color = "limegreen";
        } else if (rating > 30 && rating <= 40) {
          moodDisplay.color = "forestgreen";
        } else if (rating > 40 && rating <= 50) {
          moodDisplay.color = "darkgreen";
        } else if (rating > 50 && rating <= 60) {
          moodDisplay.color = "seagreen";
        } else if (rating > 60 && rating <= 70) {
          moodDisplay.color = "mediumseagreen";
        } else if (rating > 70 && rating <= 80) {
          moodDisplay.color = "springgreen";
        } else if (rating > 80 && rating <= 90) {
          moodDisplay.color = "palegreen";
        } else if (rating > 90 && rating <= 100) {
          moodDisplay.color = "mediumspringgreen";
        } else {
          // Handle other cases
        }
        break;
      default:
        // Handle default case
        console.log('Handling default case');
        break;
    }
  }
  
  module.exports = attachColor;