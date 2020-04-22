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
var lyr_19992002A_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1999-2002  A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/19992002A_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [892435.331682, 7254394.028628, 1734560.279975, 7917640.423656]
                            })
                        });
var lyr_20032006A_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2003-2006 A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20032006A_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [892435.331682, 7254394.028628, 1734560.279975, 7917640.423656]
                            })
                        });
var lyr_20072010A_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2007-2010 A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20072010A_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [892435.331682, 7254394.028628, 1734560.279975, 7917640.423656]
                            })
                        });
var lyr_20112014A_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "2011-2014 A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20112014A_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [892435.331682, 7254394.028628, 1734560.279975, 7917640.423656]
                            })
                        });
var lyr_20152018A_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "2015-2018 A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20152018A_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [892435.331682, 7254394.028628, 1734560.279975, 7917640.423656]
                            })
                        });
var format_OutlineDanmark_6 = new ol.format.GeoJSON();
var features_OutlineDanmark_6 = format_OutlineDanmark_6.readFeatures(json_OutlineDanmark_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutlineDanmark_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutlineDanmark_6.addFeatures(features_OutlineDanmark_6);
var lyr_OutlineDanmark_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OutlineDanmark_6, 
                style: style_OutlineDanmark_6,
                interactive: false,
                title: '<img src="styles/legend/OutlineDanmark_6.png" /> Outline Danmark'
            });
var group_Boligpriskortcropped = new ol.layer.Group({
                                layers: [lyr_19951998A_0,lyr_19992002A_1,lyr_20032006A_2,lyr_20072010A_3,lyr_20112014A_4,lyr_20152018A_5,],
                                title: "Boligpriskort cropped"});

lyr_19951998A_0.setVisible(true);lyr_19992002A_1.setVisible(true);lyr_20032006A_2.setVisible(true);lyr_20072010A_3.setVisible(true);lyr_20112014A_4.setVisible(true);lyr_20152018A_5.setVisible(true);lyr_OutlineDanmark_6.setVisible(true);
var layersList = [group_Boligpriskortcropped,lyr_OutlineDanmark_6];
lyr_OutlineDanmark_6.set('fieldAliases', {'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEAT_STTXT': 'FEAT_STTXT', 'GEOM_STTXT': 'GEOM_STTXT', 'DQ_INDEX': 'DQ_INDEX', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_OutlineDanmark_6.set('fieldImages', {'FEAT_KODE': '', 'FEAT_TYPE': '', 'FEAT_STTXT': '', 'GEOM_STTXT': '', 'DQ_INDEX': '', 'TIMEOF_CRE': '', 'TIMEOF_PUB': '', 'TIMEOF_REV': '', 'TIMEOF_EXP': '', });
lyr_OutlineDanmark_6.set('fieldLabels', {'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEAT_STTXT': 'no label', 'GEOM_STTXT': 'no label', 'DQ_INDEX': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_OutlineDanmark_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});