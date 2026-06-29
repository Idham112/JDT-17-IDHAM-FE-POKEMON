pipeline{
    agent{
        label "worker-3"
    }
    stages{
        stage("checkout"){
            steps{
                git branch: "main", url: "https://gitlab.jatis.com/ioc-indivara/jdt/jdt17/idham.git", credentialsId: "gitlab-idham"
            }
        }
        stage("build image"){
            steps{
                sh "docker build . -f Dockerfile -t issmdevops/jdt-idham:1.0.0"
                sh "docker push issmdevops/jdt-idham:1.0.0"
            }
        }
        stage("deploy"){
            steps{
                script{
                  sshagent(credentials: ['ssh-idham']){
                    sh """
                    ssh -o StrictHostKeyChecking=no idham@110.239.86.9 << END
                    pwd
                    docker run -d -p 8080:80 issmdevops/jdt-idham:1.0.0
                    """
                  }
                }
                
            }
        }
    }
}