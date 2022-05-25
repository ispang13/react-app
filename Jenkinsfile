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
    registry = "ispang13/react-app"
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
    stage('Building our image') {
        steps{
            dir('frontend'){
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
            }
        }
    }
}
    stage('Deploy our image') {
        steps{
            script {
                docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
            }
        }
    }
}

    stage('connect-k8s') {
        steps {
            withKubeCredentials(kubectlCredentials: [[caCertificate: '', 
            clusterName: 'kubernetes', contextName: '', credentialsId: 'testKube', namespace: 'kube-system', 
            serverUrl: 'https://10.0.0.4:6443']]){               
            kubectl apply -f services.yaml
            kubectl apply -f deployment.yaml          
            }
            }
        }
    }
}