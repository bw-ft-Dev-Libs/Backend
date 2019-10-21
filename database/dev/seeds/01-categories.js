
exports.seed = function(knex) {

    return knex('category').insert([
      {categoryName: "Action"},
      {categoryName: "Adventure"},
      {categoryName: "Code"},
    ]);

};
