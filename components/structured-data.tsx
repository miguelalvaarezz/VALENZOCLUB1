export function StructuredData() {
  const baseUrl = 'https://valenzoclub.com'
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VALENZO CLUB",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "description": "Exclusive fashion brand - We don't sell clothes, we sell access. Elite membership and limited edition drops.",
    "sameAs": [
      "https://www.instagram.com/valenzoclub",
      "https://www.twitter.com/valenzoclub",
      "https://www.facebook.com/valenzoclub"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@valenzoclub.com"
    }
  }
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VALENZO CLUB",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
  
  const fashionBrandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "VALENZO CLUB",
    "description": "Exclusive luxury fashion brand offering limited edition drops and elite membership",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "slogan": "We don't sell clothes — we sell access"
  }
  
  const allSchemas = [organizationSchema, websiteSchema, fashionBrandSchema]
  
  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

