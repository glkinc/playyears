import HomeContent from '@/components/HomeContent'

export async function generateMetadata() {
  return {
    title: 'Play Years | Activity cards for babies 0-12 months',
    description:
      'Co-created with early childhood experts, the Play Years™ First-Year Deck gives you research-backed ways to play with your baby. So you always know what to do—and why it matters.',
    openGraph: {
      title: 'Play Years | Activity cards for babies 0-12 months',
      description:
        'Co-created with early childhood experts, the Play Years™ First-Year Deck gives you research-backed ways to play with your baby.',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Play Years First-Year Deck — Activity cards for babies 0-12 months',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Play Years | Activity cards for babies 0-12 months',
      description:
        'Research-backed activity cards to help your baby learn through play in the first year.',
      images: ['/images/og-image.png'],
    },
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Play Years Inc.',
  url: 'https://theplayyears.com',
  logo: 'https://theplayyears.com/images/logo.svg',
  sameAs: ['https://instagram.com/shopplayyears/'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@theplayyears.com',
    contactType: 'customer support',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Play Years™ First-Year Deck',
  description:
    '50 research-backed activity cards for babies 0–12 months. Organized by developmental skill area — sensory, language, motor, cognitive, and social-emotional. Co-created with early childhood experts.',
  brand: {
    '@type': 'Brand',
    name: 'Play Years',
  },
  image: [
    'https://theplayyears.com/images/product-shot.jpg',
    'https://theplayyears.com/images/product-shot-alt.jpg',
  ],
  audience: {
    '@type': 'PeopleAudience',
    suggestedMinAge: 0,
    suggestedMaxAge: 1,
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    price: '28.99',
    priceCurrency: 'CAD',
    seller: {
      '@type': 'Organization',
      name: 'Play Years Inc.',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'CAD',
      },
      shippingDestination: [
        { '@type': 'DefinedRegion', addressCountry: 'CA' },
        { '@type': 'DefinedRegion', addressCountry: 'US' },
      ],
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: ['CA', 'US'],
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 30,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <HomeContent />
    </>
  )
}
