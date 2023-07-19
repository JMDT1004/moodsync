async function processMoodsData() {
  try {
    // Fetch moods data from the API endpoint
    const response = await fetch('/api/moods');
    if (!response.ok) {
      throw new Error('Failed to fetch moods data');
    }
    const moodsData = await response.json();

    // Calculate the average percentage for each mood category
    const allMoodCategories = ["joy", "surprise", "sadness", "disgust", "anger", "fear"];
    const averagePercentages = calculateAveragePercentages(moodsData, allMoodCategories);

    // Use the average percentages to create the bar chart
    createBarChart(averagePercentages, allMoodCategories);

  } catch (error) {
    console.error(error);
  }
}

// Function to calculate the average percentage for each mood category
function calculateAveragePercentages(data, allMoodCategories) {
  const totalUsers = data.length;
  const moodCount = allMoodCategories.reduce((acc, moodCategory) => {
    acc[moodCategory] = data.reduce((sum, mood) => sum + mood[moodCategory], 0);
    return acc;
  }, {});

  const averagePercentages = allMoodCategories.map(moodCategory => ({
    entry: moodCategory,
    percentage: (moodCount[moodCategory] / totalUsers)
  }));

  return averagePercentages;
}


// Function to create the bar chart
function createBarChart(data, allMoodCategories) {
  // Set up the chart dimensions and margins
  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 60, left: 60 }; // Increased bottom margin to accommodate the y-axis labels

  // Create the SVG container
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
    .attr("fill", "steelblue");

  // Create the x-axis
  svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  // Create the y-axis
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(10).tickFormat(d => `${d}%`)); // Set tick formatting to display percentage with '%'
}

// Call the function to fetch and process the moods data and create the graph
processMoodsData();