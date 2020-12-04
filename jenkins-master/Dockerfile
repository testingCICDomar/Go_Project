FROM jenkins/jenkins:2.263.1
LABEL maintainer="omar.enim.tn@gmail.com"

# Create Jenkins Log Folder
USER root
RUN mkdir /var/log/jenkins
RUN mkdir /var/cache/jenkins
RUN chown -R jenkins:jenkins /var/log/jenkins
RUN chown -R jenkins:jenkins /var/cache/jenkins
USER jenkins

# Set default options
ENV JAVA_OPTS="-Xmx4096m"
ENV JENKINS_OPTS="--handlerCountMax=300 --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war"
