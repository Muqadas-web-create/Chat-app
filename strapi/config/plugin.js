module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: '<EMAIL_To>',
          defaultReplyTo: 'EMAIL_TO',
          testAddress: 'TEST_EMAIL',
        },
      },
    },
  });