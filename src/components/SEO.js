import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article, product }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : null;

  return (
    <Helmet
      htmlAttributes={{ lang: "vi" }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      {/* Basic Meta Tags */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="bao bì nhựa, bao bì giấy, tem nhãn, thùng carton, bao bì thực phẩm, in ấn bao bì" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      {metaImage && <meta property="og:image" content={metaImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}

      {/* Structured Data cho Product */}
      {product && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.title,
            "image": metaImage,
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": "Duy Nhật"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "VND"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;