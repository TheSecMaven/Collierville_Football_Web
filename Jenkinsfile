pipeline {
  agent any
    stages {
    stage('SCP Over to Home Directory') {
      steps {
        sh '''
        
        ansible-playbook -i hosts/chshosts.yml playbook.yml --extra-vars ansible_become_pass=qV-g}Yfu{CAqY#6G        '''
      }
    }
  }
}
