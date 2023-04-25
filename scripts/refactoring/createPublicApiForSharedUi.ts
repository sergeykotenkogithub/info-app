import path from 'path'
import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(uiPath)
const componentsDirs = sharedUiDirectory?.getDirectories()

const isAbsolute = (value: string) => {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']

  return layers.some((layer) => value.startsWith(layer))
}

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`
  const indexFile = directory.getSourceFile(indexFilePath)

  if (!indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}'`
    const file = directory.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    })
    file.save()
  }
})

// files.forEach((sourceFile) => {
//   const importDeclarations = sourceFile.getImportDeclarations()
//   importDeclarations.forEach((importDeclaration) => {
//     const value = importDeclaration.getModuleSpecifierValue()

//     if (isAbsolute(value)) {
//       importDeclaration.setModuleSpecifier(`@/${value}`)
//     }
//   })
// })

project.save()
