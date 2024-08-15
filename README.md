# Candidate Filter Application

## Overview

The Candidate Filter Application is a React-based web application designed to help users filter and view candidates based on various criteria such as skills, experience, education, and location. The application also allows for a detailed view of candidates and displays their match score based on predefined job descriptions.

## Live Demo

You can view the live version of the Candidate Filter Application here: [Candidate Filter App](https://deepprajapatineu.github.io/candidate-filter-app/)

## Features

- **Filter Candidates**: Users can filter candidates by skills, experience, education, location, and availability.
- **Match Score Calculation**: Candidates are scored based on how well they match a job description.
- **Responsive Design**: The application adjusts its layout based on screen size. Skills are shown as checkboxes on larger screens and as a dropdown on smaller screens.
- **Modal for Skills**: View all skills of a candidate in a modal when a user clicks on the "+X more" link.

## Technologies Used

- **Frontend**: React, Material-UI
- **State Management**: React's `useReducer` for managing filter state
- **CSS**: Custom styles for responsiveness and animations

## Installation and Setup

### Prerequisites

- Node.js and npm should be installed. You can download them from [Node.js](https://nodejs.org/).

### Steps to Run the Application

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/candidate-filter-app.git
   cd candidate-filter-app
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```
3. **Run the app::**

   ```bash
   npm start
   ```

## How It Works

### Filtering:

- **Skills**: Select or deselect skills from the list to filter candidates.
- **Experience**: Use the slider to select the range of years of experience.
- **Education**: Choose the level of education from the dropdown.
- **Location**: Choose the location from the dropdown.
- **Availability**: Toggle the checkbox to filter by availability.
- **Debounce Logic**: The filtering operation is debounced by 500ms using setTimeout to prevent unnecessary filtering on rapid changes.

### Candidate Matching:

- Candidates are displayed in order of their match score, with the highest score shown first.
- Match score is calculated based on skills, experience, and location relative to a job description.

### Responsive Design:

- On large and medium screens, skills are displayed as checkboxes.
- On small screens, skills are displayed in a multi-select dropdown.

### Modal for Skills:

- Clicking on "+X more" in the skills section will open a modal displaying all skills of the candidate.

## Design Decisions and Trade-Offs

- **State Management**: Chose `useReducer` over `useState` for managing multiple filter states due to its ability to handle complex state logic more cleanly.
- **Debounce Mechanism**: Introduced a 500ms debounce to delay the filtering operation, reducing the number of operations and improving performance.
- **Performance Optimization**: Used useCallback to memoize the filterCandidates function, preventing unnecessary re-renders.
- **Responsive Design**: Implemented responsive design using Material-UI's Grid system and custom CSS to ensure a good user experience across devices.
- **Animations**: Applied smooth animations for card hover effects and transitions to improve user interaction.
- **Deployment**: The app is hosted on GitHub Pages, making it easily accessible without the need for local setup.

## Video Demonstration

A video demonstration of the application, showcasing how the filters work and how candidates are matched with job descriptions, can be found [here](https://drive.google.com/file/d/1s8WiCz7XQ8RhUGiBm8F1BAVR75OMNrzx/view?usp=drive_link).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


