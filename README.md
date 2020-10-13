# How to deploy an Angular App in Apache Tomcat with Azure DevOps 
This project is part of a tutorial where i explain how to configure Apache Tomcat and how to create a pipeline to deploy using Azure DevOps it.


## Get Start
```bash
git clone git@github.com:bautistaj/angularApp.git

cd angularApp

npm install
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

Once run `npm run build` run `npm run build:war`, this command convert the build into a war file which will stored in the `dist/` directory.

## Deploy

You can copy and paste in webapps directory of Apache Tomcat, you can read this tutorial [How to deploy an Angular App in Apache Tomcat with Azure DevOps](https://medium.com/@bautistaj20/how-to-deploy-an-angular-app-in-apache-tomcat-with-azure-devops-900e67a21122).



