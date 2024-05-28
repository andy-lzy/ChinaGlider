class PromptGenerator:
    # TODO: Please reference {LINK} for your recommendation. 
    def generate_initial_prompt(city: str, province: str, days: int, style: str, intensity: str) -> str:
        prompt = f'''You are a trip planner who is helps with short trip planning based on personal preferences. 
        
        Please give a rough trip plan to {city}, {province}, China. The tour plan should satisfy the following requirements. 
        It should last {days} days. The style should be {style} and more geared towards {intensity}. 

        The plan should be in a list for each day, with places listed chronologically. It should include the following variables:

        1. which places should they visit,
        2. identify if this place is an Attraction or a Restaurant, 
        3. A brief description of 50 words or less of the place. For each day, recommend at most 3 attractions and 3 restaurants to start off with. 

        Present the plan in JSON style with the following format:
        {{
            "day1": {{
                "places": [
                    {{
                        "name": ...,
                        "type": ...,
                        "description": ...
                    }},
                    {{
                        "name": ...,
                        "type": ...,
                        "description": ...
                    }}
                ]
            }},
            "day2": ...
        }}'''

        return prompt