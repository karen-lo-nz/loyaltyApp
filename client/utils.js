export const returnShopsFromStamps = (stamps, userId) => { // this will take an array of stamps and a userID and return an array of shop_id's
  const filteredStampsByID = stamps.filter(s => s.user_id === userId)
  const shopIds = []

  filteredStampsByID.forEach(s => {
    if (!shopIds.includes(s.shop_id)) {
      shopIds.push(s.shop_id)
    }
  })

  return shopIds
}
