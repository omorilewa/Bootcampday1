
module.exports = {

Mobile: function(name,model,numofSim) {
  this.name = (typeof name == 'undefined') ? "Phone" : name;
  this.model = (typeof model == 'undefined') ? "GM" : model;
  this.numOfSim = (this.type === "Iphone") ? 1 : 2;
  
},
//Mobile.prototype.charge = function(hours) {
  
//  return "phone is charging for"+ hours +" hours";
//},


//}
}
 
