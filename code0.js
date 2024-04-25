gdjs.Level1Code = {};
gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.GDMonsterObjects1= [];
gdjs.Level1Code.GDMonsterObjects2= [];
gdjs.Level1Code.GDMonsterObjects3= [];
gdjs.Level1Code.GDtonObjects1= [];
gdjs.Level1Code.GDtonObjects2= [];
gdjs.Level1Code.GDtonObjects3= [];
gdjs.Level1Code.GDScoreObjects1= [];
gdjs.Level1Code.GDScoreObjects2= [];
gdjs.Level1Code.GDScoreObjects3= [];


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects2[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - ((gdjs.Level1Code.GDMonsterObjects2[i].getWidth()) / 2.0 - 5) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDMonsterObjects2[k] = gdjs.Level1Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getX() <= gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - ((gdjs.Level1Code.GDMonsterObjects1[i].getWidth()) / 2.0 + 5) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDtonObjects1Objects = Hashtable.newFrom({"ton": gdjs.Level1Code.GDtonObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDtonObjects2Objects = Hashtable.newFrom({"ton": gdjs.Level1Code.GDtonObjects2});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Level1Code.GDMonsterObjects2});
gdjs.Level1Code.eventsList1 = function(runtimeScene) {

};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShapeCreation") >= 1.3;
if (isConditionTrue_0) {
gdjs.Level1Code.GDtonObjects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDtonObjects1Objects, "ton", gdjs.randomInRange(80, 720 - 150), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}{for(var i = 0, len = gdjs.Level1Code.GDtonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDtonObjects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.32));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ton"), gdjs.Level1Code.GDtonObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDtonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDtonObjects1[i].addPolarForce(90, 180, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDtonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDtonObjects1[i].rotate(90, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ton"), gdjs.Level1Code.GDtonObjects1);

for (gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDtonObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects2);
gdjs.Level1Code.GDtonObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDtonObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDtonObjects2.push(gdjs.Level1Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDtonObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Level1Code.GDtonObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{runtimeScene.getScene().getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score"))));
}
}}
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDMonsterObjects1.length = 0;
gdjs.Level1Code.GDMonsterObjects2.length = 0;
gdjs.Level1Code.GDMonsterObjects3.length = 0;
gdjs.Level1Code.GDtonObjects1.length = 0;
gdjs.Level1Code.GDtonObjects2.length = 0;
gdjs.Level1Code.GDtonObjects3.length = 0;
gdjs.Level1Code.GDScoreObjects1.length = 0;
gdjs.Level1Code.GDScoreObjects2.length = 0;
gdjs.Level1Code.GDScoreObjects3.length = 0;

gdjs.Level1Code.eventsList2(runtimeScene);

return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
