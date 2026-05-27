export default function sitemap() {
  const base = 'https://playyears.com'

  const routes = [
    { url: base, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${base}/shop`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/approach`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/resources`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/ambassador`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/wholesale`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/giveaway`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${base}/contact`, priority: 0.5, changeFrequency: 'yearly' },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/returns`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/shipping`, priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
