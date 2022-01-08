## `./assets`

- This folder contains all the third-party assets used in the project: client supplied content, fonts, purchased photos or audio, etc.
- There are no strict rules when organizing the contents of this folder.
- RULE:
  > If you did not create the file yourself, it goes in the assets folder.


## `./deploy`

- this folder holds the files to be delivered to the client.
- usually this directory holds the release files
- like the assets folder, there are no strict rules for the contents of this folder.
- if your project is using file transfer (sftp) or versioning (git), you may not have a need for this folder.
- this directory is linked to the private deployment git remote repository that goes _LIVE_

## `./source`

- This folder contains all the source files for the project.
- Files are organized by extension, with the exception of the `./app` folder, which contains all the files for your website or web app
- The `./app` is usually the linked to the source code git remote repository

## Requirements
- Node v 14

## `./nvmrc`
- holds the minimum required NodeJS version
> to make sure you are using the right NodeJS version RUN: `nvm use` in the root directory of the project before you RUN `npm install`
