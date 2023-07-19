// Set up the chart dimensions and margins
let width = Math.min((window.innerWidth), 750);
width = width - 50;
let height = width * 0.67; // Adjust the aspect ratio as needed
const margin = { top: 20, right: 60, bottom: 60, left: 60 };
let averagePercentages = [];
let allMoodCategories = [];
const colors = ["yellow", "green", "blue", "purple", "red", "orange"];

// Function to calculate the average percentage for each mood category
function calculateAveragePercentages(data, allMoodCategories) {
  const totalUsers = data.length;
  const moodCount = allMoodCategories.reduce((acc, moodCategory) => {
    acc[moodCategory] = data.reduce((sum, mood) => sum + mood[moodCategory], 0);
    return acc;
  }, {});

   averagePercentages = allMoodCategories.map(moodCategory => ({
    entry: moodCategory,
    percentage: (moodCount[moodCategory] / totalUsers)
  }));

  return averagePercentages;
}

async function processMoodsData() {
  try {
    // Fetch moods data from the API endpoint
    const response = await fetch('/api/moods');
    if (!response.ok) {
      throw new Error('Failed to fetch moods data');
    }
    const moodsData = await response.json();

    // Calculate the average percentage for each mood category
     allMoodCategories = ["joy", "surprise", "sadness", "disgust", "anger", "fear"];
     averagePercentages = calculateAveragePercentages(moodsData, allMoodCategories);

    // Create the bar chart initially
    createBarChart(averagePercentages, allMoodCategories);
  } catch (error) {
    console.error(error);
  }
}


// Function to create the bar chart
function createBarChart(data, allMoodCategories) {
  // Remove the existing SVG container
  d3.select("#chartContainer svg").remove();

  // Create the SVG container with updated dimensions
  const svg = d3.select("#chartContainer")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create the x scale
  const x = d3.scaleBand()
    .domain(allMoodCategories)
    .range([margin.left, width - margin.right])
    .padding(0.1);

  // Create the y scale
  const y = d3.scaleLinear()
    .domain([0, 100]) // Set the y-scale domain from 0% to 100%
    .range([height - margin.bottom, margin.top]);

  // Append the bars to the SVG container
  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.entry)) // Use mood categories for x positioning
    .attr("y", d => y(d.percentage))
    .attr("width", x.bandwidth())
    .attr("height", d => height - margin.bottom - y(d.percentage))
    .attr("fill", (d, i) => colors[i % colors.length]); // Assign colors based on the index

  // Create the x-axis
  svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  // Create the y-axis
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(10).tickFormat(d => `${d}%`)); // Set tick formatting to display percentage with '%'
}

// Function to update the chart dimensions based on the viewport size
const updateChartDimensions = () => {
  width = Math.min(window.innerWidth, 700);
  width = width - 50;
  height = width * 0.67; // Adjust the aspect ratio as needed

  // Call the function to redraw the chart with updated dimensions
  createBarChart(averagePercentages, allMoodCategories);
};

async function processMoodsData() {
  try {
    // Fetch moods data from the API endpoint
    const response = await fetch('/api/moods');
    if (!response.ok) {
      throw new Error('Failed to fetch moods data');
    }
    const moodsData = await response.json();

    // Calculate the average percentage for each mood category
     allMoodCategories = ["joy", "surprise", "sadness", "disgust", "anger", "fear"];
     averagePercentages = calculateAveragePercentages(moodsData, allMoodCategories);

    // Create the bar chart initially
    createBarChart(averagePercentages, allMoodCategories);

    // Start the timer to check for window size changes periodically
    setInterval(updateChartDimensions, 500); // Adjust the interval as needed

  } catch (error) {
    console.error(error);
  }
}

// Call the function to fetch and process the moods data and create the graph
processMoodsData();
