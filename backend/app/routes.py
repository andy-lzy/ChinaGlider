from flask import jsonify, request
from china_cities import *

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
    
    @app.route('/query', methods=['PUT'])
    def get_plan():
        None