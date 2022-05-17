pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') { 
            steps {
                dir('frontend'){
                    sh 'npm install' 
                    echo "success"
                }               
            }
        }
    }
}