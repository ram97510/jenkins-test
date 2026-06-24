pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-demo"
        CONTAINER_NAME = "react-demo-container"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/ram97510/jenkins-test.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t react-demo .'
            }
        }

        stage('Remove Existing Container') {
            steps {
                bat '''
                docker stop react-demo-container || exit 0
                docker rm react-demo-container || exit 0
                '''
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:80 --name react-demo-container react-demo'
            }
        }
    }
}