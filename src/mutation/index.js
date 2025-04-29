
export const createUser = (user) => `
mutation {
  CreateUser(user: {
    token: "${user.token}",
    password: "${user.password}",
    name: "${user.name}",
    email: "${user.email}",
    CompanyId: ${user.companyID},
    phone: ${user.phone}
  }) {
    token
    password
    name
    id
    email
    admin
    CompanyId
    phone
  }
}
`;

// end mutation users



// start mutation CV
export const createCV = cv => `
  mutation {
    CreateCV(cv: {
      phone: ${cv.phone},
      name: "${cv.name}",
      linkProject: "${cv.linkProject}",
      idCompany: ${cv.idCompany},
      email: "${cv.email}",
      description: "${cv.selfIntro}",
      city: "${cv.city}",
      idJob: ${cv.idJob}
    }) {
      statusRead
      phone
      name
      linkProject
      idJob
      idCompany
      id
      email
      description
      city
    }
  }
  `;

// end mutation CV



// start mutation CV
const escapeGraphQL = (str) =>
  str
    .replace(/\\/g, '\\\\')     // escape \ trước
    .replace(/"/g, '\\"')       // escape dấu "
    .replace(/\n/g, '\\n');     // escape xuống dòng

export const updateCPN = (cpn) => {
  const escape = escapeGraphQL;
  return `
    mutation {
      updateItemCompany(cpn: {
        workingTime: "${escape(cpn.workTime)}",
        website: "${escape(cpn.website)}",
        quantityPeople: ${cpn.staff},
        phone: ${cpn.phone},
        id: ${cpn.id},
        email: "${escape(cpn.email)}",
        detail: "${escape(cpn.shortDesc)}",
        description: "${escape(cpn.longDesc)}",
        companyName: "${escape(cpn.name)}",
        address: "${escape(cpn.address)}"
      }) {
        workingTime
        website
        quantityPeople
        phone
        id
        email
        detail
        description
        companyName
        address
      }
    }
  `;
};


// end mutation CV



// start mutation Update CV
export const statusCV = (id) =>  `
  mutation {
    StatusCV(id:${id}) 
  }
  `;


// end mutation Update CV


// start mutation Update CV
export const DeleteCV = (id) =>  `
  mutation {
    DeleteCV(id:${id}) 
  }
  `;


// end mutation Update CV


// start mutation CREATE JOB
export const CreateAJob = (Ajob) => `
  mutation {
    CreateJob(job: {
      tags: ${JSON.stringify(Ajob.tags)},
      salary: ${Ajob.salary},
      name: "${Ajob.name}",
      idCompany: ${Ajob.idCompany},
      description: "${Ajob.description}",
      city: ${JSON.stringify(Ajob.city)}
    }) {
      tags
      status
      salary
      name
      idCompany
      id
      description
      city
    }
  }
  `;

// end mutation CREATE JOB


// start mutation Update JOB
export const UpdateAJob = (Ajob) =>  `
  mutation {
    UpdateJob(job: {
      tags: ${JSON.stringify(Ajob.tags)},
      salary: ${Ajob.salary},
      name: "${Ajob.name}",
      idCompany: ${Ajob.idCompany},
      description: ${JSON.stringify(Ajob.description)},,
      city: ${JSON.stringify(Ajob.city)},
      id :  ${Ajob.id}
    }) {
      tags
      status
      salary
      name
      idCompany
      id
      description
      city
    }
  }
  `;


// end mutation Update JOB

// start mutation Update JOB
export const DeleteJob = (id) =>  `
  mutation {
    DeleteJob(id:${id}) 
  }
  `;


// end mutation Update JOB