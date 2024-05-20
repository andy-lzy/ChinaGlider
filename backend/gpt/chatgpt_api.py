from flask import jsonify
import requests
from typing import Dict, Any

class ChatGPT:
    const_api_key = "sk-proj-igHIIoN4rnmwP5PBufSOT3BlbkFJDWwnhrkXLa9UX6g9Hjwx"

    def __init__(self, api_key: str = const_api_key, model: str = "gpt-3.5-turbo") -> None:
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
        response: Dict[str, Any] = self.call_api(prompt)
        messages = response.get('choices', [{}])[0].get('message', {}).get('content', '')
        return messages
    
    def dummy_response(self):
        data = {
                "day1": {
                    "places": [
                    {
                        "name": "The Bund",
                        "type": "Attraction",
                        "description": "A waterfront area with colonial-era buildings and a stunning view of the modern skyline."
                    },
                    {
                        "name": "Yu Garden",
                        "type": "Attraction",
                        "description": "A classical Chinese garden with beautiful pavilions, rockeries, and ponds."
                    }
                    ]
                },
                "day2": {
                    "places": [
                    {
                        "name": "Shanghai Museum",
                        "type": "Attraction",
                        "description": "Houses a vast collection of ancient Chinese art and artifacts."
                    },
                    {
                        "name": "Tianzifang",
                        "type": "Attraction",
                        "description": "A maze of narrow alleys filled with artsy shops, cafes, and boutiques."
                    }
                    ]
                }
            }
        return data