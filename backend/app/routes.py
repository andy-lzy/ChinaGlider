from flask import jsonify, request
from china_cities import *

from gpt.prompt_generator import PromptGenerator
from gpt.chatgpt_api import ChatGPT

def configure_routes(app):
    @app.route('/provinces', methods=['GET'])
    def get_provinces():
        provinces = cities.get_provinces()
        provinces.sort()
        return jsonify(provinces)
    
    @app.route('/cities', methods=['GET'])
    def get_cities():
        province_formatted = request.args.get('province', '')
        province_name = province_formatted.replace("_", " ").title()
        city_list = cities.get_cities_by_province(province_name)
        en_city_names = [city.name_en for city in city_list]
        en_city_names.sort()
        return jsonify(en_city_names)
    
    @app.route('/generate', methods=['POST'])
    def generate_basic_plan():
        data = request.get_json()
        city = data.get('city')
        province = data.get('province')
        days = data.get('days')
        style = data.get('style')
        intensity = data.get('intensity')

        print(data)
        print(request)
        if not all([city, province, days, style, intensity]):
            return jsonify({"error": "Missing parameters"}), 400

        prompt = PromptGenerator.generate_initial_prompt(city, province, days, style, intensity)
        # Generate final output using GPT model
        gpt = ChatGPT()

        # result = gpt.get_response(prompt)
        result = gpt.dummy_response()

        print(result)

        # Return the result as a JSON response
        return jsonify(result)