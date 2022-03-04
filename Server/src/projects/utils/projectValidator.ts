import * as yup from 'yup';

export const createProjectSchema = yup.object({
  body: yup.object({
    title: yup
      .string()
      .min(5, 'title must be at least 5 characters')
      .max(40, 'title must be at max 40 characters')
      .required('title is required'),
  }),
});
export const editProjectSchema = yup.object({
  body: yup.object({
    title: yup
      .string()
      .min(5, 'title must be at least 5 characters')
      .max(40, 'title must be at max 40 characters')
      .required('title is required'),
  }),
  params: yup.object({}),
});
