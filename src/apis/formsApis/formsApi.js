import { axios } from "../../helper/axios";
import {
  FORM_DATA_API,
  SUBMIT_FORM,
  UPDATE_FORM,
  UPLOAD_IMAGES,
} from "./formsConstant";
import { parseData } from "./formsParser";

export const getFormData = async (payload) => {
  const response = await axios.get(FORM_DATA_API);
  const res = parseData(response);

  return res;
};

export const submitFormDataApi = async (payload) => {
  let res = await axios.post(SUBMIT_FORM, payload);
 
};

export const uploadImagesApi = async (payload) => {
  return axios.post(UPLOAD_IMAGES, payload);
};
export const updateFormApi = async (payload) => {
  let res = await axios.post(UPDATE_FORM, payload);
  // let final = parseCaseData(res.data.data);
  // return final;
};
