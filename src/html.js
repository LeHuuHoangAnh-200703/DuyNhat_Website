import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Bao Bì Duy Nhật</title>
        <meta name="title" content="Bao Bì Duy Nhật | DN Pack"/>
        <meta name="description" content="Bao Bì Duy Nhật chuyên sản xuất in ấn và cung cấp các loại bao bì giấy, bao bì màng ghép phức hợp cao cấp cho nông – lâm nghiệp, thủy – hải sản, hàng tiêu dùng"/>
        <link rel="canonical" href={"https://www.baobiduynhat.com.vn/"} />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.baobiduynhat.com.vn/"/>
        <meta property="og:title" content="Bao Bì Duy Nhật | DN Pack"/>
        <meta property="og:description" content="Bao Bì Duy Nhật chuyên sản xuất in ấn và cung cấp các loại bao bì giấy, bao bì màng ghép phức hợp cao cấp cho nông – lâm nghiệp, thủy – hải sản, hàng tiêu dùng"/>
        <meta property="og:image" content="https://www.baobiduynhat.com.vn/topview.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.baobiduynhat.com.vn/"/>
        <meta property="twitter:title" content="Bao Bì Duy Nhật | DN Pack"/>
        <meta property="twitter:description" content="Bao Bì Duy Nhật chuyên sản xuất in ấn và cung cấp các loại bao bì giấy, bao bì màng ghép phức hợp cao cấp cho nông – lâm nghiệp, thủy – hải sản, hàng tiêu dùng"/>
        <meta property="twitter:image" content="https://www.baobiduynhat.com.vn/topview.jpg"/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet"/>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
