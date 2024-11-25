var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Countryboundary_2 = new ol.format.GeoJSON();
var features_Countryboundary_2 = format_Countryboundary_2.readFeatures(json_Countryboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countryboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countryboundary_2.addFeatures(features_Countryboundary_2);
var lyr_Countryboundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countryboundary_2, 
                style: style_Countryboundary_2,
                popuplayertitle: "Country boundary",
                interactive: true,
                title: '<img src="styles/legend/Countryboundary_2.png" /> Country boundary'
            });
var format_1920locations_3 = new ol.format.GeoJSON();
var features_1920locations_3 = format_1920locations_3.readFeatures(json_1920locations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1920locations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1920locations_3.addFeatures(features_1920locations_3);
var lyr_1920locations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1920locations_3, 
                style: style_1920locations_3,
                popuplayertitle: "1920locations",
                interactive: true,
    title: '1920locations<br />\
    <img src="styles/legend/1920locations_3_0.png" /> AGROLA<br />\
    <img src="styles/legend/1920locations_3_1.png" /> AUTOGRILL<br />\
    <img src="styles/legend/1920locations_3_2.png" /> BP<br />\
    <img src="styles/legend/1920locations_3_3.png" /> COOP PRONTO<br />\
    <img src="styles/legend/1920locations_3_4.png" /> COOP RETAIL<br />\
    <img src="styles/legend/1920locations_3_5.png" /> DENNER<br />\
    <img src="styles/legend/1920locations_3_6.png" /> ECSA Energy SA<br />\
    <img src="styles/legend/1920locations_3_7.png" /> ENI<br />\
    <img src="styles/legend/1920locations_3_8.png" /> INDEPENDENT<br />\
    <img src="styles/legend/1920locations_3_9.png" /> MIGROLINO<br />\
    <img src="styles/legend/1920locations_3_10.png" /> OTHER ACCOUNTS<br />\
    <img src="styles/legend/1920locations_3_11.png" /> RESTOSHOP<br />\
    <img src="styles/legend/1920locations_3_12.png" /> SPAR CONVENIENCE<br />\
    <img src="styles/legend/1920locations_3_13.png" /> SPAR RETAIL<br />\
    <img src="styles/legend/1920locations_3_14.png" /> VALORA<br />\
    <img src="styles/legend/1920locations_3_15.png" /> VOLG<br />'
        });

lyr_GoogleHybrid_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Countryboundary_2.setVisible(true);lyr_1920locations_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_Countryboundary_2,lyr_1920locations_3];
lyr_Countryboundary_2.set('fieldAliases', {'shape0': 'shape0', 'shapeiso': 'shapeiso', 'shapeid': 'shapeid', 'shapegroup': 'shapegroup', 'shapetype': 'shapetype', });
lyr_1920locations_3.set('fieldAliases', {'Account co': 'Account code', 'Account na': 'Account name', 'Parent acc': 'Parent account name', 'Address li': 'Address line', 'Postal cod': 'Postal code', 'City': 'City', 'Canton': 'Canton', 'Lat': 'Lat', 'Long': 'Long', 'Agglo': 'Agglo', 'Language': 'Language', 'Additional': 'Additional', 'Lat final': 'Lat final', 'Long final': 'Long final', 'Comments': 'Comments', });
lyr_Countryboundary_2.set('fieldImages', {'shape0': '', 'shapeiso': '', 'shapeid': '', 'shapegroup': '', 'shapetype': '', });
lyr_1920locations_3.set('fieldImages', {'Account co': 'TextEdit', 'Account na': 'TextEdit', 'Parent acc': 'TextEdit', 'Address li': 'TextEdit', 'Postal cod': 'TextEdit', 'City': 'TextEdit', 'Canton': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Agglo': 'TextEdit', 'Language': 'TextEdit', 'Additional': 'TextEdit', 'Lat final': 'TextEdit', 'Long final': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Countryboundary_2.set('fieldLabels', {'shape0': 'no label', 'shapeiso': 'no label', 'shapeid': 'no label', 'shapegroup': 'no label', 'shapetype': 'no label', });
lyr_1920locations_3.set('fieldLabels', {'Account co': 'inline label - always visible', 'Account na': 'inline label - always visible', 'Parent acc': 'inline label - always visible', 'Address li': 'inline label - always visible', 'Postal cod': 'inline label - always visible', 'City': 'inline label - always visible', 'Canton': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Long': 'inline label - always visible', 'Agglo': 'inline label - always visible', 'Language': 'inline label - always visible', 'Additional': 'inline label - always visible', 'Lat final': 'inline label - always visible', 'Long final': 'inline label - always visible', 'Comments': 'inline label - always visible', });
lyr_1920locations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});