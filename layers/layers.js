ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([100.079141, 15.640670, 100.197338, 15.699091]);
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "มิติด้านเศรษฐกิจ",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> มิติด้านเศรษฐกิจ'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "มิติด้านสังคม",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> มิติด้านสังคม'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "มิติด้านสิ่งแวดล้อม",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> มิติด้านสิ่งแวดล้อม'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'AP_TN': 'AP_TN', 'PV_TN': 'PV_TN', 'MOO': 'MOO', 'TB_TN': 'TB_TN', });
lyr__2.set('fieldAliases', {'Id': 'Id', 'Moo': 'Moo', 'type of so': 'type of so', 'detail': 'detail', 'Des': 'Des', 'y': 'y', 'x': 'x', 'Image': 'Image', 'type of ec': 'type of ec', 'layer': 'layer', 'path': 'path', });
lyr__3.set('fieldAliases', {'Id': 'Id', 'Moo': 'Moo', 'type of so': 'type of so', 'detail': 'detail', 'Des': 'Des', 'y': 'y', 'x': 'x', 'Image': 'Image', 'typy of so': 'typy of so', 'das': 'das', 'layer': 'layer', 'path': 'path', });
lyr__4.set('fieldAliases', {'Id': 'Id', 'Moo': 'Moo', 'Type of en': 'Type of en', 'Detail': 'Detail', 'Des': 'Des', 'y': 'y', 'x': 'x', 'Image': 'Image', 'type of ec': 'type of ec', 'type of  e': 'type of  e', 'layer': 'layer', 'path': 'path', });
lyr__1.set('fieldImages', {'AP_TN': 'TextEdit', 'PV_TN': 'TextEdit', 'MOO': 'TextEdit', 'TB_TN': 'TextEdit', });
lyr__2.set('fieldImages', {'Id': 'TextEdit', 'Moo': 'TextEdit', 'type of so': 'TextEdit', 'detail': 'TextEdit', 'Des': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Image': 'TextEdit', 'type of ec': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__3.set('fieldImages', {'Id': 'TextEdit', 'Moo': 'TextEdit', 'type of so': 'TextEdit', 'detail': 'TextEdit', 'Des': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Image': 'TextEdit', 'typy of so': 'TextEdit', 'das': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__4.set('fieldImages', {'Id': 'TextEdit', 'Moo': 'TextEdit', 'Type of en': 'TextEdit', 'Detail': 'TextEdit', 'Des': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Image': 'TextEdit', 'type of ec': 'TextEdit', 'type of  e': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__1.set('fieldLabels', {'AP_TN': 'no label', 'PV_TN': 'no label', 'MOO': 'no label', 'TB_TN': 'no label', });
lyr__2.set('fieldLabels', {'Id': 'no label', 'Moo': 'no label', 'type of so': 'no label', 'detail': 'no label', 'Des': 'no label', 'y': 'no label', 'x': 'no label', 'Image': 'no label', 'type of ec': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__3.set('fieldLabels', {'Id': 'no label', 'Moo': 'no label', 'type of so': 'no label', 'detail': 'no label', 'Des': 'no label', 'y': 'no label', 'x': 'no label', 'Image': 'no label', 'typy of so': 'no label', 'das': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__4.set('fieldLabels', {'Id': 'no label', 'Moo': 'no label', 'Type of en': 'no label', 'Detail': 'no label', 'Des': 'no label', 'y': 'no label', 'x': 'no label', 'Image': 'no label', 'type of ec': 'no label', 'type of  e': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});