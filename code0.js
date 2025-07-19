gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDNewTextObjects1= [];
gdjs.StartCode.GDNewTextObjects2= [];
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDGAME_9595OVERObjects1= [];
gdjs.StartCode.GDGAME_9595OVERObjects2= [];
gdjs.StartCode.GDLevelCompleteTextObjects1= [];
gdjs.StartCode.GDLevelCompleteTextObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StartCode.GDNewTextObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Backsound.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.StartCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewTextObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", true);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDGAME_9595OVERObjects1.length = 0;
gdjs.StartCode.GDGAME_9595OVERObjects2.length = 0;
gdjs.StartCode.GDLevelCompleteTextObjects1.length = 0;
gdjs.StartCode.GDLevelCompleteTextObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDGAME_9595OVERObjects1.length = 0;
gdjs.StartCode.GDGAME_9595OVERObjects2.length = 0;
gdjs.StartCode.GDLevelCompleteTextObjects1.length = 0;
gdjs.StartCode.GDLevelCompleteTextObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
