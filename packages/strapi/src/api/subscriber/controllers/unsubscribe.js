"use strict";

module.exports = {
  index: async (ctx) => {
    const subscriber = await strapi.entityService.findMany(
      "api::subscriber.subscriber",
      {
        filters: {
          identifier: ctx.params.subscriberId,
        },
      }
    );

    if (subscriber.length === 0) {
      ctx.status = 404;
      return;
    }

    await strapi.entityService.delete(
      "api::subscriber.subscriber",
      subscriber[0].id
    );

    ctx.status = 200;
  },
};
