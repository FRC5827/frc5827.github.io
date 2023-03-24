var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "Team number",
      "type": "number"
    },
    { "name": "Width",
      "code": "width",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "weight",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drivetrain",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "swerve ration",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "drivetrain motor",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Batteries",
      "code": "# of batteries",
      "type": "number"
    },
    { "name": "Floor pickup Cones",
      "code": "Floor pickup cones",
      "type": "bool"
    },
    { "name": "Expected # of objects scored",
      "code": "Expected score",
      "type": "number"
    },
    {"name": "Can reach top level of scoring",
     "code": "Can reach top",
     "type": "radio",
     "choices": {
       "Yes": "Yes<br>",
       "No": "No<br>"
     },
      "defaultValue":"No"
    },
     {"name": "Can reach middle level of scoring",
     "code": "Can reach mid",
     "type": "radio",
     "choices": {
       "Yes": "Yes<br>",
       "No": "No<br>"
     },
     "defaultValue":"No"
    },
    { "name": "Floor pickup Cubes",
      "code": "floor pickup cubes",
      "type": "bool"
    },
    { "name": "Cross Charging Station",
      "code": "ccs",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "scouting method",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "comment",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
