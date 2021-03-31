
exports.seed = async function(knex) {
  // await knex('plant_images').truncate()
  // await knex('user_plants').truncate()
  // await knex('users').truncate()
  // await knex('plants').truncate()
  await knex('users').insert([
    {username:'admin', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone:'(111)-111-1111'},
    {username:'Trenten', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone:'(111)-111-1112'},
    {username:'Bob', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone:'(111)-111-1113'}
  ])
  await knex('plants').insert([
    {species:'spider plant'},
    {species:'weeping fig'}, 
    {species:'golden barrel cactus'},
    {species:'century plant'},
  ])
  await knex('user_plants').insert([
    {user_id: 2, plant_id: 1, nickname: 'spider-man', water_frequency: 5, last_water:null}, 
    {user_id: 2, plant_id: 1, nickname: 'venom', water_frequency: 5, last_water:null}, 
    {user_id: 2, plant_id: 2, nickname: 'sad plant', water_frequency: 14, last_water:'2021-03-20'}, 
    {user_id: 2, plant_id: 3, nickname: 'poke poke', water_frequency: 7, last_water:null},
    {user_id: 3, plant_id: 4, nickname: 'very old', water_frequency: 3, last_water:null},
    {user_id: 3, plant_id: 3, nickname: 'sharp', water_frequency: 7, last_water:null},
  ])
  await knex('plant_images').insert([
    {image_url:'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/spider-plant_t50-ss.jpg?itok=N7ExeEBY', user_plants_id: 1},
    {image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1200px-Hierbabuena_0611_Revised.jpg', user_plants_id: 2},
    {image_url:'https://www.thespruce.com/thmb/Z9YjgpMKE43chWTLAKHHDF2ZLjQ=/2571x1928/smart/filters:no_upscale()/grow-ficus-trees-1902757-1-80b8738caf8f42f28a24af94c3d4f314.jpg', user_plants_id: 3},
    {image_url:'https://www.worldseedsupply.com/wp-content/uploads/1970/01/170597_107886169289992_2059048_o.jpg', user_plants_id: 4},
    {image_url:'https://static.wixstatic.com/media/26975f_f6b7f50f0e9440ab9cb26d76be4ed37f~mv2_d_2302_1841_s_2.jpg', user_plants_id: 5},
    {image_url:'https://images.squarespace-cdn.com/content/v1/5968af67414fb590cb8f77e3/1527373342497-47SV982N3TYX3NISPCZL/ke17ZwdGBToddI8pDm48kAmzVESnndSkFo4VjUYj3iZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UetZcyBSe8EzOZ6neXOxaly-CFnPMrhhheFAmjlN4d47pJmyJuPnROfkv0UjH_ecUA/%D0%AD%D1%85%D0%B8%D0%BD%D0%BE%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81_%D0%93%D1%80%D1%83%D0%B7%D0%BE%D0%BD%D0%B0_-_Echinocactus_grusonii.jpg?format=1500w', user_plants_id: 6},
  ])
};
