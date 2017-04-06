exports.definition = {
	config: {
		URL: "http://webdev.hilmarsdottir.com/wp-json/wp/v2/users",
		debug: 1,
		adapter: {	
			type: "restapi",
			collection_name: "wpuser",
			idAttribute: "id"
		},
		headers: {
			Authorization: 'Basic ' + Titanium.Utils.base64encode('admin:!ealweb/dev#17'),
			Accept: "application/json",
			
		},
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};