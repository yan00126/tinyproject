import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import * as s3 from "aws-cdk-lib/aws-s3";

export class FirstCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "FirstCdkProjectBucket", {});

    new cdk.CfnOutput(this, "BucketName", {
      value: bucket.bucketName,
      description: "The name of the bucket",
    });
  }
}
