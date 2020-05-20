import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Invalid Name").min(3,"Minimum 3 letter character"),
  surname: Yup.string().required("Invalid Surname"),
  company: Yup.string().required("Invalid Company"),
  email: Yup.string().required("Invalid Email"),
  phone: Yup.string().required("Invalid Phone"),
  website: Yup.string().required("Invalid Website"),
});

export class Reactstrap extends Component {
  render() {
    return (
      <div>
        <Container>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              company: "",
              email: "",
              phone: "",
              website: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              alert("Form Gönderildi.");
              //console.log(values);
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <h2>Contact Us</h2>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="Name">
                        <b>First Name</b>
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        value={values.name}
                        invalid={errors.name}
                      />
                      {errors.name && (
                        <FormFeedback>{errors.name}</FormFeedback>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label for="Company">
                        <b>Company</b>
                      </Label>
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Enter Company"
                        onChange={handleChange}
                        value={values.company}
                        invalid={errors.company}
                      />
                      {errors.company && (
                        <FormFeedback>{errors.company}</FormFeedback>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label for="Email">
                        <b>Email address</b>
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        value={values.email}
                        invalid={errors.email}
                      />
                      {errors.email && (
                        <FormFeedback>{errors.email}</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="LastName">
                        <b>Last Name</b>
                      </Label>
                      <Input
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Enter Surname"
                        onChange={handleChange}
                        value={values.surname}
                        invalid={errors.surname}
                      />
                      {errors.surname && (
                        <FormFeedback>{errors.surname}</FormFeedback>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label for="Phone">
                        <b>Phone Number</b>
                      </Label>
                      <Input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        value={values.phone}
                        invalid={errors.phone}
                      />
                      {errors.phone && (
                        <FormFeedback>{errors.phone}</FormFeedback>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label for="Website ">
                        <b>Your Website</b>
                      </Label>
                      <Input
                        type="url"
                        name="website"
                        id="website"
                        placeholder="Please include http://url"
                        onChange={handleChange}
                        value={values.website}
                        invalid={errors.website}
                      />
                      {errors.website && (
                        <FormFeedback>{errors.website}</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup tag="fieldset">
                  <legend>When is the best time of day to reach you?</legend>
                  <FormGroup check>
                    <Label check>
                      <Input
                        onChange={handleChange}
                        value={values.radio}
                        type="radio"
                        /*checked="true"*/ name="radio"
                      />
                      Morning
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        onChange={handleChange}
                        value={values.radio}
                        type="radio"
                        name="radio"
                      />
                      Evening
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <h6>Would you like to recieve our email newsletter?</h6>
                    <Input
                      onChange={handleChange}
                      value={values.checkbox}
                      type="checkbox"
                    />
                    Sure!
                  </Label>
                </FormGroup>
                <Button color="primary">Submit</Button>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    );
  }
}

export default Reactstrap;
