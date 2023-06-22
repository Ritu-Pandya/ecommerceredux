export const getallproduct = (payload) => ({
  type: 'MyProduct',
  payload
})

export const addtocartaction = (payload) => ({
  type: 'addtocart',
  payload
})
export const removeItem = (payload) => ({
  type: 'removecardcart',
  payload
})
export const searchText=(payload)=>({
  type:'searchdata',
  payload

})

