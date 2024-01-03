import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ca-central-1.hygraph.com/v2/clqx6gjrmroiz01umfug24ui5/master"

export const getCourseList = async (level:any) => {
  const query = gql`
  query CourseList {
    pCourses(where: {level:`+ level +`}) {
      id
      name
      price
      time
      level
      author
      tags
      discription {
        markdown
      }
      banner {
        url
      }
      chapters {
        id
      }
    }
  }
`
  const result = await request(MASTER_URL, query)
  return result
}