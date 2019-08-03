pipeline {
  agent any
  triggers{
      pollSCM('H */4 * * 1-5')
  }
    stages {
    stage('SCP Over to Home Directory') {
      steps {
        sh '''
        ansible-playbook --version
        ansible-playbook -i hosts/chshosts.yml playbook.yml --extra-vars ansible_become_pass=qV-g}Yfu{CAqY#6G
        ansible-playbook -i hosts/chshosts.yml manage_content.yml --extra-vars ansible_become_pass=qV-g}Yfu{CAqY#6G        
        '''

      }
    }
  }
}
