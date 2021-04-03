import fetch from 'isomorphic-unfetch'

import { getPriceFraction, getPriceCents } from '../../../lib/helpers'

export default async (req, res) => {
  const { q } = req.query
  if (q === '') res.status(200).json({ items: q })

  if (q && q !== 'undefined') {
    const searhUrl = `${process.env.MELI_API_URL}/sites/MLA/search?q=${q}`
    const response = await fetch(searhUrl)
    const data = await response.json()

    const categoryFilter = data.filters.find(filter => filter.id === 'category')
    const categories = categoryFilter && categoryFilter.values[0].path_from_root
    const filteredCategories = categories && categories.map(category => category.name)
    const { results } = data
    const limitedResults = results.length > 4 ? results.slice(0, 4) : results
    const filteredResults = limitedResults.map(result => {
      const { id, title, currency_id, price, thumbnail, condition, shipping } = result

      return {
        id,
        title,
        price: {
          currency: currency_id,
          amount: getPriceFraction(price),
          decimals: getPriceCents(price)
        },
        picture: thumbnail,
        condition,
        free_shipping: shipping.free_shipping
      }
    })

    const formattedData = {
      author: {
        name: 'Azucena',
        lastname: 'Zhou'
      },
      categories: filteredCategories,
      items: filteredResults
    }

    res.status(200).json(formattedData)
  } else {
    res.status(404).json({ status: 404, error: 'No products found' })
  }
}
