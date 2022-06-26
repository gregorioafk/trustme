import React from "react";
import { Formik, Form, Field } from "formik";

export const FormProfile = () => {
  const [values, setValues] = React.useState();

  console.log(values, "values");
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(value) => setValues(value)}>
        <Form className="flex flex-col">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Canal
          </label>
          <Field
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="caracol-veloz"
            name="channel"
          />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name
          </label>
          <Field
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Dashe009"
            name="name"
          />
          <button className="text-slate-400" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
