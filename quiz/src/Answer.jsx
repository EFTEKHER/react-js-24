import React, { useState, useEffect } from 'react';
import { db } from './firebase-config'; // Import the db object from firebase-config.js
import { collection, getDocs } from 'firebase/firestore';

function Answer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the Firestore collection
        const collectionRef = collection(db, 'user');

        // Fetch data from the collection
        const snapshot = await getDocs(collectionRef);

        // Extract the data from the snapshot
        const fetchedDatas = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        // Update the component state with the retrieved data
        setData(fetchedDatas);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div style={{display:'flex', overflow:'hidden', flexDirection:'column'}}>
      <h1>User Table</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'gray' }}>
            <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Roll</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.participant_Name}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.Roll}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Answer;
