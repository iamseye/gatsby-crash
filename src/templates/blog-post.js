import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Link from "gatsby-link"

export default function Template({ data }) {    
    const post = data.contentfulPost
    return (
        <Layout>
            <SEO title="Blog-post" />
            <h1>{post.title}</h1>
            <h4>
                Posted by {post.author} on {post.date}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: post.body.body }} />

            <br />
            <br />
            <Link to="/blog">View more posts</Link>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($id: String!) {
    contentfulPost(id: { eq: $id }) {
        title
        author
        date(formatString: "MMM DD, YYYY")
        body {
            body
        }
    }
  }
`