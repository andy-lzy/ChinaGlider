import React, { useState, useEffect } from 'react';
import TripPlanFormatter from '../components/Text/TripPlanFormatter';

const base_url = 'http://localhost:5000'

function ChatGptResponse({inputData}) {

    const [basicPlan, setBasicPlan] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const generatePlan = async() => {
            try {
                console.log(inputData);
                const response = await fetch(base_url + '/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputData)
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setBasicPlan(data);
            } catch (error) {
                console.error('Error generating basic plan:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
     
        generatePlan();
    }, [inputData]);

    if (loading) {
        return <div>Generating plan...</div>;
    }

    return (
        <div>
            <h1>Generated Plan</h1>
            {basicPlan ? <TripPlanFormatter data={basicPlan} /> : error}
        </div>
    );
}

export default ChatGptResponse;