import React from 'react';
import DynamicPage from './pages/[id]'; // Adjust the path based on your project structure

const App = () => {
  // Mock data for demonstration purposes
  const data = "Some dynamic data";

  return (
    <div>
      <h1>My App</h1>

      {/* Pass data as a prop to the DynamicPage component */}
      <DynamicPage data={data} />
    </div>
  );
};

export default App;
