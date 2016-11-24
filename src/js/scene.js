define( function(){


    var defaultSceneName = 'sun',
        sceneMap= {

        'sun' : {
            title: '世外桃源',
            path : 'images/sun.jpg',
            markers : [
                {
                    id : 'text1',
                    html: '<i class="fa fa-exclamation-circle fa-2x" aria-hidden="true"></i>',
                    x: 2246,
                    y: 956,
                    style:{
                        color: '#fff'
                    },
                    tooltip: {
                        content:'聊天的老人',
                        position: 'top center'
                    },
                    content : '<p>几个老人在长椅上聊天</p>'
                },
                {
                    id : 'text4',
                    html: '<i class="fa fa-heart fa-1x" aria-hidden="true"></i>',
                    x: 2120,
                    y: 972,
                    style:{
                        color: 'red'
                    },
                    tooltip: {
                        content:'小伙子盯着大姑娘看',
                        position: 'top center'
                    },
                    content : '<p>小伙子盯着大姑娘看,心生爱慕!</p>'
                },
                {
                    id: 'door2',
                    html: '<i class="fa fa-angle-double-up fa-5x" aria-hidden="true"></i>',
                    x: 1980,
                    y: 1030,
                    tooltip: {
                        content:'雪地传送门'
                    },
                    style: {
                        color: '#afdfe4'
                    },
                    data : {
                        jumpTo: 'snow'
                    }
                },
                {
                    id: 'door3',
                    html: '<i class="fa fa-angle-double-up fa-3x" aria-hidden="true"></i>',
                    x: 1212,
                    y: 1000,
                    tooltip: {
                        content:'进入屋内'
                    },
                    style: {
                        color: '#afdfe4'
                    },
                    data : {
                        jumpTo: 'room2'
                    }
                },
                {
                    id : 'text2',
                    html: '<i class="fa fa-question-circle-o fa-3x" aria-hidden="true"></i>',
                    x: 950,
                    y: 450,
                    style:{
                        color: '#fff'
                    },
                    tooltip: {
                        content:'椰树',
                        position: 'top center'
                    },
                    content : '<h1>椰子树</h1><p>椰子树（英文：Cocos nucifera）是棕榈科椰属的一种大型植物，椰子是椰树的果实，是一种在热带地区很普及的果实。椰子树的普及也与其果实椰子可以在海中随风浪漂流上千公里后生殖到离母树非常远的地方有关。椰子树是常绿乔木，产于热带。树干高约15～30米，单项树冠。叶羽状全裂，长4～6米，裂片多数，革质，呈线状披针形，长65～100厘米，宽3～4厘米先端渐尖；叶柄粗壮，长超过1米[1]  </p>'
                },
                {
                    id : 'text3',
                    html: '<i class="fa fa-question-circle-o fa-3x" aria-hidden="true"></i>',
                    x: 1800,
                    y: 760,
                    style:{
                        color: '#fff'
                    },
                    tooltip: {
                        content:'梧桐树',
                        position: 'top center'
                    },
                    content : '<h1>梧桐树</h1>' +
                    '<p>梧桐树，“中国梧桐”是梧桐科梧桐属的植物，英文名为Phoenix Tree、别名青桐、桐麻 ，也属落叶大乔木，高达15米；树干挺直，树皮绿色，平滑。原产中国，南北各省都有栽培，也为普通的行道树及庭园绿化观赏树。我们所说的法国梧桐其实就是悬铃木中的一种，只是因为叶子似梧桐，而被大家误以为是梧桐。</p>' +
                    '<p>梧桐生长快，木材适合制造乐器，树皮可用于造纸和绳索，种子可以食用或榨油，由于其树干光滑，叶大优美，是一种著名的观赏树种。中国古代传说凤凰“非梧桐不栖”。许多传说中的古琴都是用梧桐木制造的，梧桐对于中国文化有重要的作用。作家丰子恺的同名文章《梧桐树》堪称佳篇。梧桐已经被引种到欧洲、美洲等许多国家作为观赏树种。</p>'
                },
            ]



        },

        'snow' : {
            title: '冰天雪地',
            path : 'images/snow.jpg',
            markers : [
                {
                    id: 'door1',
                    html: '<i class="fa fa-angle-double-up fa-5x" aria-hidden="true"></i>',
                    x: 2100,
                    y: 850,
                    tooltip: {
                        content:'世外桃源传送门'
                    },
                    style: {
                        color: '#afdfe4'
                    },
                    data : {
                        jumpTo: 'sun'
                    }
                },
                {
                    id : 'fish area1',
                    html: '<span>钓鱼点</span><br><i class="fa fa-question-circle-o fa-2x" aria-hidden="true"></i>',
                    x: 884,
                    y: 1050,
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        content:'钓鱼点1',
                        position: 'top center'
                    },
                    content : '<p>这里有很多鱼游来游去</p>'
                },
                {
                    id : 'fish area2',
                    html: '<span>钓鱼点</span><br><i class="fa fa-question-circle-o fa-2x" aria-hidden="true"></i>',
                    x: 3370,
                    y: 956,
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        content:'钓鱼点2',
                        position: 'top center'
                    },
                    content : '<p>这里有很多鱼游来游去</p>'
                },
                {
                    id : 'snow1',
                    html: '<i class="fa fa-snowflake-o fa-3x" aria-hidden="true"></i>',
                    latitude: 0.25*Math.PI,
                    longitude: 0,
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        content:'雪花1',
                        position: 'top center'
                    },
                    content : '<p>好大的雪</p>'
                },
                {
                    id : 'snow2',
                    html: '<i class="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>',
                    latitude: 0.1*Math.PI,
                    longitude: 0.5,
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        content:'雪花2',
                        position: 'top center'
                    },
                    content : '<p>好大的雪</p>'
                },
                {
                    id : 'snow3',
                    html: '<i class="fa fa-snowflake-o fa-3x" aria-hidden="true"></i>',
                    latitude: 0,
                    longitude: 0.9,
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        content:'雪花3',
                        position: 'top center'
                    },
                    content : '<p>好大的雪</p>'
                },
                {
                    id : 'snow4',
                    html: '<i class="fa fa-snowflake-o fa-3x" aria-hidden="true"></i>',
                    latitude: 0.15 *Math.PI,
                    longitude: 1.4,
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        content:'雪花4',
                        position: 'top center'
                    },
                    content : '<p>好大的雪</p>'
                },
                {
                    id : 'snow5',
                    html: '<i class="fa fa-snowflake-o fa-3x" aria-hidden="true"></i>',
                    latitude: 0.15 *Math.PI,
                    longitude: -1,
                    style: {
                        color: '#fff'
                    },
                    tooltip: {
                        content:'雪花5',
                        position: 'top center'
                    },
                    content : '<p>好大的雪</p>'
                },

            ],



        },
        'room2':{
            title: '豪华公寓',
            path: 'images/room2.jpg',
            markers:[
                {
                    id: 'door4',
                    html: '<i class="fa fa-angle-double-up fa-3x" aria-hidden="true"></i>',
                    x: 450,
                    y: 290,
                    tooltip: {
                        content:'去屋外'
                    },
                    style: {
                        color: '#63B8FF'
                    },
                    data : {
                        jumpTo: 'sun'
                    }
                }
            ]
        }




    };

    function getMarkerIndex(markers, marker){
        for(var i=0; i<markers.length; i++){
            var existMaker = markers[i];
            if(existMaker.id === marker.id){
                return i;
            }
        }
        return -1;
    }

    return {
        getDefaultScene : function(){
            return sceneMap[defaultSceneName];

        },
        getScene : function(sceneName){
            return sceneMap[sceneName];
        },
        insertMarker : function(sceneName, marker){
            if(getMarkerIndex(sceneMap[sceneName].markers, marker) == -1){
                sceneMap[sceneName].markers.push(marker);
            }
        },
        removeMarker : function(sceneName, marker){
            var markerIndex = getMarkerIndex(sceneMap[sceneName].markers, marker);
            if(markerIndex > -1){
                sceneMap[sceneName].markers.splice(markerIndex, 1);
            }
        }
    }

});