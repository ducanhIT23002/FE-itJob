// start query job
export const getListJob =`{    
    getListJob {
            id 
            name 
            tags
            salary
            description 
            status
            city   
            company {
              id
              companyName
            }
    }
}`


export const getAJob = (id) => `{    
  getAJob(id : ${id}) {
          id 
          name 
          tags
          salary
          description 
          status
          city   
          company {
            id
            companyName
          }
  }
}`
// end query job

// start query company
export const getlistCompany =`{    
  getlistCompany {
    website
    quantityPeople
    phone
    id
    email
    detail
    description
    companyName
    address
    workingTime
  }
}`


export const getItemCompary =(id) => `{    
  getItemCompary(id : ${id}) {
    website
    quantityPeople
    phone
    id
    email
    detail
    description
    companyName
    address
    workingTime
  }
}`
// end query company

// start query tags
export const GetlistTag =`{    
  getlistTag {
    name
    id
  }
}`
// end query tags


// start query CV
export const getlistCV =`{    
  getlistCV {
    name
    id
    statusRead
    phone
    linkProject
    idJob
    idCompany
    email
    city
    description
  }
}`

export const getItemCV = (id) => `{    
  getItemCV(id : ${id}) {
    name
    id
    statusRead
    phone
    linkProject
    idJob
    idCompany
    email
    city
    description
  }
}`

// end query CV


// start query user
export const ListUser =`{    
  ListUser {
    id
    CompanyId
    name
    token
    admin
    email
    password
    phone
  }
}`
// end query user