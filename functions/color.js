function attachColor(moodDisplay) {
  const rating = parseFloat(moodDisplay.rating);
console.log("Current mood: ", moodDisplay.property, " Curren rating: ", rating);
  switch (moodDisplay.property) {
    case 'anger':
      if (rating >= 0 && rating <= 20) {
        return "bg-red-200";
      } else if (rating > 20 && rating <= 40) {
        return "bg-red-400";
      } else if (rating > 40 && rating <= 60) {
        return "bg-red-600";
      } else if (rating > 60 && rating <= 80) {
        return "bg-red-700";
      } else if (rating > 80 && rating <= 100) {
        return "bg-red-800";
      } else {
        return "bg-neutral-950";
      }
    case 'sadness':
      if (rating >= 0 && rating <= 20) {
        return "bg-blue-200";
      } else if (rating > 20 && rating <= 40) {
        return "bg-blue-400";
      } else if (rating > 40 && rating <= 60) {
        return "bg-blue-600";
      } else if (rating > 60 && rating <= 80) {
        return "bg-blue-700";
      } else if (rating > 80 && rating <= 100) {
        return "bg-blue-800";
      } else {
        return "bg-neutral-950";
      }
    case 'fear':
      if (rating >= 0 && rating <= 20) {
        return "bg-orange-200";
      } else if (rating > 20 && rating <= 40) {
        return "bg-orange-300";
      } else if (rating > 40 && rating <= 60) {
        return "bg-orange-400";
      } else if (rating > 60 && rating <= 80) {
        return "bg-orange-500";
      } else if (rating > 80 && rating <= 100) {
        return "bg-orange-700";
      } else {
        return "bg-neutral-950";
      }
    case 'joy':
      if (rating >= 0 && rating <= 20) {
        return "bg-yellow-100";
      } else if (rating > 20 && rating <= 40) {
        return "bg-yellow-200";
      } else if (rating > 40 && rating <= 60) {
        return "bg-yellow-300";
      } else if (rating > 60 && rating <= 80) {
        return "bg-yellow-400";
      } else if (rating > 80 && rating <= 100) {
        return "bg-yellow-500";
      } else {
        return "bg-neutral-950";
      }
    case 'surprise':
      if (rating >= 0 && rating <= 20) {
        return "bg-green-200";
      } else if (rating > 20 && rating <= 40) {
        return "bg-green-300";
      } else if (rating > 40 && rating <= 60) {
        return "bg-green-400";
      } else if (rating > 60 && rating <= 80) {
        return "bg-green-500";
      } else if (rating > 80 && rating <= 100) {
        return "bg-green-700";
      } else {
        return "bg-neutral-950";
      }
    case 'disgust':
      if (rating >= 0 && rating <= 20) {
        return "bg-purple-200";
      } else if (rating > 20 && rating <= 40) {
        return "bg-purple-300";
      } else if (rating > 40 && rating <= 60) {
        return "bg-purple-500";
      } else if (rating > 60 && rating <= 80) {
        return "bg-purple-700";
      } else if (rating > 80 && rating <= 100) {
        return "bg-purple-900";
      } else {
        return "bg-neutral-950";
      }
    default:
      return "bg-neutral-950";
  }
}

module.exports = attachColor;
