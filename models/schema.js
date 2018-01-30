export default `

type Person {
    _id: String!
    name: String!
    age: Int!
}

type Query {
    allPerson: [Person!]!
}

type Mutation {
    createPerson(name: String!, age: Int!): Person!
}


`;