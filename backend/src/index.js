"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    const extension = ({ nexus }) => ({
      types: [
        // creating new object type called Creator
        nexus.objectType({
          type: 'Creator',
          name: 'Creator',
          definition(t) {
            t.int('id');
            t.string('firstname');
            t.string('lastname');
          },
        }),
        nexus.extendType({
          type: 'Car',
          definition(t) {
            // we want to know who is the creator
            t.field('createdBy', {
              type: 'Creator',
              async resolve(root, args, ctx) {
                // when we use query, we can populate createdBy
                const query = strapi.db.query('api::car.car');
                const car = await query.findOne({
                  where: {
                    id: root.id,
                  },
                  populate: ['createdBy'],
                });
                
                return {
                  id: car.createdBy.id,
                  firstname: car.createdBy.firstname,
                  lastname: car.createdBy.lastname,
                };
              },
            })
          }
        }),
      ],
    });

    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
