/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      title: 'Mean Girls',
      date: 'April 30, 2004',
      studio: 'Paramount',
      country: 'United States',
      runtime: 97,
      userAdded: false
    },
    {
      title: 'Hackers',
      date: 'September 15, 1995',
      studio: 'United Artists',
      country: 'United States',
      runtime: 105,
      userAdded: false
    },
    {
      title: 'The Grey',
      date: 'January 27, 2012',
      studio: 'Open Road Films',
      country: 'United States',
      runtime: 117,
      userAdded: false
    },
    {
      title: 'Sunshine',
      date: 'July 27, 2007',
      studio: 'Searchlight Pictures',
      country: 'United Kingdom',
      runtime: 117,
      userAdded: false
    },
    {
      title: 'Ex Machina',
      date: 'April 24, 2015',
      studio: 'A24',
      country: 'United Kingdom',
      runtime: 108,
      userAdded: false
    }
  ]);
};
