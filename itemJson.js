let itemJson = {
  "type": "compound",
  "name": "",
  "value": {
    "format_version": {
      "type": "int",
      "value": 1
    },
    "size": {
      "type": "list",
      "value": {
        "type": "int",
        "value": [
          1,
          1,
          1
        ]
      }
    },
    "structure": {
      "type": "compound",
      "value": {
        "block_indices": {
          "type": "list",
          "value": {
            "type": "list",
            "value": [
              {
                "type": "end",
                "value": []
              },
              {
                "type": "end",
                "value": []
              }
            ]
          }
        },
        "entities": {
          "type": "list",
          "value": {
            "type": "compound",
            "value": [
              {
                "Age": {
                  "type": "short",
                  "value": 5975
                },
/*********************************************************************
                "Chested": {***************
                  "type": "byte",
                  "value": 0
                },
                "Color": {***************
                  "type": "byte",
                  "value": 0
                },
                "Color2": {***************
                  "type": "byte",
                  "value": 0
                },
                "FallDistance": {***************
                  "type": "float",
                  "value": 0
                },
                "Health": {***************
                  "type": "short",
                  "value": 5
                },
                "Invulnerable": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsAngry": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsAutonomous": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsBaby": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsEating": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsGliding": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsGlobal": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsIllagerCaptain": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsOrphaned": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsOutOfControl": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsRoaring": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsScared": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsStunned": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsSwimming": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsTamed": {***************
                  "type": "byte",
                  "value": 0
                },
                "IsTrusting": {***************
                  "type": "byte",
                  "value": 0
                },
*********************************************************************/
                "Item": {
                  "type": "compound",
                  "value": {
                    "Count": {
                      "type": "byte",
                      "value": "NUMBER"
                    },
                    "Damage": {
                      "type": "short",
                      "value": 0
                    },
                    "Name": {
                      "type": "string",
                      "value": "minecraft:ITEM"
                    },
                    "WasPickedUp": {
                      "type": "byte",
                      "value": 0
                    },
                    "tag": {
                      "type": "compound",
                      "value": {
                        "display": {
                          "type": "compound",
                          "value": {
                            "Name": {
                              "type": "string",
                              "value": "DISPLAYNAME"
                            },
                            "Lore": {
                              "type": "list",
                              "value": {
                                "type": "string",
                                "value": [
                                  "DESCRIPTION"
                                ]
                              }
                            }
                          }
                        },
                        "ench": {
                          "type": "list",
                          "value": {
                            "type": "compound",
                            "value": [
                              {
                                "id": {
                                  "type": "short",
                                  "value": 28
                                },
                                "lvl": {
                                  "type": "short",
                                  "value": 1
                                }
                              }
                            ]
                          }
                        },
                        "Unbreakable": {
                          "type": "byte",
                          "value": 1
                        }
                      }
                    }
                  }
                },
                "LootDropped": {
                  "type": "byte",
                  "value": 0
                },
//              "MarkVariant": {***************
//                "type": "int",
//                "value": 0
//              },
                "Motion": {
                  "type": "list",
                  "value": {
                    "type": "float",
                    "value": [
                      0,
                      0,
                      0
                    ]
                  }
                },
                "OnGround": {
                  "type": "byte",
                  "value": 1
                },
/*********************************************************************
                "OwnerID": {***************
                  "type": "long",
                  "value": [
                    -1,
                    -1
                  ]
                },
                "OwnerNew": {***************
                  "type": "long",
                  "value": [
                    -1,
                    -1
                  ]
                },
                "PortalCooldown": {***************
                  "type": "int",
                  "value": 0
                },
*********************************************************************/
                "Pos": {
                  "type": "list",
                  "value": {
                    "type": "float",
                    "value": [
                      0.5,
                      0,
                      0.5
                    ]
                  }
                },
                "Rotation": {
                  "type": "list",
                  "value": {
                    "type": "float",
                    "value": [
                      0,
                      0
                    ]
                  }
                },
/*********************************************************************
                "Saddled": {***************
                  "type": "byte",
                  "value": 0
                },
                "Sheared": {***************
                  "type": "byte",
                  "value": 0
                },
                "ShowBottom": {***************
                  "type": "byte",
                  "value": 0
                },
                "Sitting": {***************
                  "type": "byte",
                  "value": 0
                },
                "SkinID": {***************
                  "type": "int",
                  "value": 0
                },
                "Strength": {***************
                  "type": "int",
                  "value": 0
                },
                "StrengthMax": {***************
                  "type": "int",
                  "value": 0
                },
*********************************************************************/
                "Tags": {
                  "type": "list",
                  "value": {
                    "type": "string",
                    "value": [
                      "TAG"
                    ]
                  }
                },
                "UniqueID": {***************
                  "type": "long",
                  "value": [
                    -4,
                    5
                  ]
                },
/*********************************************************************
                "Variant": {***************
                  "type": "int",
                  "value": 0
                },
                "definitions": {******************************
                  "type": "list",
                  "value": {
                    "type": "end",
                    "value": []
                  }
                },
*********************************************************************/
                "identifier": {
                  "type": "string",
                  "value": "minecraft:item"
                },
//              "internalComponents": {***************
//                "type": "compound",
//                "value": {}
//              },
                "CustomName": {
                  "type": "string",
                  "value": "CUSTOMNAME"
                }
              }
            ]
          }
        },
        "palette": {
          "type": "compound",
          "value": {}
        },
        "block_indicies": {
          "type": "list",
          "value": {
            "type": "list",
            "value": [
              {
                "type": "end",
                "value": []
              },
              {
                "type": "end",
                "value": []
              }
            ]
          }
        }
      }
    },
    "structure_world_origin": {
      "type": "list",
      "value": {
        "type": "int",
        "value": [
          0,
          0,
          0
        ]
      }
    }
  }
};
