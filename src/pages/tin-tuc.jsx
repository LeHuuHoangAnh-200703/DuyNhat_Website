import React, { useState } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import { graphql,useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import {VText} from '../components/VNText';

const pageLimit = 4

const Blog = ()=>{
// export default function Blog() {
// 		// console.log(data)
// 		// var numPages = parseInt((data.page.edges.length/pageLimit)+1)

// 		const [curPage,setPage] = useState(1);
// 		return (
// 		<StaticQuery
// 			query ={graphql`
// 				query {
// 				page: allMarkdownRemark {
// 					edges{
// 						node{
// 						frontmatter {
// 							date(formatString: "MMMM DD, YYYY")
// 							slug
// 							title
// 							author
// 							tags
// 							urls
// 							summary
// 							featuredImage {
// 								childImageSharp {
// 									fluid(quality: 100) {
// 									...GatsbyImageSharpFluid
// 									}
// 								}
// 								}
// 							}
// 						}
// 					}
					
// 				}
// 				desktop: file(relativePath: { eq: "duynhat/company/topview.jpg" }) {
// 					childImageSharp {
// 						fluid(quality: 100, maxWidth: 1920) {
// 						...GatsbyImageSharpFluid_withWebp_tracedSVG
// 						}
// 					}
// 				}
// 				}
// 		`}
// 		render = {data=>{
// 			var numPages = parseInt((data.page.edges.length/pageLimit)+1)
// 			return(
// 				<>
// 			<Header/>

// 			<div class="page-content bg-white">
				
// 				<BackgroundImage
// 					// className="dlab-bnr-inr "
// 					fluid={data.desktop.childImageSharp.fluid}
// 					placeholderStyle = {{opacity:0.5}}
// 					alt = "DN Pack Office"
// 					> 
// 					<div class="dlab-bnr-inr overlay-black-middle ">
// 				   <div class="container">
// 						<div class="dlab-bnr-inr-entry">
// 							<h1 class="text-white">Tin Tức</h1>
// 							<div class="breadcrumb-row">
// 								<ul class="list-inline">
// 									<li><Link to="/index">Trang Chủ</Link></li>
// 									<li>Tin Tức</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 					</div>
// 					</BackgroundImage>
			   
// 				<div class="content-area">
// 					<div class="container">
// 						{data.page.edges.map((page,idx) =>{
// 								if(parseInt(idx/pageLimit) === curPage-1){
// 									return(
// 										<div class="blog-post blog-md clearfix">
// 											<div class="dlab-post-media"> 
// 												<a href={page.node.frontmatter.slug}>
// 												<Img fluid={page.node.frontmatter.featuredImage.childImageSharp.fluid} alt={page.node.frontmatter.title} className="img-cover"/>

// 												</a> 
// 											</div>
// 											<div class="dlab-post-info">
// 												<div class="dlab-post-meta">
// 													<ul>
// 														<li class="post-date"> <span>{page.node.frontmatter.date}</span> </li>
// 														<li class="post-author"> By <a href={page.node.frontmatter.slug}>{page.node.frontmatter.author}</a> </li>
// 													</ul>
// 												</div>
// 												<div class="dlab-post-title">
// 													<h4 class="post-title"><a href={page.node.frontmatter.slug}>{page.node.frontmatter.title}</a></h4>
// 												</div>
// 												<div class="dlab-post-text">
// 													<VText>{page.node.frontmatter.summary}</VText>
// 												</div>
// 												<div class="dlab-post-readmore"> 
// 													<a href={page.node.frontmatter.slug} title="READ MORE" rel="bookmark" class="site-button">Read The Article
// 														<i class="ti-arrow-right"></i>
// 													</a>
// 												</div>
// 											</div>
// 										</div>

// 									);
// 								}
// 							}
// 						)}
// 						<div class="pagination-bx clearfix text-center">
// 							<ul class="pagination">
// 								<li class="previous"><a href="#" onClick={() => {
// 									if(curPage >=2){
// 										setPage(curPage - 1)
// 									} else{
// 										setPage(numPages-1)
// 									}
// 									}}><i class="ti-arrow-left"></i> Trang Trước</a></li>
// 								<li class="active"><a href="/tin-tuc">{curPage}</a></li>
// 								<li class="next"><a href="#" onClick={() => {
// 									if(curPage + 1 <= numPages){
// 										setPage(curPage + 1)
// 									}else{
// 										setPage(1)
// 									}
// 									}}>Trang Kế Tiếp <i class="ti-arrow-right"></i></a></li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
				
// 			</div>   
// 			<Footer/>  
// 			</>  
// 			)}
// 	}
// 	/>
// )}
		const data  = useStaticQuery(
			graphql`
				query {
					page: allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] }
					) {
					edges{
						node{
							frontmatter {
								date(formatString: "MMMM DD, YYYY")
								slug
								title
								author
								tags
								urls
								summary
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
					
					}
					desktop: file(relativePath: { eq: "duynhat/company/topview.jpg" }) {
						childImageSharp {
							fluid(quality: 100, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			`
		)
		const [curPage,setPage] = useState(1);
		const numPages = parseInt((data.page.edges.length+pageLimit-1)/pageLimit)
        return (
            <>
                <Header/>
                <div class="page-content bg-white">
					<BackgroundImage
                        // className="dlab-bnr-inr "
						fluid={data.desktop.childImageSharp.fluid}
						placeholderStyle = {{opacity:0.5}}
						alt = "DN Pack Office"
                        > 
						<div class="dlab-bnr-inr overlay-black-middle ">
					   <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Tin Tức</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link to="/index">Trang Chủ</Link></li>
                                        <li>Tin Tức</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
						</div>
						</BackgroundImage>
                    <div class="content-area">
						<div class="container">
							{data.page.edges.map((page,idx) =>{
									if(parseInt(idx/pageLimit) === curPage-1){
										return(
											<div class="blog-post blog-md clearfix">
												<div class="dlab-post-media"> 
													<a href={page.node.frontmatter.slug}>
													<Img fluid={page.node.frontmatter.featuredImage.childImageSharp.fluid} alt={page.node.frontmatter.title} className="img-cover"/>
													</a> 
												</div>
												<div class="dlab-post-info">
													<div class="dlab-post-meta">
														<ul>
															<li class="post-date"> <span>{page.node.frontmatter.date}</span> </li>
															<li class="post-author"> By <a href={page.node.frontmatter.slug}>{page.node.frontmatter.author}</a> </li>
														</ul>
													</div>
													<div class="dlab-post-title">
														<h4 class="post-title"><a href={page.node.frontmatter.slug}>{page.node.frontmatter.title}</a></h4>
													</div>
													<div class="dlab-post-text">
														<VText>{page.node.frontmatter.summary}</VText>
													</div>
													<div class="dlab-post-readmore"> 
														<a href={page.node.frontmatter.slug} title="READ MORE" rel="bookmark" class="site-button">Đọc bài viết
															<i class="ti-arrow-right"></i>
														</a>
													</div>
												</div>
											</div>
										);
									}
								}
							)}
							<div class="pagination-bx clearfix text-center">
								<ul class="pagination">
									<li class="previous"><a href="#" onClick={() => {
										if(curPage >=2){
											setPage(curPage - 1)
										} else{
											setPage(numPages-1)
										}
										}}><i class="ti-arrow-left"></i> Trang Trước</a></li>
									{[...Array(numPages)].map((x, i) =>{
										if(i + 1 === curPage){
											return <li class="active"><a href="#" >{i+1}</a></li>
										}else{
											return <li class="inactive"><a href="#" onClick={() => {
													setPage(i+1)
												}}>{i+1}</a></li>
										}
									}
									)}
									<li class="next"><a href="#" onClick={() => {
										if(curPage < numPages-1){
											setPage(curPage + 1)
										}else{
											setPage(1)
										}
										}}>Trang Kế Tiếp <i class="ti-arrow-right"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>   
				    )           
                <Footer/>                
            </>
	)

}


export default Blog;

// export const pageQuery = graphql`
// query {
//   page: allMarkdownRemark {
// 	edges{
// 		node{
// 		  frontmatter {
// 			  date(formatString: "MMMM DD, YYYY")
// 			  slug
// 			  title
// 			  author
// 			  tags
// 			  urls
// 			  summary
// 			  featuredImage {
// 				  childImageSharp {
// 					fluid(quality: 100) {
// 					  ...GatsbyImageSharpFluid
// 					}
// 				  }
// 				}
// 			  }
// 		}
// 	}
	
//   }
//   desktop: file(relativePath: { eq: "duynhat/company/topview.jpg" }) {
// 	  childImageSharp {
// 		  fluid(quality: 100, maxWidth: 1920) {
// 		  ...GatsbyImageSharpFluid_withWebp_tracedSVG
// 		  }
// 	  }
//   }
// }
// `