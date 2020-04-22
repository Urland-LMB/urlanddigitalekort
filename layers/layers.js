var wms_layers = [];

var lyr_19951998A_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "1995-1998 A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/19951998A_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [892435.331682, 7254394.028628, 1734560.279975, 7917640.423656]
                            })
                        });
var format_DanmarkOutline_1 = new ol.format.GeoJSON();
var features_DanmarkOutline_1 = format_DanmarkOutline_1.readFeatures(json_DanmarkOutline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DanmarkOutline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DanmarkOutline_1.addFeatures(features_DanmarkOutline_1);
var lyr_DanmarkOutline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DanmarkOutline_1, 
                style: style_DanmarkOutline_1,
                interactive: false,
                title: '<img src="styles/legend/DanmarkOutline_1.png" /> Danmark Outline'
            });
var group_Boligpriskortcropped = new ol.layer.Group({
                                layers: [lyr_19951998A_0,],
                                title: "Boligpriskort cropped"});

lyr_19951998A_0.setVisible(true);lyr_DanmarkOutline_1.setVisible(true);
var layersList = [group_Boligpriskortcropped,lyr_DanmarkOutline_1];
lyr_DanmarkOutline_1.set('fieldAliases', {'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEAT_STTXT': 'FEAT_STTXT', 'GEOM_STTXT': 'GEOM_STTXT', 'DQ_INDEX': 'DQ_INDEX', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_DanmarkOutline_1.set('fieldImages', {'FEAT_KODE': '', 'FEAT_TYPE': '', 'FEAT_STTXT': '', 'GEOM_STTXT': '', 'DQ_INDEX': '', 'TIMEOF_CRE': '', 'TIMEOF_PUB': '', 'TIMEOF_REV': '', 'TIMEOF_EXP': '', });
lyr_DanmarkOutline_1.set('fieldLabels', {'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEAT_STTXT': 'no label', 'GEOM_STTXT': 'no label', 'DQ_INDEX': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_DanmarkOutline_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});