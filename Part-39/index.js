function a(){
    console.log(this)
    this.newVariable = 'hello'
}
var b = function(){
    console.log(this)
}
a();
b();

var c = {
    name:"The C Object",
    log:function(){
        var self = this
        self.newVariable = "I am changed"
        self.name="Updated c Object";
        console.log(self)
        var setname = function(newName){
            self.name = newName;
        }
        setname('Updated Again')
        console.log(self);
    }
}
console.log(newVariable)
c.log();