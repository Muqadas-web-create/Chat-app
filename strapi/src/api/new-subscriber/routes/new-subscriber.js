'use strict';

/**
 * new-subscriber router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::new-subscriber.new-subscriber');
