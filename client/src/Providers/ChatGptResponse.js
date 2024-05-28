import React, { useState, useEffect } from 'react';
import TripPlanFormatter from '../components/Text/TripPlanFormatter';


function ChatGptResponse({inputData}) {

    const [basicPlan, setBasicPlan] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const generatePlan = async() => {
            try {
                console.log(inputData);
                const response = await fetch('/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputData)
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const textData = await response.text(); // Fetch as text
                console.log("Received plan as text:", textData);

                let parsedData;
                try {
                    parsedData = JSON.parse(textData); // Manually parse JSON
                    console.log("Parsed plan:", parsedData);
                    console.log("Type of parsed plan:", typeof parsedData);
                } catch (parseError) {
                    throw new Error('Failed to parse JSON');
                }

                setBasicPlan(parsedData);
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
            {basicPlan ? <TripPlanFormatter data={basicPlan} /> : error}
        </div>
    );
}

export default ChatGptResponse;