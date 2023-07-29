import { Formik, Field, ErrorMessage } from 'formik';
import { Form, FormField } from './RecipeForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const RecepiesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  img: Yup.string().min(2, 'Too Short!').required('Required'),
  dificult: Yup.string().oneOf(['easy', 'mid', 'hard']).required('Required'),
});

export const RecipeForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        img: '',
        dificult: 'easy',
      }}
      validationSchema={RecepiesSchema}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Image
          <Field name="img" />
          <ErrorMessage name="img" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficult">
            <option value="easy">Easy</option>
            <option value="mid">Mid</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMessage name="difficult" />
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
