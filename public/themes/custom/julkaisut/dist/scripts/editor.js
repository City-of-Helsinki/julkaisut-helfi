(window["julkaisut-webpack"]=window["julkaisut-webpack"]||[]).push([[3],{1:function(e,t,r){e.exports=r("o9EL")},"1ZqX":function(e,t){!function(){e.exports=this.wp.data}()},GRId:function(e,t){!function(){e.exports=this.wp.element}()},HSyU:function(e,t){!function(){e.exports=this.wp.blocks}()},K9lf:function(e,t){!function(){e.exports=this.wp.compose}()},Y8OO:function(e,t){!function(){e.exports=this.wp.domReady}()},g56x:function(e,t){!function(){e.exports=this.wp.hooks}()},o9EL:function(e,t,r){"use strict";r.r(t);var c=r("cDf5"),o=r.n(c),i=r("GRId"),n=r("Y8OO"),a=r.n(n),l=r("1ZqX"),s=r("HSyU"),u=r("K9lf"),p=r("g56x"),b=window.drupalSettings;a()((function(){Object(s.registerBlockStyle)("core/image",{name:"koros-basic-top",label:"Basic Koros Top"}),Object(s.registerBlockStyle)("core/paragraph",{name:"excerpt",label:"Excerpt"}),Object(s.registerBlockStyle)("core/table",{name:"numeric-with-labels",label:"Numeric (with label on left)"}),Object(s.registerBlockStyle)("core/table",{name:"numeric",label:"Numeric (all cells)"})})),b.gutenberg._listeners.init.push((function(){Object(s.unregisterBlockStyle)("core/quote","large");var e=Object(l.subscribe)((function(){if("node/add/article"===b.path.currentPath){var t=Object(l.select)("core/block-editor").getBlocks,r=Object(l.dispatch)("core/block-editor").resetBlocks,c=t();Array.isArray(c)&&(e(),setTimeout((function(){0===(c=t()).length&&r(Object(s.synchronizeBlocksWithTemplate)(c,[["core/paragraph",{placeholder:"Write an introduction",className:"is-style-excerpt"}],["core/paragraph",{placeholder:"Add text or type / to add blocks"}]]))}),500))}else e()}))})),Object(p.addFilter)("editor.BlockListBlock","julkaisut/fix-drupal-media-attributes",Object(u.createHigherOrderComponent)((function(e){return function(t){return"core/image"===t.name&&(t.attributes.mediaAttrs={},"object"===o()(t.attributes.caption)&&(t.attributes.caption=t.attributes.caption.rendered)),Object(i.createElement)(e,t)}})))}},[[1,0,1]]]);