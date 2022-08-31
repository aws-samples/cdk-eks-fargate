## CDK with EKS on Fargate

This repo contains code sample demonstrating how to leverage cdk, cdk8s and cdk8s+ to provision an EKS cluster with Fargate node groups, deploy workloads and expose Kubernetes services.

![High Level Architecture](https://github.com/aws-samples/cdk-eks-fargate/blob/main/eks.png?raw=true)

### Prerequisites
In addition to an AWS account with permissions to create and manage Amazon EKS cluster, S3 bucket, AWS fargate and the Application Load Balancer, the following tools are also required:
- AWS CDK >= 1.93.0 and cdk bootstrap is already done.
- Kubernetes command line tool `kubectl`.
- A current version of nodejs.

### What is being deployed
- VPC with private subnets.
- EKS cluster with Fargate nodegroup.
- Application Load Balancer.
- S3 bucket for K8s workloads.

### Usage
Simply deploy the stack with AWS CDK
```
git clone git@github.com:aws-samples/cdk-eks-fargate.git
cd cdk-eks-fargate
npm install
npm run build
cdk deploy
```
Please note the dployment will fail if your AWS account is not CDK bootstrapped yet. In the case, simply run "cdk bootstrap" then re-run "cdk deploy" again.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

