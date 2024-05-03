const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');
const {
  setContextValue
} = require('../../../../graphql/services/contextHelper');
const { getSetting } = require('../../../../setting/services/setting');

module.exports = async (request, response, delegate, next) => {
  setContextValue(request, 'pageInfo', {
    title: await getSetting('storeName', 'Bhukkhad'),
    description: await getSetting(
      'storeDescription',
      'An e-commerce platform'
    ),
    url: buildUrl('homepage')
  });

  next();
};
