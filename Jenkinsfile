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
    registryCredential = 'ispang13'
    dockerImage = ''
}
    agent any
    stages {

    stage('Initialize'){
        steps{
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
    }
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

    stage('Cleaning up') {
        steps{
            sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }
}