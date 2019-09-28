import apiObject from './api.js';
import axiosInstance from './interceptor';

import utils from '../utils';

export default utils(apiObject,axiosInstance);
