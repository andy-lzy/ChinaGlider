from flask import jsonify
import os
import requests
import json
from typing import Dict, Any
from dotenv import load_dotenv

class ChatGPT:
    # Load environment variables from .env file
    load_dotenv()

    # Get the API key from environment variables
    api_key = os.getenv('API_KEY')

    def __init__(self, api_key: str = api_key, model: str = "gpt-3.5-turbo") -> None:
        self.api_key: str = api_key
        self.model: str = model
        self.endpoint: str = "https://api.openai.com/v1/chat/completions"

    def create_headers(self) -> Dict[str, str]:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

    def create_payload(self, prompt: str) -> Dict[str, Any]:
        return {
            "model": self.model,
            "messages": [{"role": "user", "content": prompt}]
        }

    def call_api(self, prompt: str) -> Dict[str, Any]:
        headers: Dict[str, str] = self.create_headers()
        payload: Dict[str, Any] = self.create_payload(prompt)
        response = requests.post(self.endpoint, json=payload, headers=headers)
        return response.json()

    def get_response(self, prompt: str):
        if not prompt:
            raise ValueError("A prompt is required to get a response")
        try:
            print("Received GPT query")
            response: Dict[str, Any] = self.call_api(prompt)
            if response:
                # Extract the 'messages' content
                messages = response.get('choices', [{}])[0].get('message', {}).get('content', '')
                print("Extracted messages:", messages)

                # Check if messages is already a JSON string
                try:
                    messages_data = json.loads(messages)  # Attempt to parse it as JSON
                    return jsonify(messages_data)  # If successful, return it as JSON
                except json.JSONDecodeError:
                    # If messages is not valid JSON, return an error
                    return jsonify({"error": "Failed to parse messages content as JSON"})
            else:
                return jsonify({"error": "Failed to get a valid response from the API."})
        except ValueError as e:
            # Handle specific exceptions you know could occur
            print(f"Error: {e}")
            return jsonify({"error": str(e)})
    
    def dummy_response(self):
        data = {
    "day1": {
        "places": [
            {
                "name": "Lamma Island",
                "type": "Attraction",
                "description": "Escape the hustle and bustle of Hong Kong city by taking a ferry to Lamma Island. Enjoy a leisurely walk along the island's scenic hiking trails and explore the quaint fishing villages."
            },
            {
                "name": "Ngong Ping 360",
                "type": "Attraction",
                "description": "Take a cable car ride to Ngong Ping Village and visit the Tian Tan Buddha statue. Enjoy panoramic views of Lantau Island and relax in the peaceful ambiance of this cultural site."
            },
            {
                "name": "Sarah's Creations",
                "type": "Restaurant",
                "description": "Experience delicious vegetarian and vegan dishes at Sarah's Creations. This cozy restaurant offers a laid-back dining atmosphere with a focus on fresh and organic ingredients."
            }
        ]
    },
    "day2": {
        "places": [
            {
                "name": "Hong Kong Park",
                "type": "Attraction",
                "description": "Spend a relaxing morning at Hong Kong Park, surrounded by lush greenery and picturesque ponds. Visit the aviary, watch the fountain show, and unwind in the peaceful oasis of this urban park."
            },
            {
                "name": "Dragon's Back Hike",
                "type": "Attraction",
                "description": "Embark on a scenic hike along the Dragon's Back trail, offering stunning views of Hong Kong's coastline and lush landscapes. Enjoy a peaceful and laid-back trek in nature away from the city noise."
            },
            {
                "name": "Grassroots Pantry",
                "type": "Restaurant",
                "description": "Indulge in farm-to-table vegetarian and vegan dishes at Grassroots Pantry. This cozy restaurant focuses on sustainable and organic ingredients, offering a laid-back dining experience with a diverse menu."
            }
        ]
    }
}
        return data