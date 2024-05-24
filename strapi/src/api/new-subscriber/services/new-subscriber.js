'use strict';

/**
 * new-subscriber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-subscriber.new-subscriber');
