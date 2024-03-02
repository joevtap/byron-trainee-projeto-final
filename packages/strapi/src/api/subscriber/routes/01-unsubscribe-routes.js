module.exports = {
  routes: [
    {
      method: "DELETE",
      path: "/subscribers/unsubscribe/:subscriberId",
      handler: "unsubscribe.index",
    },
  ],
};
