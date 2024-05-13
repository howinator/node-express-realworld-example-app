import {ensureArticlesAreSFW } from '../../app/routes/article/article.controller';

describe('article service', () => {
  describe('ensureArticlesAreSFW', () => {
    it('should return true for non-guest', () => {
      expect(ensureArticlesAreSFW({body: 'bad words', author: {username: 'admin'}})).toBe(true)
    })
  })
})
