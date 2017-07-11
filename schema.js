export const typeDefs = `
type Viewer {
  Resource {
   id: Int
   category: String
   item: String
   variety: String
   availabilityNorth: String
   availabilitySouth: String
 }
 Location {
    id: Int
    resourceId: Int
    lat: Float
    long: Float
    timestamp: String
    edited: String
    accessibility: Int
    size: Int
    description: String
    image: String
  }
}

type Query {
   viewer: Viewer
}
`
