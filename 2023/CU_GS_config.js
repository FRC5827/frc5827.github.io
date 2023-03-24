var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "Scouter Name",
      "gsCol": "scouter",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "Event",
      "gsCol": "event",
      "type": "event",
      "defaultValue": "Sammamish HS",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "Match Level",
      "gsCol": "level",
      "type": "level",
      "choices": {
        "quals": "Quals<br>",
        "playoffs": "Double Elimination<br>",
        "finals": "Finals"
      },
      "defaultValue": "quals",
      "required": "true"
    },
    { "name": "Match #",
      "code": "match number",
      "gsCol": "matchNum",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "robot",
      "gsCol": "robot",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "team number",
      "gsCol": "teamNum",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "Auton Start Position",
      "gsCol": "autoStartPosition",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "Auton Scoring",
      "gsCol": "autoScoringGrid",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Cable",
      "code": "acc",
      "gsCol": "autoCrossedCable",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "code": "ccs",
      "gsCol": "autoCrossedChargingStation",
      "type": "bool"
    },
    { "name": "Mobility?",
      "code": "Mobility",
      "gsCol": "autoMobility",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "Docking
      "gsCol": "autoDocked",
      "type":"radio",
      "choices": {
        "docked": "Docked (not Engaged)<br>",
        "engaged": "Engaged<br>",
        "attempted": "Attempted but failed<br>",
        "unattempted": "Not attempted"
      },
      "defaultValue": "unattempted"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "Cycle Timer",
      "gsCol": "cycleTimes",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "Teleop Scoring",
      "gsCol": "gridScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Top position Scored<br>",
      "code": "topScored",
      "gsCol": "topScore",
      "type": "counter"
    },
    { "name": "Mid position Scored<br>",
      "code": "midScored",
      "gsCol": "midScore",
      "type": "counter"
    },
    { "name": "Bottom position Scored<br>",
      "code": "bottomScored",
      "gsCol": "botScore"
      "type": "counter"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "Feeder count",
      "gsCol": "feedCount",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "Was Defended",
      "gsCol": "wasDefended",
      "type": "bool"
    },
    { "name": "Who Defended this bot<br>(Team #)",
      "code": "Who defended this bot",
      "gsCol": "defenderTeamNum",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "links",
      "gsCol": "smartPlacement",
      "type": "bool"
    },
    { "name": "Floor Pick UP",
      "code": "Floor Pickup",
      "gsCol": "floorPickUp",
      "type": "radio",
      "choices": {
        "Cone": "Cone<br>",
        "Cube": "Cube<br>",
        "Both": "Both<br>",
        "Unattempted": "Not Attempted"
      },
      "defaultValue": "Unattempted"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "Docking Timer",
      "gsCol": "dockingTime",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "Final Status",
      "gsCol": "endgameStatus",
      "type":"radio",
      "choices": {
        "parked": "Parked<br>",
        "docked": "Docked (Not Engaged)<br>",
        "engaged": "Engaged<br>",
        "attempted fail": "Attempted but failed<br>",
        "unattempted": "Not attempted"
      },
      "defaultValue": "unattempted"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "# of alliance robots docked
      "gsCol": "numOfRobotsDocked",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "Driver Skill",
      "gsCol": "driverSkill",
      "type": "radio",
      "choices": {
        "not effective": "Not Effective<br>",
        "average": "Average<br>",
        "very effective": "Very Effective<br>",
        "not observed": "Not Observed"
      },
      "defaultValue": "not observed"
    },
    { "name": "Links Scored",
      "code": "links scored",
      "gsCol": "linksScored",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "code": "Defense Rating",
      "gsCol": "defenseRating",
      "type": "radio",
      "choices": {
        "Below Average": "Below Average<br>",
        "Average": "Average<br>",
        "Good": "Good<br>",
        "Excellent": "Excellent<br>",
        "No Defense": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
      "code": "Swerve Drive",
      "gsCol": "swerveDrive",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "code": "Speed Rating",
      "gsCol": "speedRating",
      "type": "radio",
      "choices": {
        "slow": "1 (slow)<br>",
        "somewhat slow": "2<br>",
        "average": "3<br>",
        "above average": "4<br>",
        "fast": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "Died",
      "gsCol": "diedOrImmobilized",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "Tipped",
      "gsCol": "tippy",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "code": "Dropped Cones",
      "gsCol": "droppedCones",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "Potential Alliance partner?",
      "gsCol": "goodPartners",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "Comments",
      "gsCol": "comments",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
