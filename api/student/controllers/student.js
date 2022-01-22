"use strict";
require("dotenv").config();
const Response = require(`../../../utils/response`);

const signup = async (ctx) => {
  // get information
  const { username } = ctx.request.body;

  // create new user
  try {
    user = await strapi.query(`customer`).create({ username });
  } catch (error) {
    return strapi.services.customer.err500(error, "create new user");
  }

  return username;
};

module.exports = {
  signup,
};
