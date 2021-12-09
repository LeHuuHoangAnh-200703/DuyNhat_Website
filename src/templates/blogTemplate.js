import React from "react"
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
// import { graphql } from 'gatsby'
import Img from "gatsby-image";
import Sidebar from '../components/sidebar'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <>
      <Header/>
      <div class="page-content bg-white">
                       {/* <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                           <div class="container">
                               <div class="dlab-bnr-inr-entry">
                                   <h1 class="text-white">Blog Single</h1>
                                   <div class="breadcrumb-row">
                                       <ul class="list-inline">
                                           <li><Link to="/">Home</Link></li>
                                           <li>Blog Single</li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div> */}

                       <div class="content-area">
   						{/* <div class="container max-w900"> */}
						   <div class="container">
                            <div class="row">
                                <div class="col-lg-9 m-b30">
   							<div class="blog-post blog-single">
   								<div class="dlab-post-meta">
   									<ul>
   										<li class="post-date">{frontmatter.date} </li>
   										<li class="post-author"> By <Link to="/#">{frontmatter.author}</Link> </li>
   									</ul>
   								</div>
   								<div class="dlab-post-title ">
   									<h4 class="post-title m-t0"><Link to={frontmatter.slug}>{frontmatter.title}</Link></h4>
   								</div>
   								<div class="dlab-post-media">
   									{/* <Link to="/blog-single-sidebar"><img src={require("../../images/duynhat/company/DJI_0170-copy.jpg")} alt=""/></Link> */}
									   <Img style={{maxHeight:"450px",height:"auto"}}fluid={featuredImgFluid} />

   								</div>

   								<div  className="blog-post-content"   dangerouslySetInnerHTML={{ __html: html }}>
								   
   								</div>
   								<div class="dlab-post-tags clear">

   									<div class="post-tags">
									   {frontmatter.tags.map((tag,idx) =>{
									   		const url = "/" + frontmatter.urls[idx];
											return <Link to={url}>{tag.toString()}</Link>
									   	}
										)}
   										{/* <Link to="/#">Child </Link> <Link to="/#">Eduction </Link> <Link to="/#">Money </Link> <Link to="/#">Resturent </Link> */}
   									</div>
   								</div>
   							</div>
   					
   						</div>
						   <Sidebar/>
						   </div>
						   </div>
   					</div>
					   
                   </div>
      <Footer/>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
		author
		tags
		urls
		featuredImage {
			childImageSharp {
			  fluid(quality: 100) {
				...GatsbyImageSharpFluid
			  }
			}
		  }
      }
    }
  }
`

//
// class BlogTemplate extends Component {
//
//
//     render() {
//         return (
//             <>
//                 <Header/>
//                 <StaticQuery
//                             query={graphql`
//                               query {
//                                   desktop: file(relativePath: { eq: "duynhat/company/topview.jpg" }) {
//                                     childImageSharp {
//                                       fluid(quality: 100, maxWidth: 1920) {
//                                       ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                                         }
//                                       }
//                                     }
//                                   }
//                           `}
//                             render={data => {
//                                 return (
//                         <div class="page-content bg-white">
//
//         					<BackgroundImage
//         						fluid={data.desktop.childImageSharp.fluid}
//         						placeholderStyle = {{opacity:0.5}}
//         						alt = "DN Pack Office"
//                                 >
//         						<div class="dlab-bnr-inr overlay-black-middle ">
//         					   <div class="container">
//                                     <div class="dlab-bnr-inr-entry">
//                                         <h1 class="text-white">Blog</h1>
//                                         <div class="breadcrumb-row">
//                                             <ul class="list-inline">
//                                                 <li><Link to="/index">Home</Link></li>
//                                                 <li>Blog</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//         						</div>
//         						</BackgroundImage>
//                     <div class="content-area">
// 						<div class="container max-w900">
// 							<div class="blog-post blog-single">
// 								<div class="dlab-post-meta">
// 									<ul>
// 										<li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
// 										<li class="post-author"> By <Link to="/#">Harry</Link> </li>
// 									</ul>
// 								</div>
// 								<div class="dlab-post-title ">
// 									<h4 class="post-title m-t0"><Link to="/blog-single-sidebar">How To Get People To Like Industry</Link></h4>
// 								</div>
// 								<div class="dlab-post-media dlab-img-effect zoom-slow">
// 									<Link to="/blog-single-sidebar"></Link>
// 								</div>
// 								<div class="dlab-post-text">
//
// 								</div>
// 								<div class="dlab-post-tags clear">
// 									<div class="post-tags">
// 										<Link to="/#">Child </Link> <Link to="/#">Eduction </Link> <Link to="/#">Money </Link> <Link to="/#">Resturent </Link>
// 									</div>
// 								</div>
// 							</div>
//
// 						</div>
// 					</div>
//
//                 </div>
//               )
//                   }}
//                   />
//                 <Footer/>
//             </>
//         )
//     }
// }
// export default BlogTemplate;
