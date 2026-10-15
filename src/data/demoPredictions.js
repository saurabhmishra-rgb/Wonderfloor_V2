export const demoPredictions = {
  // Office Flooring - Office

  "6a4606084ca404204c794cae": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 3364.81103515625,
      fy: 3364.810791015625,
      height_meters: 1.9345139799407232,
      pitch_degrees: -9.123054646082059,
      roll_degrees: 2.1500398172219946
    },
    floor: {
      plane: {
        distance: 1.9345139799407232,
        normal: [-0.015559538536334691, -0.9850955249388406, -0.17130296992757144]
      },
      floor_rotation: 8
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },



  // Industrial Flooring - Office
  "6a4603c2b7a9facb9cc3fee1": {
  "delayTime": 10932,
  "executionTime": 16113,
  "id": "sync-171d6dcc-1ada-4d1a-a4f0-1cfd010aaa93-e1",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.7956946367983702,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 2301.827880859375,
        "fy": 2301.827880859375,
        "gravity": [
          -0.003550577675923705,
          -0.9985690712928772,
          -0.0533604621887207
        ],
        "height_meters": 1.6224765124895602,
        "horizontal_fov_degrees": 38.32977852768261,
        "intrinsic_matrix": [
          [
            2301.827880859375,
            0,
            800
          ],
          [
            0,
            2301.827880859375,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -3.0587819721402045,
        "roll_degrees": 0.20370337504347516,
        "uncertainty": {
          "focal_pixels": 601.291259765625,
          "pitch_degrees": 2.0735846006435756,
          "roll_degrees": 0.5852277369204705,
          "vertical_fov_degrees": 10.332591501858461
        },
        "vertical_fov_degrees": 29.219518533463283
      },
      "confidence": {
        "camera_calibration": 0.7956946367983702,
        "camera_height": 0.9269992568795462,
        "depth": 0.9778474569320679,
        "dimensions": 0.9872771682134837,
        "floor_plane": 0.9681929205337092,
        "floor_rotation": 0.9748,
        "overall": 0.8985037330765895,
        "segmentation": 0.6587146921789486
      },
      "floor": {
        "alternate_floor_rotation": 154.52,
        "floor_rotation": 64.52,
        "median_scene_depth_meters": 8.73469066619873,
        "plane": {
          "confidence": 0.9681929205337092,
          "distance": 1.6224765124895602,
          "gravity_alignment": 0.9998961684474947,
          "inlier_ratio": 0.9994166666666666,
          "median_residual_meters": 0.004724196973368455,
          "normal": [
            -0.00784720029115623,
            -0.9977161311025097,
            -0.06708906904578636
          ]
        },
        "visible_area_ratio": 0.26724166666666666,
        "visible_dimensions_meters": {
          "confidence": 0.9872771682134837,
          "depth_meters": 10.37979829517952,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 22.72221955811323,
          "valid_polygon_vertex_ratio": 1,
          "width_meters": 9.276248067466238
        },
        "visible_polygon_pixels": [
          [
            0,
            700
          ],
          [
            0,
            1199
          ],
          [
            1599,
            1199
          ],
          [
            1599,
            803
          ],
          [
            1471,
            710
          ],
          [
            1472,
            900
          ],
          [
            1218,
            1053
          ],
          [
            1168,
            836
          ],
          [
            1033,
            797
          ],
          [
            1034,
            855
          ],
          [
            1132,
            906
          ],
          [
            1065,
            893
          ],
          [
            1079,
            960
          ],
          [
            997,
            901
          ],
          [
            913,
            948
          ],
          [
            940,
            886
          ],
          [
            888,
            874
          ],
          [
            988,
            853
          ],
          [
            992,
            801
          ],
          [
            876,
            750
          ],
          [
            555,
            845
          ],
          [
            535,
            949
          ],
          [
            422,
            986
          ],
          [
            385,
            1068
          ],
          [
            56,
            775
          ],
          [
            52,
            696
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.958092987537384,
          "scene": "office_cubicles"
        },
        {
          "confidence": 0.0413987934589386,
          "scene": "office"
        },
        {
          "confidence": 0.00015212940343189985,
          "scene": "server_room"
        },
        {
          "confidence": 0.00014469503366854042,
          "scene": "reception"
        },
        {
          "confidence": 0.0000718955197953619,
          "scene": "home_office"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 0,
          "x2": 1599,
          "y1": 384,
          "y2": 1199
        },
        "detection_confidence": 0.05,
        "label": "floor_fallback_region",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.2641130208333333,
          "bottom_contact_score": 1,
          "detection_confidence": 0.05,
          "final_score": 0.6587146921789486,
          "fragmentation_score": 0.013157894736842105,
          "largest_component_ratio": 0.9849634290875315,
          "lower_half_score": 0.9999980279907,
          "sam_score": 0.98046875
        },
        "sam_score": 0.98046875
      },
      "warnings": [
        "groundingdino_floor_detection_missing",
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "p0gc2jwy0kqlis"
},

// Industiral image-2

"6a478758125096412ecb2517":{
  "delayTime": 12313,
  "executionTime": 17058,
  "id": "sync-ce70b8c8-caf6-4a8e-b401-2eb6b009bcb7-e2",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.6195610399353566,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 3984.210205078125,
        "fy": 3984.2099609375,
        "gravity": [
          -0.014091185294091702,
          -0.9996421933174133,
          -0.02273714542388916
        ],
        "height_meters": 1.259229962599459,
        "horizontal_fov_degrees": 22.707185876855416,
        "intrinsic_matrix": [
          [
            3984.210205078125,
            0,
            800
          ],
          [
            0,
            3984.2099609375,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -1.3028547421985242,
        "roll_degrees": 0.8075201388007964,
        "uncertainty": {
          "focal_pixels": 2705.975341796875,
          "pitch_degrees": 3.0359332818192195,
          "roll_degrees": 0.6371974723763338,
          "vertical_fov_degrees": 16.207612013617133
        },
        "vertical_fov_degrees": 17.128145636363723
      },
      "confidence": {
        "camera_calibration": 0.6195610399353566,
        "camera_height": 0.8852340455346411,
        "depth": 0.9826310276985168,
        "dimensions": 0.9491005324981903,
        "floor_plane": 0.9705774182019974,
        "floor_rotation": 0.9908,
        "overall": 0.8771275288834728,
        "segmentation": 0.7419886383156069
      },
      "floor": {
        "alternate_floor_rotation": 171.01,
        "floor_rotation": 81.01,
        "median_scene_depth_meters": 15.171051025390625,
        "plane": {
          "confidence": 0.9705774182019974,
          "distance": 1.259229962599459,
          "gravity_alignment": 0.9999085194484558,
          "inlier_ratio": 1,
          "median_residual_meters": 0.004410642853154068,
          "normal": [
            -0.0034675897150571364,
            -0.9995099923943366,
            -0.03110869533492645
          ]
        },
        "visible_area_ratio": 0.3983963541666667,
        "visible_dimensions_meters": {
          "confidence": 0.9491005324981903,
          "depth_meters": 22.85100289964611,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 82.033151800283,
          "valid_polygon_vertex_ratio": 0.9130434782608695,
          "width_meters": 7.538387018617054
        },
        "visible_polygon_pixels": [
          [
            0,
            688
          ],
          [
            0,
            1199
          ],
          [
            1599,
            1199
          ],
          [
            1590,
            839
          ],
          [
            1216,
            765
          ],
          [
            1285,
            791
          ],
          [
            1261,
            813
          ],
          [
            1313,
            861
          ],
          [
            1210,
            817
          ],
          [
            1122,
            842
          ],
          [
            1152,
            805
          ],
          [
            1106,
            775
          ],
          [
            1189,
            770
          ],
          [
            1041,
            709
          ],
          [
            1112,
            769
          ],
          [
            1029,
            787
          ],
          [
            824,
            720
          ],
          [
            884,
            670
          ],
          [
            441,
            718
          ],
          [
            420,
            646
          ],
          [
            300,
            654
          ],
          [
            284,
            611
          ],
          [
            53,
            625
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.28123655915260315,
          "scene": "beauty_salon"
        },
        {
          "confidence": 0.14849694073200226,
          "scene": "artists_loft"
        },
        {
          "confidence": 0.14837872982025146,
          "scene": "reception"
        },
        {
          "confidence": 0.04173438623547554,
          "scene": "lobby"
        },
        {
          "confidence": 0.041033100336790085,
          "scene": "living_room"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 6,
          "x2": 1593,
          "y1": 600,
          "y2": 1194
        },
        "detection_confidence": 0.2930607795715332,
        "label": "indoor floor wooden floor",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.39576197916666667,
          "bottom_contact_score": 1,
          "detection_confidence": 0.2930607795715332,
          "final_score": 0.7419886383156069,
          "fragmentation_score": 0.14285714285714285,
          "largest_component_ratio": 0.9920169820085989,
          "lower_half_score": 1,
          "sam_score": 0.9921875
        },
        "sam_score": 0.9921875
      },
      "warnings": [
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "ugz6gb6a6lzhew"
},


//Industrial image-3
"6a47658bae781d3fcc6ee56e":{
  "delayTime": 13276,
  "executionTime": 16678,
  "id": "sync-3b619862-9435-48b8-8564-29391fc47c15-e1",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.6935056219173188,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 11247.927734375,
        "fy": 11247.927734375,
        "gravity": [
          0.004818979650735855,
          -0.9893628358840942,
          -0.14538909494876862
        ],
        "height_meters": 1.4584561275207664,
        "horizontal_fov_degrees": 11.080040447074113,
        "intrinsic_matrix": [
          [
            8247.927734375,
            0,
            800
          ],
          [
            0,
            8247.927734375,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -11.3598117421844,
        "roll_degrees": -0.2790453508284611,
        "uncertainty": {
          "focal_pixels": 5052.56201171875,
          "pitch_degrees": 5.324654540609623,
          "roll_degrees": 0.8971626363975115,
          "vertical_fov_degrees": 7.1837078086215636
        },
        "vertical_fov_degrees": 8.321367168667337
      },
      "confidence": {
        "camera_calibration": 0.6935056219173188,
        "camera_height": 0.9032584268751468,
        "depth": 0.9688807725906372,
        "dimensions": 0.845895175911047,
        "floor_plane": 0.9747379397776175,
        "floor_rotation": 0.7407,
        "overall": 0.8336989573147771,
        "segmentation": 0.7089147641316714
      },
      "floor": {
        "alternate_floor_rotation": 142.06,
        "floor_rotation": 90.06,
        "median_scene_depth_meters": 14.814362525939941,
        "plane": {
          "confidence": 0.9747379397776175,
          "distance": 1.4584561275207664,
          "gravity_alignment": 0.9981577012592726,
          "inlier_ratio": 0.9980833333333333,
          "median_residual_meters": 0.003590290071135538,
          "normal": [
            -0.0044746870540109005,
            -0.9963017658682183,
            -0.08580657610951938
          ]
        },
        "visible_area_ratio": 0.6046072916666667,
        "visible_dimensions_meters": {
          "confidence": 0.845895175911047,
          "depth_meters": 19.692568161355418,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 24.644566139319636,
          "valid_polygon_vertex_ratio": 0.68,
          "width_meters": 2.911357598204908
        },
        "visible_polygon_pixels": [
          [
            688,
            0
          ],
          [
            621,
            159
          ],
          [
            525,
            171
          ],
          [
            497,
            552
          ],
          [
            466,
            473
          ],
          [
            406,
            470
          ],
          [
            383,
            955
          ],
          [
            343,
            1098
          ],
          [
            301,
            1082
          ],
          [
            299,
            1190
          ],
          [
            1599,
            1199
          ],
          [
            1599,
            497
          ],
          [
            1442,
            490
          ],
          [
            1420,
            559
          ],
          [
            1395,
            438
          ],
          [
            1386,
            496
          ],
          [
            1250,
            491
          ],
          [
            1221,
            557
          ],
          [
            1167,
            307
          ],
          [
            1130,
            418
          ],
          [
            1134,
            170
          ],
          [
            1020,
            158
          ],
          [
            984,
            71
          ],
          [
            897,
            81
          ],
          [
            862,
            0
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.7303795218467712,
          "scene": "library/indoor"
        },
        {
          "confidence": 0.09430766850709915,
          "scene": "classroom"
        },
        {
          "confidence": 0.034001920372247696,
          "scene": "cafeteria"
        },
        {
          "confidence": 0.03321300074458122,
          "scene": "dining_hall"
        },
        {
          "confidence": 0.03241198509931564,
          "scene": "food_court"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 7,
          "x2": 1592,
          "y1": 5,
          "y2": 1193
        },
        "detection_confidence": 0.3607371151447296,
        "label": "indoor floor room",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.6030348958333334,
          "bottom_contact_score": 0.9725,
          "detection_confidence": 0.3607371151447296,
          "final_score": 0.7089147641316714,
          "fragmentation_score": 0.013888888888888888,
          "largest_component_ratio": 0.9602548567273004,
          "lower_half_score": 0.6622586966792103,
          "sam_score": 0.98046875
        },
        "sam_score": 0.98046875
      },
      "warnings": [
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "yzxhvmj6adpfxn"
},

//Industrial image-4
"6a476707ae781d3fcc6ee56f":{
  "delayTime": 12598,
  "executionTime": 17720,
  "id": "sync-7d6bd0ed-c077-4369-a43a-5bbef0feb585-e1",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.7342044911115999,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 843.6321411132812,
        "fy": 843.6321411132812,
        "gravity": [
          -0.007256418000906706,
          -0.9999141097068787,
          -0.010914325714111328
        ],
        "height_meters": 0.7096892820574386,
        "horizontal_fov_degrees": 86.95875149350327,
        "intrinsic_matrix": [
          [
            843.6321411132812,
            0,
            800
          ],
          [
            0,
            843.6321411132812,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -0.6253572327284109,
        "roll_degrees": 0.41574897238447467,
        "uncertainty": {
          "focal_pixels": 185.1824951171875,
          "pitch_degrees": 2.0182054268531124,
          "roll_degrees": 1.0607838733899866,
          "vertical_fov_degrees": 16.801165697774994
        },
        "vertical_fov_degrees": 70.8416633920509
      },
      "confidence": {
        "camera_calibration": 0.7342044911115999,
        "camera_height": 0.9118627063884954,
        "depth": 0.9634277820587158,
        "dimensions": 0.9895462015991653,
        "floor_plane": 0.9738655039979132,
        "floor_rotation": 0.9616,
        "overall": 0.8973633737105791,
        "segmentation": 0.7470369308181635
      },
      "floor": {
        "alternate_floor_rotation": 33.18,
        "floor_rotation": 123.18,
        "median_scene_depth_meters": 4.421921730041504,
        "plane": {
          "confidence": 0.9738655039979132,
          "distance": 0.7096892820574386,
          "gravity_alignment": 0.9997896603391209,
          "inlier_ratio": 0.9998666666666667,
          "median_residual_meters": 0.0039038642104866628,
          "normal": [
            -0.01637812781573183,
            -0.9994371021263271,
            -0.0292785898325253
          ]
        },
        "visible_area_ratio": 0.329459375,
        "visible_dimensions_meters": {
          "confidence": 0.9895462015991653,
          "depth_meters": 8.04498278638933,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 20.79211716085002,
          "valid_polygon_vertex_ratio": 1,
          "width_meters": 6.270458562100153
        },
        "visible_polygon_pixels": [
          [
            1599,
            752
          ],
          [
            1407,
            726
          ],
          [
            1414,
            999
          ],
          [
            1101,
            910
          ],
          [
            1152,
            658
          ],
          [
            982,
            639
          ],
          [
            876,
            712
          ],
          [
            774,
            688
          ],
          [
            653,
            716
          ],
          [
            549,
            651
          ],
          [
            419,
            664
          ],
          [
            408,
            729
          ],
          [
            254,
            761
          ],
          [
            252,
            995
          ],
          [
            0,
            1134
          ],
          [
            0,
            1199
          ],
          [
            1599,
            1199
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.23806443810462952,
          "scene": "clean_room"
        },
        {
          "confidence": 0.1405724734067917,
          "scene": "chemistry_lab"
        },
        {
          "confidence": 0.06315462291240692,
          "scene": "office_cubicles"
        },
        {
          "confidence": 0.06269737333059311,
          "scene": "reception"
        },
        {
          "confidence": 0.046872369945049286,
          "scene": "server_room"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 7,
          "x2": 1594,
          "y1": 614,
          "y2": 1195
        },
        "detection_confidence": 0.31930673122406006,
        "label": "indoor floor",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.3267864583333333,
          "bottom_contact_score": 1,
          "detection_confidence": 0.31930673122406006,
          "final_score": 0.7470369308181635,
          "fragmentation_score": 0.08333333333333333,
          "largest_component_ratio": 0.9992716318951915,
          "lower_half_score": 1,
          "sam_score": 0.98828125
        },
        "sam_score": 0.98828125
      },
      "warnings": [
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "yzxhvmj6adpfxn"
},

"6a4769feae781d3fcc6ee573":{
  "delayTime": 15044,
  "executionTime": 20822,
  "id": "sync-fbfee928-fed9-4651-933b-d08fb3922952-e1",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.818701085541258,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 3085.864990234375,
        "fy": 3085.864990234375,
        "gravity": [
          -0.003930145408958197,
          -0.9956201910972595,
          -0.09340828657150269
        ],
        "height_meters": 0.9882208711944451,
        "horizontal_fov_degrees": 29.067550239525087,
        "intrinsic_matrix": [
          [
            3085.864990234375,
            0,
            800
          ],
          [
            0,
            3085.864990234375,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -5.359713901619298,
        "roll_degrees": 0.2261474566974164,
        "uncertainty": {
          "focal_pixels": 746.401123046875,
          "pitch_degrees": 2.7329110855179577,
          "roll_degrees": 0.7938029311524423,
          "vertical_fov_degrees": 7.343811711634894
        },
        "vertical_fov_degrees": 22.006031100060465
      },
      "confidence": {
        "camera_calibration": 0.818701085541258,
        "camera_height": 0.9333611677407005,
        "depth": 0.9477145671844482,
        "dimensions": 0.8421039875770883,
        "floor_plane": 0.9802599689427206,
        "floor_rotation": 0.998,
        "overall": 0.9017868253872366,
        "segmentation": 0.7923670007244412
      },
      "floor": {
        "alternate_floor_rotation": 1.27,
        "floor_rotation": 91.27,
        "median_scene_depth_meters": 9.454370498657227,
        "plane": {
          "confidence": 0.9802599689427206,
          "distance": 0.9882208711944451,
          "gravity_alignment": 0.9999354787448698,
          "inlier_ratio": 1,
          "median_residual_meters": 0.00295906902093801,
          "normal": [
            -0.0015573839464353139,
            -0.994527497948524,
            -0.1044635361238169
          ]
        },
        "visible_area_ratio": 0.6488223958333333,
        "visible_dimensions_meters": {
          "confidence": 0.8421039875770883,
          "depth_meters": 10.047694841204398,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 37.41498695143605,
          "valid_polygon_vertex_ratio": 0.6666666666666666,
          "width_meters": 6.458555535736928
        },
        "visible_polygon_pixels": [
          [
            1599,
            505
          ],
          [
            1131,
            369
          ],
          [
            589,
            374
          ],
          [
            0,
            541
          ],
          [
            0,
            1199
          ],
          [
            1599,
            1199
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.16356025636196136,
          "scene": "loading_dock"
        },
        {
          "confidence": 0.12351198494434357,
          "scene": "street"
        },
        {
          "confidence": 0.06817936152219772,
          "scene": "hardware_store"
        },
        {
          "confidence": 0.06740715354681015,
          "scene": "gas_station"
        },
        {
          "confidence": 0.05849131569266319,
          "scene": "arcade"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 7,
          "x2": 1593,
          "y1": 333,
          "y2": 1194
        },
        "detection_confidence": 0.39578184485435486,
        "label": "indoor floor",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.6464505208333333,
          "bottom_contact_score": 1,
          "detection_confidence": 0.39578184485435486,
          "final_score": 0.7923670007244412,
          "fragmentation_score": 1,
          "largest_component_ratio": 1,
          "lower_half_score": 0.7688177024375898,
          "sam_score": 0.99609375
        },
        "sam_score": 0.99609375
      },
      "warnings": [
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "yzxhvmj6adpfxn"
},

//Industrial-image-5

"6a4767a8ae781d3fcc6ee570":{
  "delayTime": 20628,
  "executionTime": 44351,
  "id": "sync-7495bd12-02e7-4029-9b9a-4eb0812799b4-e1",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.746137064638086,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 2243.247802734375,
        "fy": 2243.247802734375,
        "gravity": [
          0.0024071200750768185,
          -0.9986552596092224,
          -0.051787085831165314
        ],
        "height_meters": 1.0634874888139072,
        "horizontal_fov_degrees": 39.25509157530092,
        "intrinsic_matrix": [
          [
            2243.247802734375,
            0,
            800
          ],
          [
            0,
            2243.247802734375,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -2.9685092828708504,
        "roll_degrees": -0.13808942958601214,
        "uncertainty": {
          "focal_pixels": 716.5828857421875,
          "pitch_degrees": 2.419593446259959,
          "roll_degrees": 0.872413019053147,
          "vertical_fov_degrees": 12.921782173747832
        },
        "vertical_fov_degrees": 29.948689038686336
      },
      "confidence": {
        "camera_calibration": 0.746137064638086,
        "camera_height": 0.8737728502806984,
        "depth": 0.9631623029708862,
        "dimensions": 0.9275706872404154,
        "floor_plane": 0.8992838609581811,
        "floor_rotation": 0.9819,
        "overall": 0.8756221419425246,
        "segmentation": 0.7375282275094055
      },
      "floor": {
        "alternate_floor_rotation": 176.67,
        "floor_rotation": 86.67,
        "median_scene_depth_meters": 10.086483001708984,
        "plane": {
          "confidence": 0.8992838609581811,
          "distance": 1.0634874888139072,
          "gravity_alignment": 0.9996374300963826,
          "inlier_ratio": 0.9947,
          "median_residual_meters": 0.01469904375916431,
          "normal": [
            0.029022770288912304,
            -0.9980184075326776,
            -0.05582953546910031
          ]
        },
        "visible_area_ratio": 0.2795916666666667,
        "visible_dimensions_meters": {
          "confidence": 0.9275706872404154,
          "depth_meters": 23.61963715698379,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 45.80676287426354,
          "valid_polygon_vertex_ratio": 0.9285714285714286,
          "width_meters": 13.14090177243442
        },
        "visible_polygon_pixels": [
          [
            0,
            603
          ],
          [
            0,
            1199
          ],
          [
            1599,
            1199
          ],
          [
            1599,
            611
          ],
          [
            1560,
            729
          ],
          [
            1349,
            870
          ],
          [
            612,
            1064
          ],
          [
            88,
            859
          ],
          [
            808,
            564
          ],
          [
            478,
            540
          ],
          [
            466,
            590
          ],
          [
            235,
            639
          ],
          [
            47,
            597
          ],
          [
            34,
            656
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.21509268879890442,
          "scene": "mezzanine"
        },
        {
          "confidence": 0.17371872067451477,
          "scene": "atrium/public"
        },
        {
          "confidence": 0.16156145930290222,
          "scene": "lobby"
        },
        {
          "confidence": 0.14328616857528687,
          "scene": "entrance_hall"
        },
        {
          "confidence": 0.06741528958082199,
          "scene": "staircase"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 7,
          "x2": 1593,
          "y1": 522,
          "y2": 1194
        },
        "detection_confidence": 0.2801573574542999,
        "label": "indoor floor",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.27705,
          "bottom_contact_score": 1,
          "detection_confidence": 0.2801573574542999,
          "final_score": 0.7375282275094055,
          "fragmentation_score": 0.2,
          "largest_component_ratio": 0.9998439661914216,
          "lower_half_score": 0.9750402304036576,
          "sam_score": 0.984375
        },
        "sam_score": 0.984375
      },
      "warnings": [
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "yzxhvmj6adpfxn"
},

//Industrial-image-6
"6a476876ae781d3fcc6ee571":{
  "delayTime": 12434,
  "executionTime": 19757,
  "id": "sync-6060fa6a-487c-4d22-b944-0270159bd83d-e1",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.6520471944747589,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 3608.092041015625,
        "fy": 3608.092529296875,
        "gravity": [
          -0.0020892885513603687,
          -0.9989723563194275,
          -0.04527616873383522
        ],
        "height_meters": 1.3593477588457508,
        "horizontal_fov_degrees": 25.00318640975376,
        "intrinsic_matrix": [
          [
            3608.092041015625,
            0,
            800
          ],
          [
            0,
            3608.092529296875,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -2.59502045178939,
        "roll_degrees": 0.11981839341175034,
        "uncertainty": {
          "focal_pixels": 2042.154296875,
          "pitch_degrees": 3.5024048931666485,
          "roll_degrees": 0.8550064953967812,
          "vertical_fov_degrees": 14.842443321186467
        },
        "vertical_fov_degrees": 18.882961253017985
      },
      "confidence": {
        "camera_calibration": 0.6520471944747589,
        "camera_height": 0.8886367083426019,
        "depth": 0.9754350781440735,
        "dimensions": 0.9858457411600708,
        "floor_plane": 0.9646143529001772,
        "floor_rotation": 0.9861,
        "overall": 0.8715880876491661,
        "segmentation": 0.6484375385224805
      },
      "floor": {
        "alternate_floor_rotation": 16,
        "floor_rotation": 106,
        "median_scene_depth_meters": 14.031442642211914,
        "plane": {
          "confidence": 0.9646143529001772,
          "distance": 1.3593477588457508,
          "gravity_alignment": 0.9998752933354277,
          "inlier_ratio": 0.9960166666666667,
          "median_residual_meters": 0.005005355865036254,
          "normal": [
            0.0012046142485178416,
            -0.9981553252241283,
            -0.060700046385707584
          ]
        },
        "visible_area_ratio": 0.3499578125,
        "visible_dimensions_meters": {
          "confidence": 0.9858457411600708,
          "depth_meters": 13.30328735242068,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 31.460614984756067,
          "valid_polygon_vertex_ratio": 1,
          "width_meters": 6.663314843400617
        },
        "visible_polygon_pixels": [
          [
            1599,
            672
          ],
          [
            1215,
            636
          ],
          [
            1227,
            702
          ],
          [
            1134,
            685
          ],
          [
            1130,
            756
          ],
          [
            1096,
            660
          ],
          [
            1121,
            760
          ],
          [
            1058,
            692
          ],
          [
            1063,
            796
          ],
          [
            1034,
            704
          ],
          [
            1037,
            812
          ],
          [
            990,
            715
          ],
          [
            981,
            853
          ],
          [
            928,
            710
          ],
          [
            953,
            866
          ],
          [
            866,
            740
          ],
          [
            873,
            923
          ],
          [
            785,
            742
          ],
          [
            705,
            888
          ],
          [
            715,
            715
          ],
          [
            661,
            809
          ],
          [
            724,
            978
          ],
          [
            594,
            834
          ],
          [
            607,
            1067
          ],
          [
            566,
            848
          ],
          [
            505,
            831
          ],
          [
            458,
            1032
          ],
          [
            393,
            1044
          ],
          [
            381,
            714
          ],
          [
            295,
            841
          ],
          [
            405,
            902
          ],
          [
            299,
            894
          ],
          [
            272,
            984
          ],
          [
            252,
            877
          ],
          [
            197,
            851
          ],
          [
            176,
            947
          ],
          [
            154,
            829
          ],
          [
            104,
            878
          ],
          [
            84,
            714
          ],
          [
            70,
            864
          ],
          [
            0,
            897
          ],
          [
            0,
            1199
          ],
          [
            1599,
            1199
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.7289817929267883,
          "scene": "conference_room"
        },
        {
          "confidence": 0.1408599317073822,
          "scene": "dining_room"
        },
        {
          "confidence": 0.09563391655683517,
          "scene": "dining_hall"
        },
        {
          "confidence": 0.006106487009674311,
          "scene": "conference_center"
        },
        {
          "confidence": 0.006065984722226858,
          "scene": "banquet_hall"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 0,
          "x2": 1599,
          "y1": 384,
          "y2": 1199
        },
        "detection_confidence": 0.05,
        "label": "floor_fallback_region",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.34854270833333334,
          "bottom_contact_score": 1,
          "detection_confidence": 0.05,
          "final_score": 0.6484375385224805,
          "fragmentation_score": 0.012345679012345678,
          "largest_component_ratio": 0.9858398510464703,
          "lower_half_score": 0.9994934264990242,
          "sam_score": 0.9375
        },
        "sam_score": 0.9375
      },
      "warnings": [
        "groundingdino_floor_detection_missing",
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "yzxhvmj6adpfxn"
},
  // School
  // 1. School Room
  "6a46243bac0c56bac243c30f": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 3364.81103515625,
      fy: 3364.810791015625,
      height_meters: 1.9345139799407232,
      pitch_degrees: -9.123054646082059,
      roll_degrees: 2.1500398172219946
    },
    floor: {
      plane: {
        distance: 1.9345139799407232,
        normal: [-0.015559538536334691, -0.9850955249388406, -0.17130296992757144]
      },
      floor_rotation: 150
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },


  //Industrial-image-7
"6a476939ae781d3fcc6ee572":{
  "delayTime": 12784,
  "executionTime": 19166,
  "id": "sync-85594df4-1354-4a42-90a2-cb68693ee7fa-e2",
  "output": {
    "prediction": {
      "camera": {
        "camera_model": "pinhole",
        "confidence": 0.8413007236397368,
        "cx": 800,
        "cy": 599.9999389648438,
        "fx": 2075.844482421875,
        "fy": 2075.844482421875,
        "gravity": [
          0.0033711472060531378,
          -0.9329012632369995,
          -0.36011651158332825
        ],
        "height_meters": 1.83179839670815,
        "horizontal_fov_degrees": 42.15186359476254,
        "intrinsic_matrix": [
          [
            2075.844482421875,
            0,
            800
          ],
          [
            0,
            2075.844482421875,
            599.9999389648438
          ],
          [
            0,
            0,
            1
          ]
        ],
        "pitch_degrees": -21.107352375110622,
        "roll_degrees": -0.2070218731445361,
        "uncertainty": {
          "focal_pixels": 252.33737182617188,
          "pitch_degrees": 3.675645384388029,
          "roll_degrees": 1.7888993278296825,
          "vertical_fov_degrees": 5.254899526163575
        },
        "vertical_fov_degrees": 32.242707109178085
      },
      "confidence": {
        "camera_calibration": 0.8413007236397368,
        "camera_height": 0.9160581055165612,
        "depth": 0.9483413696289062,
        "dimensions": 0.9753197459497059,
        "floor_plane": 0.9382993648742649,
        "floor_rotation": 0.9643,
        "overall": 0.9027829212673077,
        "segmentation": 0.7358611392619789
      },
      "floor": {
        "alternate_floor_rotation": 168.36,
        "floor_rotation": 78.36,
        "median_scene_depth_meters": 4.115289211273193,
        "plane": {
          "confidence": 0.9382993648742649,
          "distance": 1.83179839670815,
          "gravity_alignment": 0.9985261157442947,
          "inlier_ratio": 0.98615,
          "median_residual_meters": 0.00817212874118911,
          "normal": [
            0.009810708865444658,
            -0.9120994308847992,
            -0.4098516538592752
          ]
        },
        "visible_area_ratio": 0.6412401041666667,
        "visible_dimensions_meters": {
          "confidence": 0.9753197459497059,
          "depth_meters": 10.635394115487097,
          "measurement_type": "visible_floor_extent",
          "projected_area_square_meters": 22.787392587108567,
          "valid_polygon_vertex_ratio": 1,
          "width_meters": 5.8303480866885495
        },
        "visible_polygon_pixels": [
          [
            0,
            0
          ],
          [
            0,
            1199
          ],
          [
            1599,
            1194
          ],
          [
            1578,
            1066
          ],
          [
            848,
            197
          ],
          [
            848,
            614
          ],
          [
            546,
            632
          ],
          [
            446,
            559
          ],
          [
            438,
            355
          ],
          [
            499,
            340
          ],
          [
            492,
            0
          ]
        ]
      },
      "input": {
        "height": 1200,
        "width": 1600
      },
      "scene": [
        {
          "confidence": 0.13079091906547546,
          "scene": "drugstore"
        },
        {
          "confidence": 0.09644611924886703,
          "scene": "hardware_store"
        },
        {
          "confidence": 0.056121353060007095,
          "scene": "archive"
        },
        {
          "confidence": 0.049072958528995514,
          "scene": "pharmacy"
        },
        {
          "confidence": 0.04268701747059822,
          "scene": "escalator/indoor"
        }
      ],
      "selected_detection": {
        "bbox_xyxy": {
          "x1": 7,
          "x2": 1590,
          "y1": 4,
          "y2": 1193
        },
        "detection_confidence": 0.40104904770851135,
        "label": "indoor floor",
        "mask_quality": {
          "area_plausibility_score": 1,
          "area_ratio": 0.6389838541666667,
          "bottom_contact_score": 1,
          "detection_confidence": 0.40104904770851135,
          "final_score": 0.7358611392619789,
          "fragmentation_score": 0.1111111111111111,
          "largest_component_ratio": 0.9758486985765974,
          "lower_half_score": 0.6862596782489124,
          "sam_score": 0.9921875
        },
        "sam_score": 0.9921875
      },
      "warnings": [
        "dimensions_are_single_image_estimates",
        "complete_room_dimensions_not_returned"
      ]
    },
    "success": true
  },
  "status": "COMPLETED",
  "workerId": "yzxhvmj6adpfxn"
},

  // 2. Sport Room (Space Removed & Cleaned)
  "6a462dcf12f464296f8a98e3": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 1997.2353515625,
      fy: 1997.2353515625,
      height_meters: 0.5246691433913914,
      pitch_degrees: 11.074311625907765,
      roll_degrees: -15.118285633459308
    },
    floor: {
      plane: {
        distance: 0.5246691433913914,
        normal: [
          0.047827274787396644,
          -0.8613987291088183,
          -0.505672602852996
        ]
      },
      floor_rotation: 0
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
  //Supermarket
  "6a462bd212f464296f8a98e1": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 1143.2479248046875,
      fy: 1143.248046875,
      height_meters: 1.4654849378099148,
      pitch_degrees: -19.269657535520135,
      roll_degrees: 1.877650805904828
    },
    floor: {
      plane: {
        distance: 1.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 7.5
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
  // Transport Flooring
  "6a462d6b12f464296f8a98e2": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 4127.2392578125,
      fy: 4127.2392578125,
      height_meters: 1.2146296932666043,
      pitch_degrees: -9.028500922306987,
      roll_degrees: 0.5490831228847034
    },
    floor: {
      plane: {
        distance: 1.2146296932666043,
        normal: [
          0.019859311390768526,
          -0.989394940145663,
          -0.14388627511074306
        ]
      },
      floor_rotation: 0
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },

  "6a478a77125096412ecb252b": {
     camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 4127.2392578125,
      fy: 4127.2392578125,
      height_meters: 1.2146296932666043,
      pitch_degrees: -9.028500922306987,
      roll_degrees: 0.5490831228847034
    },
    floor: {
      plane: {
        distance: 1.2146296932666043,
        normal: [
          0.019859311390768526,
          -0.989394940145663,
          -0.14388627511074306
        ]
      },
      floor_rotation: 0
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
  //Hospital
  "6a4602dcb7a9facb9cc3fee0": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 1563.1451416015625,
      fy: 1563.1453857421875,
      height_meters: 1.547279667290866,
      pitch_degrees: -9.982066193653406,
      roll_degrees: 2.1812437498886093
    },
    floor: {
      plane: {
        distance: 1.547279667290866,
        normal: [
          -0.03658492185766121,
          -0.97872795663078,
          -0.2018740458850684
        ]
      },
      floor_rotation: 37
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
  //Hotel and Hospitality
  "6a3bc82089199742512b7e05": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 5622.7958984375,
      fy: 5622.7958984375,
      height_meters: 1.405296044133009,
      pitch_degrees: -4.163045976012846,
      roll_degrees: 0.5149687825797227
    },
    floor: {
      plane: {
        distance: 1.405296044133009,
        normal: [
          -0.009050158933070398,
          -0.9976892753004148,
          -0.06733650253628609
        ]
      },
      floor_rotation: 75
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
  //Prefab
  "6a461b34d0ce9cfc46e4093a": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 782.8927612304688,
      fy: 782.8927001953125,
      height_meters: 1.5130481542925371,
      pitch_degrees: -0.934124418534447,
      roll_degrees: 0.17171737237668067
    },
    floor: {
      plane: {
        distance: 1.5130481542925371,
        normal: [
          0.004043106510082151,
          -0.9988950670652053,
          -0.04682198503424773
        ]
      },
      floor_rotation: 30
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },

  // Residential flooring
  "6a4622fad0ce9cfc46e4093b": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 782.8927612304688,
      fy: 782.8927001953125,
      height_meters: 1.5130481542925371,
      pitch_degrees: -0.934124418534447,
      roll_degrees: 0.17171737237668067
    },
    floor: {
      plane: {
        distance: 1.5130481542925371,
        normal: [
          0.004043106510082151,
          -0.9988950670652053,
          -0.04682198503424773
        ]
      },
      floor_rotation: 54
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  }
};
