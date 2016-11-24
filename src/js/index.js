require([
    'jquery',
    'photoSphereViewer',
    'js/viewerConfig',
    'js/scene'
], function($,PhotoSphereViewer,viewerConfig,sceneModule){

    var PSV,
        stateMap = {
            markerIndex : 0,
            currentScene: 'sun'
        };


    $(function(){
        PSV = new PhotoSphereViewer(viewerConfig);

        changeScene(stateMap.currentScene);

        bind_actions();

    });


    function bind_actions() {
        PSV.on('select-marker', function(marker){
            if(marker.data && marker.data.jumpTo){
                changeScene(marker.data.jumpTo);
            }
            if (marker.data && marker.data.deletable) {
                PSV.removeMarker(marker);
                sceneModule.removeMarker(stateMap.currentScene, marker);
            }

        });

        PSV.on('click', function(e) {
            if (e.marker && !e.marker.isPolygon()) {
                return;
            }
            var marker = {
                id: '#' + Math.random(),
                tooltip: '自定义标记' + stateMap.markerIndex++,
                longitude: e.longitude,
                latitude: e.latitude,
                image: 'images/pin.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                data: {
                    deletable: true
                }
            };
            PSV.addMarker(marker);
            sceneModule.insertMarker(stateMap.currentScene, marker);
        });


    }


    function changeScene(sceneName) {
        stateMap.currentScene = sceneName;
        PSV.setPanorama(
            'images/'+sceneName+'.jpg',  //path
            {
                longitude:0,
                latitude:0
            },    //position
            true    //transition
        )
            .then(function(){

                PSV.clearMarkers();


                var markers = sceneModule.getScene(sceneName).markers;

                markers.forEach(function(marker){

                    PSV.addMarker(marker);

                });

                //PSV.showTooltip(
                //    {
                //        content:'欢迎来到'+SceneModule.getConfigByScene(sceneName).title,
                //        top: 2000,
                //        left: 500
                //    }
                //);

            });





    }

});


