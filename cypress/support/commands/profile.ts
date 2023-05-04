export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: 'asdw' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 32,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'testuser',
      avatar: 'https://xakep.ru/wp-content/uploads/2015/08/41885761_xl.jpg',
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
