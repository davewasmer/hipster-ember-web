import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  include: [ 'votes', 'author', 'comments' ]

  // serialize(payload) {
  //   let model = (payload.models && payload.models[0]) || payload;
  //   let schema = model._schema;
  //   let json = ApplicationSerializer.prototype.serialize.apply(this, arguments);
  //   if (Array.isArray(json.data)) {
  //     json.data.map(this.addCommentMeta.bind(this, schema));
  //   } else {
  //     this.addCommentMeta(schema, json.data);
  //   }
  //   return json;
  // },
  //
  // addCommentMeta(schema, tip) {
  //   tip.relationships.comments.meta = {
  //     total: schema.comments.where({ tipId: tip.id }).models.length
  //   };
  // }

});
