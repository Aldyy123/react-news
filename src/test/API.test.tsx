import { getNews } from '../NewsApi'

describe('Test API News', () => {
  let api: any
  beforeAll( async () => {
    api = await getNews()
  })
  test('should test fecth API OK', async () => {
    expect(api.status === 'ok').toBeTruthy()
  })
  xit('should test error API because api key invalid or other', async () => {
    expect(api.status === 'error').toBeTruthy()
  })
  test('should test success API with articles', async () => {
    expect(api.articles.length).toBeGreaterThan(1)
  })
})
