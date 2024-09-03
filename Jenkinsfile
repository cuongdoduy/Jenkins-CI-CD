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

        stage('Approval') {

            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    input message: 'Do you want to deploy?', ok: 'Deploy'
                }
            }
        }

        stage('Build Docker image') {
            steps {
                echo 'Building Docker image'
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t cuongdoduy/starter-server-typescript .'
                    sh 'docker push cuongdoduy/starter-server-typescript'
                }
            }
        }

        stage('Deployment') {
            steps{
                echo 'Deploying to Dev environment'
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker image pull cuongdoduy/starter-server-typescript'
                    sh 'docker-compose -f down -v'
                    sh 'docker-compose up -d'
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