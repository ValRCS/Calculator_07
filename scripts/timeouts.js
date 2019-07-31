let timeoutID;
const globj = {
    txt:  'That was really slow!',
    firefun: function() {console.log("Firing function"+this.mydata[1]);},
    //arrow function do not have their own this
    arrfun: (cntx) => {console.log("Arr fun shouldn't have this"+cntx.mydata[1]);},
    mydata: [1,2,3,5]
};

function delayedAlert() {
  timeoutID = window.setTimeout(onAlert, 1000, globj);
  console.log("Set Timeout: "+timeoutID);
}

function clearAlert() {
  console.log("Cleared Timeout: "+timeoutID);
  window.clearTimeout(timeoutID);
}

function onAlert(obj) {
    console.log("Alert Fired", obj.txt);
    obj.firefun();
    obj.arrfun(obj);
    obj.arrfun(globj);
    window.alert(obj.txt);
}

function manyPars(a,b,c,d,e,f,g) {

}

function betterPars(a, obj) {
    console.log(a,obj.b,obj.c);
}
