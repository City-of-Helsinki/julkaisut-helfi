FROM solr:8.6
USER root

RUN mkdir /solr-conf
COPY /conf /solr-conf/conf/

USER solr
CMD ["/opt/docker-solr/scripts/precreate-core", "dev", "/solr-conf"]
ENTRYPOINT ["/opt/docker-solr/scripts/docker-entrypoint.sh"]
CMD ["/opt/docker-solr/scripts/solr-foreground"]
