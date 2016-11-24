define(['./scene'], function(sceneModule){

    return {
        container: 'photosphere',
        panorama: sceneModule.getDefaultScene().path,
        loading_img: 'images/photosphere-logo.gif',
        autoload: false,
        fisheye : true,
        autorotate : false,
        gyroscope : false,
        transition: {
            duration: 1000,
            loader: true,
            blur: true   //动画效果
        },
        click_event_on_marker: true, //A click on a marker will trigger a click event as well as select-marker.
        markers: [

        ]
    }

});