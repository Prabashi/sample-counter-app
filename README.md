This includes a sample counter app created using React. If you have docker installed in your local machine, run the following commands.

Build image
> docker build -t counter-app-docker .

Run the image in a container.
> docker run --publish 3000:80 counter-app-docker

Note that nginx server is exposed via port 80 as defined in the Dockerfile. Therefore we have to map the port we need to run the app (host port: 3000) to the container port. That is done above using publish.
