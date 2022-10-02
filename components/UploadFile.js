import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage, useField } from 'formik'
// import axios from 'axios'

function UploadFile() {
  return (
    <div className="mt-28">
      {' '}
      <Formik
        initialValues={{
          profile: '',
        }}
        validationSchema={Yup.object({
          profile: Yup.array().max(1, 'select 1 file'),
        })}
        onSubmit={(values, props) => {
          let data = new FormData()
          //   values.profile.forEach((photo, index) => {
          data.append(`photo${index}`, values.profile)
          //   })
          // axios
          //   .post('you_api_for_file_upload', data, {
          //     headers: {
          //       'Content-Type': 'multipart/form-data',
          //     },
          //   })
          //   .then((response) => {
          //     console.log(response)
          //   })
          //   .catch((err) => {
          //     console.log(err)
          //   })
        }}
      >
        {(formik) => {
          return (
            <>
              <Form>
                <input
                  id="file"
                  name="profile"
                  type="file"
                  onChange={(event) => {
                    const file = event.target.file
                    // let myFile = Array.from(files)
                    formik.setFieldValue('profile', file)
                  }}
                  //   multiple
                />
                <ErrorMessage name="profile" />
                <button type="submit" disabled={formik.isSubmitting}>
                  Submit
                </button>
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}

export default UploadFile
