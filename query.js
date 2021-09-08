import { gql } from '@apollo/client'

export default gql`
  query Query($getModelListStatus: Int, $getContentId: ID!) {
    getCompareModelList {
      id
      name
    }
    getModelList(status: $getModelListStatus) {
      id
      name
    }
    getContent(id: $getContentId) {
      status
      contentName
      screenType
      screenUrl
      screenDirection
      screenInterval
      indexType
      indexUrl
      priceColor
      bannerUrl
      salePoints {
        sorts
        title
        subtitle
        urlType
        url
        pages {
          sorts
          type
          url
          more
          title
          titleColor
          content
          contentColor
          align
        }
      }
      features {
        url
        items {
          sorts
          imageUrl
          title
          content
          pages {
            sorts
            type
            url
            title
            titleColor
            content
            contentColor
            align
          }
        }
      }
      parameters
      models {
        id
        name
        realModel
        brightness
      }
      contrastModel
      scopeType
      orgList {
        id
        name
      }
      releaseTime
      expireTime
      screenVideo
    }
  }
`
