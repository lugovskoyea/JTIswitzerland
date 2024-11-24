var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1920locations_2 = new ol.format.GeoJSON();
var features_1920locations_2 = format_1920locations_2.readFeatures(json_1920locations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1920locations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1920locations_2.addFeatures(features_1920locations_2);
var lyr_1920locations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1920locations_2, 
                style: style_1920locations_2,
                popuplayertitle: "1920locations",
                interactive: true,
                title: '<img src="styles/legend/1920locations_2.png" /> 1920locations'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_1920locations_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_1920locations_2];
lyr_1920locations_2.set('fieldAliases', {'Account co': 'Account co', 'Account na': 'Account na', 'Parent acc': 'Parent acc', 'Address li': 'Address li', 'Postal cod': 'Postal cod', 'City': 'City', 'Canton': 'Canton', 'Lat': 'Lat', 'Long': 'Long', 'Agglo': 'Agglo', 'Language': 'Language', 'Additional': 'Additional', 'Lat final': 'Lat final', 'Long final': 'Long final', 'Comments': 'Comments', });
lyr_1920locations_2.set('fieldImages', {'Account co': '', 'Account na': '', 'Parent acc': '', 'Address li': '', 'Postal cod': '', 'City': '', 'Canton': '', 'Lat': '', 'Long': '', 'Agglo': '', 'Language': '', 'Additional': '', 'Lat final': '', 'Long final': '', 'Comments': '', });
lyr_1920locations_2.set('fieldLabels', {'Account co': 'inline label - always visible', 'Account na': 'inline label - always visible', 'Parent acc': 'no label', 'Address li': 'no label', 'Postal cod': 'no label', 'City': 'no label', 'Canton': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Agglo': 'no label', 'Language': 'no label', 'Additional': 'no label', 'Lat final': 'no label', 'Long final': 'no label', 'Comments': 'no label', });
lyr_1920locations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});