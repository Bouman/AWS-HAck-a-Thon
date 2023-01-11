"use strict";

/**
 * cars-sing service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::cars-sing.cars-sing");
