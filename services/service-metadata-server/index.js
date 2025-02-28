/*
 * @Author: baozhoutao@hotoa.com
 * @Date: 2022-03-28 14:16:03
 * @LastEditors: baozhoutao@steedos.com
 * @LastEditTime: 2023-04-21 17:11:38
 * @Description: 
 */

const metadata = require('@steedos/service-metadata');
const packages = require('@steedos/service-packages');
const apps = require('@steedos/service-metadata-apps');
const objects = require('@steedos/service-metadata-objects');
const layouts = require('@steedos/service-metadata-layouts');
const permissionsets = require('@steedos/service-metadata-permissionsets');
const tabs = require('@steedos/service-metadata-tabs');
const translations = require('@steedos/service-metadata-translations');
const triggers = require('@steedos/service-metadata-triggers');

const queriesService = require('./lib/queriesService');
const chartsService = require('./lib/chartsService');
const pagesService = require('./lib/pagesService');
const shareRulesService = require('./lib/shareRulesService');
const restrictionRulesService = require('./lib/restrictionRulesService');
const permissionFieldsService = require('./lib/permissionFieldsService');
const processService = require('./lib/processService');
const processTriggerService = require('./lib/processTriggerService');
const objectTriggerService = require('./lib/objectTriggerService');

module.exports = {
	name: "metadata-server",

  /**
   * Service created lifecycle event handler
   */
  async created() {
    this.broker.createService(metadata);
    this.broker.createService(packages);
    this.broker.createService(apps);
    this.broker.createService(objects);
    this.broker.createService(layouts);
    this.broker.createService(permissionsets);
    this.broker.createService(tabs);
    this.broker.createService(translations);
    this.broker.createService(triggers);
    this.broker.createService(queriesService);
    this.broker.createService(chartsService);
    this.broker.createService(pagesService);
    this.broker.createService(shareRulesService);
    this.broker.createService(restrictionRulesService);
    this.broker.createService(permissionFieldsService);
    this.broker.createService(processService);
    this.broker.createService(processTriggerService);
    this.broker.createService(objectTriggerService);
  },

  async started() {
    await this.broker.waitForServices(['metadata', 'apps', 'objects', 'permissionsets', 'translations', 'triggers'], null, 10);
  }
}