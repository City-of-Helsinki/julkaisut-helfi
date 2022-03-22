FROM solr:8.6
USER root

RUN mkdir /solr-conf
COPY /conf /solr-conf/conf/

COPY docker/solr/start.sh .
RUN chmod +x /start.sh

USER solr
CMD ["/start.sh"]
