FROM solr:8.6
USER root

RUN mkdir /solr-conf
COPY /conf /solr-conf/conf/

USER solr
CMD ["/opt/docker-solr/scripts/precreate-core", "dev", "/solr-conf"]
