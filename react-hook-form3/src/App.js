import th3 from "./th3";
import "./App.css";
import {Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object().shape({
  receiver: yup.string().email().required(),
  title: yup.string().min(6).required(),
  content: yup.string().min(6).required(),
  attachFile: yup.mixed().required('Tệp đính kèm là bắt buộc'),
});

const getData = (values) => {
  console.log(values);
};

function App() {
  return (
    <Formik
    initialValues={{receiver: '', title: '', content: '', attachFile: ''}}
    validationSchema={validationSchema}
    onSubmit={getData}
    >
     {({errors, touched}) => (
      <form style={{width: '300px', margin: 'auto'}}>
    <h3 className="mb-3">Trình soạn thảo</h3>
    <div className="mb-3">
      <label htmlFor="receiver" className="form-label">Người nhận</label>
      <Field type="email" className={`form-control ${errors.receiver && touched.receiver && 'is-invalid'}`} id="receiver" name='receiver' aria-describedby="emailHelp"/>
      <ErrorMessage name="receiver" component="div" className="invalid-feedback" />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Tiêu đề</label>
      <Field type="text" className={`form-control ${errors.title && touched.title && 'is-invalid'}`} id="title" name='title' aria-describedby="emailHelp"/>
      <ErrorMessage name="title" component="div" className="invalid-feedback" />
    </div>
    <div className="mb-3">
      <label htmlFor="content" className="form-label">Nội dung</label>
      <Field as="textarea" className={`form-control ${errors.content && touched.content && 'is-invalid'}`} placeholder="Điền nội dung tại đây !" id="content" name='content' style={{height: '100px'}}/>
      <ErrorMessage name="content" component="div" className="invalid-feedback" />
    </div>
    <div className="mb-3">
      <label htmlFor="attachFile" className="form-label">Tệp đính kèm</label>
      <Field type="file" className={`form-control ${errors.attachFile && touched.attachFile && 'is-invalid'}`} id="attachFile" name='attachFile'/>
      <ErrorMessage name="attachFile" component="div" className="invalid-feedback" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
     )}
    </Formik>
  );
}

export default App;