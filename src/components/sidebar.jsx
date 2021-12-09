import React from 'react';
import { Link } from 'gatsby';
import ClientSlider1 from './clientSlider1';
import ContactForm from '../components/contactForm'
import { graphql,useStaticQuery } from 'gatsby'
import Img from "gatsby-image";

const Sidebar = () => {
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
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        `
    )
    return ( 
        <div class="col-lg-3">
        <aside  class="side-bar sticky-top">
            <div class="widget recent-posts-entry">
                <h5 class="widget-title style-1">Recent Posts</h5>
                {data.page.edges.map((page,idx) =>{
                    if(idx >=0 && idx <=2){
                        return(
                            <div class="widget-post-bx">
                                <div class="widget-post clearfix">
                                    <div class="dlab-post-media"> 
                                    <a href={page.node.frontmatter.slug}>   <Img  fluid={page.node.frontmatter.featuredImage.childImageSharp.fluid} alt={page.node.frontmatter.title} width="200" height="143"/></a>
                                    </div>
                                    <div class="dlab-post-info">
                                        <div class="dlab-post-meta">
                                            <ul>
                                                <li class="post-date">  <span>{page.node.frontmatter.date}</span></li>
                                                <li class="post-author"> By <a href={page.node.frontmatter.slug}>{page.node.frontmatter.author}</a> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-header">
                                            <h6 class="post-title"><a href={page.node.frontmatter.slug}>{page.node.frontmatter.title}</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}})}
            </div>
            <div class="widget widget-newslatter">
                <h5 class="widget-title style-1">Contact Us</h5>
                    <ContactForm/>
            </div>
        </aside>
    </div>
    );
}
 
export default Sidebar;