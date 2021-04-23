// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "size is required"),
  pepperoni: yup.boolean(),
  cheese: yup.boolean(),
  chicken: yup.boolean(),
  veggies: yup.boolean(),

});
