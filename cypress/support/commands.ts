import * as articleCommands from './commands/article'
import * as commentsCommand from './commands/comments'
import * as commonCommand from './commands/common'
import * as profileCommand from './commands/profile'
import * as ratingCommand from './commands/rating'

Cypress.Commands.addAll(commonCommand)
Cypress.Commands.addAll(profileCommand)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(commentsCommand)
Cypress.Commands.addAll(ratingCommand)

export {}
