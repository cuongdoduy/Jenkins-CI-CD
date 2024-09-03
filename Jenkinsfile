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

        stage('Run tests with NodeJS') {
            steps {
                echo 'Running tests with NodeJS'
                sh 'npm run test'
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