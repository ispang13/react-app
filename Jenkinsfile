pipeline {
    agent any
    tools {nodejs "nodejs"}
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