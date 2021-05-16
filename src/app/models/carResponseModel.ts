import {ResponseModel} from './responseModel';
import {Cars} from './car';

export interface CarResponseModel extends ResponseModel{
  data:Cars[];
}
