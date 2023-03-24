var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "Scouter Name",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "Event",
      "type": "event",
      "defaultValue": "Sammamish HS",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "Match Level",
      "type": "level",
      "choices": {
        "quals": "Quals<br>",
        "playoffs": "Semifinals<br>",
        "finals": "Finals"
      },
      "defaultValue": "quals",
      "required": "true"
    },
    { "name": "Match #",
      "code": "match number",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "robot",
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
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "Auton Start Position",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "Auton Scoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Game Pieces attempted<br>(Scored and Missed)",
      "code": "Autonomous piece attempts",
      "type": "counter"
    },
    { "name": "Mobility?",
      "code": "Mobility",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "Docking",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Grid Scoring",
      "code": "Teleop Scoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "Feeder count",
      "type": "counter"
    },
    { "name": "Was Fed<br>Game Pieces",
      "code": "Was fed?",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "Was Defended",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
      "code": "Who defended this bot",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "links",
      "type": "bool"
    },
    { "name": "Floor Pickup",
      "code": "Floor Pickup",
      "type": "radio",
      "choices": {
        "Cones": "Cones<br>",
        "Cubes": "Cubes<br>",
        "Both": "Both<br>",
        "Unattempted": "Not Attempted"
      },
      "defaultValue": "Unattempted"
    },
    { "name": "Substation Use",
      "code": "sub",
      "type": "radio",
      "choices": {
        "1": "Single<br>",
        "2": "Double<br>",
        "Both": "Both<br>",
        "Unattempted": "Not Attempted"
      },
      "defaultValue": "Unattempted"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "Docking Timer",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "Final Status",
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
      "code": "# of alliance robots docked",
      "type": "counter"
    },
    { "name": "Links Scored<br>(by alliance)",
      "code": "links scored",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "Driver Skill",
      "type": "radio",
      "choices": {
        "not effective": "Not Effective<br>",
        "average": "Average<br>",
        "very effective": "Very Effective<br>",
        "not observed": "Not Observed"
      },
      "defaultValue": "not observed"
    },
    { "name": "Defense Rating",
      "code": "Defense Rating",
      "type": "radio",
      "choices": {
        "Below average": "Below Average<br>",
        "Average": "Average<br>",
        "Good": "Good<br>",
        "Excellent": "Excellent<br>",
        "No Defense": "Did not play defense"
      },
      "defaultValue": "No Defense"
    },
    { "name": "Speed Rating",
      "code": "Speed Rating",
      "type": "radio",
      "choices": {
        "slow": "1 (slow)<br>",
        "somewhat slow": "2<br>",
        "average": "3<br>",
        "above average": "4<br>",
        "fast": "average"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "Died",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "Tipped",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "code": "Dropped Cones",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "Potential Alliance partner?",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "Comments",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
