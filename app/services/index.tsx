import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ca-central-1.hygraph.com/v2/clqx6gjrmroiz01umfug24ui5/master"

export const getCourseList = async (level: any) => {
  const query = gql`
    query CourseList {
      pCourses(where: {level:`+ level +  `}) {
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
          title
          id
          chapters {
            heading
            content {
              markdown
              html
            }
            output {
              markdown
              html 
            }
          }
        }
      }
    }
`
  const result = await request(MASTER_URL, query)
  return result
}

export const enrollCourse = async (courseId: any, userEmail: any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {courseId: "`+ courseId + `", userEmail: "` + userEmail +
    `", courses: {connect: {id: "` + courseId + `"}}}
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
    }
  `
  const result = await request(MASTER_URL, mutationQuery)
  return result
}

export const getUserEnrolledCourse = async (courseId:any, userEmail:any) => {
  const query = gql`
    query GetUserEnrolledCourse {
      userEnrolledCourses(where: {courseId: "`+ courseId +`", 
        userEmail: "`+ userEmail +`"}) {
        id
        courseId
        completedChapter {
          chapterId
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)
  return result
}

export const AddCompletedChapter = async (recordId:any, chapterId:any) => {
  const mutationQuery = gql`
    mutation AddCompletedChapter {
      updateUserEnrolledCourse(
        data: {completedChapter: {create: {data: {chapterId: "`+chapterId+`"}}}}
        where: {id: "`+ recordId +`"}
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection {
        edges {
          node {
            id
          }
        }
      }
    }
  `
  const result = await request(MASTER_URL, mutationQuery)
  return result
}