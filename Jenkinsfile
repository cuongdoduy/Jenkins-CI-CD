pipeline {

    agent any

    tools { 
        nodejs 'Nodejs'
    }

    options {
        timeout(time: 10, unit: 'MINUTES')
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

        stage('Deployment') {

            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    input message: 'Do you want to deploy?', ok: 'Deploy'
                }
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