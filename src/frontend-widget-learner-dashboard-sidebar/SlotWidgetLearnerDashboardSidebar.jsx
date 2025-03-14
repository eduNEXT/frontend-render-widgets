import React, { useState, useEffect } from 'react';

const SlotWidgetLearnerDashboardSidebar = () => {
  const [data, setData] = useState({}); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://zach-prod.atlas.edunext.link/oddisey/info'); 

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        // Handle potential data structures (object)
        if (typeof jsonData === 'object') { 
          setData(jsonData); 
        } else {
          setError('API response is not an object.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p><strong>Oddisey:</strong> {data.oddisey_version}</p> 
          <p><strong>Open edX Version:</strong> {data.openedx_version.tag}</p>
          <p><strong>SHA:</strong> {data.openedx_version.sha}</p> 
        </div>
      )}
    </div>
  );
};

export default SlotWidgetLearnerDashboardSidebar;