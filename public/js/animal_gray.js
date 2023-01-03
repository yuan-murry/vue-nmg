var settings = {

    width: innerWidth,
    height: innerHeight,
    autoResize: false,
    autoResizeMinWidth: null,
    autoResizeMaxWidth: null,
    autoResizeMinHeight: null,
    autoResizeMaxHeight: null,
    addMouseControls: true,
    addTouchControls: true,
    hideContextMenu: true,
    starCount: 7777,
    starBgCount: 4444,
    starBgColor: { r: 0, g: 204, b: 255 },
    starBgColorRangeMin: 20,
    starBgColorRangeMax: 80,
    starColor: { r: 0, g: 204, b: 255 },
    starColorRangeMin: 50,
    starColorRangeMax: 100,
    starfieldBackgroundColor: { r: 1, g: 27, b: 54 },
    starDirection: 1,
    starSpeed: 20,
    starSpeedMax: 200,
    starSpeedAnimationDuration: 3,
    starFov: 500,
    starFovMin: 300,
    starFovAnimationDuration: 2,
    starRotationPermission: true,
    starRotationDirection: 1,
    starRotationSpeed: 0.0,
    starRotationSpeedMax: 0.5,
    starRotationAnimationDuration: 2,
    starWarpLineLength: 2.0,
    starWarpTunnelDiameter: 100,
    starFollowMouseSensitivity: 0.025,
    starFollowMouseXAxis: true,
    starFollowMouseYAxis: true

};

//------------------------------------------------------------------------

//standalone

//init

//var warpdrive = new WarpDrive( document.getElementById( 'holder' ) );
var warpdrive = new WarpDrive(document.getElementById('holder'), settings);