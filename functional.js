function Robot(){
    var self = this;

    self.work = function(){
        console.log("Я Robot – я просто працюю");
    }
}

function CoffeRobot(){
    Robot.call(this);
    var self = this;

    self.work = function(){
        console.log("Я CoffeRobot – я варю каву");
    }
}

function RobotDancer(){
    Robot.call(this);
    var self = this;

    self.work = function(){
        console.log("Я RobotDancer – я просто танцюю");
    }
}

function RobotCoocker(){
    Robot.call(this);
    var self = this;

    self.work = function(){
        console.log("Я RobotCoocker – я просто готую");
    }
}

var robot = new Robot();
var coffeRobot = new CoffeRobot();
var robotDancer = new RobotDancer();
var robotCoocker = new RobotCoocker();
robot.work();
coffeRobot.work();
robotDancer.work();
robotCoocker.work();
console.log("------------------------------------");
var arr = [new Robot(), new CoffeRobot(), new RobotDancer(), new RobotCoocker(),new RobotDancer(), new CoffeRobot()];
for(var i = 0; i<arr.length;i++){
    arr[i].work();
}