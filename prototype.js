function Robot(){
    Robot.prototype.work = function(){
        console.log("Я Robot – я просто працюю");
    }
}

function CoffeRobot(){}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.work = function(){
    console.log("Я CoffeRobot – я варю каву");
}

function RobotDancer(){}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = function(){
    console.log("Я RobotDancer – я просто танцюю");
}

function RobotCoocker(){}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;
RobotCoocker.prototype.work = function(){
    console.log("Я RobotCoocker – я просто готую");
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
var arr = [new Robot(), new CoffeRobot(), new RobotDancer(), new RobotCoocker(), new RobotDancer(), new CoffeRobot()];
for(var i = 0; i<arr.length;i++){
    arr[i].work();
}