# kubernetes Assignment

In this assignment, you will use https://kubernetes.io/ to deploy a static website and an API container first locally and then to a cloud provider.

## 1. Create a Static Website Container

Create a folder named `webapp` and put a simple website with at least an `index.html` file in it. Then create a new `Dockerfile` using the `nginx` image and copy all webapp resources into image. Finally build and test the image. If you start a new container with the image, you should be able to visit the webapp with your browser.

[nginx - Official Image | Docker Hub](https://hub.docker.com/_/nginx)

## 2. Create an API Container

Similar to step 1., create a folder named `api` and use your favourite programming language to implement a simple API returning a JSON response. Then create a new `Dockerfile` to build the API into an image. Build and test the image. If you start a new container with the image, you should be able to visit the api with your browser and it should return a JSON response. The contents of the response are not important for now.

## 3. Call the API from the Webapp

Adapt your website. Add a button, which calls the API using the JavaScript `fetch` API and display the result on the page.

[Fetch API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 4. Install Kubernetes with Docker Desktop

Follow the guide to install a local Kubernetes with our Docker Desktop installation.

[Deploy on Kubernetes with Docker Desktop](https://docs.docker.com/desktop/features/kubernetes/)

## 5. Deploy on Kubernetes with Docker Desktop

Follow the official guide to create a local deployment and services for your webapp and API. The guide suggest to do your first deployments by typing in the commands by hand, which is fine.

[Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

Once you gained some experience, write down your deployments and services into an `app.yaml` file. You can put multiple deployments and services in a single file by separating them with `—-`.

[Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

[Service](https://kubernetes.io/docs/concepts/services-networking/service/)

Now, you can use `kubectl apply app.yaml` to deploy your full stack. Try different commands to check your services and logs with `kubectl get …` and `kubectl logs …` .

[kubectl apply](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_apply/)

## 6. Register free Cloud Provider Account

Register an AWS account. Will will use the free tier offerings of either provider.

[Free Cloud Computing Services - AWS Free Tier](https://aws.amazon.com/free)

## 7. Deploy on Kubernetes in Cloud

Use the Amazon Elastic Kubernetes Service to deploy your stack.

[Managed Kubernetes - Amazon Elastic Kubernetes Service (EKS) - AWS](https://aws.amazon.com/eks/)

Before you can deploy the services, you will need to push the images to a container registry such as:

[What is Amazon Elastic Container Registry? - Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)
