/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Bao Bì Duy Nhật | DN Pack',
    description: 'Bao Bì Duy Nhật chuyên sản xuất in ấn và cung cấp các loại bao bì giấy, bao bì màng ghép phức hợp cao cấp cho nông – lâm nghiệp, thủy – hải sản, hàng tiêu dùng',
    baseUrl: '',
    author: "Duy Nhất Packaging",
    siteUrl: 'https://www.baobiduynhat.com.vn/',
    keywords: ['Bao Bì', 'Sản Xuất Bao Bì', 'Bao Bì Nhựa', 'Bao Bì Giấy', 'Tem', 'Nhãn Dán', 'Công Ty Bao Bì', 'Bao Bì Duy Nhật', 'Duy Nhật', 'DN Pack'],
    image: "https://www.baobiduynhat.com.vn/topview.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-179045573-2"
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              showCaptions: true
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `@wardpeet/gatsby-image-nextgen`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.baobiduynhat.com.vn',
        sitemap: 'https://www.baobiduynhat.com.vn/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bao Bì Duy Nhật | DN Pack | Nhanh Chóng - Chính Xác - Chuyên Nghiệp`,
        short_name: `Bao Bì Duy Nhật | Nhanh Chóng - Chính Xác - Chuyên Nghiệp`,
        start_url: `https://www.baobiduynhat.com.vn/index.html`,
        background_color: `#dbdbdb`,
        theme_color: `#f7f0eb`,
        display: `standalone`,
        icon: `src/images/duynhat/logo/DN_logo.png`, icon_options: {
          purpose: `any maskable`,
        },
        lang: `en`,
        description: `Bao Bì Duy Nhật chuyên sản xuất in ấn và cung cấp các loại bao bì giấy, bao bì màng ghép phức hợp cao cấp cho nông – lâm nghiệp, thủy – hải sản, hàng tiêu dùng.`,
        crossOrigin: `use-credentials`
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/admin/**', '/private/**'],
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://www.baobiduynhat.com.vn', 'https://baobiduynhat.com.vn'],
      },
    },

    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/`, `/gioi-thieu/`, `/nha-may/`, `/tin-tuc/`, `/san-pham/`, `/lien-he/`]
      }
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://www.dnpack.com.vn`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
          `Montserrat`,
          `Merriweather`

        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js']
      }
    },
    `gatsby-plugin-nodejs`
  ],
}
