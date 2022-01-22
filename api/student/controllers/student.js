"use strict";
require("dotenv").config();
const Response = require(`../../../utils/response`);

const signup = async (ctx) => {
  // get information
  const { username } = ctx.request.body;

  // create new user
  try {
    await strapi.query(`student`).create({ username });
  } catch (error) {
    return strapi.services.student.err500(ctx, error, "create new user");
  }

  return username;
};

module.exports = {
  signup,
};
