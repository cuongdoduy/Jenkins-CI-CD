pipeline {

    agent any

    tools { 
        nodejs 'Nodejs'
    }
    stages {       
        stage('Build with NodeJS') {
            steps {
                echo 'Building with NodeJS'
                sh 'npm install'
                sh 'npm run build'
            }
        }
 
    }
    post {
        // Clean after build
        always {
            cleanWs()
        }
    }
}