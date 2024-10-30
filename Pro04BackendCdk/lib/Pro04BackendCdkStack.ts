import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class Pro04CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, { 
      env: { 
        account: '604915842444',
        region: 'eu-west-2'           
      } 
    });

    // Lookup default VPC for networking
    const vpc = ec2.Vpc.fromLookup(this, 'VPC', { isDefault: true });

    // Define security group to allow SSH and HTTP traffic
    const securityGroup = new ec2.SecurityGroup(this, 'InstanceSecurityGroup', {
      vpc,
      allowAllOutbound: true,
      description: 'Allow SSH and HTTP access',
    });
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH access');
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(3000), 'Allow HTTP access');

    // Define an EC2 instance with Amazon Linux 2 and Node.js installed
    const instance = new ec2.Instance(this, 'BackendInstance', {
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      securityGroup,
      keyName: 'marika', 
    });

    // User data script to set up the server
    instance.addUserData(
      `#!/bin/bash
      curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -
      sudo yum install -y nodejs
      cd /home/ec2-user
      git clone https://github.com/fac30/PRO04_Back_Josh_Marika_Max.git
      cd PRO04_Back_Josh_Marika_Max
      npm install
      npm start`
    );
  }
}

