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
                        sh " ssh -tt ec2-user@3.133.92.205 'Last_Branch=$(tail -n 1 forJenkins/branches.txt );cd application;git checkout ${last_branch};exit'"
                        sh " touch result.txt "
                        sh " var=$(ssh ec2-user@3.133.92.205 'bash forJenkins/dirtest.sh') "
                        sh " env.TEST_var = ${var} "
                    echo "${env.TEST_var}"
                    
                    /*
                   env.var = 'KOO' //readFile (file: "/tmp/testResult.txt")
                   echo "${env.var}"
                   echo "${env.var}"
                   if (env.var == 'KOO ') {
                        echo "${env.var} ===================="
                        error "sorry next time !"
                   }else { echo "jawek behi !"} */
                  
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