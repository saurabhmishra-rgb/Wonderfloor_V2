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

  //Office-WorkStation-cabin-area

  "6a478491125096412ecb2503": {
    "delayTime": 17511,
    "executionTime": 13428,
    "id": "sync-d4daa741-9f54-40e9-b5ef-443d22ee77b5-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.696167278761179,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1760.5469970703125,
          "fy": 1760.5472412109375,
          "gravity": [
            0.008995424024760723,
            -0.9995790719985962,
            -0.02758127450942993
          ],
          "height_meters": 0.9546506571160157,
          "horizontal_fov_degrees": 48.8744977759151,
          "intrinsic_matrix": [
            [
              1760.5469970703125,
              0,
              800
            ],
            [
              0,
              1760.5472412109375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -1.5804910463455528,
          "roll_degrees": -0.5155513230107307,
          "uncertainty": {
            "focal_pixels": 588.8070678710938,
            "pitch_degrees": 3.121736466050447,
            "roll_degrees": 0.9425003648909983,
            "vertical_fov_degrees": 16.54913000985423
          },
          "vertical_fov_degrees": 37.63853606292064
        },
        "confidence": {
          "camera_calibration": 0.696167278761179,
          "camera_height": 0.9088569137451984,
          "depth": 0.9768290519714355,
          "dimensions": 0.9923267517531756,
          "floor_plane": 0.980816879382939,
          "floor_rotation": 0.9621,
          "overall": 0.8953128435927911,
          "segmentation": 0.75009302953561
        },
        "floor": {
          "alternate_floor_rotation": 28.77,
          "floor_rotation": 118.77,
          "median_scene_depth_meters": 5.135059356689453,
          "plane": {
            "confidence": 0.980816879382939,
            "distance": 0.9546506571160157,
            "gravity_alignment": 0.9991158407207748,
            "inlier_ratio": 0.9996666666666667,
            "median_residual_meters": 0.0028259433141823997,
            "normal": [
              0.0012983161629008854,
              -0.9976243854738627,
              -0.06887597464311558
            ]
          },
          "visible_area_ratio": 0.3135140625,
          "visible_dimensions_meters": {
            "confidence": 0.9923267517531756,
            "depth_meters": 5.045793061340095,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 9.313320875270485,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.832774678017446
          },
          "visible_polygon_pixels": [
            [
              0,
              886
            ],
            [
              6,
              1199
            ],
            [
              1599,
              1194
            ],
            [
              1584,
              733
            ],
            [
              1394,
              761
            ],
            [
              1569,
              890
            ],
            [
              1416,
              855
            ],
            [
              1419,
              949
            ],
            [
              1353,
              854
            ],
            [
              1206,
              898
            ],
            [
              1252,
              806
            ],
            [
              1347,
              798
            ],
            [
              1347,
              752
            ],
            [
              1176,
              789
            ],
            [
              1155,
              927
            ],
            [
              745,
              842
            ],
            [
              716,
              755
            ],
            [
              641,
              772
            ],
            [
              735,
              707
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.3522224426269531,
            "scene": "office_cubicles"
          },
          {
            "confidence": 0.263578861951828,
            "scene": "office"
          },
          {
            "confidence": 0.1191331073641777,
            "scene": "computer_room"
          },
          {
            "confidence": 0.10183319449424744,
            "scene": "conference_room"
          },
          {
            "confidence": 0.04789217934012413,
            "scene": "reception"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1594,
            "y1": 706,
            "y2": 1194
          },
          "detection_confidence": 0.2848420739173889,
          "label": "indoor floor wooden floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.310190625,
            "bottom_contact_score": 0.998125,
            "detection_confidence": 0.2848420739173889,
            "final_score": 0.75009302953561,
            "fragmentation_score": 0.3333333333333333,
            "largest_component_ratio": 0.9999916046248443,
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
    "workerId": "rnhic1ngizavgh"
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

  "6a478529125096412ecb2508": {
    "delayTime": 13265,
    "executionTime": 16393,
    "id": "sync-3bd9199a-dacb-459e-850b-d4924d8eeda3-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8422492237360328,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 2291.33349609375,
          "fy": 2291.333740234375,
          "gravity": [
            -0.005302467383444309,
            -0.994348406791687,
            -0.10603345185518265
          ],
          "height_meters": 1.368295015874838,
          "horizontal_fov_degrees": 38.49244289786105,
          "intrinsic_matrix": [
            [
              2291.33349609375,
              0,
              800
            ],
            [
              0,
              2291.333740234375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -6.0867115529126385,
          "roll_degrees": 0.30550211525893195,
          "uncertainty": {
            "focal_pixels": 417.3475341796875,
            "pitch_degrees": 2.1567564544970557,
            "roll_degrees": 0.7753615271151136,
            "vertical_fov_degrees": 7.233318887657951
          },
          "vertical_fov_degrees": 29.34757775021185
        },
        "confidence": {
          "camera_calibration": 0.8422492237360328,
          "camera_height": 0.9387097415463396,
          "depth": 0.9763290286064148,
          "dimensions": 0.9875502762843987,
          "floor_plane": 0.9688756907109969,
          "floor_rotation": 0.9278,
          "overall": 0.8986968745133829,
          "segmentation": 0.6493641607094968
        },
        "floor": {
          "alternate_floor_rotation": 1.8,
          "floor_rotation": 91.8,
          "median_scene_depth_meters": 9.086246490478516,
          "plane": {
            "confidence": 0.9688756907109969,
            "distance": 1.368295015874838,
            "gravity_alignment": 0.9999285842983888,
            "inlier_ratio": 0.9968833333333333,
            "median_residual_meters": 0.004432753922302135,
            "normal": [
              -0.010600964368864528,
              -0.9953853226450853,
              -0.09537126934873899
            ]
          },
          "visible_area_ratio": 0.330209375,
          "visible_dimensions_meters": {
            "confidence": 0.9875502762843987,
            "depth_meters": 11.23001722824119,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 17.651002689954478,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.391408253133584
          },
          "visible_polygon_pixels": [
            [
              1599,
              758
            ],
            [
              1236,
              586
            ],
            [
              1253,
              756
            ],
            [
              1167,
              694
            ],
            [
              1136,
              760
            ],
            [
              1106,
              592
            ],
            [
              1070,
              942
            ],
            [
              1021,
              853
            ],
            [
              1046,
              1028
            ],
            [
              971,
              918
            ],
            [
              889,
              924
            ],
            [
              853,
              1037
            ],
            [
              834,
              857
            ],
            [
              782,
              1010
            ],
            [
              753,
              930
            ],
            [
              647,
              1017
            ],
            [
              635,
              854
            ],
            [
              602,
              911
            ],
            [
              559,
              799
            ],
            [
              539,
              945
            ],
            [
              496,
              857
            ],
            [
              435,
              985
            ],
            [
              378,
              858
            ],
            [
              339,
              941
            ],
            [
              361,
              760
            ],
            [
              284,
              683
            ],
            [
              277,
              838
            ],
            [
              202,
              765
            ],
            [
              210,
              902
            ],
            [
              175,
              807
            ],
            [
              29,
              806
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
            "confidence": 0.4435999095439911,
            "scene": "dining_hall"
          },
          {
            "confidence": 0.21197254955768585,
            "scene": "dining_room"
          },
          {
            "confidence": 0.05251333862543106,
            "scene": "restaurant"
          },
          {
            "confidence": 0.047645293176174164,
            "scene": "cafeteria"
          },
          {
            "confidence": 0.042936645448207855,
            "scene": "conference_room"
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
            "area_ratio": 0.32941041666666665,
            "bottom_contact_score": 1,
            "detection_confidence": 0.05,
            "final_score": 0.6493641607094968,
            "fragmentation_score": 0.008771929824561403,
            "largest_component_ratio": 0.9633135589468558,
            "lower_half_score": 0.9976457306930944,
            "sam_score": 0.95703125
          },
          "sam_score": 0.95703125
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Office- C0nference Room
  "6a4784bc125096412ecb2504": {
    "delayTime": 25387,
    "executionTime": 17830,
    "id": "sync-7cd1bbfb-1eb4-4490-8ce3-e8ed12155125-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7391528153231367,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1151.0653076171875,
          "fy": 1151.0653076171875,
          "gravity": [
            -0.009197074919939041,
            -0.9997861385345459,
            0.01852220483124256
          ],
          "height_meters": 1.2050213502979532,
          "horizontal_fov_degrees": 69.59924515183641,
          "intrinsic_matrix": [
            [
              1151.0653076171875,
              0,
              800
            ],
            [
              0,
              1151.0653076171875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": 1.0613048887576115,
          "roll_degrees": 0.5269986666988192,
          "uncertainty": {
            "focal_pixels": 278.1286315917969,
            "pitch_degrees": 2.0775234853605573,
            "roll_degrees": 0.838233898672757,
            "vertical_fov_degrees": 16.050078823052665
          },
          "vertical_fov_degrees": 55.06211640919139
        },
        "confidence": {
          "camera_calibration": 0.7391528153231367,
          "camera_height": 0.9123315472795778,
          "depth": 0.976148247718811,
          "dimensions": 0.9871372319309318,
          "floor_plane": 0.9678430798273296,
          "floor_rotation": 0.9392,
          "overall": 0.8806143838721366,
          "segmentation": 0.6424877650251698
        },
        "floor": {
          "alternate_floor_rotation": 146.67,
          "floor_rotation": 56.67,
          "median_scene_depth_meters": 4.726272106170654,
          "plane": {
            "confidence": 0.9678430798273296,
            "distance": 1.2050213502979532,
            "gravity_alignment": 0.9970444991773629,
            "inlier_ratio": 0.9984,
            "median_residual_meters": 0.004614873001221431,
            "normal": [
              -0.009994322527490518,
              -0.9982466669238167,
              -0.058341284633672316
            ]
          },
          "visible_area_ratio": 0.25446302083333333,
          "visible_dimensions_meters": {
            "confidence": 0.9871372319309318,
            "depth_meters": 3.5741274130121656,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 8.215516695090685,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 6.143795612348272
          },
          "visible_polygon_pixels": [
            [
              1599,
              777
            ],
            [
              1361,
              774
            ],
            [
              1468,
              870
            ],
            [
              1390,
              839
            ],
            [
              1390,
              902
            ],
            [
              1289,
              840
            ],
            [
              1378,
              931
            ],
            [
              1270,
              891
            ],
            [
              1282,
              979
            ],
            [
              1221,
              887
            ],
            [
              1161,
              905
            ],
            [
              1255,
              990
            ],
            [
              1141,
              958
            ],
            [
              1167,
              1071
            ],
            [
              1074,
              961
            ],
            [
              967,
              1062
            ],
            [
              729,
              951
            ],
            [
              747,
              1061
            ],
            [
              653,
              961
            ],
            [
              533,
              1058
            ],
            [
              608,
              948
            ],
            [
              514,
              958
            ],
            [
              655,
              899
            ],
            [
              563,
              873
            ],
            [
              565,
              793
            ],
            [
              147,
              879
            ],
            [
              0,
              998
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
            "confidence": 0.8877145648002625,
            "scene": "conference_room"
          },
          {
            "confidence": 0.01930246688425541,
            "scene": "dining_hall"
          },
          {
            "confidence": 0.014539750292897224,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.01202937588095665,
            "scene": "conference_center"
          },
          {
            "confidence": 0.010124852880835533,
            "scene": "dining_room"
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
            "area_ratio": 0.25423072916666667,
            "bottom_contact_score": 1,
            "detection_confidence": 0.05,
            "final_score": 0.6424877650251698,
            "fragmentation_score": 0.005952380952380952,
            "largest_component_ratio": 0.9433441980812214,
            "lower_half_score": 0.989213784230614,
            "sam_score": 0.9453125
          },
          "sam_score": 0.9453125
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
    "workerId": "uo65furk2t4j3r"
  },

  //Offic- Corridor and Common Area
  "6a4784d5125096412ecb2505": {
    "delayTime": 35486,
    "executionTime": 5429,
    "id": "sync-faa88417-0d26-4243-9ecf-ddd171912737-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6612976075047674,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1875.3414306640625,
          "fy": 1875.341552734375,
          "gravity": [
            -0.0004977661301381886,
            -0.9999775290489197,
            -0.006690561771392822
          ],
          "height_meters": 0.7401757485021129,
          "horizontal_fov_degrees": 46.20512324449072,
          "intrinsic_matrix": [
            [
              1875.3414306640625,
              0,
              800
            ],
            [
              0,
              1875.341552734375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -0.3833438068780103,
          "roll_degrees": 0.02851768396608293,
          "uncertainty": {
            "focal_pixels": 739.215576171875,
            "pitch_degrees": 3.387902534703497,
            "roll_degrees": 0.7446977663623117,
            "vertical_fov_degrees": 18.539785228359865
          },
          "vertical_fov_degrees": 35.48328353070146
        },
        "confidence": {
          "camera_calibration": 0.6612976075047674,
          "camera_height": 0.8945220555109628,
          "depth": 0.9669756889343262,
          "dimensions": 0.989674556980295,
          "floor_plane": 0.9741863924507376,
          "floor_rotation": 0.9608,
          "overall": 0.894009745366502,
          "segmentation": 0.8106119161844254
        },
        "floor": {
          "alternate_floor_rotation": 28.67,
          "floor_rotation": 118.67,
          "median_scene_depth_meters": 5.2217535972595215,
          "plane": {
            "confidence": 0.9741863924507376,
            "distance": 0.7401757485021129,
            "gravity_alignment": 0.9988564491076817,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0038377346056198136,
            "normal": [
              0.0095229523164154,
              -0.9985261849843075,
              -0.053430059702978525
            ]
          },
          "visible_area_ratio": 0.37942447916666666,
          "visible_dimensions_meters": {
            "confidence": 0.989674556980295,
            "depth_meters": 7.5148198195167195,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 14.872397485177636,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.933735893265284
          },
          "visible_polygon_pixels": [
            [
              1599,
              712
            ],
            [
              1560,
              685
            ],
            [
              1523,
              712
            ],
            [
              1418,
              679
            ],
            [
              1015,
              677
            ],
            [
              965,
              648
            ],
            [
              953,
              713
            ],
            [
              471,
              833
            ],
            [
              205,
              791
            ],
            [
              0,
              827
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
            "confidence": 0.4992336928844452,
            "scene": "reception"
          },
          {
            "confidence": 0.13128674030303955,
            "scene": "office_cubicles"
          },
          {
            "confidence": 0.09979399293661118,
            "scene": "office"
          },
          {
            "confidence": 0.043746765702962875,
            "scene": "locker_room"
          },
          {
            "confidence": 0.028732571750879288,
            "scene": "server_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 637,
            "y2": 1195
          },
          "detection_confidence": 0.37183138728141785,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.37626145833333335,
            "bottom_contact_score": 1,
            "detection_confidence": 0.37183138728141785,
            "final_score": 0.8106119161844254,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
            "lower_half_score": 1,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Office-Reception Area
  "6a47830d125096412ecb2502": {
    "delayTime": 35486,
    "executionTime": 5429,
    "id": "sync-faa88417-0d26-4243-9ecf-ddd171912737-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6612976075047674,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1875.3414306640625,
          "fy": 1875.341552734375,
          "gravity": [
            -0.0004977661301381886,
            -0.9999775290489197,
            -0.006690561771392822
          ],
          "height_meters": 0.7401757485021129,
          "horizontal_fov_degrees": 46.20512324449072,
          "intrinsic_matrix": [
            [
              1875.3414306640625,
              0,
              800
            ],
            [
              0,
              1875.341552734375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -0.3833438068780103,
          "roll_degrees": 0.02851768396608293,
          "uncertainty": {
            "focal_pixels": 739.215576171875,
            "pitch_degrees": 3.387902534703497,
            "roll_degrees": 0.7446977663623117,
            "vertical_fov_degrees": 18.539785228359865
          },
          "vertical_fov_degrees": 35.48328353070146
        },
        "confidence": {
          "camera_calibration": 0.6612976075047674,
          "camera_height": 0.8945220555109628,
          "depth": 0.9669756889343262,
          "dimensions": 0.989674556980295,
          "floor_plane": 0.9741863924507376,
          "floor_rotation": 0.9608,
          "overall": 0.894009745366502,
          "segmentation": 0.8106119161844254
        },
        "floor": {
          "alternate_floor_rotation": 28.67,
          "floor_rotation": 118.67,
          "median_scene_depth_meters": 5.2217535972595215,
          "plane": {
            "confidence": 0.9741863924507376,
            "distance": 0.7401757485021129,
            "gravity_alignment": 0.9988564491076817,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0038377346056198136,
            "normal": [
              0.0095229523164154,
              -0.9985261849843075,
              -0.053430059702978525
            ]
          },
          "visible_area_ratio": 0.37942447916666666,
          "visible_dimensions_meters": {
            "confidence": 0.989674556980295,
            "depth_meters": 7.5148198195167195,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 14.872397485177636,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.933735893265284
          },
          "visible_polygon_pixels": [
            [
              1599,
              712
            ],
            [
              1560,
              685
            ],
            [
              1523,
              712
            ],
            [
              1418,
              679
            ],
            [
              1015,
              677
            ],
            [
              965,
              648
            ],
            [
              953,
              713
            ],
            [
              471,
              833
            ],
            [
              205,
              791
            ],
            [
              0,
              827
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
            "confidence": 0.4992336928844452,
            "scene": "reception"
          },
          {
            "confidence": 0.13128674030303955,
            "scene": "office_cubicles"
          },
          {
            "confidence": 0.09979399293661118,
            "scene": "office"
          },
          {
            "confidence": 0.043746765702962875,
            "scene": "locker_room"
          },
          {
            "confidence": 0.028732571750879288,
            "scene": "server_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 637,
            "y2": 1195
          },
          "detection_confidence": 0.37183138728141785,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.37626145833333335,
            "bottom_contact_score": 1,
            "detection_confidence": 0.37183138728141785,
            "final_score": 0.8106119161844254,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
            "lower_half_score": 1,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Office-Pantry Area
  "6a4784f1125096412ecb2506": {
    "delayTime": 15526,
    "executionTime": 17707,
    "id": "sync-6a25af80-3e1b-4c78-ae17-604c4e986184-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7893970689373683,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1963.6541748046875,
          "fy": 1963.654052734375,
          "gravity": [
            0.0013687032042071223,
            -0.9998737573623657,
            -0.015830814838409424
          ],
          "height_meters": 1.4881590751458138,
          "horizontal_fov_degrees": 44.332326355208245,
          "intrinsic_matrix": [
            [
              1963.6541748046875,
              0,
              800
            ],
            [
              0,
              1963.654052734375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -0.9070767626994907,
          "roll_degrees": -0.07842292470919059,
          "uncertainty": {
            "focal_pixels": 453.4291076660156,
            "pitch_degrees": 2.7873088465020546,
            "roll_degrees": 0.8074406311299892,
            "vertical_fov_degrees": 10.457650558014102
          },
          "vertical_fov_degrees": 33.981355668066925
        },
        "confidence": {
          "camera_calibration": 0.7893970689373683,
          "camera_height": 0.9244657556100083,
          "depth": 0.9816553592681885,
          "dimensions": 0.9860257574705661,
          "floor_plane": 0.9650643936764153,
          "floor_rotation": 0.9552,
          "overall": 0.9043047905286917,
          "segmentation": 0.7283251987382947
        },
        "floor": {
          "alternate_floor_rotation": 35.38,
          "floor_rotation": 125.38,
          "median_scene_depth_meters": 7.749788284301758,
          "plane": {
            "confidence": 0.9650643936764153,
            "distance": 1.4881590751458138,
            "gravity_alignment": 0.9990478010654608,
            "inlier_ratio": 0.9971,
            "median_residual_meters": 0.004994274980501534,
            "normal": [
              0.0033479317270769323,
              -0.9982289873379723,
              -0.0593942774293731
            ]
          },
          "visible_area_ratio": 0.24033802083333333,
          "visible_dimensions_meters": {
            "confidence": 0.9860257574705661,
            "depth_meters": 6.565216809779873,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 14.067888530158484,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 6.708253743340776
          },
          "visible_polygon_pixels": [
            [
              1599,
              862
            ],
            [
              1566,
              763
            ],
            [
              1578,
              882
            ],
            [
              1521,
              761
            ],
            [
              1482,
              839
            ],
            [
              1354,
              836
            ],
            [
              1381,
              1117
            ],
            [
              1318,
              941
            ],
            [
              1265,
              957
            ],
            [
              1276,
              1184
            ],
            [
              1228,
              957
            ],
            [
              1214,
              1069
            ],
            [
              1067,
              1046
            ],
            [
              1031,
              1131
            ],
            [
              1013,
              1048
            ],
            [
              897,
              1059
            ],
            [
              848,
              1188
            ],
            [
              868,
              961
            ],
            [
              791,
              931
            ],
            [
              769,
              988
            ],
            [
              764,
              923
            ],
            [
              716,
              1115
            ],
            [
              728,
              786
            ],
            [
              28,
              925
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
            "confidence": 0.1270303577184677,
            "scene": "dining_room"
          },
          {
            "confidence": 0.1057281345129013,
            "scene": "dining_hall"
          },
          {
            "confidence": 0.09794207662343979,
            "scene": "conference_room"
          },
          {
            "confidence": 0.08308182656764984,
            "scene": "kitchen"
          },
          {
            "confidence": 0.08081281185150146,
            "scene": "sushi_bar"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 5,
            "x2": 1595,
            "y1": 687,
            "y2": 1195
          },
          "detection_confidence": 0.2979094982147217,
          "label": "indoor floor wooden",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.23903385416666667,
            "bottom_contact_score": 1,
            "detection_confidence": 0.2979094982147217,
            "final_score": 0.7283251987382947,
            "fragmentation_score": 0.03125,
            "largest_component_ratio": 0.9534323284925209,
            "lower_half_score": 1,
            "sam_score": 0.9765625
          },
          "sam_score": 0.9765625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "uo65furk2t4j3r"
  },

  //Office-Record-Room
  "6a47850b125096412ecb2507": {
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
  // Industiral image-2

  "6a478758125096412ecb2517": {
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
  "6a47658bae781d3fcc6ee56e": {
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
  "6a476707ae781d3fcc6ee56f": {
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

  "6a4769feae781d3fcc6ee573": {
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

  "6a4767a8ae781d3fcc6ee570": {
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
  "6a476876ae781d3fcc6ee571": {
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
  // "6a46243bac0c56bac243c30f": {
  //   camera: {
  //     cx: 800,
  //     cy: 599.9999389648438,
  //     fx: 3364.81103515625,
  //     fy: 3364.810791015625,
  //     height_meters: 1.9345139799407232,
  //     pitch_degrees: -9.123054646082059,
  //     roll_degrees: 2.1500398172219946
  //   },
  //   floor: {
  //     plane: {
  //       distance: 1.9345139799407232,
  //       normal: [-0.015559538536334691, -0.9850955249388406, -0.17130296992757144]
  //     },
  //     floor_rotation: 150
  //   },
  //   images: {},
  //   input: {
  //     height: 1200,
  //     width: 1600
  //   }
  // },


  //Industrial-image-7
  "6a476939ae781d3fcc6ee572": {
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
        distance: 5.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 45
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
  //Supermarket-Groserry section
    "6a478963125096412ecb2523": {
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
        distance: 5.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 190
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
    //Supermarket-Loading & Unloading Area
    "6a4789c2125096412ecb2525": {
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
        distance: 5.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 195
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
      //Supermarket- Stock Room 
    "6a47897d125096412ecb2524": {
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
        distance: 5.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 190
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
  //Supermarket-Customer Service Desk
      "6a47891b125096412ecb2522": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 1243.2479248046875,
      fy: 1243.248046875,
      height_meters: 1.4654849378099148,
      pitch_degrees: -19.269657535520135,
      roll_degrees: 1.877650805904828
    },
    floor: {
      plane: {
        distance: 6.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 185
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
    //Supermarket-Billing-Area
      "6a478900125096412ecb2521": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 1243.2479248046875,
      fy: 1243.248046875,
      height_meters: 1.4654849378099148,
      pitch_degrees: -19.269657535520135,
      roll_degrees: 1.877650805904828
    },
    floor: {
      plane: {
        distance: 6.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 210
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
      //Supermarket-Mordern-Turkish-Supermarket
      "6a4788de125096412ecb2520": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 1243.2479248046875,
      fy: 1243.248046875,
      height_meters: 1.4654849378099148,
      pitch_degrees: -19.269657535520135,
      roll_degrees: 1.877650805904828
    },
    floor: {
      plane: {
        distance: 6.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 210
    },
    images: {},
    input: {
      height: 1200,
      width: 1600
    }
  },
        //Supermarket-Mordern-Turkish-Supermarket
      "6a4788ad125096412ecb251f": {
    camera: {
      cx: 800,
      cy: 599.9999389648438,
      fx: 1243.2479248046875,
      fy: 1243.248046875,
      height_meters: 1.4654849378099148,
      pitch_degrees: -19.269657535520135,
      roll_degrees: 1.877650805904828
    },
    floor: {
      plane: {
        distance: 6.4654849378099148,
        normal: [
          -0.028700481684608817,
          -0.9450310611045352,
          -0.32571855320001053
        ]
      },
      floor_rotation: 165
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

  // "6a478a77125096412ecb252b": {
  //    camera: {
  //     cx: 800,
  //     cy: 599.9999389648438,
  //     fx: 4127.2392578125,
  //     fy: 4127.2392578125,
  //     height_meters: 1.2146296932666043,
  //     pitch_degrees: -9.028500922306987,
  //     roll_degrees: 0.5490831228847034
  //   },
  //   floor: {
  //     plane: {
  //       distance: 1.2146296932666043,
  //       normal: [
  //         0.019859311390768526,
  //         -0.989394940145663,
  //         -0.14388627511074306
  //       ]
  //     },
  //     floor_rotation: 0
  //   },
  //   images: {},
  //   input: {
  //     height: 1200,
  //     width: 1600
  //   }
  // },
  //Hospital
  // "6a4602dcb7a9facb9cc3fee0": {
  //   camera: {
  //     cx: 800,
  //     cy: 599.9999389648438,
  //     fx: 1563.1451416015625,
  //     fy: 1563.1453857421875,
  //     height_meters: 1.547279667290866,
  //     pitch_degrees: -9.982066193653406,
  //     roll_degrees: 2.1812437498886093
  //   },
  //   floor: {
  //     plane: {
  //       distance: 1.547279667290866,
  //       normal: [
  //         -0.03658492185766121,
  //         -0.97872795663078,
  //         -0.2018740458850684
  //       ]
  //     },
  //     floor_rotation: 37
  //   },
  //   images: {},
  //   input: {
  //     height: 1200,
  //     width: 1600
  //   }
  // },
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
  //   "6a4622fad0ce9cfc46e4093b": {
  //     camera: {
  //       cx: 800,
  //       cy: 599.9999389648438,
  //       fx: 782.8927612304688,
  //       fy: 782.8927001953125,
  //       height_meters: 1.5130481542925371,
  //       pitch_degrees: -0.934124418534447,
  //       roll_degrees: 0.17171737237668067
  //     },
  //     floor: {
  //       plane: {
  //         distance: 1.5130481542925371,
  //         normal: [
  //           0.004043106510082151,
  //           -0.9988950670652053,
  //           -0.04682198503424773
  //         ]
  //       },
  //       floor_rotation: 54
  //     },
  //     images: {},
  //     input: {
  //       height: 1200,
  //       width: 1600
  //     }
  //   },
  "6a478554125096412ecb2509": {
    "delayTime": 9376,
    "executionTime": 19188,
    "id": "sync-763c249b-8666-4063-812e-12c44658337a-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6910891761030034,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 4323.875,
          "fy": 4323.8740234375,
          "gravity": [
            0.0012477622367441654,
            -0.9976474642753601,
            -0.068541519343853
          ],
          "height_meters": 0.9081589359439719,
          "horizontal_fov_degrees": 20.964565562964214,
          "intrinsic_matrix": [
            [
              4323.875,
              0,
              800
            ],
            [
              0,
              4323.8740234375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -3.9302210489063905,
          "roll_degrees": -0.07165286655027907,
          "uncertainty": {
            "focal_pixels": 2221.47314453125,
            "pitch_degrees": 4.324295643259446,
            "roll_degrees": 0.7837469717034795,
            "vertical_fov_degrees": 11.335240220127885
          },
          "vertical_fov_degrees": 15.800334663598441
        },
        "confidence": {
          "camera_calibration": 0.6910891761030034,
          "camera_height": 0.9026720699321801,
          "depth": 0.9636674523353577,
          "dimensions": 0.9906663894104418,
          "floor_plane": 0.9766659735261046,
          "floor_rotation": 0.9954,
          "overall": 0.8975695212130252,
          "segmentation": 0.7628255871840887
        },
        "floor": {
          "alternate_floor_rotation": 11.34,
          "floor_rotation": 125.34,
          "median_scene_depth_meters": 11.508942604064941,
          "plane": {
            "confidence": 0.9766659735261046,
            "distance": 0.9081589359439719,
            "gravity_alignment": 0.9999820981816313,
            "inlier_ratio": 0.9986666666666667,
            "median_residual_meters": 0.0033995669165332587,
            "normal": [
              -0.0006143754199182616,
              -0.9980217016384643,
              -0.06286736515480483
            ]
          },
          "visible_area_ratio": 0.48392447916666664,
          "visible_dimensions_meters": {
            "confidence": 0.9906663894104418,
            "depth_meters": 21.32409784328835,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 43.79289768503011,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.389579438360531
          },
          "visible_polygon_pixels": [
            [
              1599,
              552
            ],
            [
              1553,
              522
            ],
            [
              1540,
              572
            ],
            [
              1490,
              521
            ],
            [
              1445,
              559
            ],
            [
              1447,
              504
            ],
            [
              1066,
              480
            ],
            [
              1092,
              567
            ],
            [
              778,
              712
            ],
            [
              197,
              621
            ],
            [
              272,
              682
            ],
            [
              0,
              727
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
            "confidence": 0.38917696475982666,
            "scene": "bedroom"
          },
          {
            "confidence": 0.1945631504058838,
            "scene": "bedchamber"
          },
          {
            "confidence": 0.08943535387516022,
            "scene": "living_room"
          },
          {
            "confidence": 0.0740097239613533,
            "scene": "artists_loft"
          },
          {
            "confidence": 0.03936617448925972,
            "scene": "bow_window/indoor"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1594,
            "y1": 467,
            "y2": 1193
          },
          "detection_confidence": 0.31509172916412354,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.48114114583333334,
            "bottom_contact_score": 1,
            "detection_confidence": 0.31509172916412354,
            "final_score": 0.7628255871840887,
            "fragmentation_score": 0.5,
            "largest_component_ratio": 0.9999902575366073,
            "lower_half_score": 0.9476093618578229,
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
    "workerId": "rnhic1ngizavgh"
  },
  //Recidential- Drawing Room
  "6a4622fad0ce9cfc46e4093b": {
    "delayTime": 15926,
    "executionTime": 18296,
    "id": "sync-7b225725-0f4a-4997-8f3f-3a0c8f69a0cf-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8270267146545046,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 3438.601806640625,
          "fy": 3438.601806640625,
          "gravity": [
            -0.015316455624997616,
            -0.9946153163909912,
            -0.10249775648117065
          ],
          "height_meters": 0.9464089232305635,
          "horizontal_fov_degrees": 26.194065750038625,
          "intrinsic_matrix": [
            [
              3438.601806640625,
              0,
              800
            ],
            [
              0,
              3438.601806640625,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -5.883020797710872,
          "roll_degrees": 0.882160819576666,
          "uncertainty": {
            "focal_pixels": 839.3541259765625,
            "pitch_degrees": 2.751351315616523,
            "roll_degrees": 0.6343468288932056,
            "vertical_fov_degrees": 6.698457019038008
          },
          "vertical_fov_degrees": 19.79572724313098
        },
        "confidence": {
          "camera_calibration": 0.8270267146545046,
          "camera_height": 0.9374245404286174,
          "depth": 0.9725455045700073,
          "dimensions": 0.9899336442552654,
          "floor_plane": 0.9748341106381633,
          "floor_rotation": 0.9967,
          "overall": 0.9274646040432365,
          "segmentation": 0.7937877137560974
        },
        "floor": {
          "alternate_floor_rotation": 1.16,
          "floor_rotation": 91.16,
          "median_scene_depth_meters": 9.04731559753418,
          "plane": {
            "confidence": 0.9748341106381633,
            "distance": 0.9464089232305635,
            "gravity_alignment": 0.9998185384752366,
            "inlier_ratio": 0.9998333333333334,
            "median_residual_meters": 0.0037569395585326237,
            "normal": [
              -0.009127558664361343,
              -0.9963760085759882,
              -0.08456676183354174
            ]
          },
          "visible_area_ratio": 0.5020557291666666,
          "visible_dimensions_meters": {
            "confidence": 0.9899336442552654,
            "depth_meters": 14.660947373983975,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 31.892818044521114,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 6.1161967803081065
          },
          "visible_polygon_pixels": [
            [
              1599,
              491
            ],
            [
              1366,
              482
            ],
            [
              1362,
              543
            ],
            [
              1173,
              546
            ],
            [
              1134,
              606
            ],
            [
              1092,
              563
            ],
            [
              976,
              561
            ],
            [
              993,
              668
            ],
            [
              934,
              561
            ],
            [
              877,
              606
            ],
            [
              822,
              564
            ],
            [
              813,
              686
            ],
            [
              772,
              639
            ],
            [
              753,
              725
            ],
            [
              741,
              635
            ],
            [
              683,
              644
            ],
            [
              665,
              780
            ],
            [
              652,
              648
            ],
            [
              587,
              625
            ],
            [
              548,
              699
            ],
            [
              562,
              610
            ],
            [
              520,
              562
            ],
            [
              359,
              658
            ],
            [
              345,
              719
            ],
            [
              316,
              660
            ],
            [
              33,
              658
            ],
            [
              0,
              703
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
            "confidence": 0.7175485491752625,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.10685575753450394,
            "scene": "living_room"
          },
          {
            "confidence": 0.08520697802305222,
            "scene": "artists_loft"
          },
          {
            "confidence": 0.03193175047636032,
            "scene": "dining_room"
          },
          {
            "confidence": 0.011659585870802402,
            "scene": "recreation_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 473,
            "y2": 1193
          },
          "detection_confidence": 0.3381249010562897,
          "label": "indoor floor wooden floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.49951510416666667,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3381249010562897,
            "final_score": 0.7937877137560974,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
            "lower_half_score": 0.9475022130837302,
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
    "workerId": "uo65furk2t4j3r"
  },

  //Residential- Guest Room

  "6a4785b8125096412ecb250d": {
    "delayTime": 10516,
    "executionTime": 18233,
    "id": "sync-29c9833a-5062-4887-b15d-9ddb5c52148d-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7171624796625484,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 3369.41357421875,
          "fy": 3369.413818359375,
          "gravity": [
            -0.0032297673169523478,
            -0.9984853863716125,
            -0.05492299795150757
          ],
          "height_meters": 1.3159667235016903,
          "horizontal_fov_degrees": 26.712847645805066,
          "intrinsic_matrix": [
            [
              3369.41357421875,
              0,
              800
            ],
            [
              0,
              3369.413818359375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -3.1484401578276695,
          "roll_degrees": 0.18531353093025218,
          "uncertainty": {
            "focal_pixels": 1427.0018310546875,
            "pitch_degrees": 3.5386663674702463,
            "roll_degrees": 0.8558183807735136,
            "vertical_fov_degrees": 11.846146054007654
          },
          "vertical_fov_degrees": 20.1939323943846
        },
        "confidence": {
          "camera_calibration": 0.7171624796625484,
          "camera_height": 0.9134523051002167,
          "depth": 0.9821810722351074,
          "dimensions": 0.991073069627315,
          "floor_plane": 0.9776826740682872,
          "floor_rotation": 0.9889,
          "overall": 0.9081054853822348,
          "segmentation": 0.7862867969821692
        },
        "floor": {
          "alternate_floor_rotation": 172,
          "floor_rotation": 82,
          "median_scene_depth_meters": 9.901788711547852,
          "plane": {
            "confidence": 0.9776826740682872,
            "distance": 1.3159667235016903,
            "gravity_alignment": 0.9993671037508983,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0033286120022838483,
            "normal": [
              -0.004674789818382546,
              -0.9958966322357613,
              -0.09037723298277477
            ]
          },
          "visible_area_ratio": 0.3555317708333333,
          "visible_dimensions_meters": {
            "confidence": 0.991073069627315,
            "depth_meters": 10.085007228454014,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 20.42839558866097,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.196030627459689
          },
          "visible_polygon_pixels": [
            [
              1599,
              618
            ],
            [
              1530,
              633
            ],
            [
              1475,
              589
            ],
            [
              1453,
              724
            ],
            [
              1042,
              856
            ],
            [
              952,
              929
            ],
            [
              629,
              611
            ],
            [
              326,
              614
            ],
            [
              276,
              661
            ],
            [
              246,
              1023
            ],
            [
              28,
              1066
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
            "confidence": 0.6540505290031433,
            "scene": "bedroom"
          },
          {
            "confidence": 0.15255215764045715,
            "scene": "bedchamber"
          },
          {
            "confidence": 0.06326311081647873,
            "scene": "childs_room"
          },
          {
            "confidence": 0.04239251837134361,
            "scene": "hotel_room"
          },
          {
            "confidence": 0.030611013993620872,
            "scene": "attic"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 9,
            "x2": 1594,
            "y1": 564,
            "y2": 1194
          },
          "detection_confidence": 0.2943574786186218,
          "label": "indoor floor wooden",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.3529359375,
            "bottom_contact_score": 1,
            "detection_confidence": 0.2943574786186218,
            "final_score": 0.7862867969821692,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
            "lower_half_score": 0.9986777581507503,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Recidential-Home Gymn
  "6a478601125096412ecb250f": {
    "delayTime": 13639,
    "executionTime": 17417,
    "id": "sync-0b0b2b48-87bb-4a11-8b8a-687d9b2de0dd-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6711750553493748,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 5848.2021484375,
          "fy": 5848.2021484375,
          "gravity": [
            -0.0032533614430576563,
            -0.9986565709114075,
            -0.05171513557434082
          ],
          "height_meters": 0.861476195038972,
          "horizontal_fov_degrees": 15.578765034470521,
          "intrinsic_matrix": [
            [
              5848.2021484375,
              0,
              800
            ],
            [
              0,
              5848.2021484375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -2.9643812872912236,
          "roll_degrees": 0.18663529259656866,
          "uncertainty": {
            "focal_pixels": 3883.686767578125,
            "pitch_degrees": 3.575135308769883,
            "roll_degrees": 0.5311656157010559,
            "vertical_fov_degrees": 10.926245077532935
          },
          "vertical_fov_degrees": 11.715601502174847
        },
        "confidence": {
          "camera_calibration": 0.6711750553493748,
          "camera_height": 0.8898877071158681,
          "depth": 0.9630125761032104,
          "dimensions": 0.9100846749511872,
          "floor_plane": 0.9627116873779678,
          "floor_rotation": 0.9919,
          "overall": 0.8776067136366589,
          "segmentation": 0.7544752945590042
        },
        "floor": {
          "alternate_floor_rotation": 167.18,
          "floor_rotation": 77.18,
          "median_scene_depth_meters": 18.487003326416016,
          "plane": {
            "confidence": 0.9627116873779678,
            "distance": 0.861476195038972,
            "gravity_alignment": 0.999964230206155,
            "inlier_ratio": 0.9975833333333334,
            "median_residual_meters": 0.0054109237994894865,
            "normal": [
              0.0008998474535457746,
              -0.9990153975439715,
              -0.04435567319544254
            ]
          },
          "visible_area_ratio": 0.4952713541666667,
          "visible_dimensions_meters": {
            "confidence": 0.9100846749511872,
            "depth_meters": 18.857693728416656,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 60.99352776183437,
            "valid_polygon_vertex_ratio": 0.8333333333333334,
            "width_meters": 5.999819005595985
          },
          "visible_polygon_pixels": [
            [
              1599,
              580
            ],
            [
              1407,
              545
            ],
            [
              1552,
              592
            ],
            [
              1415,
              637
            ],
            [
              978,
              567
            ],
            [
              1080,
              508
            ],
            [
              866,
              483
            ],
            [
              156,
              544
            ],
            [
              86,
              587
            ],
            [
              0,
              561
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
            "confidence": 0.6927606463432312,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.22163423895835876,
            "scene": "artists_loft"
          },
          {
            "confidence": 0.018962271511554718,
            "scene": "bow_window/indoor"
          },
          {
            "confidence": 0.018570926040410995,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.008005914278328419,
            "scene": "living_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 469,
            "y2": 1194
          },
          "detection_confidence": 0.37517812848091125,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.49281614583333333,
            "bottom_contact_score": 1,
            "detection_confidence": 0.37517812848091125,
            "final_score": 0.7544752945590042,
            "fragmentation_score": 0.043478260869565216,
            "largest_component_ratio": 0.9987983601896836,
            "lower_half_score": 0.9254835358436367,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Residential- Home Office
  "6a4785a0125096412ecb250c": {
    "delayTime": 10389,
    "executionTime": 19928,
    "id": "sync-8bf076de-e23e-46bb-8b1f-f0e088ef3265-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.5734561389609656,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 4699.22900390625,
          "fy": 4699.2294921875,
          "gravity": [
            0.0015771412290632725,
            -0.9994563460350037,
            -0.032931625843048096
          ],
          "height_meters": 0.9356659890541048,
          "horizontal_fov_degrees": 19.3228954450058,
          "intrinsic_matrix": [
            [
              4699.22900390625,
              0,
              800
            ],
            [
              0,
              4699.2294921875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -1.8871844693256965,
          "roll_degrees": -0.0904035701012822,
          "uncertainty": {
            "focal_pixels": 3696.4677734375,
            "pitch_degrees": 4.6491057161262255,
            "roll_degrees": 0.6975720757710153,
            "vertical_fov_degrees": 16.015096301671154
          },
          "vertical_fov_degrees": 14.55236860223061
        },
        "confidence": {
          "camera_calibration": 0.5734561389609656,
          "camera_height": 0.8792418611751698,
          "depth": 0.974694550037384,
          "dimensions": 0.9934101210381466,
          "floor_plane": 0.9835253025953665,
          "floor_rotation": 0.995,
          "overall": 0.8787702160376073,
          "segmentation": 0.7520635384562179
        },
        "floor": {
          "alternate_floor_rotation": 178.24,
          "floor_rotation": 88.24,
          "median_scene_depth_meters": 14.283790588378906,
          "plane": {
            "confidence": 0.9835253025953665,
            "distance": 0.9356659890541048,
            "gravity_alignment": 0.9999633081237954,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0024701038544088783,
            "normal": [
              0.0030271973043015823,
              -0.999139371864592,
              -0.04136848639374379
            ]
          },
          "visible_area_ratio": 0.4368578125,
          "visible_dimensions_meters": {
            "confidence": 0.9934101210381466,
            "depth_meters": 14.422778825240552,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 42.48687437698388,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.593628709534978
          },
          "visible_polygon_pixels": [
            [
              0,
              727
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
              817
            ],
            [
              1475,
              720
            ],
            [
              1451,
              797
            ],
            [
              1423,
              705
            ],
            [
              1347,
              667
            ],
            [
              1308,
              722
            ],
            [
              1265,
              635
            ],
            [
              1085,
              634
            ],
            [
              1135,
              711
            ],
            [
              1040,
              673
            ],
            [
              1007,
              728
            ],
            [
              986,
              676
            ],
            [
              889,
              709
            ],
            [
              920,
              635
            ],
            [
              831,
              629
            ],
            [
              786,
              799
            ],
            [
              754,
              626
            ],
            [
              341,
              667
            ],
            [
              170,
              633
            ],
            [
              121,
              724
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.8085609674453735,
            "scene": "home_office"
          },
          {
            "confidence": 0.11277364194393158,
            "scene": "office"
          },
          {
            "confidence": 0.032581306993961334,
            "scene": "artists_loft"
          },
          {
            "confidence": 0.010667671449482441,
            "scene": "bow_window/indoor"
          },
          {
            "confidence": 0.007786294911056757,
            "scene": "living_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1593,
            "y1": 612,
            "y2": 1194
          },
          "detection_confidence": 0.28779083490371704,
          "label": "indoor floor wooden floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.4342265625,
            "bottom_contact_score": 1,
            "detection_confidence": 0.28779083490371704,
            "final_score": 0.7520635384562179,
            "fragmentation_score": 0.3333333333333333,
            "largest_component_ratio": 0.9999808087895744,
            "lower_half_score": 1,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Residential- Kitchen
  "6a478574125096412ecb250a": {
    "delayTime": 11300,
    "executionTime": 14822,
    "id": "sync-c1ee8e50-3ef3-4ed3-acd7-2084533b589b-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7350533877645464,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 5264.9609375,
          "fy": 5264.9609375,
          "gravity": [
            -0.0035155226942151785,
            -0.9981592893600464,
            -0.060546278953552246
          ],
          "height_meters": 1.1967549698425424,
          "horizontal_fov_degrees": 17.279774128390713,
          "intrinsic_matrix": [
            [
              5264.9609375,
              0,
              800
            ],
            [
              0,
              5264.9609375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -3.4711693708751223,
          "roll_degrees": 0.20177502054171015,
          "uncertainty": {
            "focal_pixels": 2615.674072265625,
            "pitch_degrees": 3.1913275559564145,
            "roll_degrees": 0.6166837996169939,
            "vertical_fov_degrees": 9.057498490428276
          },
          "vertical_fov_degrees": 13.00286676447964
        },
        "confidence": {
          "camera_calibration": 0.7350533877645464,
          "camera_height": 0.9151437180690102,
          "depth": 0.9787675142288208,
          "dimensions": 0.9895468132960795,
          "floor_plane": 0.9738670332401987,
          "floor_rotation": 0.9999,
          "overall": 0.9123961744672437,
          "segmentation": 0.7944947546720504
        },
        "floor": {
          "alternate_floor_rotation": 178.65,
          "floor_rotation": 88.65,
          "median_scene_depth_meters": 11.819900512695312,
          "plane": {
            "confidence": 0.9738670332401987,
            "distance": 1.1967549698425424,
            "gravity_alignment": 0.9999653437292593,
            "inlier_ratio": 0.99795,
            "median_residual_meters": 0.0037651553258479797,
            "normal": [
              -0.00598187055749343,
              -0.9985973952534379,
              -0.05260664803693938
            ]
          },
          "visible_area_ratio": 0.3381651041666667,
          "visible_dimensions_meters": {
            "confidence": 0.9895468132960795,
            "depth_meters": 13.654088162746941,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 27.45311598207188,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 3.048350009719217
          },
          "visible_polygon_pixels": [
            [
              0,
              984
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
              1013
            ],
            [
              1104,
              626
            ],
            [
              640,
              627
            ],
            [
              648,
              748
            ],
            [
              593,
              915
            ],
            [
              408,
              880
            ],
            [
              385,
              979
            ],
            [
              368,
              880
            ],
            [
              134,
              881
            ],
            [
              104,
              982
            ],
            [
              84,
              883
            ],
            [
              28,
              881
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.5760396122932434,
            "scene": "kitchen"
          },
          {
            "confidence": 0.3195684850215912,
            "scene": "wet_bar"
          },
          {
            "confidence": 0.04843295365571976,
            "scene": "pantry"
          },
          {
            "confidence": 0.021910535171628,
            "scene": "galley"
          },
          {
            "confidence": 0.00819736160337925,
            "scene": "utility_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1593,
            "y1": 611,
            "y2": 1194
          },
          "detection_confidence": 0.3181075155735016,
          "label": "indoor floor wooden",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.3356109375,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3181075155735016,
            "final_score": 0.7944947546720504,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
            "lower_half_score": 1,
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
    "workerId": "rnhic1ngizavgh"
  },

  //Residential- Prayer Room 
  "6a4785ea125096412ecb250e": {
    "delayTime": 30314,
    "executionTime": 17383,
    "id": "sync-59c81d55-a680-40ed-a564-1fe1665594d1-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.694785787585738,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1224.9451904296875,
          "fy": 1224.9451904296875,
          "gravity": [
            0.0007223550346679986,
            -0.9999943375587463,
            0.003295720089226961
          ],
          "height_meters": 0.849447311036408,
          "horizontal_fov_degrees": 66.2963364239475,
          "intrinsic_matrix": [
            [
              1224.9451904296875,
              0,
              800
            ],
            [
              0,
              1224.9451904296875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": 0.18883119841472776,
          "roll_degrees": -0.04138398611402834,
          "uncertainty": {
            "focal_pixels": 376.7602844238281,
            "pitch_degrees": 1.63457333796736,
            "roll_degrees": 0.659032466574954,
            "vertical_fov_degrees": 19.690487688399422
          },
          "vertical_fov_degrees": 52.19287005208493
        },
        "confidence": {
          "camera_calibration": 0.694785787585738,
          "camera_height": 0.8948693052633248,
          "depth": 0.9687342643737793,
          "dimensions": 0.983582549448825,
          "floor_plane": 0.9589563736220623,
          "floor_rotation": 0.9862,
          "overall": 0.8983775819045853,
          "segmentation": 0.8015147930383681
        },
        "floor": {
          "alternate_floor_rotation": 0.41,
          "floor_rotation": 180.41,
          "median_scene_depth_meters": 4.0506486892700195,
          "plane": {
            "confidence": 0.9589563736220623,
            "distance": 1.849447311036408,
            "gravity_alignment": 0.9998827383507807,
            "inlier_ratio": 1,
            "median_residual_meters": 0.006153026107214077,
            "normal": [
              0.0019396474000111879,
              -0.999926477813099,
              -0.011969826074505918
            ]
          },
          "visible_area_ratio": 0.3061875,
          "visible_dimensions_meters": {
            "confidence": 0.983582549448825,
            "depth_meters": 3.7798912949104095,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 11.23398736874785,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 3.9483881870856177
          },
          "visible_polygon_pixels": [
            [
              1599,
              1012
            ],
            [
              1192,
              776
            ],
            [
              990,
              778
            ],
            [
              978,
              816
            ],
            [
              551,
              817
            ],
            [
              540,
              783
            ],
            [
              366,
              775
            ],
            [
              333,
              804
            ],
            [
              240,
              801
            ],
            [
              0,
              922
            ],
            [
              0,
              1194
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
            "confidence": 0.41119298338890076,
            "scene": "elevator_lobby"
          },
          {
            "confidence": 0.2698858976364136,
            "scene": "entrance_hall"
          },
          {
            "confidence": 0.15245747566223145,
            "scene": "lobby"
          },
          {
            "confidence": 0.031061820685863495,
            "scene": "reception"
          },
          {
            "confidence": 0.029954908415675163,
            "scene": "museum/indoor"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1592,
            "y1": 754,
            "y2": 1195
          },
          "detection_confidence": 0.3415076434612274,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.30364583333333334,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3415076434612274,
            "final_score": 0.8015147930383681,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
            "lower_half_score": 1,
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
    "workerId": "rnhic1ngizavgh"
  },

  "6a47858c125096412ecb250b": {
    "delayTime": 13669,
    "executionTime": 13204,
    "id": "sync-ca7c3286-804b-4368-a084-d1b3401e1cfb-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.5709987083242003,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 5482.0068359375,
          "fy": 5482.00732421875,
          "gravity": [
            0.0007245345623232424,
            -0.9994115829467773,
            -0.034291982650756836
          ],
          "height_meters": 1.076234560158982,
          "horizontal_fov_degrees": 16.60535612710178,
          "intrinsic_matrix": [
            [
              5482.0068359375,
              0,
              800
            ],
            [
              0,
              5482.00732421875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -1.965171142382079,
          "roll_degrees": -0.04153304965657858,
          "uncertainty": {
            "focal_pixels": 4682.3046875,
            "pitch_degrees": 4.3806092723057315,
            "roll_degrees": 0.6606622671047954,
            "vertical_fov_degrees": 14.97020542470614
          },
          "vertical_fov_degrees": 12.492202548541758
        },
        "confidence": {
          "camera_calibration": 0.5709987083242003,
          "camera_height": 0.8758423695518658,
          "depth": 0.9713557958602905,
          "dimensions": 0.9918702060354602,
          "floor_plane": 0.9796755150886501,
          "floor_rotation": 0.9274,
          "overall": 0.8681552745950784,
          "segmentation": 0.759944327305082
        },
        "floor": {
          "alternate_floor_rotation": 179.45,
          "floor_rotation": 89.45,
          "median_scene_depth_meters": 14.030773162841797,
          "plane": {
            "confidence": 0.9796755150886501,
            "distance": 1.076234560158982,
            "gravity_alignment": 0.9999736185511381,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0030478812932366317,
            "normal": [
              0.0005324731172881656,
              -0.9991363657857549,
              -0.041548032887413135
            ]
          },
          "visible_area_ratio": 0.3838239583333333,
          "visible_dimensions_meters": {
            "confidence": 0.9918702060354602,
            "depth_meters": 15.509612715399598,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 37.3037444926484,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 3.435837990285609
          },
          "visible_polygon_pixels": [
            [
              0,
              899
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
              1014
            ],
            [
              1517,
              876
            ],
            [
              1344,
              762
            ],
            [
              1320,
              918
            ],
            [
              1287,
              724
            ],
            [
              1198,
              663
            ],
            [
              987,
              668
            ],
            [
              944,
              926
            ],
            [
              917,
              633
            ],
            [
              877,
              635
            ],
            [
              849,
              740
            ],
            [
              839,
              634
            ],
            [
              613,
              634
            ],
            [
              620,
              724
            ],
            [
              565,
              673
            ],
            [
              415,
              729
            ],
            [
              398,
              800
            ],
            [
              371,
              714
            ],
            [
              245,
              744
            ],
            [
              215,
              703
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.5041587948799133,
            "scene": "home_office"
          },
          {
            "confidence": 0.09849927574396133,
            "scene": "office"
          },
          {
            "confidence": 0.07761326432228088,
            "scene": "dining_room"
          },
          {
            "confidence": 0.0686456710100174,
            "scene": "library/indoor"
          },
          {
            "confidence": 0.06301417201757431,
            "scene": "artists_loft"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1593,
            "y1": 621,
            "y2": 1194
          },
          "detection_confidence": 0.31721654534339905,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.38100572916666664,
            "bottom_contact_score": 1,
            "detection_confidence": 0.31721654534339905,
            "final_score": 0.759944327305082,
            "fragmentation_score": 0.3333333333333333,
            "largest_component_ratio": 0.9999179802359709,
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
    "workerId": "rnhic1ngizavgh"
  },


  //School
  //School- Back-Office
  "6a47862b125096412ecb2510": {
    "delayTime": 12756,
    "executionTime": 13343,
    "id": "sync-5f604e0f-c784-4aa5-970c-15197cbe005a-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7548487839428171,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 672.7894897460938,
          "fy": 672.78955078125,
          "gravity": [
            0.002893846482038498,
            -0.9999843835830688,
            -0.0047837491147220135
          ],
          "height_meters": 1.5257031471679394,
          "horizontal_fov_degrees": 99.87321170446084,
          "intrinsic_matrix": [
            [
              672.7894897460938,
              0,
              800
            ],
            [
              0,
              672.78955078125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -0.2740896750596466,
          "roll_degrees": -0.16579072918845333,
          "uncertainty": {
            "focal_pixels": 134.25502014160156,
            "pitch_degrees": 1.356168637538705,
            "roll_degrees": 1.0604230473027394,
            "vertical_fov_degrees": 16.06379384290605
          },
          "vertical_fov_degrees": 83.45375112845201
        },
        "confidence": {
          "camera_calibration": 0.7548487839428171,
          "camera_height": 0.9150344434058201,
          "depth": 0.9881241321563721,
          "dimensions": 0.984507215264612,
          "floor_plane": 0.9612680381615298,
          "floor_rotation": 0.9232,
          "overall": 0.8970735763213228,
          "segmentation": 0.7525324213181086
        },
        "floor": {
          "alternate_floor_rotation": 46.14,
          "floor_rotation": 136.14,
          "median_scene_depth_meters": 2.94992733001709,
          "plane": {
            "confidence": 0.9612680381615298,
            "distance": 1.5257031471679394,
            "gravity_alignment": 0.9985665963930608,
            "inlier_ratio": 0.9989166666666667,
            "median_residual_meters": 0.005685542167562341,
            "normal": [
              -0.010458056507014873,
              -0.9983416616366576,
              -0.05660879520581212
            ]
          },
          "visible_area_ratio": 0.2580458333333333,
          "visible_dimensions_meters": {
            "confidence": 0.984507215264612,
            "depth_meters": 8.55743115394425,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 28.787522657675204,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 17.160385041848286
          },
          "visible_polygon_pixels": [
            [
              1599,
              665
            ],
            [
              1404,
              657
            ],
            [
              1381,
              721
            ],
            [
              1209,
              713
            ],
            [
              1226,
              930
            ],
            [
              1044,
              1188
            ],
            [
              853,
              1062
            ],
            [
              852,
              849
            ],
            [
              763,
              993
            ],
            [
              842,
              1057
            ],
            [
              734,
              1023
            ],
            [
              709,
              1157
            ],
            [
              702,
              1028
            ],
            [
              574,
              1094
            ],
            [
              664,
              1003
            ],
            [
              509,
              962
            ],
            [
              504,
              809
            ],
            [
              364,
              793
            ],
            [
              345,
              735
            ],
            [
              168,
              724
            ],
            [
              0,
              1035
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
            "confidence": 0.8237167596817017,
            "scene": "office_cubicles"
          },
          {
            "confidence": 0.15530437231063843,
            "scene": "office"
          },
          {
            "confidence": 0.011148202233016491,
            "scene": "computer_room"
          },
          {
            "confidence": 0.0026795112062245607,
            "scene": "conference_room"
          },
          {
            "confidence": 0.0024210044648498297,
            "scene": "reception"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1594,
            "y1": 645,
            "y2": 1195
          },
          "detection_confidence": 0.3432442545890808,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.25563854166666666,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3432442545890808,
            "final_score": 0.7525324213181086,
            "fragmentation_score": 0.05,
            "largest_component_ratio": 0.9991442996092301,
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
    "workerId": "rnhic1ngizavgh"
  },
  //School- Laboratory

  "6a4786c4125096412ecb2516": {
    "delayTime": 15928,
    "executionTime": 17235,
    "id": "sync-3294b6c3-aa44-40c7-94df-b50da43e364d-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7179978739412864,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 4375.693359375,
          "fy": 4375.69384765625,
          "gravity": [
            0.0007042462821118534,
            -0.9971351027488708,
            -0.0756380558013916
          ],
          "height_meters": 1.7536236967532424,
          "horizontal_fov_degrees": 20.721706234193363,
          "intrinsic_matrix": [
            [
              4375.693359375,
              0,
              800
            ],
            [
              0,
              4375.69384765625,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -4.337884304613186,
          "roll_degrees": -0.04046220739582082,
          "uncertainty": {
            "focal_pixels": 2043.004638671875,
            "pitch_degrees": 3.988112878537772,
            "roll_degrees": 0.8153621564633231,
            "vertical_fov_degrees": 10.183672887384672
          },
          "vertical_fov_degrees": 15.615537065414577
        },
        "confidence": {
          "camera_calibration": 0.7179978739412864,
          "camera_height": 0.9119662648985061,
          "depth": 0.9781407713890076,
          "dimensions": 0.9904281033711876,
          "floor_plane": 0.9760702584279688,
          "floor_rotation": 0.9962,
          "overall": 0.882095685923278,
          "segmentation": 0.60386652943499
        },
        "floor": {
          "alternate_floor_rotation": 170.89,
          "floor_rotation": 80.89,
          "median_scene_depth_meters": 16.02657699584961,
          "plane": {
            "confidence": 0.9760702584279688,
            "distance": 1.7536236967532424,
            "gravity_alignment": 0.9999878114124325,
            "inlier_ratio": 0.9997666666666667,
            "median_residual_meters": 0.0035715955781776554,
            "normal": [
              -0.003967400655602462,
              -0.9970053665138252,
              -0.07723055661246493
            ]
          },
          "visible_area_ratio": 0.23209739583333333,
          "visible_dimensions_meters": {
            "confidence": 0.9904281033711876,
            "depth_meters": 21.339885110872643,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 38.70409427405005,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.686527796141643
          },
          "visible_polygon_pixels": [
            [
              0,
              564
            ],
            [
              0,
              1199
            ],
            [
              796,
              1199
            ],
            [
              768,
              781
            ],
            [
              701,
              738
            ],
            [
              495,
              786
            ],
            [
              442,
              721
            ],
            [
              435,
              597
            ],
            [
              353,
              601
            ],
            [
              321,
              524
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.8006150722503662,
            "scene": "chemistry_lab"
          },
          {
            "confidence": 0.1895102709531784,
            "scene": "biology_laboratory"
          },
          {
            "confidence": 0.005763375665992498,
            "scene": "physics_laboratory"
          },
          {
            "confidence": 0.0013709780760109425,
            "scene": "clean_room"
          },
          {
            "confidence": 0.0005571108194999397,
            "scene": "classroom"
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
            "area_ratio": 0.23235729166666666,
            "bottom_contact_score": 0.52375,
            "detection_confidence": 0.05,
            "final_score": 0.60386652943499,
            "fragmentation_score": 0.017857142857142856,
            "largest_component_ratio": 0.9741620080425709,
            "lower_half_score": 0.9455624644158825,
            "sam_score": 0.94140625
          },
          "sam_score": 0.94140625
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
    "workerId": "uo65furk2t4j3r"
  },
  //School- Music-Dance
  "6a47867d125096412ecb2513": {
    "delayTime": 13484,
    "executionTime": 16969,
    "id": "sync-f0b92237-e9ef-4628-8f4c-eba42772ee05-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8692577657918588,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 975.1484985351562,
          "fy": 975.1484985351562,
          "gravity": [
            -0.014337567612528801,
            -0.9939786195755005,
            -0.10863227397203445
          ],
          "height_meters": 1.3044310538278827,
          "horizontal_fov_degrees": 78.73008109093041,
          "intrinsic_matrix": [
            [
              975.1484985351562,
              0,
              800
            ],
            [
              0,
              975.1484985351562,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -6.236478391503978,
          "roll_degrees": 0.8263181534179938,
          "uncertainty": {
            "focal_pixels": 93.90792846679688,
            "pitch_degrees": 1.5235621666654369,
            "roll_degrees": 1.0780984029359688,
            "vertical_fov_degrees": 6.9654111207665474
          },
          "vertical_fov_degrees": 63.20720578689081
        },
        "confidence": {
          "camera_calibration": 0.8692577657918588,
          "camera_height": 0.9421070672570412,
          "depth": 0.9701736569404602,
          "dimensions": 0.9860057413970796,
          "floor_plane": 0.9650143534926988,
          "floor_rotation": 0.9359,
          "overall": 0.9173717675994345,
          "segmentation": 0.7531437883169025
        },
        "floor": {
          "alternate_floor_rotation": 44.52,
          "floor_rotation": 134.52,
          "median_scene_depth_meters": 4.968674659729004,
          "plane": {
            "confidence": 0.9650143534926988,
            "distance": 1.3044310538278827,
            "gravity_alignment": 0.9997357523979992,
            "inlier_ratio": 1,
            "median_residual_meters": 0.005239919548035155,
            "normal": [
              0.006728363151387434,
              -0.9950161639234497,
              -0.099486494864206
            ]
          },
          "visible_area_ratio": 0.41227916666666664,
          "visible_dimensions_meters": {
            "confidence": 0.9860057413970796,
            "depth_meters": 6.909635718063074,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 34.61344294633055,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 8.678447977142582
          },
          "visible_polygon_pixels": [
            [
              1599,
              707
            ],
            [
              1414,
              686
            ],
            [
              1366,
              715
            ],
            [
              1229,
              662
            ],
            [
              1021,
              655
            ],
            [
              1008,
              681
            ],
            [
              878,
              650
            ],
            [
              0,
              804
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
            "confidence": 0.13146564364433289,
            "scene": "ballroom"
          },
          {
            "confidence": 0.12101622670888901,
            "scene": "elevator_lobby"
          },
          {
            "confidence": 0.08061841875314713,
            "scene": "server_room"
          },
          {
            "confidence": 0.07005221396684647,
            "scene": "television_studio"
          },
          {
            "confidence": 0.05266610532999039,
            "scene": "lobby"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 8,
            "x2": 1593,
            "y1": 616,
            "y2": 1194
          },
          "detection_confidence": 0.3084010183811188,
          "label": "indoor floor wooden lam",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.41194375,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3084010183811188,
            "final_score": 0.7531437883169025,
            "fragmentation_score": 0.25,
            "largest_component_ratio": 0.9999898853504473,
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
    "workerId": "uo65furk2t4j3r"
  },

  //School- Nap Sleep Area
  "6a478667125096412ecb2512": {
    "delayTime": 21496,
    "executionTime": 16218,
    "id": "sync-76e35f27-a87f-472e-b4dd-11987c3dfbb5-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7266910093090857,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1275.384765625,
          "fy": 1275.3848876953125,
          "gravity": [
            -0.010816216468811035,
            -0.9999260902404785,
            0.005549133289605379
          ],
          "height_meters": 1.634352796241524,
          "horizontal_fov_degrees": 64.19694800894985,
          "intrinsic_matrix": [
            [
              1275.384765625,
              0,
              800
            ],
            [
              0,
              1275.3848876953125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": 0.3179435449559482,
          "roll_degrees": 0.6196831597971286,
          "uncertainty": {
            "focal_pixels": 333.4477844238281,
            "pitch_degrees": 2.4267476425287247,
            "roll_degrees": 0.8644167351649134,
            "vertical_fov_degrees": 16.320550899090584
          },
          "vertical_fov_degrees": 50.38891805454159
        },
        "confidence": {
          "camera_calibration": 0.7266910093090857,
          "camera_height": 0.9085209169963865,
          "depth": 0.9819080233573914,
          "dimensions": 0.9857938618164631,
          "floor_plane": 0.9644846545411578,
          "floor_rotation": 0.9666,
          "overall": 0.8988936959110317,
          "segmentation": 0.7582574053567378
        },
        "floor": {
          "alternate_floor_rotation": 25.41,
          "floor_rotation": 115.41,
          "median_scene_depth_meters": 5.257932662963867,
          "plane": {
            "confidence": 0.9644846545411578,
            "distance": 1.634352796241524,
            "gravity_alignment": 0.9962534190499192,
            "inlier_ratio": 0.99965,
            "median_residual_meters": 0.005188654390323899,
            "normal": [
              0.008439164167451973,
              -0.9968555730579542,
              -0.07878925670072276
            ]
          },
          "visible_area_ratio": 0.2293828125,
          "visible_dimensions_meters": {
            "confidence": 0.9857938618164631,
            "depth_meters": 4.3997733020189616,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 11.377958813244703,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.29471049533827
          },
          "visible_polygon_pixels": [
            [
              1599,
              1040
            ],
            [
              1260,
              984
            ],
            [
              1195,
              1024
            ],
            [
              1144,
              868
            ],
            [
              1038,
              841
            ],
            [
              1019,
              784
            ],
            [
              903,
              837
            ],
            [
              727,
              803
            ],
            [
              545,
              890
            ],
            [
              533,
              853
            ],
            [
              485,
              853
            ],
            [
              477,
              916
            ],
            [
              182,
              1041
            ],
            [
              152,
              986
            ],
            [
              0,
              954
            ],
            [
              0,
              1189
            ],
            [
              1591,
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
            "confidence": 0.3200840950012207,
            "scene": "playroom"
          },
          {
            "confidence": 0.31461867690086365,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.11635930836200714,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.07320920377969742,
            "scene": "kindergarden_classroom"
          },
          {
            "confidence": 0.029304927214980125,
            "scene": "nursery"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1593,
            "y1": 761,
            "y2": 1195
          },
          "detection_confidence": 0.3188076913356781,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.22590208333333334,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3188076913356781,
            "final_score": 0.7582574053567378,
            "fragmentation_score": 0.3333333333333333,
            "largest_component_ratio": 0.9979895419291175,
            "lower_half_score": 1,
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
    "workerId": "uo65furk2t4j3r"
  },

  //School- Playroom-Area
  "6a478645125096412ecb2511": {
    "delayTime": 13868,
    "executionTime": 17518,
    "id": "sync-be0c6bca-01f4-4cbd-801d-7973f40d7163-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.71257320345034,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 835.947265625,
          "fy": 835.9473266601562,
          "gravity": [
            -0.0016958870692178607,
            -0.9999898076057434,
            -0.0041911606676876545
          ],
          "height_meters": 1.1841044994372347,
          "horizontal_fov_degrees": 87.48244258773566,
          "intrinsic_matrix": [
            [
              835.947265625,
              0,
              800
            ],
            [
              0,
              835.9473266601562,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -0.24013651121082233,
          "roll_degrees": 0.09715836038616034,
          "uncertainty": {
            "focal_pixels": 202.1715545654297,
            "pitch_degrees": 1.8853238831071029,
            "roll_degrees": 1.0642193518207972,
            "vertical_fov_degrees": 18.566144635914235
          },
          "vertical_fov_degrees": 71.3376785597664
        },
        "confidence": {
          "camera_calibration": 0.71257320345034,
          "camera_height": 0.9110839102007358,
          "depth": 0.9819713830947876,
          "dimensions": 0.9902155147048678,
          "floor_plane": 0.9755387867621694,
          "floor_rotation": 0.947,
          "overall": 0.9020152288530746,
          "segmentation": 0.7957238037586212
        },
        "floor": {
          "alternate_floor_rotation": 138.79,
          "floor_rotation": 48.79,
          "median_scene_depth_meters": 2.771404266357422,
          "plane": {
            "confidence": 0.9755387867621694,
            "distance": 1.1841044994372347,
            "gravity_alignment": 0.9997050252567052,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0036603327433757382,
            "normal": [
              0.0038758827200829527,
              -0.9996051786136023,
              -0.0278292008869896
            ]
          },
          "visible_area_ratio": 0.20891197916666668,
          "visible_dimensions_meters": {
            "confidence": 0.9902155147048678,
            "depth_meters": 2.975703342287488,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 7.892349766482642,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.627488356212633
          },
          "visible_polygon_pixels": [
            [
              106,
              1125
            ],
            [
              114,
              1199
            ],
            [
              1599,
              1199
            ],
            [
              1592,
              1072
            ],
            [
              709,
              796
            ],
            [
              301,
              792
            ],
            [
              293,
              833
            ],
            [
              182,
              883
            ],
            [
              209,
              979
            ],
            [
              281,
              911
            ],
            [
              458,
              912
            ],
            [
              472,
              1020
            ],
            [
              434,
              1093
            ],
            [
              208,
              1104
            ],
            [
              203,
              990
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.45798179507255554,
            "scene": "playroom"
          },
          {
            "confidence": 0.2292737513780594,
            "scene": "kindergarden_classroom"
          },
          {
            "confidence": 0.05892102047801018,
            "scene": "childs_room"
          },
          {
            "confidence": 0.035297077149152756,
            "scene": "classroom"
          },
          {
            "confidence": 0.027574488893151283,
            "scene": "pet_shop"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 70,
            "x2": 1592,
            "y1": 764,
            "y2": 1195
          },
          "detection_confidence": 0.34366267919540405,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.20657291666666666,
            "bottom_contact_score": 0.93125,
            "detection_confidence": 0.34366267919540405,
            "final_score": 0.7957238037586212,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
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
    "workerId": "uo65furk2t4j3r"
  },

  //School- Reception Area
  "6a46243bac0c56bac243c30f": {
    "delayTime": 10883,
    "executionTime": 14728,
    "id": "sync-d7c99314-8589-41e4-acd9-37f2473a036e-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.773077905672738,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1972.81591796875,
          "fy": 1972.81591796875,
          "gravity": [
            -0.004854852333664894,
            -0.9997634887695312,
            -0.02119886875152588
          ],
          "height_meters": 1.4042334409679498,
          "horizontal_fov_degrees": 44.146265172027924,
          "intrinsic_matrix": [
            [
              1972.81591796875,
              0,
              800
            ],
            [
              0,
              1972.81591796875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -1.214696743529229,
          "roll_degrees": 0.2781983273301002,
          "uncertainty": {
            "focal_pixels": 550.3331909179688,
            "pitch_degrees": 1.670527560480013,
            "roll_degrees": 0.6270957826764436,
            "vertical_fov_degrees": 12.584935173129375
          },
          "vertical_fov_degrees": 33.83257707247112
        },
        "confidence": {
          "camera_calibration": 0.773077905672738,
          "camera_height": 0.9257425844487013,
          "depth": 0.9827855825424194,
          "dimensions": 0.9897570847432966,
          "floor_plane": 0.9743927118582414,
          "floor_rotation": 0.976,
          "overall": 0.9108025811707154,
          "segmentation": 0.7538621989296109
        },
        "floor": {
          "alternate_floor_rotation": 21.77,
          "floor_rotation": 111.77,
          "median_scene_depth_meters": 9.075002670288086,
          "plane": {
            "confidence": 0.9743927118582414,
            "distance": 1.4042334409679498,
            "gravity_alignment": 0.9993202699876458,
            "inlier_ratio": 0.9991833333333333,
            "median_residual_meters": 0.00375945132089317,
            "normal": [
              -0.0013394088597847582,
              -0.9983230273143332,
              -0.05787347508014029
            ]
          },
          "visible_area_ratio": 0.2994760416666667,
          "visible_dimensions_meters": {
            "confidence": 0.9897570847432966,
            "depth_meters": 12.468572504169737,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 45.011336555645585,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 9.21695837938072
          },
          "visible_polygon_pixels": [
            [
              1593,
              662
            ],
            [
              1191,
              655
            ],
            [
              899,
              777
            ],
            [
              539,
              790
            ],
            [
              454,
              761
            ],
            [
              478,
              718
            ],
            [
              203,
              773
            ],
            [
              200,
              1012
            ],
            [
              0,
              1091
            ],
            [
              0,
              1199
            ],
            [
              1301,
              1199
            ],
            [
              1341,
              1141
            ],
            [
              1258,
              1142
            ],
            [
              1311,
              1014
            ],
            [
              1270,
              1023
            ],
            [
              1341,
              949
            ],
            [
              1307,
              936
            ],
            [
              1383,
              855
            ],
            [
              1477,
              847
            ],
            [
              1445,
              825
            ],
            [
              1467,
              754
            ],
            [
              1559,
              754
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.8563557863235474,
            "scene": "reception"
          },
          {
            "confidence": 0.09256178140640259,
            "scene": "elevator_lobby"
          },
          {
            "confidence": 0.04123224318027496,
            "scene": "lobby"
          },
          {
            "confidence": 0.003535996424034238,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.0026240632869303226,
            "scene": "office"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 8,
            "x2": 1592,
            "y1": 637,
            "y2": 1195
          },
          "detection_confidence": 0.31447041034698486,
          "label": "indoor floor wooden",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.2986296875,
            "bottom_contact_score": 0.83,
            "detection_confidence": 0.31447041034698486,
            "final_score": 0.7538621989296109,
            "fragmentation_score": 0.5,
            "largest_component_ratio": 0.99997383883677,
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
    "workerId": "rnhic1ngizavgh"
  },

  //School- Staff Room
  "6a4786b1125096412ecb2515": {
    "delayTime": 9744,
    "executionTime": 22264,
    "id": "sync-c6abbed5-0d5c-4397-a0a3-430925c9279a-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8542813488563432,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 2359.28662109375,
          "fy": 2359.28662109375,
          "gravity": [
            -0.023014245554804802,
            -0.9849848747253418,
            -0.17109985649585724
          ],
          "height_meters": 2.075752488470151,
          "horizontal_fov_degrees": 37.46210886156463,
          "intrinsic_matrix": [
            [
              2359.28662109375,
              0,
              800
            ],
            [
              0,
              2359.28662109375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -9.851773505046243,
          "roll_degrees": 1.3383407765879138,
          "uncertainty": {
            "focal_pixels": 349.7457275390625,
            "pitch_degrees": 2.8488230242710704,
            "roll_degrees": 0.9398158871037717,
            "vertical_fov_degrees": 5.7384227047739405
          },
          "vertical_fov_degrees": 28.537295333500314
        },
        "confidence": {
          "camera_calibration": 0.8542813488563432,
          "camera_height": 0.9428154189725925,
          "depth": 0.9790695905685425,
          "dimensions": 0.9879499371962169,
          "floor_plane": 0.969874842990542,
          "floor_rotation": 0.8008,
          "overall": 0.8964391534510028,
          "segmentation": 0.7402829355727825
        },
        "floor": {
          "alternate_floor_rotation": 88.03,
          "floor_rotation": 178.03,
          "median_scene_depth_meters": 7.772939682006836,
          "plane": {
            "confidence": 0.969874842990542,
            "distance": 2.075752488470151,
            "gravity_alignment": 0.9988838883920435,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0044852902031800035,
            "normal": [
              -0.019915668778803852,
              -0.9758886027560033,
              -0.2173586923682338
            ]
          },
          "visible_area_ratio": 0.415265625,
          "visible_dimensions_meters": {
            "confidence": 0.9879499371962169,
            "depth_meters": 8.258089684368326,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 18.89208009387439,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.6499186474267695
          },
          "visible_polygon_pixels": [
            [
              26,
              808
            ],
            [
              142,
              812
            ],
            [
              0,
              993
            ],
            [
              0,
              1190
            ],
            [
              1599,
              1192
            ],
            [
              1599,
              582
            ],
            [
              1482,
              493
            ],
            [
              1409,
              546
            ],
            [
              1404,
              712
            ],
            [
              1345,
              648
            ],
            [
              1333,
              759
            ],
            [
              1258,
              689
            ],
            [
              1139,
              746
            ],
            [
              1131,
              797
            ],
            [
              1034,
              723
            ],
            [
              970,
              732
            ],
            [
              942,
              803
            ],
            [
              834,
              714
            ],
            [
              791,
              796
            ],
            [
              764,
              673
            ],
            [
              684,
              759
            ],
            [
              672,
              640
            ],
            [
              622,
              690
            ],
            [
              634,
              518
            ],
            [
              556,
              481
            ],
            [
              496,
              522
            ],
            [
              446,
              490
            ],
            [
              343,
              782
            ],
            [
              234,
              758
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.3870922029018402,
            "scene": "conference_room"
          },
          {
            "confidence": 0.19912634789943695,
            "scene": "library/indoor"
          },
          {
            "confidence": 0.09779447317123413,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.051894161850214005,
            "scene": "dining_hall"
          },
          {
            "confidence": 0.028262704610824585,
            "scene": "conference_center"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 449,
            "y2": 1193
          },
          "detection_confidence": 0.3254355788230896,
          "label": "indoor floor wooden",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.4144640625,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3254355788230896,
            "final_score": 0.7402829355727825,
            "fragmentation_score": 0.05555555555555555,
            "largest_component_ratio": 0.999585307833535,
            "lower_half_score": 0.9596517088458866,
            "sam_score": 0.9765625
          },
          "sam_score": 0.9765625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "30mhauf6mfa3qu"
  },
  //School- Storage-Room
  "6a478694125096412ecb2514": {
    "delayTime": 9258,
    "executionTime": 12712,
    "id": "sync-a46da027-d08b-402a-9a73-c72775397853-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.9264638575303082,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 689.6944580078125,
          "fy": 689.6943969726562,
          "gravity": [
            -0.006075908429920673,
            -0.8762456774711609,
            -0.48182639479637146
          ],
          "height_meters": 1.8023263444009208,
          "horizontal_fov_degrees": 98.46956001869904,
          "intrinsic_matrix": [
            [
              689.6944580078125,
              0,
              800
            ],
            [
              0,
              689.6943969726562,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -28.80475529611426,
          "roll_degrees": 0.39723859944478473,
          "uncertainty": {
            "focal_pixels": 22.18843650817871,
            "pitch_degrees": 1.554288412976974,
            "roll_degrees": 1.2148588538003111,
            "vertical_fov_degrees": 2.581703930785392
          },
          "vertical_fov_degrees": 82.04330340446604
        },
        "confidence": {
          "camera_calibration": 0.9264638575303082,
          "camera_height": 0.9516460759083067,
          "depth": 0.9768246412277222,
          "dimensions": 0.9815746787492258,
          "floor_plane": 0.9539366968730641,
          "floor_rotation": 0.8921,
          "overall": 0.9051594164566321,
          "segmentation": 0.6535699649077975
        },
        "floor": {
          "alternate_floor_rotation": 179.58,
          "floor_rotation": 89.58,
          "median_scene_depth_meters": 2.5885608196258545,
          "plane": {
            "confidence": 0.9539366968730641,
            "distance": 1.8023263444009208,
            "gravity_alignment": 0.9992505268924091,
            "inlier_ratio": 0.99005,
            "median_residual_meters": 0.006140761275812645,
            "normal": [
              -0.0022111395894328896,
              -0.8570511029490679,
              -0.5152266664250814
            ]
          },
          "visible_area_ratio": 0.41163229166666665,
          "visible_dimensions_meters": {
            "confidence": 0.9815746787492258,
            "depth_meters": 6.038414099802579,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 11.861938437136597,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.773124006794427
          },
          "visible_polygon_pixels": [
            [
              0,
              753
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
              1598,
              783
            ],
            [
              1541,
              783
            ],
            [
              1513,
              853
            ],
            [
              1317,
              795
            ],
            [
              1376,
              770
            ],
            [
              1311,
              701
            ],
            [
              1412,
              652
            ],
            [
              1327,
              588
            ],
            [
              1265,
              661
            ],
            [
              1230,
              878
            ],
            [
              1085,
              788
            ],
            [
              1049,
              838
            ],
            [
              1022,
              705
            ],
            [
              984,
              752
            ],
            [
              1041,
              758
            ],
            [
              937,
              825
            ],
            [
              939,
              760
            ],
            [
              832,
              745
            ],
            [
              866,
              550
            ],
            [
              801,
              530
            ],
            [
              785,
              405
            ],
            [
              660,
              415
            ],
            [
              585,
              578
            ],
            [
              443,
              677
            ],
            [
              419,
              762
            ],
            [
              505,
              772
            ],
            [
              362,
              869
            ],
            [
              232,
              743
            ],
            [
              148,
              790
            ],
            [
              114,
              679
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.5615087747573853,
            "scene": "playroom"
          },
          {
            "confidence": 0.2560373544692993,
            "scene": "kindergarden_classroom"
          },
          {
            "confidence": 0.06474873423576355,
            "scene": "classroom"
          },
          {
            "confidence": 0.030972616747021675,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.019149454310536385,
            "scene": "library/indoor"
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
            "area_ratio": 0.4101375,
            "bottom_contact_score": 1,
            "detection_confidence": 0.05,
            "final_score": 0.6535699649077975,
            "fragmentation_score": 0.038461538461538464,
            "largest_component_ratio": 0.982703971229161,
            "lower_half_score": 0.9533299300031494,
            "sam_score": 0.9765625
          },
          "sam_score": 0.9765625
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Sport
  //Sport-AerobicRoom
  "6a47885c125096412ecb251c": {
    "delayTime": 11782,
    "executionTime": 16610,
    "id": "sync-b08ecea7-13fb-45aa-baf9-02d8a82930b1-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.824588679030083,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1413.880615234375,
          "fy": 1413.880859375,
          "gravity": [
            0.015619732439517975,
            -0.9982664585113525,
            -0.05674649029970169
          ],
          "height_meters": 1.0981119798269918,
          "horizontal_fov_degrees": 59.00397567355666,
          "intrinsic_matrix": [
            [
              1413.880615234375,
              0,
              800
            ],
            [
              0,
              1413.880859375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -3.2530818575634384,
          "roll_degrees": -0.8963359700645284,
          "uncertainty": {
            "focal_pixels": 233.66082763671875,
            "pitch_degrees": 1.9037957028305792,
            "roll_degrees": 0.8393742200990318,
            "vertical_fov_degrees": 9.630879210872507
          },
          "vertical_fov_degrees": 45.9892243799212
        },
        "confidence": {
          "camera_calibration": 0.824588679030083,
          "camera_height": 0.9087736377301766,
          "depth": 0.9652501344680786,
          "dimensions": 0.9706010480574837,
          "floor_plane": 0.9265026201437092,
          "floor_rotation": 0.9514,
          "overall": 0.8988524412510542,
          "segmentation": 0.7448509693278493
        },
        "floor": {
          "alternate_floor_rotation": 154.87,
          "floor_rotation": 64.87,
          "median_scene_depth_meters": 5.801394462585449,
          "plane": {
            "confidence": 0.9265026201437092,
            "distance": 1.0981119798269916,
            "gravity_alignment": 0.9998889690325794,
            "inlier_ratio": 0.9638833333333333,
            "median_residual_meters": 0.00831252604942101,
            "normal": [
              0.030464188665279047,
              -0.9979955238699146,
              -0.05546951905849583
            ]
          },
          "visible_area_ratio": 0.2418765625,
          "visible_dimensions_meters": {
            "confidence": 0.9706010480574837,
            "depth_meters": 6.625159752166088,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 9.101784172322432,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 6.810348420256638
          },
          "visible_polygon_pixels": [
            [
              0,
              680
            ],
            [
              0,
              1194
            ],
            [
              1599,
              1193
            ],
            [
              1599,
              986
            ],
            [
              909,
              747
            ],
            [
              909,
              800
            ],
            [
              1094,
              844
            ],
            [
              1093,
              872
            ],
            [
              127,
              993
            ],
            [
              121,
              864
            ],
            [
              84,
              821
            ],
            [
              123,
              752
            ],
            [
              100,
              676
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.24149052798748016,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.20511655509471893,
            "scene": "amusement_park"
          },
          {
            "confidence": 0.11711718887090683,
            "scene": "water_park"
          },
          {
            "confidence": 0.06366503238677979,
            "scene": "swimming_pool/indoor"
          },
          {
            "confidence": 0.055013250559568405,
            "scene": "boat_deck"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1593,
            "y1": 649,
            "y2": 1193
          },
          "detection_confidence": 0.3179868161678314,
          "label": "indoor floor room",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.2417015625,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3179868161678314,
            "final_score": 0.7448509693278493,
            "fragmentation_score": 0.08333333333333333,
            "largest_component_ratio": 0.9998383854055557,
            "lower_half_score": 1,
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
    "workerId": "rnhic1ngizavgh"
  },
  //Sport- fitness-Area
  "6a47881a125096412ecb2519": {
    "delayTime": 9895,
    "executionTime": 15122,
    "id": "sync-b398f5a8-b473-45ab-9167-b03d6222949d-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8703993095950812,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 2122.51806640625,
          "fy": 2122.51806640625,
          "gravity": [
            0.002842132467776537,
            -0.9824743866920471,
            -0.18637609481811523
          ],
          "height_meters": 1.1685196715789476,
          "horizontal_fov_degrees": 41.30393659044048,
          "intrinsic_matrix": [
            [
              2122.51806640625,
              0,
              800
            ],
            [
              0,
              2122.51806640625,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -10.7413723472682,
          "roll_degrees": -0.16572968437274635,
          "uncertainty": {
            "focal_pixels": 259.0086975097656,
            "pitch_degrees": 2.5868427943621803,
            "roll_degrees": 0.899526308737159,
            "vertical_fov_degrees": 5.1765807351588
          },
          "vertical_fov_degrees": 31.569400721176564
        },
        "confidence": {
          "camera_calibration": 0.8703993095950812,
          "camera_height": 0.9414219534394762,
          "depth": 0.9597159624099731,
          "dimensions": 0.8368210425881537,
          "floor_plane": 0.9670526064703842,
          "floor_rotation": 0.8009,
          "overall": 0.8711544544367695,
          "segmentation": 0.7217703065543175
        },
        "floor": {
          "alternate_floor_rotation": 90.58,
          "floor_rotation": 0.58,
          "median_scene_depth_meters": 5.976963520050049,
          "plane": {
            "confidence": 0.9670526064703842,
            "distance": 1.1685196715789476,
            "gravity_alignment": 0.9999452352092891,
            "inlier_ratio": 0.99985,
            "median_residual_meters": 0.004929216085721055,
            "normal": [
              -0.007498535261599018,
              -0.9827499293583253,
              -0.18478730561144455
            ]
          },
          "visible_area_ratio": 0.5569369791666666,
          "visible_dimensions_meters": {
            "confidence": 0.8368210425881537,
            "depth_meters": 27.580810753392566,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 34.2392927183341,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.982493651322971
          },
          "visible_polygon_pixels": [
            [
              0,
              514
            ],
            [
              0,
              1194
            ],
            [
              1599,
              1193
            ],
            [
              1590,
              733
            ],
            [
              1246,
              479
            ],
            [
              1034,
              390
            ],
            [
              851,
              387
            ],
            [
              808,
              286
            ],
            [
              752,
              358
            ],
            [
              799,
              390
            ],
            [
              777,
              471
            ],
            [
              920,
              461
            ],
            [
              916,
              532
            ],
            [
              864,
              509
            ],
            [
              865,
              591
            ],
            [
              249,
              589
            ],
            [
              254,
              480
            ],
            [
              203,
              452
            ],
            [
              330,
              439
            ],
            [
              293,
              509
            ],
            [
              335,
              546
            ],
            [
              381,
              512
            ],
            [
              373,
              407
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.9887552857398987,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.0018657090840861201,
            "scene": "amusement_park"
          },
          {
            "confidence": 0.0013999163638800383,
            "scene": "martial_arts_gym"
          },
          {
            "confidence": 0.000946862855926156,
            "scene": "assembly_line"
          },
          {
            "confidence": 0.0008359387284144759,
            "scene": "water_park"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 249,
            "y2": 1193
          },
          "detection_confidence": 0.2905542850494385,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.5571864583333334,
            "bottom_contact_score": 1,
            "detection_confidence": 0.2905542850494385,
            "final_score": 0.7217703065543175,
            "fragmentation_score": 0.05,
            "largest_component_ratio": 0.9977434992400435,
            "lower_half_score": 0.8744772377589041,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Sport-Pick-and-Ball-Area
  "6a478873125096412ecb251d": {
    "delayTime": 22144,
    "executionTime": 5028,
    "id": "sync-d11b118e-631b-4ad7-a997-86e8f5c6110c-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7031462094122596,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 13412.547119140625,
          "fy": 13412.546875,
          "gravity": [
            0.001070447382517159,
            -0.9987402558326721,
            -0.050167858600616455
          ],
          "height_meters": 1.3334071490822867,
          "horizontal_fov_degrees": 26.387086895983185,
          "intrinsic_matrix": [
            [
              3412.547119140625,
              0,
              800
            ],
            [
              0,
              3412.546875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -2.875613587516799,
          "roll_degrees": -0.06140330725692207,
          "uncertainty": {
            "focal_pixels": 1600.062255859375,
            "pitch_degrees": 2.9750605015019502,
            "roll_degrees": 0.7713007128492766,
            "vertical_fov_degrees": 12.959145869828742
          },
          "vertical_fov_degrees": 19.94384501792458
        },
        "confidence": {
          "camera_calibration": 0.7031462094122596,
          "camera_height": 0.8893643253618924,
          "depth": 0.9659799337387085,
          "dimensions": 0.7534594809171533,
          "floor_plane": 0.9461487022928832,
          "floor_rotation": 0.9985,
          "overall": 0.8616592379510667,
          "segmentation": 0.7750160139345699
        },
        "floor": {
          "alternate_floor_rotation": 0.72,
          "floor_rotation": 90.72,
          "median_scene_depth_meters": 25.887853622436523,
          "plane": {
            "confidence": 0.9461487022928832,
            "distance": 1.3334071490822867,
            "gravity_alignment": 0.9999769874853792,
            "inlier_ratio": 0.9981833333333333,
            "median_residual_meters": 0.007940754280628903,
            "normal": [
              -0.0044304351665331925,
              -0.9989223166399992,
              -0.04620147792887495
            ]
          },
          "visible_area_ratio": 0.501978125,
          "visible_dimensions_meters": {
            "confidence": 0.7534594809171533,
            "depth_meters": 16.2069923255484,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 97.15337611789788,
            "valid_polygon_vertex_ratio": 0.5,
            "width_meters": 9.954360937151623
          },
          "visible_polygon_pixels": [
            [
              1599,
              644
            ],
            [
              1320,
              549
            ],
            [
              1316,
              591
            ],
            [
              352,
              591
            ],
            [
              339,
              564
            ],
            [
              0,
              670
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
            "confidence": 0.5454027056694031,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.2489868551492691,
            "scene": "basketball_court/indoor"
          },
          {
            "confidence": 0.11020321398973465,
            "scene": "volleyball_court/outdoor"
          },
          {
            "confidence": 0.04334854334592819,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.016262665390968323,
            "scene": "soccer_field"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 5,
            "x2": 1595,
            "y1": 486,
            "y2": 1194
          },
          "detection_confidence": 0.3996203541755676,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.4957947916666667,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3996203541755676,
            "final_score": 0.7750160139345699,
            "fragmentation_score": 0.25,
            "largest_component_ratio": 0.9999831919708044,
            "lower_half_score": 0.9671129898752634,
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
    "workerId": "ql97bncg8cq7qo"
  },
  //Sport- Sport-Court
  " 6a462dcf12f464296f8a98e3": {
    "delayTime": 66106,
    "executionTime": 13808,
    "id": "sync-7f103c0a-b08b-47e2-8ec2-e5420a912bad-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.5891849566466404,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 5968.14453125,
          "fy": 5968.14453125,
          "gravity": [
            -0.01112901046872139,
            -0.9978617429733276,
            -0.06440597027540207
          ],
          "height_meters": 1.2711274549586178,
          "horizontal_fov_degrees": 15.269406983940426,
          "intrinsic_matrix": [
            [
              5968.14453125,
              0,
              800
            ],
            [
              0,
              5968.14453125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -3.692746470522448,
          "roll_degrees": 0.6389211880072629,
          "uncertainty": {
            "focal_pixels": 4738.7216796875,
            "pitch_degrees": 5.508243622197218,
            "roll_degrees": 0.9237190522207557,
            "vertical_fov_degrees": 12.806605547547555
          },
          "vertical_fov_degrees": 11.481740093861841
        },
        "confidence": {
          "camera_calibration": 0.5891849566466404,
          "camera_height": 0.869121075836368,
          "depth": 0.9760286808013916,
          "dimensions": null,
          "floor_plane": 0.9574892736625991,
          "floor_rotation": 0.9972,
          "overall": 0.8581355317130943,
          "segmentation": 0.7597892033315669
        },
        "floor": {
          "alternate_floor_rotation": 172.33,
          "floor_rotation": 82.33,
          "median_scene_depth_meters": 19.254474639892578,
          "plane": {
            "confidence": 0.9574892736625991,
            "distance": 1.2711274549586178,
            "gravity_alignment": 0.9999952747593744,
            "inlier_ratio": 0.9997166666666667,
            "median_residual_meters": 0.006355217193391383,
            "normal": [
              -0.009774824080467641,
              -0.9976942874222434,
              -0.06716071514820222
            ]
          },
          "visible_area_ratio": 0.7338026041666666,
          "visible_dimensions_meters": null,
          "visible_polygon_pixels": [
            [
              0,
              306
            ],
            [
              6,
              1193
            ],
            [
              1599,
              1190
            ],
            [
              1590,
              388
            ],
            [
              723,
              289
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.9580687880516052,
            "scene": "basketball_court/indoor"
          },
          {
            "confidence": 0.03142809867858887,
            "scene": "volleyball_court/outdoor"
          },
          {
            "confidence": 0.0060274479910731316,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.001920931157656014,
            "scene": "soccer_field"
          },
          {
            "confidence": 0.0007089391001500189,
            "scene": "football_field"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1593,
            "y1": 276,
            "y2": 1193
          },
          "detection_confidence": 0.3421606421470642,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 0.9324826388888889,
            "area_ratio": 0.732153125,
            "bottom_contact_score": 0.998125,
            "detection_confidence": 0.3421606421470642,
            "final_score": 0.7597892033315669,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
            "lower_half_score": 0.6802702360475026,
            "sam_score": 0.98828125
          },
          "sam_score": 0.98828125
        },
        "warnings": [
          "visible_floor_dimensions_unavailable",
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "30mhauf6mfa3qu"
  },
  //Sport- Recreation
  "6a478802125096412ecb2518": {
    "delayTime": 9889,
    "executionTime": 15373,
    "id": "sync-e9ad8ff9-e6ef-4598-8390-7c6a568fbc48-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7862789160634176,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 3224.356689453125,
          "fy": 3224.356689453125,
          "gravity": [
            0.004061679355800152,
            -0.9966405034065247,
            -0.08180040121078491
          ],
          "height_meters": 1.6750053786759789,
          "horizontal_fov_degrees": 27.868720559046324,
          "intrinsic_matrix": [
            [
              3224.356689453125,
              0,
              800
            ],
            [
              0,
              3224.356689453125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -4.692060348929613,
          "roll_degrees": -0.23347680996579545,
          "uncertainty": {
            "focal_pixels": 987.9252319335938,
            "pitch_degrees": 2.837230058815443,
            "roll_degrees": 0.7411596750113921,
            "vertical_fov_degrees": 8.930441603940407
          },
          "vertical_fov_degrees": 21.082476826153435
        },
        "confidence": {
          "camera_calibration": 0.7862789160634176,
          "camera_height": 0.9200317526084888,
          "depth": 0.9782953262329102,
          "dimensions": 0.9838566969789472,
          "floor_plane": 0.959641742447368,
          "floor_rotation": 0.9828,
          "overall": 0.9049661656417298,
          "segmentation": 0.723858725160977
        },
        "floor": {
          "alternate_floor_rotation": 21.64,
          "floor_rotation": 111.64,
          "median_scene_depth_meters": 13.399089813232422,
          "plane": {
            "confidence": 0.959641742447368,
            "distance": 1.6750053786759789,
            "gravity_alignment": 0.9999114587810384,
            "inlier_ratio": 0.9961833333333333,
            "median_residual_meters": 0.0057648323963259696,
            "normal": [
              -0.008781274843687629,
              -0.9963191887017513,
              -0.0852699445103835
            ]
          },
          "visible_area_ratio": 0.3787859375,
          "visible_dimensions_meters": {
            "confidence": 0.9838566969789472,
            "depth_meters": 13.313339606256404,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 33.77684207266331,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 8.431336880937685
          },
          "visible_polygon_pixels": [
            [
              1599,
              596
            ],
            [
              1407,
              639
            ],
            [
              1376,
              702
            ],
            [
              1304,
              644
            ],
            [
              1213,
              686
            ],
            [
              1198,
              945
            ],
            [
              1184,
              775
            ],
            [
              944,
              779
            ],
            [
              938,
              1135
            ],
            [
              913,
              935
            ],
            [
              596,
              845
            ],
            [
              623,
              983
            ],
            [
              569,
              1003
            ],
            [
              555,
              825
            ],
            [
              460,
              799
            ],
            [
              470,
              934
            ],
            [
              428,
              943
            ],
            [
              430,
              837
            ],
            [
              360,
              770
            ],
            [
              241,
              733
            ],
            [
              221,
              848
            ],
            [
              220,
              663
            ],
            [
              0,
              703
            ],
            [
              0,
              1194
            ],
            [
              1599,
              1196
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.9921256899833679,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.0014550237683579326,
            "scene": "basement"
          },
          {
            "confidence": 0.001130908727645874,
            "scene": "conference_room"
          },
          {
            "confidence": 0.0008622498717159033,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.00035947677679359913,
            "scene": "office"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 447,
            "y2": 1194
          },
          "detection_confidence": 0.292944997549057,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.37637447916666666,
            "bottom_contact_score": 1,
            "detection_confidence": 0.292944997549057,
            "final_score": 0.723858725160977,
            "fragmentation_score": 0.05263157894736842,
            "largest_component_ratio": 0.9267642626539669,
            "lower_half_score": 0.9910591595526951,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Sport- Table Tennis
  "6a478887125096412ecb251e": {
    "delayTime": 33163,
    "executionTime": 16412,
    "id": "sync-4badc864-b578-47e9-b7d2-a3a6a77291ed-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.852578398212639,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1496.45654296875,
          "fy": 1496.45654296875,
          "gravity": [
            0.007841529324650764,
            -0.9849911332130432,
            -0.17242677509784698
          ],
          "height_meters": 1.8490614244955972,
          "horizontal_fov_degrees": 56.25758051395663,
          "intrinsic_matrix": [
            [
              1496.45654296875,
              0,
              800
            ],
            [
              0,
              1496.45654296875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -9.928946958704572,
          "roll_degrees": -0.45607665040005135,
          "uncertainty": {
            "focal_pixels": 187.82887268066406,
            "pitch_degrees": 2.455704656401817,
            "roll_degrees": 0.9051531039527801,
            "vertical_fov_degrees": 7.026046978896982
          },
          "vertical_fov_degrees": 43.69635036611543
        },
        "confidence": {
          "camera_calibration": 0.852578398212639,
          "camera_height": 0.9373004850782941,
          "depth": 0.9704136848449707,
          "dimensions": 0.9855077444044656,
          "floor_plane": 0.963769361011164,
          "floor_rotation": 0.9823,
          "overall": 0.8994878075782784,
          "segmentation": 0.6045449794964145
        },
        "floor": {
          "alternate_floor_rotation": 170.35,
          "floor_rotation": 80.35,
          "median_scene_depth_meters": 5.561651229858398,
          "plane": {
            "confidence": 0.963769361011164,
            "distance": 1.8490614244955972,
            "gravity_alignment": 0.9989222846856013,
            "inlier_ratio": 0.9984833333333333,
            "median_residual_meters": 0.005288514388893439,
            "normal": [
              0.027770133121559928,
              -0.9765483189269684,
              -0.21349988409206022
            ]
          },
          "visible_area_ratio": 0.2932421875,
          "visible_dimensions_meters": {
            "confidence": 0.9855077444044656,
            "depth_meters": 6.77771301505021,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 12.482561098769693,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.919606950468494
          },
          "visible_polygon_pixels": [
            [
              0,
              748
            ],
            [
              0,
              841
            ],
            [
              107,
              760
            ],
            [
              128,
              948
            ],
            [
              145,
              767
            ],
            [
              193,
              884
            ],
            [
              87,
              1072
            ],
            [
              160,
              1093
            ],
            [
              78,
              1089
            ],
            [
              23,
              1196
            ],
            [
              1599,
              1199
            ],
            [
              1599,
              869
            ],
            [
              1320,
              658
            ],
            [
              1303,
              729
            ],
            [
              1506,
              842
            ],
            [
              1347,
              896
            ],
            [
              1336,
              1114
            ],
            [
              1233,
              930
            ],
            [
              1007,
              938
            ],
            [
              961,
              1161
            ],
            [
              948,
              965
            ],
            [
              890,
              934
            ],
            [
              858,
              1069
            ],
            [
              788,
              780
            ],
            [
              714,
              735
            ],
            [
              722,
              565
            ],
            [
              602,
              587
            ],
            [
              624,
              690
            ],
            [
              297,
              713
            ],
            [
              288,
              803
            ],
            [
              227,
              810
            ],
            [
              220,
              650
            ],
            [
              131,
              756
            ],
            [
              112,
              653
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.3877374827861786,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.3531278967857361,
            "scene": "server_room"
          },
          {
            "confidence": 0.020358940586447716,
            "scene": "locker_room"
          },
          {
            "confidence": 0.01707351766526699,
            "scene": "conference_room"
          },
          {
            "confidence": 0.011106952093541622,
            "scene": "music_studio"
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
            "area_ratio": 0.2853390625,
            "bottom_contact_score": 0.995,
            "detection_confidence": 0.05,
            "final_score": 0.6045449794964145,
            "fragmentation_score": 0.0020491803278688526,
            "largest_component_ratio": 0.9277924107102113,
            "lower_half_score": 0.9691923533953575,
            "sam_score": 0.80859375
          },
          "sam_score": 0.80859375
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
    "workerId": "uo65furk2t4j3r"
  },
  //Sport- Trainig Room
  "6a47882d125096412ecb251a": {
    "delayTime": 13585,
    "executionTime": 14402,
    "id": "sync-8689e1d1-edbc-44c2-8b5e-df3537820a15-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8933603333442041,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1157.8209228515625,
          "fy": 1157.8209228515625,
          "gravity": [
            -0.049729201942682266,
            -0.9590227007865906,
            -0.27893126010894775
          ],
          "height_meters": 1.5491446123687467,
          "horizontal_fov_degrees": 69.28530916701511,
          "intrinsic_matrix": [
            [
              1157.8209228515625,
              0,
              800
            ],
            [
              0,
              1157.8209228515625,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -16.19642928639853,
          "roll_degrees": 2.968049952649167,
          "uncertainty": {
            "focal_pixels": 76.75849914550781,
            "pitch_degrees": 1.9390962548953206,
            "roll_degrees": 1.3162802260641246,
            "vertical_fov_degrees": 4.388904537052712
          },
          "vertical_fov_degrees": 54.787720389475304
        },
        "confidence": {
          "camera_calibration": 0.8933603333442041,
          "camera_height": 0.950699186218514,
          "depth": 0.9527354836463928,
          "dimensions": 0.9904087317477704,
          "floor_plane": 0.9760218293694259,
          "floor_rotation": 0.913,
          "overall": 0.8997922644573398,
          "segmentation": 0.6223202868750713
        },
        "floor": {
          "alternate_floor_rotation": 9.26,
          "floor_rotation": 99.26,
          "median_scene_depth_meters": 3.7496719360351562,
          "plane": {
            "confidence": 0.9760218293694259,
            "distance": 1.5491446123687465,
            "gravity_alignment": 0.9999844983275824,
            "inlier_ratio": 0.9992833333333333,
            "median_residual_meters": 0.0035425105444135685,
            "normal": [
              -0.04858978011962824,
              -0.9605842661732004,
              -0.2737095191045065
            ]
          },
          "visible_area_ratio": 0.293140625,
          "visible_dimensions_meters": {
            "confidence": 0.9904087317477704,
            "depth_meters": 9.257024434701274,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 18.311164960852324,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.143979964718583
          },
          "visible_polygon_pixels": [
            [
              1585,
              961
            ],
            [
              1439,
              949
            ],
            [
              1439,
              903
            ],
            [
              1546,
              902
            ],
            [
              1440,
              785
            ],
            [
              1345,
              785
            ],
            [
              1346,
              746
            ],
            [
              1409,
              741
            ],
            [
              1418,
              679
            ],
            [
              1277,
              678
            ],
            [
              1264,
              648
            ],
            [
              1309,
              632
            ],
            [
              1213,
              602
            ],
            [
              1256,
              563
            ],
            [
              1260,
              479
            ],
            [
              1193,
              429
            ],
            [
              1007,
              432
            ],
            [
              1001,
              460
            ],
            [
              914,
              481
            ],
            [
              739,
              862
            ],
            [
              587,
              859
            ],
            [
              585,
              962
            ],
            [
              623,
              1009
            ],
            [
              576,
              1023
            ],
            [
              500,
              1193
            ],
            [
              1460,
              1199
            ],
            [
              1588,
              1150
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.4014277458190918,
            "scene": "beauty_salon"
          },
          {
            "confidence": 0.2569701075553894,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.03128181770443916,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.02535174787044525,
            "scene": "train_interior"
          },
          {
            "confidence": 0.015451251529157162,
            "scene": "museum/indoor"
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
            "area_ratio": 0.291378125,
            "bottom_contact_score": 0.71375,
            "detection_confidence": 0.05,
            "final_score": 0.6223202868750713,
            "fragmentation_score": 0.037037037037037035,
            "largest_component_ratio": 0.9558759916059816,
            "lower_half_score": 0.8976094207483832,
            "sam_score": 0.984375
          },
          "sam_score": 0.984375
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
    "workerId": "30mhauf6mfa3qu"
  },
  //Sport- Yoga Room
  "6a47884a125096412ecb251b": {
    "delayTime": 20745,
    "executionTime": 15979,
    "id": "sync-48fed243-3212-425c-ab0b-4d5476a921d6-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.5176845297424284,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 2609.7158203125,
          "fy": 2609.716064453125,
          "gravity": [
            -0.014660580083727837,
            -0.9935990571975708,
            -0.11200940608978271
          ],
          "height_meters": 0.8991377748383187,
          "horizontal_fov_degrees": 34.085505807625864,
          "intrinsic_matrix": [
            [
              2609.7158203125,
              0,
              800
            ],
            [
              0,
              2609.716064453125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -6.431162261624613,
          "roll_degrees": 0.845254426005031,
          "uncertainty": {
            "focal_pixels": 1515.2401123046875,
            "pitch_degrees": 7.502184161693625,
            "roll_degrees": 2.2749987684176123,
            "vertical_fov_degrees": 20.546778259360167
          },
          "vertical_fov_degrees": 25.8957384550181
        },
        "confidence": {
          "camera_calibration": 0.5176845297424284,
          "camera_height": 0.8384209475715643,
          "depth": 0.9685829281806946,
          "dimensions": 0.9747514396362315,
          "floor_plane": 0.9368785990905786,
          "floor_rotation": 0.9026,
          "overall": 0.843013619051748,
          "segmentation": 0.7621768891407392
        },
        "floor": {
          "alternate_floor_rotation": 178.19,
          "floor_rotation": 88.19,
          "median_scene_depth_meters": 9.97176456451416,
          "plane": {
            "confidence": 0.9368785990905786,
            "distance": 0.8991377748383187,
            "gravity_alignment": 0.9971395250243889,
            "inlier_ratio": 0.99995,
            "median_residual_meters": 0.009378645887144876,
            "normal": [
              0.0054768681867868345,
              -0.9992117092442748,
              -0.03931874901366173
            ]
          },
          "visible_area_ratio": 0.3182671875,
          "visible_dimensions_meters": {
            "confidence": 0.9747514396362315,
            "depth_meters": 7.288848324793495,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 18.70195455797556,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 6.285696673523167
          },
          "visible_polygon_pixels": [
            [
              0,
              729
            ],
            [
              7,
              1199
            ],
            [
              1599,
              1199
            ],
            [
              1596,
              723
            ],
            [
              1277,
              723
            ],
            [
              1221,
              798
            ],
            [
              1082,
              836
            ],
            [
              1064,
              900
            ],
            [
              1040,
              876
            ],
            [
              965,
              923
            ],
            [
              946,
              972
            ],
            [
              609,
              952
            ],
            [
              503,
              868
            ],
            [
              447,
              898
            ],
            [
              439,
              829
            ],
            [
              528,
              720
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.28965967893600464,
            "scene": "playroom"
          },
          {
            "confidence": 0.18528126180171967,
            "scene": "ballroom"
          },
          {
            "confidence": 0.06272152066230774,
            "scene": "dorm_room"
          },
          {
            "confidence": 0.05035088583827019,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.03255133703351021,
            "scene": "martial_arts_gym"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 706,
            "y2": 1194
          },
          "detection_confidence": 0.3495478332042694,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.3157213541666667,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3495478332042694,
            "final_score": 0.7621768891407392,
            "fragmentation_score": 0.2,
            "largest_component_ratio": 0.9883335945297228,
            "lower_half_score": 1,
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
    "workerId": "30mhauf6mfa3qu"
  },

  //Transport
  //Transport-Aerobridge
  "6a478a4a125096412ecb2529": {
    "delayTime": 12031,
    "executionTime": 17053,
    "id": "sync-f69ed88d-b5e5-4e60-a586-b24eabb4d550-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.51773256226249,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 4035.3203125,
          "fy": 4035.320556640625,
          "gravity": [
            -0.009418992325663567,
            -0.9961654543876648,
            -0.08698081225156784
          ],
          "height_meters": 2.2740448003310894,
          "horizontal_fov_degrees": 22.426915894453114,
          "intrinsic_matrix": [
            [
              4035.3203125,
              0,
              800
            ],
            [
              0,
              4035.320556640625,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -4.989938985899032,
          "roll_degrees": 0.5416753024821486,
          "uncertainty": {
            "focal_pixels": 3103.7470703125,
            "pitch_degrees": 7.2890344482650375,
            "roll_degrees": 1.052727024933722,
            "vertical_fov_degrees": 18.132277359456687
          },
          "vertical_fov_degrees": 16.914362422889617
        },
        "confidence": {
          "camera_calibration": 0.51773256226249,
          "camera_height": 0.8094278194234491,
          "depth": 0.9571177959442139,
          "dimensions": 0.9553244506683519,
          "floor_plane": 0.8883111266708796,
          "floor_rotation": 0.9999,
          "overall": 0.8323218393553736,
          "segmentation": 0.6984391205182305
        },
        "floor": {
          "alternate_floor_rotation": 0.18,
          "floor_rotation": 90.18,
          "median_scene_depth_meters": 14.420612335205078,
          "plane": {
            "confidence": 0.8883111266708796,
            "distance": 2.2740448003310894,
            "gravity_alignment": 0.9998379070904159,
            "inlier_ratio": 0.9224666666666667,
            "median_residual_meters": 0.010933468212080522,
            "normal": [
              0.00685753510207456,
              -0.995487092310467,
              -0.09464894746153163
            ]
          },
          "visible_area_ratio": 0.26305104166666665,
          "visible_dimensions_meters": {
            "confidence": 0.9553244506683519,
            "depth_meters": 12.136206397796727,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 31.926676505532715,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 2.732363387014725
          },
          "visible_polygon_pixels": [
            [
              258,
              1187
            ],
            [
              1419,
              1188
            ],
            [
              1060,
              646
            ],
            [
              575,
              646
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.3535623550415039,
            "scene": "elevator_shaft"
          },
          {
            "confidence": 0.15600386261940002,
            "scene": "bridge"
          },
          {
            "confidence": 0.12322280555963516,
            "scene": "escalator/indoor"
          },
          {
            "confidence": 0.060678742825984955,
            "scene": "subway_station/platform"
          },
          {
            "confidence": 0.05989784747362137,
            "scene": "boat_deck"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 245,
            "x2": 1429,
            "y1": 331,
            "y2": 1195
          },
          "detection_confidence": 0.31048765778541565,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.2589869791666667,
            "bottom_contact_score": 0.72625,
            "detection_confidence": 0.31048765778541565,
            "final_score": 0.6984391205182305,
            "fragmentation_score": 0.030303030303030304,
            "largest_component_ratio": 0.9278881057002946,
            "lower_half_score": 0.9283586892037284,
            "sam_score": 0.9765625
          },
          "sam_score": 0.9765625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "rnhic1ngizavgh"
  },
  //Transport-Bus
  "6a4789ef125096412ecb2526": {
    "delayTime": 11908,
    "executionTime": 17133,
    "id": "sync-0c247e5d-ff7c-422b-b0f3-4074fba69add-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.7542200022954484,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 4131.24072265625,
          "fy": 4131.240234375,
          "gravity": [
            -0.009514320641756058,
            -0.9874023795127869,
            -0.15794330835342407
          ],
          "height_meters": 1.2236329908250019,
          "horizontal_fov_degrees": 21.918954725879264,
          "intrinsic_matrix": [
            [
              4131.24072265625,
              0,
              800
            ],
            [
              0,
              4131.240234375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -9.087538516171639,
          "roll_degrees": 0.5520124202649926,
          "uncertainty": {
            "focal_pixels": 1393.7398681640625,
            "pitch_degrees": 5.144132213959362,
            "roll_degrees": 1.1624180487351283,
            "vertical_fov_degrees": 7.77632234176855
          },
          "vertical_fov_degrees": 16.527128262990328
        },
        "confidence": {
          "camera_calibration": 0.7542200022954484,
          "camera_height": 0.8999974935190223,
          "depth": 0.9304723143577576,
          "dimensions": 0.9820712945989881,
          "floor_plane": 0.9551782364974702,
          "floor_rotation": 0.8578,
          "overall": 0.8717826231813797,
          "segmentation": 0.7227390210009708
        },
        "floor": {
          "alternate_floor_rotation": 178.08,
          "floor_rotation": 88.08,
          "median_scene_depth_meters": 6.560018539428711,
          "plane": {
            "confidence": 0.9551782364974702,
            "distance": 1.2236329908250019,
            "gravity_alignment": 0.9995010214485162,
            "inlier_ratio": 0.98175,
            "median_residual_meters": 0.005339545168834947,
            "normal": [
              0.01864437590238267,
              -0.9894356271126797,
              -0.14376900586478605
            ]
          },
          "visible_area_ratio": 0.4231302083333333,
          "visible_dimensions_meters": {
            "confidence": 0.9820712945989881,
            "depth_meters": 11.903749540443448,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 12.716904709571516,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 2.2584842643232026
          },
          "visible_polygon_pixels": [
            [
              0,
              831
            ],
            [
              0,
              1193
            ],
            [
              98,
              1172
            ],
            [
              390,
              704
            ],
            [
              395,
              772
            ],
            [
              160,
              1193
            ],
            [
              1510,
              1194
            ],
            [
              1578,
              1010
            ],
            [
              1525,
              862
            ],
            [
              1171,
              862
            ],
            [
              1209,
              1029
            ],
            [
              1135,
              1038
            ],
            [
              1100,
              656
            ],
            [
              974,
              635
            ],
            [
              863,
              320
            ],
            [
              641,
              325
            ],
            [
              646,
              446
            ],
            [
              561,
              599
            ],
            [
              196,
              610
            ],
            [
              162,
              794
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.884148359298706,
            "scene": "bus_interior"
          },
          {
            "confidence": 0.10770504176616669,
            "scene": "train_interior"
          },
          {
            "confidence": 0.003292977809906006,
            "scene": "airplane_cabin"
          },
          {
            "confidence": 0.0008083010907284915,
            "scene": "server_room"
          },
          {
            "confidence": 0.0006226327386684716,
            "scene": "playground"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1580,
            "y1": 310,
            "y2": 1194
          },
          "detection_confidence": 0.3233603239059448,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.42329479166666667,
            "bottom_contact_score": 0.91625,
            "detection_confidence": 0.3233603239059448,
            "final_score": 0.7227390210009708,
            "fragmentation_score": 0.0625,
            "largest_component_ratio": 0.9750703189020654,
            "lower_half_score": 0.8970034181261581,
            "sam_score": 0.9765625
          },
          "sam_score": 0.9765625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "30mhauf6mfa3qu"
  },
  //Transport-Food-Court
  "6a478a91125096412ecb252c": {
    "delayTime": 11933,
    "executionTime": 15477,
    "id": "sync-34f81e96-864b-4b85-a4bc-6ae05d3740e4-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8495624074710918,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 3390.3330078125,
          "fy": 3390.3330078125,
          "gravity": [
            -0.0006680351798422635,
            -0.9931348562240601,
            -0.116973876953125
          ],
          "height_meters": 1.4333742513381358,
          "horizontal_fov_degrees": 26.55387670042031,
          "intrinsic_matrix": [
            [
              3390.3330078125,
              0,
              800
            ],
            [
              0,
              3390.3330078125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -6.717488487386602,
          "roll_degrees": 0.03853629748812887,
          "uncertainty": {
            "focal_pixels": 680.9613037109375,
            "pitch_degrees": 2.664948568842215,
            "roll_degrees": 0.6634280668318273,
            "vertical_fov_degrees": 5.585514832938042
          },
          "vertical_fov_degrees": 20.071871791274592
        },
        "confidence": {
          "camera_calibration": 0.8495624074710918,
          "camera_height": 0.9334478957332653,
          "depth": 0.9742636680603027,
          "dimensions": 0.9826942256388594,
          "floor_plane": 0.9567355640971487,
          "floor_rotation": 0.7958,
          "overall": 0.8769650312252036,
          "segmentation": 0.6462514575757575
        },
        "floor": {
          "alternate_floor_rotation": 158.49,
          "floor_rotation": 68.49,
          "median_scene_depth_meters": 8.511397361755371,
          "plane": {
            "confidence": 0.9567355640971487,
            "distance": 1.4333742513381358,
            "gravity_alignment": 0.9999836804644937,
            "inlier_ratio": 0.9908,
            "median_residual_meters": 0.00579917579936251,
            "normal": [
              0.0023291021178439087,
              -0.9925516179561348,
              -0.12180254913581957
            ]
          },
          "visible_area_ratio": 0.35286822916666666,
          "visible_dimensions_meters": {
            "confidence": 0.9826942256388594,
            "depth_meters": 15.14403002935689,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 15.264658338675694,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 6.462849203951417
          },
          "visible_polygon_pixels": [
            [
              0,
              519
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
              1599,
              686
            ],
            [
              1422,
              667
            ],
            [
              1399,
              737
            ],
            [
              1375,
              564
            ],
            [
              1305,
              617
            ],
            [
              1296,
              544
            ],
            [
              1240,
              695
            ],
            [
              1234,
              476
            ],
            [
              1230,
              1068
            ],
            [
              1154,
              821
            ],
            [
              1159,
              982
            ],
            [
              1112,
              821
            ],
            [
              1096,
              910
            ],
            [
              1016,
              843
            ],
            [
              991,
              1178
            ],
            [
              934,
              854
            ],
            [
              904,
              978
            ],
            [
              752,
              1044
            ],
            [
              607,
              981
            ],
            [
              583,
              820
            ],
            [
              577,
              946
            ],
            [
              505,
              864
            ],
            [
              453,
              1140
            ],
            [
              464,
              845
            ],
            [
              370,
              810
            ],
            [
              302,
              1030
            ],
            [
              336,
              760
            ],
            [
              281,
              924
            ],
            [
              313,
              668
            ],
            [
              241,
              514
            ],
            [
              155,
              689
            ],
            [
              159,
              516
            ],
            [
              77,
              640
            ],
            [
              90,
              429
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.5406909584999084,
            "scene": "dining_hall"
          },
          {
            "confidence": 0.06829074025154114,
            "scene": "banquet_hall"
          },
          {
            "confidence": 0.06394486874341965,
            "scene": "dining_room"
          },
          {
            "confidence": 0.05570900812745094,
            "scene": "restaurant"
          },
          {
            "confidence": 0.04977580904960632,
            "scene": "restaurant_patio"
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
            "area_ratio": 0.3515625,
            "bottom_contact_score": 1,
            "detection_confidence": 0.05,
            "final_score": 0.6462514575757575,
            "fragmentation_score": 0.01818181818181818,
            "largest_component_ratio": 0.9443229629629629,
            "lower_half_score": 0.9398311111111111,
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
    "workerId": "rnhic1ngizavgh"
  },
  //Transport-Lidt-Floor
  "6a478a37125096412ecb2528": {
    "delayTime": 9714,
    "executionTime": 14591,
    "id": "sync-9d0b0139-1392-44f7-b590-01d56e19861b-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6615110165190125,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 5001.09716796875,
          "fy": 5001.09716796875,
          "gravity": [
            -0.00174522225279361,
            -0.9992422461509705,
            -0.03888404369354248
          ],
          "height_meters": 1.351202008831008,
          "horizontal_fov_degrees": 18.17663260792675,
          "intrinsic_matrix": [
            [
              5001.09716796875,
              0,
              800
            ],
            [
              0,
              5001.09716796875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -2.2284533771015025,
          "roll_degrees": 0.10005958995782904,
          "uncertainty": {
            "focal_pixels": 3257.60205078125,
            "pitch_degrees": 3.3694526996514114,
            "roll_degrees": 0.5207389050462083,
            "vertical_fov_degrees": 12.484747397062689
          },
          "vertical_fov_degrees": 13.682571332186166
        },
        "confidence": {
          "camera_calibration": 0.6615110165190125,
          "camera_height": 0.8936181214352774,
          "depth": 0.9753309488296509,
          "dimensions": 0.9877630382106141,
          "floor_plane": 0.9694075955265349,
          "floor_rotation": 0.7707,
          "overall": 0.8659753908226998,
          "segmentation": 0.8034970152378083
        },
        "floor": {
          "alternate_floor_rotation": 179.83,
          "floor_rotation": 89.83,
          "median_scene_depth_meters": 15.99319076538086,
          "plane": {
            "confidence": 0.9694075955265349,
            "distance": 1.351202008831008,
            "gravity_alignment": 0.9999360824643627,
            "inlier_ratio": 0.99825,
            "median_residual_meters": 0.004455693144950645,
            "normal": [
              -0.006893698350485944,
              -0.9995607625085214,
              -0.028822889800228846
            ]
          },
          "visible_area_ratio": 0.3070380208333333,
          "visible_dimensions_meters": {
            "confidence": 0.9877630382106141,
            "depth_meters": 17.881474235186857,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 56.169949349664535,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 3.4807114079159875
          },
          "visible_polygon_pixels": [
            [
              0,
              1112
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
              1121
            ],
            [
              1158,
              742
            ],
            [
              956,
              706
            ],
            [
              440,
              728
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.7962755560874939,
            "scene": "elevator/door"
          },
          {
            "confidence": 0.1998123824596405,
            "scene": "elevator_lobby"
          },
          {
            "confidence": 0.0027326170820742846,
            "scene": "bank_vault"
          },
          {
            "confidence": 0.0006895479746162891,
            "scene": "server_room"
          },
          {
            "confidence": 0.00016481707280036062,
            "scene": "clean_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 8,
            "x2": 1592,
            "y1": 696,
            "y2": 1195
          },
          "detection_confidence": 0.3543650507926941,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.30437135416666666,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3543650507926941,
            "final_score": 0.8034970152378083,
            "fragmentation_score": 1,
            "largest_component_ratio": 1,
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
    "workerId": "30mhauf6mfa3qu"
  },
  //Transport-Metro Coaches
  // "6a462d6b12f464296f8a98e2": {
  //   "delayTime": 13939,
  //   "executionTime": 16816,
  //   "id": "sync-afaec7bf-6d2a-471f-a422-20b432b285de-e1",
  //   "output": {
  //     "prediction": {
  //       "camera": {
  //         "camera_model": "pinhole",
  //         "confidence": 0.5450135056313224,
  //         "cx": 800,
  //         "cy": 599.9999389648438,
  //         "fx": 1395.265380859375,
  //         "fy": 1395.2652587890625,
  //         "gravity": [
  //           -0.01157422550022602,
  //           -0.9996868371963501,
  //           0.02218783088028431
  //         ],
  //         "height_meters": 0.9282545719817838,
  //         "horizontal_fov_degrees": 59.65712617331747,
  //         "intrinsic_matrix": [
  //           [
  //             1395.265380859375,
  //             0,
  //             800
  //           ],
  //           [
  //             0,
  //             1395.2652587890625,
  //             599.9999389648438
  //           ],
  //           [
  //             0,
  //             0,
  //             1
  //           ]
  //         ],
  //         "pitch_degrees": 1.2713734398185834,
  //         "roll_degrees": 0.6632660632824511,
  //         "uncertainty": {
  //           "focal_pixels": 813.8792724609375,
  //           "pitch_degrees": 2.7044131884231373,
  //           "roll_degrees": 1.5211538846527728,
  //           "vertical_fov_degrees": 34.30642486123534
  //         },
  //         "vertical_fov_degrees": 46.53789689104291
  //       },
  //       "confidence": {
  //         "camera_calibration": 0.5450135056313224,
  //         "camera_height": 0.854056696071239,
  //         "depth": 0.9542319774627686,
  //         "dimensions": 0.9832413993969852,
  //         "floor_plane": 0.9581034984924629,
  //         "floor_rotation": 0.9896,
  //         "overall": 0.8656744938520076,
  //         "segmentation": 0.7754743799092748
  //       },
  //       "floor": {
  //         "alternate_floor_rotation": 13.56,
  //         "floor_rotation": 103.56,
  //         "median_scene_depth_meters": 4.412006378173828,
  //         "plane": {
  //           "confidence": 0.9581034984924629,
  //           "distance": 0.9282545719817838,
  //           "gravity_alignment": 0.9986781444208165,
  //           "inlier_ratio": 0.999,
  //           "median_residual_meters": 0.006169819558755063,
  //           "normal": [
  //             -0.05656089778098712,
  //             -0.9983955630455883,
  //             -0.002676664545957163
  //           ]
  //         },
  //         "visible_area_ratio": 0.3010546875,
  //         "visible_dimensions_meters": {
  //           "confidence": 0.9832413993969852,
  //           "depth_meters": 14.080928834826791,
  //           "measurement_type": "visible_floor_extent",
  //           "projected_area_square_meters": 23.52443307788652,
  //           "valid_polygon_vertex_ratio": 1,
  //           "width_meters": 5.824965113953718
  //         },
  //         "visible_polygon_pixels": [
  //           [
  //             1599,
  //             984
  //           ],
  //           [
  //             1134,
  //             658
  //           ],
  //           [
  //             1071,
  //             730
  //           ],
  //           [
  //             1028,
  //             696
  //           ],
  //           [
  //             1029,
  //             779
  //           ],
  //           [
  //             1009,
  //             701
  //           ],
  //           [
  //             853,
  //             753
  //           ],
  //           [
  //             861,
  //             971
  //           ],
  //           [
  //             829,
  //             960
  //           ],
  //           [
  //             826,
  //             765
  //           ],
  //           [
  //             15,
  //             1012
  //           ],
  //           [
  //             0,
  //             1199
  //           ],
  //           [
  //             1599,
  //             1199
  //           ]
  //         ]
  //       },
  //       "input": {
  //         "height": 1200,
  //         "width": 1600
  //       },
  //       "scene": [
  //         {
  //           "confidence": 0.7155330777168274,
  //           "scene": "train_interior"
  //         },
  //         {
  //           "confidence": 0.2191307693719864,
  //           "scene": "subway_station/platform"
  //         },
  //         {
  //           "confidence": 0.0438508614897728,
  //           "scene": "train_station/platform"
  //         },
  //         {
  //           "confidence": 0.017087426036596298,
  //           "scene": "bus_interior"
  //         },
  //         {
  //           "confidence": 0.0029637760017067194,
  //           "scene": "bus_station/indoor"
  //         }
  //       ],
  //       "selected_detection": {
  //         "bbox_xyxy": {
  //           "x1": 7,
  //           "x2": 1593,
  //           "y1": 646,
  //           "y2": 1195
  //         },
  //         "detection_confidence": 0.3752133846282959,
  //         "label": "indoor floor",
  //         "mask_quality": {
  //           "area_plausibility_score": 1,
  //           "area_ratio": 0.29751770833333335,
  //           "bottom_contact_score": 1,
  //           "detection_confidence": 0.3752133846282959,
  //           "final_score": 0.7754743799092748,
  //           "fragmentation_score": 0.3333333333333333,
  //           "largest_component_ratio": 0.9999579856941289,
  //           "lower_half_score": 1,
  //           "sam_score": 0.984375
  //         },
  //         "sam_score": 0.984375
  //       },
  //       "warnings": [
  //         "dimensions_are_single_image_estimates",
  //         "complete_room_dimensions_not_returned"
  //       ]
  //     },
  //     "success": true
  //   },
  //   "status": "COMPLETED",
  //   "workerId": "uo65furk2t4j3r"
  // },
  //Transport-Rail- Coaches
  "6a478a10125096412ecb2527": {
    "delayTime": 13313,
    "executionTime": 18325,
    "id": "sync-d56e7bae-6272-4c65-a410-f8b16bec90ae-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8303720640327164,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 2694.888671875,
          "fy": 2694.888427734375,
          "gravity": [
            0.005699296947568655,
            -0.9334906339645386,
            -0.3585565388202667
          ],
          "height_meters": 0.9708257762521216,
          "horizontal_fov_degrees": 33.06791690432068,
          "intrinsic_matrix": [
            [
              2694.888671875,
              0,
              800
            ],
            [
              0,
              2694.888427734375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -21.011574339926824,
          "roll_degrees": -0.34976955844556307,
          "uncertainty": {
            "focal_pixels": 436.5035095214844,
            "pitch_degrees": 4.045039090175243,
            "roll_degrees": 1.3733683345292664,
            "vertical_fov_degrees": 5.568182374145488
          },
          "vertical_fov_degrees": 25.103636294329846
        },
        "confidence": {
          "camera_calibration": 0.8303720640327164,
          "camera_height": 0.9104215516747488,
          "depth": 0.8924968242645264,
          "dimensions": 0.9813303060463016,
          "floor_plane": 0.9533257651157536,
          "floor_rotation": 0.644,
          "overall": 0.8163215507615514,
          "segmentation": 0.5023043441968127
        },
        "floor": {
          "alternate_floor_rotation": 175.68,
          "floor_rotation": 85.68,
          "median_scene_depth_meters": 2.9515204429626465,
          "plane": {
            "confidence": 0.9533257651157536,
            "distance": 0.9708257762521216,
            "gravity_alignment": 0.982893455033483,
            "inlier_ratio": 0.9701666666666666,
            "median_residual_meters": 0.004250438883641461,
            "normal": [
              0.017699093981637305,
              -0.9833530869437763,
              -0.18084094799125294
            ]
          },
          "visible_area_ratio": 0.18563489583333334,
          "visible_dimensions_meters": {
            "confidence": 0.9813303060463016,
            "depth_meters": 6.59749643049196,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 5.038968023366927,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 2.271798086131634
          },
          "visible_polygon_pixels": [
            [
              26,
              390
            ],
            [
              0,
              406
            ],
            [
              0,
              1181
            ],
            [
              18,
              1199
            ],
            [
              490,
              1193
            ],
            [
              514,
              948
            ],
            [
              491,
              876
            ],
            [
              513,
              853
            ],
            [
              466,
              825
            ],
            [
              429,
              842
            ],
            [
              398,
              813
            ],
            [
              422,
              795
            ],
            [
              400,
              735
            ],
            [
              424,
              677
            ],
            [
              421,
              611
            ],
            [
              403,
              624
            ],
            [
              398,
              603
            ],
            [
              428,
              560
            ],
            [
              416,
              518
            ],
            [
              398,
              587
            ],
            [
              397,
              477
            ],
            [
              331,
              510
            ],
            [
              315,
              445
            ],
            [
              302,
              498
            ],
            [
              296,
              397
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.7011010646820068,
            "scene": "train_interior"
          },
          {
            "confidence": 0.2431999146938324,
            "scene": "bus_interior"
          },
          {
            "confidence": 0.03666216507554054,
            "scene": "airplane_cabin"
          },
          {
            "confidence": 0.006535752676427364,
            "scene": "fabric_store"
          },
          {
            "confidence": 0.005609246902167797,
            "scene": "clothing_store"
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
            "area_ratio": 0.18144947916666668,
            "bottom_contact_score": 0.4525,
            "detection_confidence": 0.05,
            "final_score": 0.5023043441968127,
            "fragmentation_score": 0.003246753246753247,
            "largest_component_ratio": 0.9523914771960744,
            "lower_half_score": 0.7922344086823984,
            "sam_score": 0.62890625
          },
          "sam_score": 0.62890625
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
    "workerId": "uo65furk2t4j3r"
  },
  //Transport- Ticket-Counter
  "6a478a65125096412ecb252a": {
    "delayTime": 16413,
    "executionTime": 14893,
    "id": "sync-0b988c7e-50f7-4e38-9645-13e24d2aeca8-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6873032729560942,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1211.441650390625,
          "fy": 1211.441650390625,
          "gravity": [
            -0.002903441432863474,
            -0.9997470378875732,
            -0.022305667400360107
          ],
          "height_meters": 0.8381931495658625,
          "horizontal_fov_degrees": 66.87917012620302,
          "intrinsic_matrix": [
            [
              1211.441650390625,
              0,
              800
            ],
            [
              0,
              1211.441650390625,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -1.278126575917022,
          "roll_degrees": 0.1663799397260727,
          "uncertainty": {
            "focal_pixels": 376.1452331542969,
            "pitch_degrees": 1.7639107605860733,
            "roll_degrees": 0.7741238221323133,
            "vertical_fov_degrees": 20.012230579442043
          },
          "vertical_fov_degrees": 52.69636769203617
        },
        "confidence": {
          "camera_calibration": 0.6873032729560942,
          "camera_height": 0.8944455049986059,
          "depth": 0.9490010142326355,
          "dimensions": 0.9875050792094947,
          "floor_plane": 0.9687626980237367,
          "floor_rotation": 0.936,
          "overall": 0.8828689239489576,
          "segmentation": 0.757064898222136
        },
        "floor": {
          "alternate_floor_rotation": 41.41,
          "floor_rotation": 131.41,
          "median_scene_depth_meters": 4.995953559875488,
          "plane": {
            "confidence": 0.9687626980237367,
            "distance": 0.8381931495658625,
            "gravity_alignment": 0.9979762558945847,
            "inlier_ratio": 0.9991666666666666,
            "median_residual_meters": 0.004562382973277046,
            "normal": [
              -0.004859805686936503,
              -0.9963003577443159,
              -0.08580197810792846
            ]
          },
          "visible_area_ratio": 0.39775625,
          "visible_dimensions_meters": {
            "confidence": 0.9875050792094947,
            "depth_meters": 16.60202569695738,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 17.255746943608884,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 12.80140684281521
          },
          "visible_polygon_pixels": [
            [
              1599,
              632
            ],
            [
              1506,
              665
            ],
            [
              1489,
              549
            ],
            [
              1511,
              707
            ],
            [
              1440,
              707
            ],
            [
              1444,
              552
            ],
            [
              1435,
              775
            ],
            [
              1367,
              780
            ],
            [
              1378,
              656
            ],
            [
              1272,
              572
            ],
            [
              1285,
              923
            ],
            [
              1156,
              907
            ],
            [
              1203,
              625
            ],
            [
              1120,
              748
            ],
            [
              1124,
              618
            ],
            [
              1078,
              679
            ],
            [
              947,
              602
            ],
            [
              955,
              1075
            ],
            [
              1027,
              1123
            ],
            [
              950,
              1177
            ],
            [
              846,
              1132
            ],
            [
              918,
              1002
            ],
            [
              852,
              681
            ],
            [
              665,
              663
            ],
            [
              693,
              791
            ],
            [
              627,
              805
            ],
            [
              636,
              663
            ],
            [
              558,
              658
            ],
            [
              616,
              985
            ],
            [
              468,
              1000
            ],
            [
              521,
              661
            ],
            [
              447,
              749
            ],
            [
              416,
              679
            ],
            [
              302,
              698
            ],
            [
              352,
              887
            ],
            [
              223,
              904
            ],
            [
              269,
              703
            ],
            [
              99,
              728
            ],
            [
              133,
              819
            ],
            [
              0,
              811
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
            "confidence": 0.5544273257255554,
            "scene": "airport_terminal"
          },
          {
            "confidence": 0.06736812740564346,
            "scene": "recreation_room"
          },
          {
            "confidence": 0.03455350175499916,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.03436380252242088,
            "scene": "office_cubicles"
          },
          {
            "confidence": 0.021472832188010216,
            "scene": "computer_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 5,
            "x2": 1595,
            "y1": 519,
            "y2": 1196
          },
          "detection_confidence": 0.3736806809902191,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.3968276041666667,
            "bottom_contact_score": 1,
            "detection_confidence": 0.3736806809902191,
            "final_score": 0.757064898222136,
            "fragmentation_score": 0.02564102564102564,
            "largest_component_ratio": 0.98467139776535,
            "lower_half_score": 0.9890039361656051,
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
    "workerId": "uo65furk2t4j3r"
  },
  //Transport-Waiting- Laounges
  "6a478a77125096412ecb252b": {
    "delayTime": 21516,
    "executionTime": 23192,
    "id": "sync-a2a96fae-07dc-47ee-94d0-ea3114d8e16e-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.863756501101816,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1534.9178466796875,
          "fy": 1534.917724609375,
          "gravity": [
            -0.03187724947929382,
            -0.9901171922683716,
            -0.13657166063785553
          ],
          "height_meters": 1.7419362824126616,
          "horizontal_fov_degrees": 55.05709963524602,
          "intrinsic_matrix": [
            [
              1534.9178466796875,
              0,
              800
            ],
            [
              0,
              1534.917724609375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -7.849511233819821,
          "roll_degrees": 1.8438390216357379,
          "uncertainty": {
            "focal_pixels": 189.94985961914062,
            "pitch_degrees": 1.9332767202790582,
            "roll_degrees": 0.7881442795076454,
            "vertical_fov_degrees": 6.800368564096475
          },
          "vertical_fov_degrees": 42.70109618139619
        },
        "confidence": {
          "camera_calibration": 0.863756501101816,
          "camera_height": 0.9516492532567232,
          "depth": 0.9835147857666016,
          "dimensions": 0.8420052151475992,
          "floor_plane": 0.980013037868998,
          "floor_rotation": 0.9829,
          "overall": 0.9056052728942398,
          "segmentation": 0.7353981171179402
        },
        "floor": {
          "alternate_floor_rotation": 163.69,
          "floor_rotation": 73.69,
          "median_scene_depth_meters": 6.176043510437012,
          "plane": {
            "confidence": 0.980013037868998,
            "distance": 1.7419362824126616,
            "gravity_alignment": 0.9999912777609533,
            "inlier_ratio": 0.9997833333333334,
            "median_residual_meters": 0.002981532652478913,
            "normal": [
              -0.03603694868872367,
              -0.9899295026942642,
              -0.1368974726746008
            ]
          },
          "visible_area_ratio": 0.3543234375,
          "visible_dimensions_meters": {
            "confidence": 0.8420052151475992,
            "depth_meters": 25.784843878753694,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 51.76113530151619,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 8.702940569764994
          },
          "visible_polygon_pixels": [
            [
              0,
              950
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
              1559,
              1040
            ],
            [
              1327,
              1106
            ],
            [
              1486,
              998
            ],
            [
              1295,
              927
            ],
            [
              1311,
              721
            ],
            [
              1430,
              644
            ],
            [
              1432,
              593
            ],
            [
              1385,
              583
            ],
            [
              1311,
              682
            ],
            [
              1146,
              656
            ],
            [
              1115,
              691
            ],
            [
              1046,
              618
            ],
            [
              955,
              635
            ],
            [
              946,
              582
            ],
            [
              855,
              600
            ],
            [
              596,
              489
            ],
            [
              599,
              738
            ],
            [
              558,
              785
            ],
            [
              307,
              896
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.8902076482772827,
            "scene": "reception"
          },
          {
            "confidence": 0.014612977392971516,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.009853620082139969,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.009700525552034378,
            "scene": "office"
          },
          {
            "confidence": 0.009043944999575615,
            "scene": "lobby"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 467,
            "y2": 1194
          },
          "detection_confidence": 0.2982122004032135,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.35070208333333336,
            "bottom_contact_score": 1,
            "detection_confidence": 0.2982122004032135,
            "final_score": 0.7353981171179402,
            "fragmentation_score": 0.04,
            "largest_component_ratio": 0.9993955577205249,
            "lower_half_score": 0.9712511212627052,
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
    "workerId": "uo65furk2t4j3r"
  },


  //Hospital
  //Hospital-Diagnostic
  "6a478b91125096412ecb2533": {
    "delayTime": 17424,
    "executionTime": 15730,
    "id": "sync-ce3a3d86-eaf8-47b7-a818-206d86384912-e1",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8451344429034391,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1428.583984375,
          "fy": 1428.583984375,
          "gravity": [
            -0.12412980198860168,
            -0.9483612775802612,
            -0.2918950617313385
          ],
          "height_meters": 0.6512450478191459,
          "horizontal_fov_degrees": 58.4972234484659,
          "intrinsic_matrix": [
            [
              1428.583984375,
              0,
              800
            ],
            [
              0,
              1428.583984375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -16.971444021330704,
          "roll_degrees": 7.45619649801193,
          "uncertainty": {
            "focal_pixels": 153.05076599121094,
            "pitch_degrees": 3.473136892242909,
            "roll_degrees": 1.360941872551486,
            "vertical_fov_degrees": 6.198533275569972
          },
          "vertical_fov_degrees": 45.564448085248934
        },
        "confidence": {
          "camera_calibration": 0.8451344429034391,
          "camera_height": 0.9291136641847051,
          "depth": 0.9432916641235352,
          "dimensions": 0.9848521604611915,
          "floor_plane": 0.9621304011529787,
          "floor_rotation": 0.9305,
          "overall": 0.9069829865095943,
          "segmentation": 0.7538585727413109
        },
        "floor": {
          "alternate_floor_rotation": 131.22,
          "floor_rotation": 41.22,
          "median_scene_depth_meters": 1.7252297401428223,
          "plane": {
            "confidence": 0.9621304011529787,
            "distance": 0.6512450478191458,
            "gravity_alignment": 0.998272852064676,
            "inlier_ratio": 0.9977,
            "median_residual_meters": 0.005456125388993482,
            "normal": [
              -0.10009252270322715,
              -0.9653444576607456,
              -0.24102191801283315
            ]
          },
          "visible_area_ratio": 0.4978916666666667,
          "visible_dimensions_meters": {
            "confidence": 0.9848521604611915,
            "depth_meters": 5.54677342769623,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 6.80370149757177,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.927191277436347
          },
          "visible_polygon_pixels": [
            [
              1599,
              366
            ],
            [
              1172,
              358
            ],
            [
              1148,
              505
            ],
            [
              904,
              552
            ],
            [
              888,
              617
            ],
            [
              254,
              862
            ],
            [
              106,
              794
            ],
            [
              84,
              551
            ],
            [
              0,
              563
            ],
            [
              0,
              1193
            ],
            [
              1599,
              1192
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.22982560098171234,
            "scene": "clean_room"
          },
          {
            "confidence": 0.171314537525177,
            "scene": "operating_room"
          },
          {
            "confidence": 0.11979636549949646,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.05840319022536278,
            "scene": "reception"
          },
          {
            "confidence": 0.04845402017235756,
            "scene": "laundromat"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1593,
            "y1": 327,
            "y2": 1193
          },
          "detection_confidence": 0.39519453048706055,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.4962447916666667,
            "bottom_contact_score": 1,
            "detection_confidence": 0.39519453048706055,
            "final_score": 0.7538585727413109,
            "fragmentation_score": 0.09090909090909091,
            "largest_component_ratio": 0.9992894551790006,
            "lower_half_score": 0.8686258252080732,
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
    "workerId": "gpcmyn7bj1qmww"
  },
  //Hospital-Hospita-Reception
  "6a478aba125096412ecb252d": {
    "delayTime": 19607,
    "executionTime": 15833,
    "id": "sync-657724a7-f95d-4ea9-a7f9-e2eac1badd27-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6760776709964167,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 3662.86181640625,
          "fy": 3662.8623046875,
          "gravity": [
            0.005482612643390894,
            -0.9987582564353943,
            -0.04951721429824829
          ],
          "height_meters": 1.6286951967822894,
          "horizontal_fov_degrees": 24.64082096862249,
          "intrinsic_matrix": [
            [
              3662.86181640625,
              0,
              800
            ],
            [
              0,
              3662.8623046875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -2.8382880978065606,
          "roll_degrees": -0.31448648206014324,
          "uncertainty": {
            "focal_pixels": 1910.0933837890625,
            "pitch_degrees": 3.4145208491160943,
            "roll_degrees": 0.9635178174624796,
            "vertical_fov_degrees": 13.481327492254556
          },
          "vertical_fov_degrees": 18.605582148181888
        },
        "confidence": {
          "camera_calibration": 0.6760776709964167,
          "camera_height": 0.9051194754856402,
          "depth": 0.9782856702804565,
          "dimensions": 0.9330493990403234,
          "floor_plane": 0.9826234976008084,
          "floor_rotation": 0.8727,
          "overall": 0.8624986385377803,
          "segmentation": 0.6896347563608165
        },
        "floor": {
          "alternate_floor_rotation": 172.16,
          "floor_rotation": 82.16,
          "median_scene_depth_meters": 14.562216758728027,
          "plane": {
            "confidence": 0.9826234976008084,
            "distance": 1.6286951967822891,
            "gravity_alignment": 0.9998390046736679,
            "inlier_ratio": 0.9995333333333334,
            "median_residual_meters": 0.0025666455000887822,
            "normal": [
              0.015520049413427594,
              -0.9978059972510015,
              -0.06436085701837078
            ]
          },
          "visible_area_ratio": 0.2820255208333333,
          "visible_dimensions_meters": {
            "confidence": 0.9330493990403234,
            "depth_meters": 22.78160151155415,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 49.69632699519992,
            "valid_polygon_vertex_ratio": 0.8666666666666667,
            "width_meters": 5.946013896212159
          },
          "visible_polygon_pixels": [
            [
              94,
              718
            ],
            [
              238,
              736
            ],
            [
              199,
              1199
            ],
            [
              1047,
              1199
            ],
            [
              1032,
              886
            ],
            [
              1068,
              851
            ],
            [
              1038,
              736
            ],
            [
              1270,
              646
            ],
            [
              1172,
              599
            ],
            [
              1129,
              685
            ],
            [
              1109,
              632
            ],
            [
              1098,
              699
            ],
            [
              1084,
              630
            ],
            [
              1046,
              628
            ],
            [
              991,
              699
            ],
            [
              847,
              565
            ],
            [
              795,
              612
            ],
            [
              838,
              646
            ],
            [
              817,
              742
            ],
            [
              734,
              696
            ],
            [
              717,
              800
            ],
            [
              708,
              687
            ],
            [
              635,
              631
            ],
            [
              615,
              696
            ],
            [
              610,
              611
            ],
            [
              534,
              615
            ],
            [
              408,
              464
            ],
            [
              283,
              469
            ],
            [
              271,
              539
            ],
            [
              223,
              514
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.4378270208835602,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.15770673751831055,
            "scene": "conference_room"
          },
          {
            "confidence": 0.08939463645219803,
            "scene": "lobby"
          },
          {
            "confidence": 0.08898279070854187,
            "scene": "reception"
          },
          {
            "confidence": 0.05982990190386772,
            "scene": "elevator_lobby"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 14,
            "x2": 1339,
            "y1": 454,
            "y2": 1195
          },
          "detection_confidence": 0.28302669525146484,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.2810447916666667,
            "bottom_contact_score": 0.6425,
            "detection_confidence": 0.28302669525146484,
            "final_score": 0.6896347563608165,
            "fragmentation_score": 0.047619047619047616,
            "largest_component_ratio": 0.9517685125814019,
            "lower_half_score": 0.9351638047019492,
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
    "workerId": "0900c1ym0mhu33"
  },
  //Hospital-ICU
  "6a478b31125096412ecb2530": {
    "delayTime": 10005,
    "executionTime": 29937,
    "id": "sync-fb5d6fb2-4cbe-4180-89ef-aff78c02958e-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.9148324599236285,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1236.0316162109375,
          "fy": 1236.0316162109375,
          "gravity": [
            -0.1587705910205841,
            -0.9131208062171936,
            -0.3755028247833252
          ],
          "height_meters": 1.5887901654547112,
          "horizontal_fov_degrees": 65.82452744665052,
          "intrinsic_matrix": [
            [
              1236.0316162109375,
              0,
              800
            ],
            [
              0,
              1236.0316162109375,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -22.05539458473944,
          "roll_degrees": 9.862720590738482,
          "uncertainty": {
            "focal_pixels": 60.33931350708008,
            "pitch_degrees": 1.827443792863357,
            "roll_degrees": 1.1424661056741692,
            "vertical_fov_degrees": 3.1079149379346913
          },
          "vertical_fov_degrees": 51.78613911719984
        },
        "confidence": {
          "camera_calibration": 0.9148324599236285,
          "camera_height": 0.9543887376435007,
          "depth": 0.9708677530288696,
          "dimensions": 0.9865505978595052,
          "floor_plane": 0.966376494648763,
          "floor_rotation": 0.9776,
          "overall": 0.9300046772610954,
          "segmentation": 0.7394166977234009
        },
        "floor": {
          "alternate_floor_rotation": 22.74,
          "floor_rotation": 112.74,
          "median_scene_depth_meters": 3.6403610706329346,
          "plane": {
            "confidence": 0.966376494648763,
            "distance": 1.5887901654547112,
            "gravity_alignment": 0.9992837955632008,
            "inlier_ratio": 1,
            "median_residual_meters": 0.0050220396695815905,
            "normal": [
              -0.13491591256696717,
              -0.9048853145889693,
              -0.40370814207474776
            ]
          },
          "visible_area_ratio": 0.5675572916666667,
          "visible_dimensions_meters": {
            "confidence": 0.9865505978595052,
            "depth_meters": 5.349727205528118,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 15.21608922610315,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 5.898628350402608
          },
          "visible_polygon_pixels": [
            [
              1599,
              380
            ],
            [
              1420,
              377
            ],
            [
              1274,
              483
            ],
            [
              1198,
              436
            ],
            [
              1100,
              481
            ],
            [
              1105,
              372
            ],
            [
              948,
              395
            ],
            [
              859,
              493
            ],
            [
              809,
              444
            ],
            [
              738,
              490
            ],
            [
              727,
              410
            ],
            [
              559,
              407
            ],
            [
              521,
              466
            ],
            [
              407,
              499
            ],
            [
              431,
              598
            ],
            [
              394,
              660
            ],
            [
              190,
              726
            ],
            [
              177,
              784
            ],
            [
              110,
              738
            ],
            [
              25,
              814
            ],
            [
              20,
              728
            ],
            [
              66,
              696
            ],
            [
              9,
              675
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
              762
            ],
            [
              1531,
              729
            ],
            [
              1498,
              560
            ],
            [
              1599,
              453
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.47909238934516907,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.2714122533798218,
            "scene": "operating_room"
          },
          {
            "confidence": 0.10236561298370361,
            "scene": "clean_room"
          },
          {
            "confidence": 0.01647380366921425,
            "scene": "biology_laboratory"
          },
          {
            "confidence": 0.01449497789144516,
            "scene": "assembly_line"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 8,
            "x2": 1593,
            "y1": 333,
            "y2": 1191
          },
          "detection_confidence": 0.34496596455574036,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.5644354166666666,
            "bottom_contact_score": 1,
            "detection_confidence": 0.34496596455574036,
            "final_score": 0.7394166977234009,
            "fragmentation_score": 0.16666666666666666,
            "largest_component_ratio": 0.9999704719686707,
            "lower_half_score": 0.821913674800409,
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
    "workerId": "vldfw00sq6wf3f"
  },
  //Hospital-OPD-1
  "6a4602dcb7a9facb9cc3fee0": {
    "delayTime": 9592,
    "executionTime": 25937,
    "id": "sync-f8bbd977-1da3-499b-b408-c1de8a534f47-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6962527583939037,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1995.817626953125,
          "fy": 1995.817626953125,
          "gravity": [
            0.013269328512251377,
            -0.9989005923271179,
            -0.044963300228118896
          ],
          "height_meters": 1.5035202827384597,
          "horizontal_fov_degrees": 43.68559964836183,
          "intrinsic_matrix": [
            [
              1995.817626953125,
              0,
              800
            ],
            [
              0,
              1995.817626953125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -2.577076264179297,
          "roll_degrees": -0.7609923565661406,
          "uncertainty": {
            "focal_pixels": 714.0489501953125,
            "pitch_degrees": 3.1474079454893515,
            "roll_degrees": 0.9063451854063589,
            "vertical_fov_degrees": 15.985572808983772
          },
          "vertical_fov_degrees": 33.464566479990836
        },
        "confidence": {
          "camera_calibration": 0.6962527583939037,
          "camera_height": 0.9079355748279989,
          "depth": 0.9802051782608032,
          "dimensions": 0.9911500724198999,
          "floor_plane": 0.9778751810497497,
          "floor_rotation": 0.9645,
          "overall": 0.8937968480357147,
          "segmentation": 0.7386591712976477
        },
        "floor": {
          "alternate_floor_rotation": 26.86,
          "floor_rotation": 116.86,
          "median_scene_depth_meters": 6.42951774597168,
          "plane": {
            "confidence": 0.9778751810497497,
            "distance": 1.5035202827384597,
            "gravity_alignment": 0.9985528689841592,
            "inlier_ratio": 0.9999833333333333,
            "median_residual_meters": 0.0032740589120623387,
            "normal": [
              0.017699596303410073,
              -0.9949859861990064,
              -0.09843582456751729
            ]
          },
          "visible_area_ratio": 0.24913489583333334,
          "visible_dimensions_meters": {
            "confidence": 0.9911500724198999,
            "depth_meters": 6.547752052723221,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 10.52103332942237,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.283215827147583
          },
          "visible_polygon_pixels": [
            [
              1599,
              1027
            ],
            [
              1259,
              944
            ],
            [
              1294,
              896
            ],
            [
              1409,
              922
            ],
            [
              1285,
              854
            ],
            [
              1109,
              827
            ],
            [
              1173,
              926
            ],
            [
              850,
              781
            ],
            [
              851,
              698
            ],
            [
              700,
              771
            ],
            [
              771,
              803
            ],
            [
              719,
              959
            ],
            [
              794,
              962
            ],
            [
              744,
              995
            ],
            [
              788,
              1092
            ],
            [
              702,
              1019
            ],
            [
              610,
              1098
            ],
            [
              654,
              1005
            ],
            [
              589,
              982
            ],
            [
              671,
              967
            ],
            [
              679,
              897
            ],
            [
              639,
              913
            ],
            [
              626,
              824
            ],
            [
              579,
              939
            ],
            [
              571,
              769
            ],
            [
              421,
              855
            ],
            [
              453,
              1022
            ],
            [
              329,
              983
            ],
            [
              269,
              1120
            ],
            [
              280,
              988
            ],
            [
              158,
              1066
            ],
            [
              135,
              1028
            ],
            [
              294,
              893
            ],
            [
              0,
              913
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
            "confidence": 0.3748156428337097,
            "scene": "conference_room"
          },
          {
            "confidence": 0.1552928388118744,
            "scene": "office"
          },
          {
            "confidence": 0.12206663936376572,
            "scene": "office_cubicles"
          },
          {
            "confidence": 0.05704895779490471,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.05236569792032242,
            "scene": "computer_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 7,
            "x2": 1593,
            "y1": 681,
            "y2": 1194
          },
          "detection_confidence": 0.30167093873023987,
          "label": "indoor floor wooden",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.24725572916666666,
            "bottom_contact_score": 1,
            "detection_confidence": 0.30167093873023987,
            "final_score": 0.7386591712976477,
            "fragmentation_score": 0.1,
            "largest_component_ratio": 0.9918859311905058,
            "lower_half_score": 1,
            "sam_score": 0.9765625
          },
          "sam_score": 0.9765625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "vldfw00sq6wf3f"
  },
  //Hospital-OT
  "6a478b7b125096412ecb2532": {
    "delayTime": 14624,
    "executionTime": 16754,
    "id": "sync-37f06195-e182-42fc-848b-3458c7615e2e-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.6530139328951567,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1472.5550537109375,
          "fy": 1472.55517578125,
          "gravity": [
            -0.004468228667974472,
            -0.999928891658783,
            -0.011058510281145573
          ],
          "height_meters": 1.9664001371736366,
          "horizontal_fov_degrees": 57.028111229698695,
          "intrinsic_matrix": [
            [
              1472.5550537109375,
              0,
              800
            ],
            [
              0,
              1472.55517578125,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -0.6336188801380703,
          "roll_degrees": 0.256001546548881,
          "uncertainty": {
            "focal_pixels": 554.4606323242188,
            "pitch_degrees": 2.0291514453282926,
            "roll_degrees": 0.8557853504055742,
            "vertical_fov_degrees": 21.32261773963462
          },
          "vertical_fov_degrees": 44.33736703481571
        },
        "confidence": {
          "camera_calibration": 0.6530139328951567,
          "camera_height": 0.8819086754309713,
          "depth": 0.976932168006897,
          "dimensions": 0.9805590971678565,
          "floor_plane": 0.9513977429196412,
          "floor_rotation": 0.8764,
          "overall": 0.863926688913958,
          "segmentation": 0.727275205977183
        },
        "floor": {
          "alternate_floor_rotation": 155.26,
          "floor_rotation": 65.26,
          "median_scene_depth_meters": 7.079566955566406,
          "plane": {
            "confidence": 0.9513977429196412,
            "distance": 1.9664001371736366,
            "gravity_alignment": 0.9968431129424672,
            "inlier_ratio": 0.9947833333333334,
            "median_residual_meters": 0.006804381950327842,
            "normal": [
              -0.018574355029065345,
              -0.9958450989558364,
              -0.08914893280850168
            ]
          },
          "visible_area_ratio": 0.287975,
          "visible_dimensions_meters": {
            "confidence": 0.9805590971678565,
            "depth_meters": 9.318183443683948,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 30.258504327611007,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 8.747261682828835
          },
          "visible_polygon_pixels": [
            [
              64,
              892
            ],
            [
              155,
              1054
            ],
            [
              96,
              1199
            ],
            [
              1502,
              1199
            ],
            [
              1529,
              1028
            ],
            [
              1599,
              1039
            ],
            [
              1592,
              958
            ],
            [
              1557,
              1002
            ],
            [
              1517,
              976
            ],
            [
              1599,
              908
            ],
            [
              1539,
              831
            ],
            [
              1098,
              742
            ],
            [
              1091,
              785
            ],
            [
              1261,
              884
            ],
            [
              1191,
              860
            ],
            [
              1241,
              1027
            ],
            [
              1158,
              966
            ],
            [
              1096,
              1095
            ],
            [
              1085,
              966
            ],
            [
              872,
              846
            ],
            [
              777,
              950
            ],
            [
              609,
              847
            ],
            [
              613,
              795
            ],
            [
              678,
              771
            ],
            [
              587,
              746
            ],
            [
              579,
              699
            ],
            [
              506,
              730
            ],
            [
              451,
              695
            ],
            [
              443,
              788
            ],
            [
              421,
              750
            ],
            [
              375,
              811
            ],
            [
              365,
              762
            ],
            [
              349,
              795
            ],
            [
              133,
              751
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.9916463494300842,
            "scene": "operating_room"
          },
          {
            "confidence": 0.0070319995284080505,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.0011586759937927127,
            "scene": "clean_room"
          },
          {
            "confidence": 0.00008744964725337923,
            "scene": "gymnasium/indoor"
          },
          {
            "confidence": 0.00002588102506706491,
            "scene": "recreation_room"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 29,
            "x2": 1593,
            "y1": 632,
            "y2": 1194
          },
          "detection_confidence": 0.3243918716907501,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.285796875,
            "bottom_contact_score": 0.889375,
            "detection_confidence": 0.3243918716907501,
            "final_score": 0.727275205977183,
            "fragmentation_score": 0.03571428571428571,
            "largest_component_ratio": 0.9509795345616241,
            "lower_half_score": 1,
            "sam_score": 0.9765625
          },
          "sam_score": 0.9765625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "ql97bncg8cq7qo"
  },
  //Hospital-Patient-ward
  "6a478af9125096412ecb252f": {
    "delayTime": 12930,
    "executionTime": 15362,
    "id": "sync-e8819b02-713c-4aa8-bc89-1c4b592310ed-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8736809224643809,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 1241.3775634765625,
          "fy": 1241.377685546875,
          "gravity": [
            -0.019033927470445633,
            -0.9926275610923767,
            -0.11970055103302002
          ],
          "height_meters": 1.710783002608492,
          "horizontal_fov_degrees": 65.59913803422927,
          "intrinsic_matrix": [
            [
              1241.3775634765625,
              0,
              800
            ],
            [
              0,
              1241.377685546875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -6.874821041144199,
          "roll_degrees": 1.098418108995051,
          "uncertainty": {
            "focal_pixels": 125.03675079345703,
            "pitch_degrees": 1.602731316221878,
            "roll_degrees": 1.0289712001135944,
            "vertical_fov_degrees": 6.395436957170861
          },
          "vertical_fov_degrees": 51.592107103258115
        },
        "confidence": {
          "camera_calibration": 0.8736809224643809,
          "camera_height": 0.9483054263892566,
          "depth": 0.9816403985023499,
          "dimensions": 0.9880415389619573,
          "floor_plane": 0.9701038474048933,
          "floor_rotation": 0.9612,
          "overall": 0.9185880311844697,
          "segmentation": 0.7071440845684502
        },
        "floor": {
          "alternate_floor_rotation": 35.05,
          "floor_rotation": 125.05,
          "median_scene_depth_meters": 5.079542636871338,
          "plane": {
            "confidence": 0.9701038474048933,
            "distance": 1.710783002608492,
            "gravity_alignment": 0.9999031950829983,
            "inlier_ratio": 0.998,
            "median_residual_meters": 0.004331518741755969,
            "normal": [
              -0.023008717114122623,
              -0.9940526275983634,
              -0.10644234355533334
            ]
          },
          "visible_area_ratio": 0.2183546875,
          "visible_dimensions_meters": {
            "confidence": 0.9880415389619573,
            "depth_meters": 4.0540706822315125,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 12.013695805921484,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 4.857276237912695
          },
          "visible_polygon_pixels": [
            [
              1526,
              858
            ],
            [
              1405,
              821
            ],
            [
              1151,
              816
            ],
            [
              1015,
              772
            ],
            [
              971,
              847
            ],
            [
              865,
              888
            ],
            [
              809,
              847
            ],
            [
              521,
              793
            ],
            [
              454,
              816
            ],
            [
              411,
              903
            ],
            [
              444,
              983
            ],
            [
              56,
              1199
            ],
            [
              757,
              1199
            ],
            [
              952,
              1042
            ],
            [
              988,
              1065
            ],
            [
              1009,
              1199
            ],
            [
              1426,
              1199
            ],
            [
              1458,
              976
            ],
            [
              1528,
              963
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.5251861214637756,
            "scene": "operating_room"
          },
          {
            "confidence": 0.4388898015022278,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.013456346467137337,
            "scene": "clean_room"
          },
          {
            "confidence": 0.005881238728761673,
            "scene": "chemistry_lab"
          },
          {
            "confidence": 0.0051810359582304955,
            "scene": "hospital"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 20,
            "x2": 1554,
            "y1": 738,
            "y2": 1195
          },
          "detection_confidence": 0.2992731034755707,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.21759375,
            "bottom_contact_score": 0.754375,
            "detection_confidence": 0.2992731034755707,
            "final_score": 0.7071440845684502,
            "fragmentation_score": 0.08333333333333333,
            "largest_component_ratio": 0.9731365790607497,
            "lower_half_score": 1,
            "sam_score": 0.9453125
          },
          "sam_score": 0.9453125
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "ql97bncg8cq7qo"
  },
  //Hospital-Rehabilitation-canter
  "6a478b58125096412ecb2531": {
    "delayTime": 14336,
    "executionTime": 15617,
    "id": "sync-049274ee-dcb4-48b4-b1d5-307c1cd04b6f-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8073782186952942,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 2956.530029296875,
          "fy": 2956.530029296875,
          "gravity": [
            -0.0024330320302397013,
            -0.9972529411315918,
            -0.0740312933921814
          ],
          "height_meters": 1.1716088505247895,
          "horizontal_fov_degrees": 30.281886156967065,
          "intrinsic_matrix": [
            [
              2956.530029296875,
              0,
              800
            ],
            [
              0,
              2956.530029296875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -4.245564906470356,
          "roll_degrees": 0.13977216408192114,
          "uncertainty": {
            "focal_pixels": 793.9564208984375,
            "pitch_degrees": 2.4356174969396323,
            "roll_degrees": 0.6129536091956678,
            "vertical_fov_degrees": 8.48248364722512
          },
          "vertical_fov_degrees": 22.943686299508986
        },
        "confidence": {
          "camera_calibration": 0.8073782186952942,
          "camera_height": 0.931429582509716,
          "depth": 0.9750478267669678,
          "dimensions": 0.9887821545327266,
          "floor_plane": 0.9719553863318161,
          "floor_rotation": 0.9464,
          "overall": 0.8938657031519063,
          "segmentation": 0.6360667532268236
        },
        "floor": {
          "alternate_floor_rotation": 164.37,
          "floor_rotation": 74.37,
          "median_scene_depth_meters": 9.722068786621094,
          "plane": {
            "confidence": 0.9719553863318161,
            "distance": 1.1716088505247895,
            "gravity_alignment": 0.9998532656939967,
            "inlier_ratio": 0.99795,
            "median_residual_meters": 0.0040485400210474864,
            "normal": [
              -0.019106883282025946,
              -0.9973568354293189,
              -0.07010185328264562
            ]
          },
          "visible_area_ratio": 0.2494578125,
          "visible_dimensions_meters": {
            "confidence": 0.9887821545327266,
            "depth_meters": 8.806142815468188,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 15.406454945749402,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 3.56251232567489
          },
          "visible_polygon_pixels": [
            [
              1599,
              675
            ],
            [
              1490,
              646
            ],
            [
              985,
              704
            ],
            [
              1021,
              1055
            ],
            [
              960,
              971
            ],
            [
              955,
              766
            ],
            [
              890,
              750
            ],
            [
              875,
              988
            ],
            [
              858,
              724
            ],
            [
              691,
              704
            ],
            [
              702,
              970
            ],
            [
              848,
              957
            ],
            [
              852,
              1107
            ],
            [
              920,
              1062
            ],
            [
              867,
              1026
            ],
            [
              948,
              1030
            ],
            [
              911,
              1151
            ],
            [
              852,
              1124
            ],
            [
              833,
              1181
            ],
            [
              1222,
              1108
            ],
            [
              1224,
              1179
            ],
            [
              1176,
              1199
            ],
            [
              1599,
              1199
            ],
            [
              1599,
              1067
            ],
            [
              1323,
              948
            ],
            [
              1599,
              885
            ],
            [
              1599,
              807
            ],
            [
              1565,
              810
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.7349350452423096,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.04579950124025345,
            "scene": "dining_room"
          },
          {
            "confidence": 0.02596997283399105,
            "scene": "playroom"
          },
          {
            "confidence": 0.021795889362692833,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.01745639555156231,
            "scene": "artists_loft"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 624,
            "y2": 1194
          },
          "detection_confidence": 0.35460203886032104,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.24582239583333335,
            "bottom_contact_score": 0.4325,
            "detection_confidence": 0.35460203886032104,
            "final_score": 0.6360667532268236,
            "fragmentation_score": 0.002583979328165375,
            "largest_component_ratio": 0.6434629506821278,
            "lower_half_score": 1,
            "sam_score": 0.91015625
          },
          "sam_score": 0.91015625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "ql97bncg8cq7qo"
  },

  //Hospital-waiting-Launges
  "6a478ad8125096412ecb252e": {
    "delayTime": 14336,
    "executionTime": 15617,
    "id": "sync-049274ee-dcb4-48b4-b1d5-307c1cd04b6f-e2",
    "output": {
      "prediction": {
        "camera": {
          "camera_model": "pinhole",
          "confidence": 0.8073782186952942,
          "cx": 800,
          "cy": 599.9999389648438,
          "fx": 2956.530029296875,
          "fy": 2956.530029296875,
          "gravity": [
            -0.0024330320302397013,
            -0.9972529411315918,
            -0.0740312933921814
          ],
          "height_meters": 1.1716088505247895,
          "horizontal_fov_degrees": 30.281886156967065,
          "intrinsic_matrix": [
            [
              2956.530029296875,
              0,
              800
            ],
            [
              0,
              2956.530029296875,
              599.9999389648438
            ],
            [
              0,
              0,
              1
            ]
          ],
          "pitch_degrees": -4.245564906470356,
          "roll_degrees": 0.13977216408192114,
          "uncertainty": {
            "focal_pixels": 793.9564208984375,
            "pitch_degrees": 2.4356174969396323,
            "roll_degrees": 0.6129536091956678,
            "vertical_fov_degrees": 8.48248364722512
          },
          "vertical_fov_degrees": 22.943686299508986
        },
        "confidence": {
          "camera_calibration": 0.8073782186952942,
          "camera_height": 0.931429582509716,
          "depth": 0.9750478267669678,
          "dimensions": 0.9887821545327266,
          "floor_plane": 0.9719553863318161,
          "floor_rotation": 0.9464,
          "overall": 0.8938657031519063,
          "segmentation": 0.6360667532268236
        },
        "floor": {
          "alternate_floor_rotation": 164.37,
          "floor_rotation": 74.37,
          "median_scene_depth_meters": 9.722068786621094,
          "plane": {
            "confidence": 0.9719553863318161,
            "distance": 1.1716088505247895,
            "gravity_alignment": 0.9998532656939967,
            "inlier_ratio": 0.99795,
            "median_residual_meters": 0.0040485400210474864,
            "normal": [
              -0.019106883282025946,
              -0.9973568354293189,
              -0.07010185328264562
            ]
          },
          "visible_area_ratio": 0.2494578125,
          "visible_dimensions_meters": {
            "confidence": 0.9887821545327266,
            "depth_meters": 8.806142815468188,
            "measurement_type": "visible_floor_extent",
            "projected_area_square_meters": 15.406454945749402,
            "valid_polygon_vertex_ratio": 1,
            "width_meters": 3.56251232567489
          },
          "visible_polygon_pixels": [
            [
              1599,
              675
            ],
            [
              1490,
              646
            ],
            [
              985,
              704
            ],
            [
              1021,
              1055
            ],
            [
              960,
              971
            ],
            [
              955,
              766
            ],
            [
              890,
              750
            ],
            [
              875,
              988
            ],
            [
              858,
              724
            ],
            [
              691,
              704
            ],
            [
              702,
              970
            ],
            [
              848,
              957
            ],
            [
              852,
              1107
            ],
            [
              920,
              1062
            ],
            [
              867,
              1026
            ],
            [
              948,
              1030
            ],
            [
              911,
              1151
            ],
            [
              852,
              1124
            ],
            [
              833,
              1181
            ],
            [
              1222,
              1108
            ],
            [
              1224,
              1179
            ],
            [
              1176,
              1199
            ],
            [
              1599,
              1199
            ],
            [
              1599,
              1067
            ],
            [
              1323,
              948
            ],
            [
              1599,
              885
            ],
            [
              1599,
              807
            ],
            [
              1565,
              810
            ]
          ]
        },
        "input": {
          "height": 1200,
          "width": 1600
        },
        "scene": [
          {
            "confidence": 0.7349350452423096,
            "scene": "waiting_room"
          },
          {
            "confidence": 0.04579950124025345,
            "scene": "dining_room"
          },
          {
            "confidence": 0.02596997283399105,
            "scene": "playroom"
          },
          {
            "confidence": 0.021795889362692833,
            "scene": "hospital_room"
          },
          {
            "confidence": 0.01745639555156231,
            "scene": "artists_loft"
          }
        ],
        "selected_detection": {
          "bbox_xyxy": {
            "x1": 6,
            "x2": 1594,
            "y1": 624,
            "y2": 1194
          },
          "detection_confidence": 0.35460203886032104,
          "label": "indoor floor",
          "mask_quality": {
            "area_plausibility_score": 1,
            "area_ratio": 0.24582239583333335,
            "bottom_contact_score": 0.4325,
            "detection_confidence": 0.35460203886032104,
            "final_score": 0.6360667532268236,
            "fragmentation_score": 0.002583979328165375,
            "largest_component_ratio": 0.6434629506821278,
            "lower_half_score": 1,
            "sam_score": 0.91015625
          },
          "sam_score": 0.91015625
        },
        "warnings": [
          "dimensions_are_single_image_estimates",
          "complete_room_dimensions_not_returned"
        ]
      },
      "success": true
    },
    "status": "COMPLETED",
    "workerId": "ql97bncg8cq7qo"
  },
};

