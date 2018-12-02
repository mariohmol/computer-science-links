  //recipes
  //  1, "cake"
  //  2, "bread"
  
  //ingredientes
  //  1, "milk"
  //  2, "flour"
  
  
/*
 select * from recipes JOIN ingredientes on recipes.id = ingredientes.id
 select * from recipes, ingredientes where recipes.id = ingredientes.id

//JOIN
1, "cake" 1, "milk"
1, "cake" 2, "flour"
2, "bread" 1, "milk"
2, "bread" 2, "flour"

//JOIN with ON
1, "cake" 1, "milk"
2, "bread" 2, "flour"

//Country, State(country_id), City (state_id), User (city_id)

select * from user , city, state, country
where user.city = city.id and city.state = state.id and state.country = country.id
*/