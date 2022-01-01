import * as React from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"

import Layout from "../components/layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContentWrapper>
      <BannerImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <TextWrapper>
        <Title>We are selling all electronic items</Title>
        <Subtitle>Free shipping on your first order!</Subtitle>
        <PrimaryButton text="Explore all products" onClick={() => navigate('products')} />
      </TextWrapper>
    </ContentWrapper>
  </Layout>
)

export default IndexPage

const ContentWrapper = styled.div`
  position: relative;
`

const BannerImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  margin: 0;
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: grid;
  gap: 10px;
`

const Title = styled.h1`
  color: white;
  margin: 0;
`

const Subtitle = styled.p`
  color: rgba(255,255,255,0.7);
  margin: 0;

`