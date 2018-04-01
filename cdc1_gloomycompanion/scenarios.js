//special_rules should be treated with some kind of macro that recognises them and applies them when loading
SPECIAL_RULES =
{
    living_corpse_two_levels_extra:
        {   "description": "All living corpses are two levels higher than the scenario level, up to a max of 7",
            "affected_deck": "Living Corpse",
            "extra_levels": 2
        }
};


SCENARIO_DEFINITIONS =
    [   { name: "CI1 Blood and Glory"
        , decks:
            [   {"name": "City Guard", "deck_name": "Guard"}
            ,   {"name": "City Archer", "deck_name": "Archer"}
            ,   {"name": "Inox Guard", "deck_name": "Guard"}
            ,   {"name": "Inox Shaman", "deck_name": "Shaman"}
            ,   {"name": "Rending Drake", "deck_name": "Rending Drake"}
            ,   {"name": "Spitting Drake", "deck_name": "Spitting Drake"}
            ]
        },
        { name: "#2 Barrow Lair"
        , decks:
            [   {"name": "Bandit Archer"}
            ,   {"name": "Boss: Bandit Commander"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ]
        },
        { name: "#3 Inox Encampment"
        , decks:
            [   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#4 Crypt of the Damned"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Bandit Archer"}
            ,   {"name": "Cultist"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#5 Ruinous Crypt"
        , decks:
            [   {"name": "Cultist"}
            ,   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ]
        },
        { name: "#6 Decaying Crypt"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#7 Vibrant Grotto"
        , decks:
            [   {"name": "Forest Imp"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Inox Shaman"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#8 Gloomhaven Warehouse"
        , decks:
            [   {"name": "Living Bones"}
            ,   {"name": "Living Corpse"}
            ,   {"name": "Boss: Inox Bodyguard"}
            ]
        },
        { name: "#9 Diamond Mine"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Boss: Merciless Overseer"}
            ]
        },
        { name: "#10 Plane of Elemental Power"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Sun Demon"}
            ]
        }
    ];
