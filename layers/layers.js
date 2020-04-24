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
var format_DanmarkOutline_6 = new ol.format.GeoJSON();
var features_DanmarkOutline_6 = format_DanmarkOutline_6.readFeatures(json_DanmarkOutline_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DanmarkOutline_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DanmarkOutline_6.addFeatures(features_DanmarkOutline_6);
var lyr_DanmarkOutline_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DanmarkOutline_6, 
                style: style_DanmarkOutline_6,
                interactive: false,
                title: '<img src="styles/legend/DanmarkOutline_6.png" /> Danmark Outline'
            });
var format_Kommunegrnser_7 = new ol.format.GeoJSON();
var features_Kommunegrnser_7 = format_Kommunegrnser_7.readFeatures(json_Kommunegrnser_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommunegrnser_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommunegrnser_7.addFeatures(features_Kommunegrnser_7);
var lyr_Kommunegrnser_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kommunegrnser_7, 
                style: style_Kommunegrnser_7,
                interactive: false,
                title: '<img src="styles/legend/Kommunegrnser_7.png" /> Kommunegrænser'
            });
var group_Boligpriskortcropped = new ol.layer.Group({
                                layers: [lyr_19951998A_0,lyr_19992002A_1,lyr_20032006A_2,lyr_20072010A_3,lyr_20112014A_4,lyr_20152018A_5,],
                                title: "Boligpriskort cropped"});

lyr_19951998A_0.setVisible(true);lyr_19992002A_1.setVisible(true);lyr_20032006A_2.setVisible(true);lyr_20072010A_3.setVisible(true);lyr_20112014A_4.setVisible(true);lyr_20152018A_5.setVisible(true);lyr_DanmarkOutline_6.setVisible(true);lyr_Kommunegrnser_7.setVisible(true);
var layersList = [group_Boligpriskortcropped,lyr_DanmarkOutline_6,lyr_Kommunegrnser_7];
lyr_DanmarkOutline_6.set('fieldAliases', {'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEAT_STTXT': 'FEAT_STTXT', 'GEOM_STTXT': 'GEOM_STTXT', 'DQ_INDEX': 'DQ_INDEX', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Kommunegrnser_7.set('fieldAliases', {'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'KOM_KODE': 'KOM_KODE', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_DanmarkOutline_6.set('fieldImages', {'FEAT_KODE': '', 'FEAT_TYPE': '', 'FEAT_STTXT': '', 'GEOM_STTXT': '', 'DQ_INDEX': '', 'TIMEOF_CRE': '', 'TIMEOF_PUB': '', 'TIMEOF_REV': '', 'TIMEOF_EXP': '', });
lyr_Kommunegrnser_7.set('fieldImages', {'FOT_ID': '', 'MOB_ID': '', 'FEAT_KODE': '', 'FEAT_TYPE': '', 'FEATSTATUS': '', 'GEOMSTATUS': '', 'KOM_KODE': '', 'TIMEOF_CRE': '', 'TIMEOF_PUB': '', 'TIMEOF_REV': '', 'TIMEOF_EXP': '', });
lyr_DanmarkOutline_6.set('fieldLabels', {'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEAT_STTXT': 'no label', 'GEOM_STTXT': 'no label', 'DQ_INDEX': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Kommunegrnser_7.set('fieldLabels', {'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'KOM_KODE': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Kommunegrnser_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});