function attachColor(moodDisplay) {
    const rating = parseFloat(moodDisplay.rating);
    
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
          return "bg-violet-200";
        } else if (rating > 20 && rating <= 40) {
          return "bg-violet-300";
        } else if (rating > 40 && rating <= 60) {
          return "bg-violet-500";
        } else if (rating > 60 && rating <= 80) {
          return "bg-violet-700";
        } else if (rating > 80 && rating <= 100) {
          return "bg-violet-900";
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
          return "bg-rose-200";
        } else if (rating > 20 && rating <= 40) {
          return "bg-rose-300";
        } else if (rating > 40 && rating <= 60) {
          return "bg-rose-400";
        } else if (rating > 60 && rating <= 80) {
          return "bg-rose-500";
        } else if (rating > 80 && rating <= 100) {
          return "bg-rose-700";
        } else {
          return "bg-neutral-950";
        }
      case 'disgust':
        if (rating >= 0 && rating <= 20) {
          return "bg-lime-200";
        } else if (rating > 20 && rating <= 40) {
          return "bg-lime-300";
        } else if (rating > 40 && rating <= 60) {
          return "bg-lime-500";
        } else if (rating > 60 && rating <= 80) {
          return "bg-lime-700";
        } else if (rating > 80 && rating <= 100) {
          return "bg-lime-900";
        } else {
          return "bg-neutral-950";
        }
      default:
        return "bg-neutral-950";
    }
  }
  
  module.exports = attachColor;
  