
requirejs.config({
    baseUrl: 'libs',
    paths: {
        'js': '../js',     // ../js目录
        'jquery': './jquery/jquery.min',
        'three': './three.js/three.min',
        'uevent': './uevent/uevent.min',
        'doT': './doT/doT.min',
        'D': './D.js/D.min',     //之前定义了 D.js　会出现问题，回去找src目录下面的D.js文件
        'photoSphereViewer': './Photo-Sphere-Viewer/photo-sphere-viewer',
        'three.CanvasRenderer': './three.js-examples/renderers/CanvasRenderer',
        'three.Projector': './three.js-examples/renderers/Projector',
        'three.EffectComposer': './three.js-examples/postprocessing/EffectComposer',
        'three.RenderPass': './three.js-examples/postprocessing/RenderPass',
        'three.ShaderPass': './three.js-examples/postprocessing/ShaderPass',
        'three.MaskPass': './three.js-examples/postprocessing/MaskPass',
        'three.CopyShader': './three.js-examples/shaders/CopyShader',
        'three.DeviceOrientationControls': './three.js-examples/controls/DeviceOrientationControls',
    },
    shim: {
        'photoSphereViewer': {
            deps: ['three','D','uevent','doT', 'three.CanvasRenderer', 'three.Projector', 'three.EffectComposer', 'three.RenderPass', 'three.ShaderPass', 'three.MaskPass', 'three.CopyShader', 'three.DeviceOrientationControls']
        },
        'jquery': {
            exports:'$'
        },

    }
});

require(['js/index']);