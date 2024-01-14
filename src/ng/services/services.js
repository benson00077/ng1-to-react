import LocationService from './location.service';

const ServicesModule = angular
  .module('services', [])
  .service('LocationService', LocationService).name;

export default ServicesModule;