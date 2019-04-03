import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    {data.allContentfulPost.edges.map(post => (
        <div key={post.node.id}>
            <h3>{post.node.title}</h3>
            <small>Post by {post.node.author} on {post.node.date}</small>
            <br />
            <br />
            <Link to={`/blog-post/${post.node.id}`}> Read More </Link>
            <br />
            <br />
            <hr />
        </div>
    ))}
  </Layout>
)

export const pageQuery = graphql `
    query BlogIndexQuery {  
        allContentfulPost {
            edges {
                node {
                    id
                    title
                    date(formatString: "MMM DD, YYYY")
                    author
                }
            }
        }
    } 
`

export default BlogPage
