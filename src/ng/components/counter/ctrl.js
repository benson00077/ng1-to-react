import { react2angular } from "react2angular";
import ReactApp from '../../../App'

const counter = angular
  .module('counter', [])
  .component('counter', react2angular(ReactApp, []))
  .name

export default counter