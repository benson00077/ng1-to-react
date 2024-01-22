import { react2angular } from "react2angular";
import ReactApp from '../../../App'

const counter = angular
  .module('counter', [])
  .component('counter', react2angular(ReactApp, ['title']))
  .name

export default counter