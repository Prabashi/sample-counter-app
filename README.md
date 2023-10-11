This includes a sample counter app created using React.

You can create a CI/CD pipeline for this repo as below.

Use the AWS CodePipeline to create a CI/CD pipeline such that, any change to the main branch triggers the CI/CD pipeline.
Use a build project created in CodeBuild to act as the CodePipeline build provider, which connects to the GitHub repo and uses the buildspec.yml file to build the project (have to configure the environment variables used in the yml file here).

A private repository is created in ECR to store the Docker image built.

ECS is used as the deploy provider. A cluster, task definition (with one container) and a service is created in ECR.

Once the pipeline is triggered and successfully completed, go to the created cluster, select the task and use the Public IP to test if the React App is hosted as expected.

If there are persmission issues, verify the policies attached to the service role in the build project in CodeBuild.

If the Service you created in the Cluster is not appearing in the Service list and still you're not allowed to create a new one in the same name, delete the respective stack in the CloudFormation and retry (this is since by default the configuration is set to rollback if anything goes wrong).

On a separate note, `with-docker`` branch in this repo can be used to host the application using Docker locally.
