import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import './RegisterForm.scss';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function RegisterForm({ action, homeUrl, loginApi, loginUrl }) {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <div className="loginback">
    <div className="flex items-center">
    <div className="flex justify-center items-center">
      <div className="register-form flex justify-center items-center">
        <div className="register-form-inner">
          <h1 className="text-center">{_('Register')}</h1>
          {error && <div className="text-critical mb-1">{error}</div>}
          <Form
            id="registerForm"
            action={action}
            isJSON
            method="POST"
            onSuccess={async (response) => {
              if (!response.error) {
                // Log the customer in
                const loginResponse = await fetch(loginApi, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    email,
                    password
                  })
                });

                const loginResponseJson = await loginResponse.json();
                if (loginResponseJson.error) {
                  setError(loginResponseJson.error.message);
                } else {
                  window.location.href = homeUrl;
                }
              } else {
                setError(response.error.message);
              }
            }}
            btnText={_('Register')}
          >
            <Field
              name="full_name"
              type="text"
              placeholder={_('User Name')}
              validationRules={['notEmpty']}
            />
            <Field
              name="email"
              type="text"
              placeholder={_('Email Address')}
              validationRules={['notEmpty', 'email']}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Field
              name="password"
              type="password"
              placeholder={_('Password')}
              validationRules={['notEmpty']}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form>
          <div className="text-center mt-1">
            <span>
              {_('Have an account? ')}
              <a className="" style={{color:"#45A29E"}} href={loginUrl}>
                {' '}
                {_('Sign In')}{' '}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
     <div>
     <h1 style={{color:"#66FCF1"}}>Register Now To Design!</h1>
     <h4 style={{color:"white"}}>Complete your Registration to <br/>
     Start Printing Designs!</h4>

   </div>
   </div>
   </div>

  );
}

RegisterForm.propTypes = {
  action: PropTypes.string.isRequired,
  homeUrl: PropTypes.string.isRequired,
  loginApi: PropTypes.string.isRequired,
  loginUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    homeUrl: url(routeId: "homepage")
    action: url(routeId: "createCustomer")
    loginApi: url(routeId: "customerLoginJson")
    loginUrl: url(routeId: "login")
  }
`;
