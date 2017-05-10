(function(){var t=function(t,i){return function(){return t.apply(i,arguments)}};window.BaseGraph=function(){function i(i,e){return this.setYAxisPosition=t(this.setYAxisPosition,this),this.setXAxisPosition=t(this.setXAxisPosition,this),this.onResize=t(this.onResize,this),this.setupMarkerLabel=t(this.setupMarkerLabel,this),this.setupMarkerLine=t(this.setupMarkerLine,this),this.id=i,this.options=$.extend(!0,{},n,e),this.$el=$("#"+this.id),this.getDimensions(),this.setSVG(),this.setScales(),this.markers=[],this}var e,n;return n={margin:{top:0,right:0,bottom:20,left:0},aspectRatio:.5625,label:!1,legend:!1,mouseEvents:!0,key:{id:"key",x:"key",y:"value"}},e={value:null,label:"",orientation:"horizontal",align:"right"},i.prototype.setSVG=function(){return this.svg=d3.select("#"+this.id).append("svg").attr("width",this.containerWidth).attr("height",this.containerHeight),this.container=this.svg.append("g").attr("transform","translate("+this.options.margin.left+","+this.options.margin.top+")")},i.prototype.loadData=function(t){return d3.csv(t,function(t){return function(i,e){return t.$el.trigger("data-loaded"),t.setData(e)}}(this)),this},i.prototype.setData=function(t){return this.data=this.dataParser(t),this.drawScales(),this.options.legend&&this.drawLegend(),this.drawMarkers(),this.drawGraph(),this.$el.trigger("draw-complete"),this},i.prototype.dataParser=function(t){return t},i.prototype.setGraph=function(){return this},i.prototype.setScales=function(){return this},i.prototype.drawScales=function(){return this.x.domain(this.getScaleXDomain()),this.y.domain(this.getScaleYDomain()),this.xAxis&&this.container.append("g").attr("class","x axis").call(this.setXAxisPosition).call(this.xAxis),this.yAxis&&this.container.append("g").attr("class","y axis").call(this.setYAxisPosition).call(this.yAxis),this},i.prototype.getScaleXRange=function(){return[0,this.width]},i.prototype.getScaleYRange=function(){return[this.height,0]},i.prototype.getScaleXDomain=function(){return[]},i.prototype.getScaleYDomain=function(){return[]},i.prototype.drawLegend=function(){return this},i.prototype.addMarker=function(t){return this.markers.push($.extend({},e,t)),this},i.prototype.drawMarkers=function(){return this.container.selectAll(".marker").data(this.markers).enter().append("line").attr("class","marker").call(this.setupMarkerLine),this.container.selectAll(".marker-label").data(this.markers).enter().append("text").attr("class","marker-label").attr("text-anchor",function(t){return"vertical"===t.orientation?"middle":"right"===t.align?"end":"start"}).attr("dy",function(t){return"horizontal"===t.orientation?"-0.25em":0}).text(function(t){return t.label}).call(this.setupMarkerLabel)},i.prototype.setupMarkerLine=function(t){return t.attr("x1",function(t){return function(i){return"horizontal"===i.orientation?0:t.x(i.value)}}(this)).attr("y1",function(t){return function(i){return"horizontal"===i.orientation?t.y(i.value):0}}(this)).attr("x2",function(t){return function(i){return"horizontal"===i.orientation?t.width:t.x(i.value)}}(this)).attr("y2",function(t){return function(i){return"horizontal"===i.orientation?t.y(i.value):t.height}}(this))},i.prototype.setupMarkerLabel=function(t){return t.attr("x",function(t){return function(i){return"horizontal"===i.orientation?"right"===i.align?t.width:0:t.x(i.value)}}(this)).attr("y",function(t){return function(i){return"horizontal"===i.orientation?t.y(i.value):t.height}}(this))},i.prototype.onResize=function(){return this.getDimensions(),this.updateGraphDimensions(),this},i.prototype.getDimensions=function(){return this.$el&&(this.containerWidth=this.$el.width(),this.containerHeight=this.containerWidth*this.options.aspectRatio,this.width=this.containerWidth-this.options.margin.left-this.options.margin.right,this.height=this.containerHeight-this.options.margin.top-this.options.margin.bottom),this},i.prototype.updateGraphDimensions=function(){return this.svg.attr("width",this.containerWidth).attr("height",this.containerHeight),this.x&&this.x.range(this.getScaleXRange()),this.y&&this.y.range(this.getScaleYRange()),this.xAxis&&this.container.selectAll(".x.axis").call(this.setXAxisPosition).call(this.xAxis),this.yAxis&&this.container.selectAll(".y.axis").call(this.setYAxisPosition).call(this.yAxis),this.container.select(".marker").call(this.setupMarkerLine),this.container.select(".marker-label").call(this.setupMarkerLabel),this},i.prototype.setXAxisPosition=function(t){return t.attr("transform","translate(0,"+this.height+")")},i.prototype.setYAxisPosition=function(t){return t.attr("transform","translate("+this.width+",0)")},i.prototype.getDataX=function(){return d[this.options.key.x]},i.prototype.getDataY=function(){return d[this.options.key.y]},i}()}).call(this),function(){var t=function(t,i){return function(){return t.apply(i,arguments)}},i=function(t,i){function n(){this.constructor=t}for(var r in i)e.call(i,r)&&(t[r]=i[r]);return n.prototype=i.prototype,t.prototype=new n,t.__super__=i.prototype,t},e={}.hasOwnProperty;window.BarGraph=function(e){function n(i,e){return this.onMouseOut=t(this.onMouseOut,this),this.onMouseOver=t(this.onMouseOver,this),this.setBarLabelYDimensions=t(this.setBarLabelYDimensions,this),this.setBarLabelXDimensions=t(this.setBarLabelXDimensions,this),this.setBarDimensions=t(this.setBarDimensions,this),this.getScaleYDomain=t(this.getScaleYDomain,this),this.getScaleXDomain=t(this.getScaleXDomain,this),n.__super__.constructor.call(this,i,e),this}return i(n,e),n.prototype.dataParser=function(t){return t.forEach(function(t){return function(i){return i[t.options.key.y]=+i[t.options.key.y]}}(this)),t},n.prototype.setScales=function(){return this.x=d3.scaleBand().range(this.getScaleXRange()).paddingInner(.1).paddingOuter(0),this.y=d3.scaleLinear().range(this.getScaleYRange()),this},n.prototype.getScaleXDomain=function(){return this.data.map(function(t){return function(i){return i[t.options.key.x]}}(this))},n.prototype.getScaleYDomain=function(){return[0,d3.max(this.data,function(t){return function(i){return i[t.options.key.y]}}(this))]},n.prototype.drawGraph=function(){return this.container.selectAll(".bar").data(this.data).enter().append("rect").attr("class",function(t){return t.active?"bar active":"bar"}).attr("id",function(t){return function(i){return i[t.options.key.id]}}(this)).call(this.setBarDimensions),this.options.mouseEvents&&this.container.selectAll(".bar").on("mouseover",this.onMouseOver).on("mouseout",this.onMouseOut),this.options.label&&(this.container.selectAll(".bar-label-x").data(this.data).enter().append("text").attr("class",function(t){return t.active?"bar-label-x active":"bar-label-x"}).attr("id",function(t){return function(i){return"bar-label-x-"+i[t.options.key.id]}}(this)).attr("dy","1.25em").attr("text-anchor","middle").text(function(t){return function(i){return i[t.options.key.x]}}(this)).call(this.setBarLabelXDimensions),this.container.selectAll(".bar-label-y").data(this.data).enter().append("text").attr("class",function(t){return t.active?"bar-label-y active":"bar-label-y"}).attr("id",function(t){return function(i){return"bar-label-y-"+i[t.options.key.id]}}(this)).attr("dy","-0.5em").attr("text-anchor","middle").text(function(t){return function(i){return t.options.label.format?t.options.label.format(i[t.options.key.y]):i[t.options.key.y]}}(this)).call(this.setBarLabelYDimensions)),this},n.prototype.updateGraphDimensions=function(){return n.__super__.updateGraphDimensions.call(this),this.container.selectAll(".bar").call(this.setBarDimensions),this.container.selectAll(".bar-label-x").call(this.setBarLabelXDimensions),this.container.selectAll(".bar-label-y").call(this.setBarLabelYDimensions),this},n.prototype.setBarDimensions=function(t){return t.attr("x",function(t){return function(i){return t.x(i[t.options.key.x])}}(this)).attr("y",function(t){return function(i){return t.y(i[t.options.key.y])}}(this)).attr("height",function(t){return function(i){return t.height-t.y(i[t.options.key.y])}}(this)).attr("width",this.x.bandwidth())},n.prototype.setBarLabelXDimensions=function(t){return t.attr("x",function(t){return function(i){return t.x(i[t.options.key.x])+.5*t.x.bandwidth()}}(this)).attr("y",function(t){return function(i){return t.height}}(this))},n.prototype.setBarLabelYDimensions=function(t){return t.attr("x",function(t){return function(i){return t.x(i[t.options.key.x])+.5*t.x.bandwidth()}}(this)).attr("y",function(t){return function(i){return t.y(i[t.options.key.y])}}(this))},n.prototype.onMouseOver=function(t){return this.container.select("#bar-label-x-"+t[this.options.key.id]).classed("active",!0),this.container.select("#bar-label-y-"+t[this.options.key.id]).classed("active",!0)},n.prototype.onMouseOut=function(t){if(!t.active)return this.container.select("#bar-label-x-"+t[this.options.key.id]).classed("active",!1),this.container.select("#bar-label-y-"+t[this.options.key.id]).classed("active",!1)},n}(window.BaseGraph)}.call(this),function(){!function(t){var i,e,n,r;if(n=t("body").data("lang"),i=t("body").data("baseurl"),e=function(t,i,e){var n;return n=t.filter(function(t){return t.code2===i}),n.length?n[0]["name_"+e]:void 0},t(".bar-graph").length>0)r={"antibiotics-graph":{value:36,label:"es"===n?"Media EU28":"EU28 Average"},"antibiotics-animals-graph":{value:107.8,label:"es"===n?"Media":"Average"}},d3.queue().defer(d3.csv,i+"/data/antibiotics.csv").defer(d3.csv,i+"/data/antibiotics-animals.csv").defer(d3.csv,i+"/data/countries.csv").await(function(i,s,a,o){return s.forEach(function(t){return t.name=e(o,t.label,n)}),a.forEach(function(t){return t.name=e(o,t.label,n)}),t(".bar-graph").each(function(){var i,e;return e=t(this).attr("id"),i=new window.BarGraph(e,{aspectRatio:.4,label:!0,key:{id:"label",x:"name"}}),i.addMarker(r[e]).setData("antibiotics-graph"===e?s:a),t(window).resize(i.onResize)})})}(jQuery)}.call(this);