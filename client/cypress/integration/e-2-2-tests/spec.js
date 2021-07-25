describe('All Pages are loading', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/')
  })

  it('loads', () => {
    cy.contains('Acme Corporation')
  })

  it('has a login button', () => {
    cy.get('#login-btn').contains('Login')
  })

  it('has a register button', () => {
    cy.get('#register-btn').contains('Register')
  })

  it('.click() on login button opens Login page', () => {
    cy.get('#login-btn')
      .click()
      .contains('Login')
  })

  it('.click() on register button opens Register page', () => {
    cy.get('#register-btn')
      .click()
      .contains('Register')
  })
})

/*

for auth testing use a dummy user to register and then log in with the same user
some tests may not work due to the process so keep update the username
  
const user = 'same_user222'
  const password = 'random_password'


*/

const user = 'same_user222'
const password = 'random_password'

// describe('Registration is working', () => {
//   //   beforeEach(() => {

//   //   })

//   it('loads', () => {
//     cy.visit('http://localhost:8081/register')
//     cy.contains('Register')
//   })

//   it('register a user', () => {
//     cy.get('input')
//       .get('#username')
//       .type(user)
//       .get('input')
//       .get('#password')
//       .type(password)
//   })

//   it('submit registration', () => {
//     cy.get('#auth-btn').click()
//   })

//   it('shows that new user is added', () => {
//     cy.contains('new user added')
//   })

//   it('loads page again', () => {
//     cy.visit('http://localhost:8081/register')
//     cy.contains('Register')
//   })

//   it('registers the same user again', () => {
//     cy.get('input')
//       .get('#username')
//       .type(user)
//       .get('input')
//       .get('#password')
//       .type(password)
//   })

//   it('submits again', () => {
//     cy.get('#auth-btn').click()
//   })

//   it('shows that new user is added, so no registration', () => {
//     cy.contains('user allready exists')
//   })
// })

describe('Login is working', () => {
  it('loads', () => {
    cy.visit('http://localhost:8081/login')
    cy.contains('Login')
  })

  it('logs a user which is registered', () => {
    cy.get('input')
      .get('#username')
      .type(user)
      .get('input')
      .get('#password')
      .type(password)
  })

  it('submit log in ', () => {
    cy.get('#auth-btn').click()
  })

  it('and redirects to Profile page', () => {
    cy.contains('Edit your profile')
  })
})

describe('Login with unauthorized user', () => {
  it('loads', () => {
    cy.visit('http://localhost:8081/login')
    cy.contains('Login')
  })

  it('logs a user which is registered', () => {
    cy.get('input')
      .get('#username')
      .type('randomtext')
      .get('input')
      .get('#password')
      .type('randomtext')
  })

  it('submit log in ', () => {
    cy.get('#auth-btn').click()
  })

  it('shows that user is not in system', () => {
    cy.contains('User not found')
  })
})
