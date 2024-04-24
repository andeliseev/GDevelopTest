gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDSelectorObjects1= [];
gdjs.Untitled_32sceneCode.GDSelectorObjects2= [];
gdjs.Untitled_32sceneCode.GDSelectorObjects3= [];
gdjs.Untitled_32sceneCode.GDSelectorObjects4= [];
gdjs.Untitled_32sceneCode.GDSelectorObjects5= [];
gdjs.Untitled_32sceneCode.GDGuardObjects1= [];
gdjs.Untitled_32sceneCode.GDGuardObjects2= [];
gdjs.Untitled_32sceneCode.GDGuardObjects3= [];
gdjs.Untitled_32sceneCode.GDGuardObjects4= [];
gdjs.Untitled_32sceneCode.GDGuardObjects5= [];
gdjs.Untitled_32sceneCode.GDHookshotObjects1= [];
gdjs.Untitled_32sceneCode.GDHookshotObjects2= [];
gdjs.Untitled_32sceneCode.GDHookshotObjects3= [];
gdjs.Untitled_32sceneCode.GDHookshotObjects4= [];
gdjs.Untitled_32sceneCode.GDHookshotObjects5= [];
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1= [];
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3= [];
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects4= [];
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects5= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects4= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects5= [];
gdjs.Untitled_32sceneCode.GDTreasureChestObjects1= [];
gdjs.Untitled_32sceneCode.GDTreasureChestObjects2= [];
gdjs.Untitled_32sceneCode.GDTreasureChestObjects3= [];
gdjs.Untitled_32sceneCode.GDTreasureChestObjects4= [];
gdjs.Untitled_32sceneCode.GDTreasureChestObjects5= [];
gdjs.Untitled_32sceneCode.GDArrowPointerObjects1= [];
gdjs.Untitled_32sceneCode.GDArrowPointerObjects2= [];
gdjs.Untitled_32sceneCode.GDArrowPointerObjects3= [];
gdjs.Untitled_32sceneCode.GDArrowPointerObjects4= [];
gdjs.Untitled_32sceneCode.GDArrowPointerObjects5= [];
gdjs.Untitled_32sceneCode.GDDarkeningObjects1= [];
gdjs.Untitled_32sceneCode.GDDarkeningObjects2= [];
gdjs.Untitled_32sceneCode.GDDarkeningObjects3= [];
gdjs.Untitled_32sceneCode.GDDarkeningObjects4= [];
gdjs.Untitled_32sceneCode.GDDarkeningObjects5= [];
gdjs.Untitled_32sceneCode.GDFailureTextObjects1= [];
gdjs.Untitled_32sceneCode.GDFailureTextObjects2= [];
gdjs.Untitled_32sceneCode.GDFailureTextObjects3= [];
gdjs.Untitled_32sceneCode.GDFailureTextObjects4= [];
gdjs.Untitled_32sceneCode.GDFailureTextObjects5= [];
gdjs.Untitled_32sceneCode.GDVictoryTextObjects1= [];
gdjs.Untitled_32sceneCode.GDVictoryTextObjects2= [];
gdjs.Untitled_32sceneCode.GDVictoryTextObjects3= [];
gdjs.Untitled_32sceneCode.GDVictoryTextObjects4= [];
gdjs.Untitled_32sceneCode.GDVictoryTextObjects5= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects1= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects2= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects3= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects4= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects5= [];
gdjs.Untitled_32sceneCode.GDMovementObjects1= [];
gdjs.Untitled_32sceneCode.GDMovementObjects2= [];
gdjs.Untitled_32sceneCode.GDMovementObjects3= [];
gdjs.Untitled_32sceneCode.GDMovementObjects4= [];
gdjs.Untitled_32sceneCode.GDMovementObjects5= [];
gdjs.Untitled_32sceneCode.GDShootingObjects1= [];
gdjs.Untitled_32sceneCode.GDShootingObjects2= [];
gdjs.Untitled_32sceneCode.GDShootingObjects3= [];
gdjs.Untitled_32sceneCode.GDShootingObjects4= [];
gdjs.Untitled_32sceneCode.GDShootingObjects5= [];
gdjs.Untitled_32sceneCode.GDShotObjects1= [];
gdjs.Untitled_32sceneCode.GDShotObjects2= [];
gdjs.Untitled_32sceneCode.GDShotObjects3= [];
gdjs.Untitled_32sceneCode.GDShotObjects4= [];
gdjs.Untitled_32sceneCode.GDShotObjects5= [];
gdjs.Untitled_32sceneCode.GDDeathObjects1= [];
gdjs.Untitled_32sceneCode.GDDeathObjects2= [];
gdjs.Untitled_32sceneCode.GDDeathObjects3= [];
gdjs.Untitled_32sceneCode.GDDeathObjects4= [];
gdjs.Untitled_32sceneCode.GDDeathObjects5= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemySpawnPoint"), gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDSelectorObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDSelectorObjects2[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2[i].getPointX("")) - (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2[i].getPointY("")) - (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterYInScene()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EnemySpawnPoint"), gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1[i].setX((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1[i].getVariables().getFromIndex(0))) + (( gdjs.Untitled_32sceneCode.GDSelectorObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects1[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1[i].getVariables().getFromIndex(1))) + (( gdjs.Untitled_32sceneCode.GDSelectorObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects1[0].getCenterYInScene()));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11548204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Movement"), gdjs.Untitled_32sceneCode.GDMovementObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shooting"), gdjs.Untitled_32sceneCode.GDShootingObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.Untitled_32sceneCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMovementObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMovementObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShootingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShootingObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTutorialTextObjects1[i].setString(gdjs.Untitled_32sceneCode.GDTutorialTextObjects1[i].getString() + ("\n-Arrow keys to move.\n-Left mouse to shoot."));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects3Objects = Hashtable.newFrom({"Hookshot": gdjs.Untitled_32sceneCode.GDHookshotObjects3});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11552028);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects4);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects4[i].getBehavior("TopDownMovement").setRotateObject(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects3);
gdjs.Untitled_32sceneCode.GDHookshotObjects3.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].getCenterXInScene()), (gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].getCenterYInScene()), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects3Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHookshotObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].setZOrder((( gdjs.Untitled_32sceneCode.GDSelectorObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects3[0].getZOrder()) - 1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHookshotObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].setScale(64 / Math.max((gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].getHeight()), (gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].getWidth())));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11554028);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects2[i].getBehavior("TopDownMovement").setRotateObject(true);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects3Objects = Hashtable.newFrom({"Hookshot": gdjs.Untitled_32sceneCode.GDHookshotObjects3});
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11555868);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects4);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects4[i].getBehavior("TopDownMovement").setRotateObject(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects3);
/* Reuse gdjs.Untitled_32sceneCode.GDShootingObjects3 */
gdjs.Untitled_32sceneCode.GDHookshotObjects3.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].rotateTowardAngle(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 2, "Secondary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].getCenterXInScene()), (gdjs.Untitled_32sceneCode.GDSelectorObjects3[i].getCenterYInScene()), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects3Objects, (( gdjs.Untitled_32sceneCode.GDShootingObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDShootingObjects3[0].StickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHookshotObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].setZOrder((( gdjs.Untitled_32sceneCode.GDSelectorObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects3[0].getZOrder()) - 1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHookshotObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].setScale(64 / Math.max((gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].getHeight()), (gdjs.Untitled_32sceneCode.GDHookshotObjects3[i].getWidth())));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Shooting"), gdjs.Untitled_32sceneCode.GDShootingObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDShootingObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDShootingObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDShootingObjects3[k] = gdjs.Untitled_32sceneCode.GDShootingObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDShootingObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shooting"), gdjs.Untitled_32sceneCode.GDShootingObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDShootingObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDShootingObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDShootingObjects2[k] = gdjs.Untitled_32sceneCode.GDShootingObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDShootingObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11558100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSelectorObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSelectorObjects2[i].getBehavior("TopDownMovement").setRotateObject(true);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSelectorObjects2Objects = Hashtable.newFrom({"Selector": gdjs.Untitled_32sceneCode.GDSelectorObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects2Objects = Hashtable.newFrom({"Guard": gdjs.Untitled_32sceneCode.GDGuardObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeathObjects2Objects = Hashtable.newFrom({"Death": gdjs.Untitled_32sceneCode.GDDeathObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeathObjects2Objects = Hashtable.newFrom({"Death": gdjs.Untitled_32sceneCode.GDDeathObjects2});
gdjs.Untitled_32sceneCode.asyncCallback11562236 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}
gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11562236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Guard"), gdjs.Untitled_32sceneCode.GDGuardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSelectorObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Failure"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11560340);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darkening"), gdjs.Untitled_32sceneCode.GDDarkeningObjects2);
gdjs.copyArray(runtimeScene.getObjects("FailureText"), gdjs.Untitled_32sceneCode.GDFailureTextObjects2);
/* Reuse gdjs.Untitled_32sceneCode.GDSelectorObjects2 */
gdjs.Untitled_32sceneCode.GDDeathObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeathObjects2Objects, (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterYInScene()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeathObjects2Objects, (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterYInScene()), "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Failure");
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDFailureTextObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDFailureTextObjects2[0] : null), true, "Failure", 0);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 45, 0.6);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDarkeningObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDarkeningObjects2[i].setLayer("Failure");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDarkeningObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDarkeningObjects2[i].drawRectangle(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "Failure", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "Failure", 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "Failure", 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "Failure", 0));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects1Objects = Hashtable.newFrom({"Hookshot": gdjs.Untitled_32sceneCode.GDHookshotObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSelectorObjects1Objects = Hashtable.newFrom({"Selector": gdjs.Untitled_32sceneCode.GDSelectorObjects1});
gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Hookshot"), gdjs.Untitled_32sceneCode.GDHookshotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSelectorObjects1Objects, 1000, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDHookshotObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHookshotObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHookshotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSelectorObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSelectorObjects2[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSelectorObjects2[k] = gdjs.Untitled_32sceneCode.GDSelectorObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSelectorObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "laserSmall_004.ogg", false, 25, gdjs.randomFloatInRange(0.9, 1.1));
}}

}


{


gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);
}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTreasureChestObjects2Objects = Hashtable.newFrom({"TreasureChest": gdjs.Untitled_32sceneCode.GDTreasureChestObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSelectorObjects2Objects = Hashtable.newFrom({"Selector": gdjs.Untitled_32sceneCode.GDSelectorObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTreasureChestObjects2Objects = Hashtable.newFrom({"TreasureChest": gdjs.Untitled_32sceneCode.GDTreasureChestObjects2});
gdjs.Untitled_32sceneCode.mapOfEmptyGDTreasureChestObjects = Hashtable.newFrom({"TreasureChest": []});
gdjs.Untitled_32sceneCode.asyncCallback11567748 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}
gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11567748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);
gdjs.copyArray(runtimeScene.getObjects("TreasureChest"), gdjs.Untitled_32sceneCode.GDTreasureChestObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTreasureChestObjects2Objects, (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getPointY("")), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowPointer"), gdjs.Untitled_32sceneCode.GDArrowPointerObjects2);
/* Reuse gdjs.Untitled_32sceneCode.GDSelectorObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDTreasureChestObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDArrowPointerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDArrowPointerObjects2[i].drawLineV2((( gdjs.Untitled_32sceneCode.GDTreasureChestObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDTreasureChestObjects2[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDTreasureChestObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDTreasureChestObjects2[0].getCenterYInScene()), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterYInScene()), 5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);
gdjs.copyArray(runtimeScene.getObjects("TreasureChest"), gdjs.Untitled_32sceneCode.GDTreasureChestObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSelectorObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTreasureChestObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDTreasureChestObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTreasureChestObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTreasureChestObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Win", false, 30, 0.9);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfEmptyGDTreasureChestObjects) <= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11566372);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darkening"), gdjs.Untitled_32sceneCode.GDDarkeningObjects1);
gdjs.copyArray(runtimeScene.getObjects("VictoryText"), gdjs.Untitled_32sceneCode.GDVictoryTextObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDVictoryTextObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDVictoryTextObjects1[0] : null), true, "Victory", 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Victory");
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDarkeningObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDarkeningObjects1[i].setLayer("Victory");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDarkeningObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDarkeningObjects1[i].drawRectangle(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "Victory", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "Victory", 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "Victory", 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "Victory", 0));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemySpawnPointObjects3Objects = Hashtable.newFrom({"EnemySpawnPoint": gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects3Objects = Hashtable.newFrom({"Guard": gdjs.Untitled_32sceneCode.GDGuardObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTreasureChestObjects3Objects = Hashtable.newFrom({"TreasureChest": gdjs.Untitled_32sceneCode.GDTreasureChestObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemySpawnPointObjects3Objects = Hashtable.newFrom({"EnemySpawnPoint": gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects3Objects = Hashtable.newFrom({"Guard": gdjs.Untitled_32sceneCode.GDGuardObjects3});
gdjs.Untitled_32sceneCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EnemySpawnPoint"), gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemySpawnPointObjects3Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3 */
gdjs.Untitled_32sceneCode.GDGuardObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects3Objects, (( gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects3[i].setScale(98 / Math.max((gdjs.Untitled_32sceneCode.GDGuardObjects3[i].getHeight()), (gdjs.Untitled_32sceneCode.GDGuardObjects3[i].getWidth())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemySpawnPoint"), gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects3);
gdjs.copyArray(runtimeScene.getObjects("TreasureChest"), gdjs.Untitled_32sceneCode.GDTreasureChestObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTreasureChestObjects3Objects, (( gdjs.Untitled_32sceneCode.GDSelectorObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects3[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSelectorObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects3[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemySpawnPointObjects3Objects, (( gdjs.Untitled_32sceneCode.GDTreasureChestObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDTreasureChestObjects3[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDTreasureChestObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDTreasureChestObjects3[0].getPointY("")), false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3 */
gdjs.Untitled_32sceneCode.GDGuardObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects3Objects, (( gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects3[i].setScale(98 / Math.max((gdjs.Untitled_32sceneCode.GDGuardObjects3[i].getHeight()), (gdjs.Untitled_32sceneCode.GDGuardObjects3[i].getWidth())));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Guard"), gdjs.Untitled_32sceneCode.GDGuardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects2[i].rotateTowardPosition((( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getPointY("")), 0, runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects2Objects = Hashtable.newFrom({"Hookshot": gdjs.Untitled_32sceneCode.GDHookshotObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects2Objects = Hashtable.newFrom({"Guard": gdjs.Untitled_32sceneCode.GDGuardObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShotObjects2Objects = Hashtable.newFrom({"Shot": gdjs.Untitled_32sceneCode.GDShotObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeathObjects1Objects = Hashtable.newFrom({"Death": gdjs.Untitled_32sceneCode.GDDeathObjects1});
gdjs.Untitled_32sceneCode.eventsList15 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemySpawn") >= 1.3;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Guard"), gdjs.Untitled_32sceneCode.GDGuardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Untitled_32sceneCode.GDSelectorObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects2[i].addForceTowardPosition((( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDGuardObjects2[i].getVariables().getFromIndex(0))), 0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDGuardObjects2[i].getVariables().getFromIndex(0)).add(12 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects2[i].rotateTowardPosition((( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSelectorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSelectorObjects2[0].getPointY("")), 50, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Guard"), gdjs.Untitled_32sceneCode.GDGuardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Hookshot"), gdjs.Untitled_32sceneCode.GDHookshotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHookshotObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGuardObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGuardObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDHookshotObjects2 */
gdjs.Untitled_32sceneCode.GDShotObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShotObjects2Objects, (( gdjs.Untitled_32sceneCode.GDHookshotObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHookshotObjects2[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDHookshotObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHookshotObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHookshotObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHookshotObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDGuardObjects2[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Guard"), gdjs.Untitled_32sceneCode.GDGuardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGuardObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGuardObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGuardObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGuardObjects1[k] = gdjs.Untitled_32sceneCode.GDGuardObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGuardObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGuardObjects1 */
gdjs.Untitled_32sceneCode.GDDeathObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeathObjects1Objects, (( gdjs.Untitled_32sceneCode.GDGuardObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGuardObjects1[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDGuardObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGuardObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGuardObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGuardObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 35, gdjs.randomFloatInRange(0.8, 0.9));
}}

}


};gdjs.Untitled_32sceneCode.eventsList16 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList11(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList15(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDSelectorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSelectorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSelectorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSelectorObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSelectorObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDGuardObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGuardObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGuardObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGuardObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGuardObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDHookshotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHookshotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHookshotObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHookshotObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDHookshotObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDEnemySpawnPointObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDTreasureChestObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTreasureChestObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTreasureChestObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTreasureChestObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTreasureChestObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDArrowPointerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDArrowPointerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDArrowPointerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDArrowPointerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDArrowPointerObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDDarkeningObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDarkeningObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDarkeningObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDarkeningObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDDarkeningObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFailureTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFailureTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFailureTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFailureTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFailureTextObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDVictoryTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDVictoryTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDVictoryTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDVictoryTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDVictoryTextObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDMovementObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMovementObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMovementObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMovementObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDMovementObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDShootingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShootingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShootingObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShootingObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDShootingObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDShotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShotObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShotObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDShotObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDDeathObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDeathObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDeathObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDeathObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDDeathObjects5.length = 0;

gdjs.Untitled_32sceneCode.eventsList16(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
