
getOpelData((project) => {
  project.forEach((project) => {
      getDDD(project[1].name);
    // console.log(project.name[1]);
   });
 });
class dataStore{
  constructor(dataR){
    this.data=dataR;
  }

  get jdata(){
    return 
  }
}
 var a={"id":"agjsgjh"};

 function getDDD(dd){
   console.log(dd);
   a=dd;
 }


 function h()
 {
   console.log("a  ::"+a);
   return  a;
 }
function getOpelData(callback){

  var result;
    
    var req = new XMLHttpRequest();
  req.open('GET', 'http://localhost/project',true);
  req.send();

  console.log("getTask Loaded");
  req.addEventListener('load', () => {
      result= JSON.parse(req.responseText);
      console.log("i am called");
      if (callback) callback(result);
      a=result;
      //console.log(a);
     //
    //results = JSON.parse(req.responseText);
});
//
}
