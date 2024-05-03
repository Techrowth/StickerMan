import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import './LoginForm.scss';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import Area from '@components/common/Area';

export default function LoginForm({
  action,
  homeUrl,
  registerUrl,
  forgotPasswordUrl
}) {
  const [error, setError] = React.useState(null);

  return (
    <div className="loginback">
  <div className="flex items-center">
      <div className="login-form flex justify-center items-center">
        <div className="login-form-inner">
          <h1 className="text-center">{_('Login')}</h1>
          {error && <div className="text-critical mb-1">{error}</div>}
          <Form
            id="loginForm"
            action={action}
            isJSON
            method="POST"
            onSuccess={(response) => {
              if (!response.error) {
                window.location.href = homeUrl;
              } else {
                setError(response.error.message);
              }
            }}
            btnText={_('SIGN IN')}
            submitBtn={false}
          >
            <Area
              id="loginFormInner"
              coreComponents={[
                {
                  component: { default: Field },
                  props: {
                    name: 'email',
                    type: 'text',
                    placeholder: _('Email Address'),
                    validationRules: ['notEmpty', 'email']
                  },
                  sortOrder: 10
                },
                {
                  component: { default: Field },
                  props: {
                    name: 'password',
                    type: 'password',
                    placeholder: _('Password'),
                    validationRules: ['notEmpty']
                  },
                  sortOrder: 20
                }
              ]}
            />
          </Form>
          <div className="text-center mt-1 gap-2 flex justify-center">
        
            <a href={forgotPasswordUrl} style={{color:"#45A29E"}}>{_('Forgot your password?')}</a><br/>
         
          </div>
          <div className="text-center mt-1 gap-2 flex justify-center">
        
      No Account? 
        <a className="" style={{color:"#45A29E"}} href={registerUrl}>
          {_('Create an account')}
        </a>
      </div>
        </div>
      </div>
      <div>
        <h1 style={{color:"#66FCF1"}}>Login Now To Design!</h1>
        <h4 style={{color:"white"}}>Login and start creating <br/>
        your own Fashion</h4>

      </div>
    </div>
    </div>
  );
}

LoginForm.propTypes = {
  action: PropTypes.string.isRequired,
  homeUrl: PropTypes.string.isRequired,
  registerUrl: PropTypes.string.isRequired,
  forgotPasswordUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    homeUrl: url(routeId: "homepage")
    action: url(routeId: "customerLoginJson")
    registerUrl: url(routeId: "register")
    forgotPasswordUrl: url(routeId: "resetPasswordPage")
  }
`;
