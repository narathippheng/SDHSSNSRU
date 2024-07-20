var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "ตำบลนครสวรรค์ออก",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ตำบลนครสวรรค์ออก'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1];
lyr__1.set('fieldAliases', {'AP_TN': 'AP_TN', 'PV_TN': 'PV_TN', 'MOO': 'MOO', 'TB_TN': 'TB_TN', });
lyr__1.set('fieldImages', {'AP_TN': 'TextEdit', 'PV_TN': 'TextEdit', 'MOO': 'TextEdit', 'TB_TN': 'TextEdit', });
lyr__1.set('fieldLabels', {'AP_TN': 'no label', 'PV_TN': 'no label', 'MOO': 'inline label - always visible', 'TB_TN': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});