import React from "react";
import { Formik, Form } from "formik";
import { InputCustom } from "../InputCustom";

export const FormProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const [values, setValues] = React.useState();

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          user: "",
        }}
        onSubmit={(value) => setValues(value)}>
        <Form className="flex flex-col">
          <span className="text-white ">Canal</span>
          <InputCustom name="channel" placeholder="Damnrojas" />

          <span className="text-white ">Nickname</span>
          <InputCustom name="user" placeholder="Caracol" />

          <button className="text-slate-400" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
