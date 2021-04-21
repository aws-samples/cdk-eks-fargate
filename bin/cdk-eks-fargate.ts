#!/usr/bin/env node
/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import * as cdk from '@aws-cdk/core';

import { CdkEksFargateStack } from '../lib/cdk-eks-fargate-stack';

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();
new CdkEksFargateStack(app, 'k8s-app-on-eks-fargate-stack', {
    env: env,
    // clusterName: 'your-cluster-name',  // if you don't specify the EKS cluster name, CDK will create the name for you.
    //vpcId: 'your-vpc-id',
    // If you speficy an existing vpc-id, then CDK will use this existing VPC to create EKS cluster instead of
    // creating a new VPC. Please note when using an existing VPC, please make sure its private subnets have been tagged with
    // "kubernetes.io/role/internal-elb: 1" as described in https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html
});
