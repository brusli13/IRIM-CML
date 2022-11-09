while (input.runningTime() < 15000) {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1) {
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1) {
            if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
            }
        }
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0) {
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1) {
            if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
                DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eRightMotor)
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 50)
            }
        }
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1) {
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1) {
            if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
                DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eLeftMotor)
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 50)
            }
        }
    }
}
DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
basic.forever(function () {
	
})
