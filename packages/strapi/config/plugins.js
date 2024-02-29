module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"),
      },
      settings: {
        defaultFrom: "Roteirizando <roteirizando@joevtap.com>",
        defaultReplyTo: "Roteirizando <roteirizando@joevtap.com>",
      },
    },
  },
});
