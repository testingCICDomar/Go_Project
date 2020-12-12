pipeline {
    agent any
    stages { 

        stage("Init") {
            steps {
                script {
                    
                    // Show the select input
                    env.CTB = input message: 'User input required', ok: 'Choose!',
                            parameters: [choice(name: 'CTB', choices: ['Continue', 'Abort'], description: 'pipeline is Starting !')]
                
                    
                }

                echo "Choice selected: ${env.CTB}"
                
            }
        }

        stage(test_on_App_Instance){
            when {
                expression { env.CTB == 'Continue'}
            }
            steps {
                script {
                    sh '''
                        ssh -tt ec2-user@3.133.92.205 'Last_Branch=$(tail -n 1 forJenkins/branches.txt );cd application;git checkout ${last_branch};echo '${last_branch}';exit'
                        touch result.txt
                        var=$(ssh ec2-user@3.133.92.205 'bash forJenkins/dirtest.sh')
                        echo ${var} > /tmp/testResult.txt
                        sed -i '2d' /tmp/testResult.txt
                        chmod 777 /tmp/testResult.txt
                    '''
                    /*
                   env.var = 'KOO' //readFile (file: "/tmp/testResult.txt")
                   echo "${env.var}"
                   echo "${env.var}"
                   if (env.var == 'KOO ') {
                        echo "${env.var} ===================="
                        error "sorry next time !"
                   }else { echo "jawek behi !"} */
                   env.var = readFile (file: "/tmp/testResult.txt").trim()
                   env.SELECT_var = input message: 'User input required', ok: 'Select',
                            parameters: [choice(name: 'push', choices: env.var, description: 'What is the opt to slect?')]
                    echo "${env.SELECT_var}"
                    if (env.SELECT_var == 'KOO ') {
                        echo "${env.var} ===================="
                        error "sorry next time !"
                   }else { echo "jawek behi !"}
                  
                }
                echo "==========================================================="
                echo "============================${env.var} ===================="
                echo "==========================================================="
                
            }
        }        
        stage(Sonar){
            when {
                expression { env.CTB == 'Continue'}
            }
            steps {
                script {
                    sh 'echo "sonar starting" '
                }
            }
        }

    }
}