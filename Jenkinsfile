/*pipeline {
    agent any
    tools {nodejs "Nodejs"}
    stages {
        stage('Build') { 
            steps {
                dir('frontend'){
                    sh 'npm install' 
                    echo "success"
                }               
            }
        }
        stage('Test') { 
            steps {
             
            }
        }
    }
}*/

pipeline {
    environment {
    registry_1 = "ispang13/react-app"
    registry_2 = "ispang13/test-api"
    registryCredential = 'dockerhub_id'
    dockerImage = ''
}
    agent any
    stages {
    stage('Cloning our Git') {
        steps {
            git 'https://github.com/ispang13/react-app.git'
            }
        }
    stage('Building frontend image') {
        steps{
            dir('frontend'){
                script {
                    dockerImage = docker.build registry_1 + ":latest"
            }
        }
    }
}

    stage('Deploy frontend image') {
        steps{
            script {
                docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
            }
        }
    }
}
    stage('Building api image') {
        steps{
            dir('backend'){
                script {
                    dockerImage = docker.build registry_2 + ":latest"
            }
        }
    }
}
    stage('Deploy api image') {
        steps{
            script {
                docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
            }
        }
    }
}
stage('Apply to Kube') {
    steps{
    withKubeConfig([credentialsId: 'testKube',
                    caCertificate: '',
                    serverUrl: 'https://10.0.0.14:6443',
                    contextName: '',
                    clusterName: 'kubernetes',
                    namespace: 'react-app'
                    ]) {
        sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'  
        sh 'chmod u+x ./kubectl'  
        sh './kubectl apply -f services.yaml'
        sh './kubectl apply -f deployment.yaml'
        //sh './kubectl apply -f api-services.yaml'
        //sh './kubectl apply -f api-deployment.yaml'
    }
  }
}
}
}