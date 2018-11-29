export function getMocks(facilityId: number, equipmentId: number): Object {
    if (facilityId === 105) {
        if (equipmentId === 105005) {
            return {
                chartData: [
                    {
                        id: "105001",
                        title: "Уровень карналлита",
                        isNormal: true,
                        measurement: "мм",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -7200.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -7200.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -7200.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 19567.800521850586,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 19571.400260925293,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 19582.199478149414,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 19578.599739074707,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 19593.000411987305,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 19580.400466918945,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 19627.200508117676,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 19565.999794006348,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 19515.60001373291,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 19515.60001373291,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 19632.599258422852,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 16788.599395751953,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 16912.799835205078,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 16576.199340820313,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 15294.599533081055,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 15069.599533081055,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 14842.800521850586,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 14851.800727844238,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 14851.800727844238,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 14821.200370788574,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 14792.400741577148,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 14799.600219726563,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 14799.600219726563,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 14830.200576782227,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -7200.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -7200.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -7200.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: -7200.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 19484.999656677246,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 19484.999656677246,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 19458.000755310059,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 19479.5991897583,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 19434.599876403809,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 19434.599876403809,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 19479.5991897583,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 19474.200439453125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 19474.200439453125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 18370.800590515137,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 16784.999656677246,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 16478.999519348145,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 15242.400741577148,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 14997.599601745605,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 14808.600425720215,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 14815.799903869629,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 14806.799697875977,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 14779.800796508789,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 14770.800590515137,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 14779.800796508789,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 14785.199546813965,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 14785.199546813965,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 14481.000137329102,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "105002",
                        title: "Масса карналита в Силосе",
                        isNormal: true,
                        measurement: "т",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 2359.296,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 2359.296,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 2359.296,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 2359.296,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 348.31442587280259,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 348.31442587280259,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 350.34906307983391,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 348.72140505981446,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 352.11255331420887,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 352.11255331420887,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 348.72140505981446,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 349.12825488281254,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 349.12825488281254,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 432.28046749877922,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 551.78642587280285,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 574.84659622192385,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 668.036680114746,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 686.48489401245126,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 700.72787191772466,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 700.1853192443848,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 700.86357476806631,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 702.89821197509764,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 703.57646749877938,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 702.89821197509764,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 702.49136215209955,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 702.49136215209955,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 725.41582965087889,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 2359.296,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 2359.296,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 2359.296,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 342.07455267333972,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 341.80327633666985,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 340.98944732666013,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 341.26072366333017,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 340.17548895263656,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 341.12502081298811,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 337.59816970825193,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 342.21025552368178,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 346.008382965088,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 346.008382965088,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 337.1913198852539,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 551.51514953613275,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 542.15540441894518,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 567.52161767578139,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 664.10297918701178,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 681.05897918701169,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 698.1505526733398,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 697.47229714965806,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 697.47229714965806,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 699.77834005737316,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 701.948680114746,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 701.40612744140617,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 701.40612744140617,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 699.10008453369142,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                tableData: [
                    {
                        periodValueTime: "2017-09-01T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7200.0,
                        minValue: -7200.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-02T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7200.0,
                        minValue: -7200.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-03T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7200.0,
                        minValue: -7200.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-04T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19567.800521850586,
                        minValue: -7200.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-05T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19571.400260925293,
                        minValue: 19484.999656677246,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-06T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19582.199478149414,
                        minValue: 19484.999656677246,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-07T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19578.599739074707,
                        minValue: 19458.000755310059,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-08T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19593.000411987305,
                        minValue: 19479.5991897583,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-09T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19580.400466918945,
                        minValue: 19434.599876403809,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-10T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19627.200508117676,
                        minValue: 19434.599876403809,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-11T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19565.999794006348,
                        minValue: 19479.5991897583,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-12T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19515.60001373291,
                        minValue: 19474.200439453125,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-13T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19515.60001373291,
                        minValue: 19474.200439453125,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-14T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 19632.599258422852,
                        minValue: 18370.800590515137,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-15T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-16T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-17T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-18T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 16788.599395751953,
                        minValue: 16784.999656677246,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-19T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 16912.799835205078,
                        minValue: 16478.999519348145,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-20T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 16576.199340820313,
                        minValue: 15242.400741577148,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-21T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 15294.599533081055,
                        minValue: 14997.599601745605,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-22T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 15069.599533081055,
                        minValue: 14808.600425720215,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-23T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14842.800521850586,
                        minValue: 14815.799903869629,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-24T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14851.800727844238,
                        minValue: 14806.799697875977,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-25T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14851.800727844238,
                        minValue: 14779.800796508789,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-26T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14821.200370788574,
                        minValue: 14770.800590515137,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-27T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14792.400741577148,
                        minValue: 14779.800796508789,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-28T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14799.600219726563,
                        minValue: 14785.199546813965,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-29T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14799.600219726563,
                        minValue: 14785.199546813965,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-30T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: 14830.200576782227,
                        minValue: 14481.000137329102,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-01T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2359.296,
                        minValue: 2359.296,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-02T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2359.296,
                        minValue: 2359.296,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-03T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2359.296,
                        minValue: 2359.296,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-04T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2359.296,
                        minValue: 342.07455267333972,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-05T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 348.31442587280259,
                        minValue: 341.80327633666985,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-06T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 348.31442587280259,
                        minValue: 340.98944732666013,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-07T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 350.34906307983391,
                        minValue: 341.26072366333017,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-08T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 348.72140505981446,
                        minValue: 340.17548895263656,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-09T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 352.11255331420887,
                        minValue: 341.12502081298811,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-10T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 352.11255331420887,
                        minValue: 337.59816970825193,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-11T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 348.72140505981446,
                        minValue: 342.21025552368178,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-12T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 349.12825488281254,
                        minValue: 346.008382965088,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-13T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 349.12825488281254,
                        minValue: 346.008382965088,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-14T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 432.28046749877922,
                        minValue: 337.1913198852539,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-15T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-16T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-17T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-18T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 551.78642587280285,
                        minValue: 551.51514953613275,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-19T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 574.84659622192385,
                        minValue: 542.15540441894518,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-20T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 668.036680114746,
                        minValue: 567.52161767578139,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-21T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 686.48489401245126,
                        minValue: 664.10297918701178,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-22T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 700.72787191772466,
                        minValue: 681.05897918701169,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-23T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 700.1853192443848,
                        minValue: 698.1505526733398,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-24T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 700.86357476806631,
                        minValue: 697.47229714965806,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-25T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 702.89821197509764,
                        minValue: 697.47229714965806,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-26T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 703.57646749877938,
                        minValue: 699.77834005737316,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-27T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 702.89821197509764,
                        minValue: 701.948680114746,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-28T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 702.49136215209955,
                        minValue: 701.40612744140617,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-29T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 702.49136215209955,
                        minValue: 701.40612744140617,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-30T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 725.41582965087889,
                        minValue: 699.10008453369142,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    }
                ]
            };
        } else {
            return {
                chartData: [
                    {
                        id: "105001",
                        title: "Уровень карналлита",
                        isNormal: true,
                        measurement: "мм",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: -7500.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "105002",
                        title: "Масса карналита в Силосе",
                        isNormal: true,
                        measurement: "т",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 2381.904,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                tableData: [
                    {
                        periodValueTime: "2017-09-01T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-02T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-03T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-04T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-05T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-06T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-07T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-08T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-09T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-10T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-11T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-12T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-13T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-14T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-15T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-16T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-17T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-18T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-19T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-20T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-21T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-22T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-23T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-24T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-25T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-26T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-27T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-28T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-29T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-30T00:00:00",
                        indicatorID: "105001",
                        indicatorTitle: "Уровень карналлита",
                        mUnit: "мм",
                        lastValue: null,
                        maxValue: -7500.0,
                        minValue: -7500.0,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-01T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-02T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-03T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-04T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-05T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-06T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-07T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-08T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-09T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-10T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-11T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-12T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-13T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-14T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-15T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-16T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-17T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: null,
                        minValue: null,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-18T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-19T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-20T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-21T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-22T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-23T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-24T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-25T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-26T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-27T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-28T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-29T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    },
                    {
                        periodValueTime: "2017-09-30T00:00:00",
                        indicatorID: "105002",
                        indicatorTitle: "Масса карналита в Силосе",
                        mUnit: "т",
                        lastValue: null,
                        maxValue: 2381.904,
                        minValue: 2381.904,
                        normMin: null,
                        normMax: null,
                        minDiff: null,
                        maxDiff: null,
                        isCriticalPointOfMinDiff: null,
                        isCriticalPointOfMaxDiff: null
                    }
                ]
            };
        }
    } else if (facilityId === 106) {
        if (equipmentId === 106001) {
            return {
                chartData: [
                    {
                        id: "106001",
                        title: "Температура Плавильник",
                        isNormal: true,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 672.53998279571533,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 588.49998950958252,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 591.57997608184814,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 595.54000377655029,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 661.32000923156738,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 581.68001174926758,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 637.11997985839844,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 584.09999370574951,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 586.08000755310059,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 609.18001174926758,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 620.62002182006836,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 645.26001930236816,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 588.06002140045166,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 584.09999370574951,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 542.07999706268311,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 599.499979019165,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 590.699987411499,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 581.899995803833,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 575.08001804351807,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 577.71998405456543,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 614.24001216888428,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 588.94001007080078,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 663.73999118804932,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 571.56001091003418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 585.86002349853516,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 638.22000503540039,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 587.400016784668,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 483.34000587463379,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 484.43997859954834,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 485.54000377655029,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 481.800012588501,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 476.74001216888428,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 467.94002056121826,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 485.54000377655029,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 470.3600025177002,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 480.699987411499,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 488.18002223968506,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 488.61999034881592,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 476.08000755310059,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 485.09998321533203,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 476.95999622344971,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 533.94001007080078,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 484.21999454498291,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 462.65998363494873,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 474.54001426696777,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 477.17998027801514,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 478.94001007080078,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 463.97999286651611,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 488.83997440338135,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 488.61999034881592,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 475.86002349853516,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 487.95998573303223,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 477.6200008392334,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 485.09998321533203,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "106002",
                        title: "Температура ХлорКамера",
                        isNormal: true,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 824.55997943878174,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 815.75998783111572,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 823.01998615264893,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 813.34000587463379,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 821.04002475738525,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 825.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 1415.2600193023682,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 810.03998279571533,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 819.27999496459961,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 817.07999706268311,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 819.27999496459961,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 816.86001300811768,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 820.600004196167,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 821.47999286651611,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 804.54001426696777,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 816.200008392334,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 813.55998992919922,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 826.53999328613281,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 814.66001510620117,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 812.23998069763184,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 825.66000461578369,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 824.33999538421631,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 810.92002391815186,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 807.400016784668,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 814.00001049041748,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 817.29998111724854,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 812.23998069763184,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 749.97998237609863,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 745.3600025177002,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 740.3000020980835,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 752.83998489379883,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 699.8199987411499,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 709.9399995803833,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: -31.679998636245728,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 755.26001930236816,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 748.000020980835,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 743.600025177002,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 757.6800012588501,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 704.8799991607666,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 715.87998867034912,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 751.299991607666,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 800.3600025177002,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 748.000020980835,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 708.18002223968506,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 752.83998489379883,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 764.72001552581787,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 751.08000755310059,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 756.57997608184814,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 749.97998237609863,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 707.7400016784668,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 706.200008392334,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 751.299991607666,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 760.099983215332,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 756.57997608184814,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "106003",
                        title: "Температура Миксер",
                        isNormal: true,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 740.96000671386719,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 740.96000671386719,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 736.999979019165,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 733.700008392334,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 726.87997817993164,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 748.43998908996582,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 740.96000671386719,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 736.77999496459961,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 736.11999034881592,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 725.56002140045166,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 730.84000587463379,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 735.68002223968506,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 733.04000377655029,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 733.25998783111572,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 724.67998027801514,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 736.77999496459961,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 735.68002223968506,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 736.11999034881592,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 740.51998615264893,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 746.68001174926758,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 738.76000881195068,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 742.94002056121826,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 746.23999118804932,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 735.02001762390137,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 732.16001510620117,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 730.39998531341553,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 732.16001510620117,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 702.23998069763184,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 699.37997817993164,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 707.7400016784668,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 509.300012588501,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 636.02000713348389,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 649.21999454498291,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 686.83999538421631,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 572.65998363494873,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 702.01999664306641,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 698.28000545501709,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 674.73998069763184,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 617.53998279571533,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 690.3600025177002,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 698.06002140045166,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 721.38000965118408,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 694.97998237609863,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 613.799991607666,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 696.74001216888428,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 699.37997817993164,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 609.18001174926758,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 687.94002056121826,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 695.42000293731689,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 700.699987411499,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 622.599983215332,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 705.099983215332,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 690.80002307891846,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 700.48000335693359,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "106004",
                        title: "Температура Сливная летка",
                        isNormal: true,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 674.73998069763184,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 654.9399995803833,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 695.63998699188232,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 704.66001510620117,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 698.49998950958252,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 672.76001930236816,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 709.06001091003418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 713.24002265930176,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 704.8799991607666,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 695.63998699188232,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 695.63998699188232,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 684.42001342773437,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 703.34000587463379,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 701.14000797271729,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 399.95999097824097,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 634.03999328613281,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 692.34001636505127,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 707.29998111724854,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 676.93997859954834,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 656.69997692108154,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 651.86001300811768,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 694.54001426696777,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 680.45998573303223,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 665.93998908996582,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 652.29998111724854,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 674.51999664306641,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 589.8199987411499,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 317.01999664306641,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 250.79999685287476,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 253.43998908996582,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 122.76000618934631,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 272.36000776290894,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 283.13998699188232,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 275.66000461578369,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 284.24001216888428,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 293.91999244689941,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 276.97998762130737,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 294.14000272750854,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 270.81998825073242,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 286.21999979019165,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 265.97999811172485,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 361.23999118804932,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 286.88000440597534,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 285.55999517440796,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 293.91999244689941,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 107.57999837398529,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 325.600004196167,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 289.74000692367554,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 283.58000755310059,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 317.01999664306641,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 302.93999433517456,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 303.82000923156738,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 294.14000272750854,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 299.41998720169067,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        } else {
            return {
                chartData: [
                    {
                        id: "106007",
                        title: "Уровень карналита в бункере хлоратора",
                        isNormal: true,
                        measurement: "мм",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -2501.2500000593718,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -2501.2500000593718,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -2497.4999998812564,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: -2496.8750000698492,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: -2498.7499999406282,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: -2500.6250000296859,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: -2501.2500000593718,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: -2500.6250000296859,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -2501.2500000593718,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: -2502.5000001187436,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: -2500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -2500.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: -2498.1249999837019,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: -2494.3750002421439,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: -2501.8750000162981,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: -2501.2500000593718,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: -2501.2500000593718,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: -2501.2500000593718,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -2508.7500002700835,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: -2513.1249998230487,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: -2505.6249997578561,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: -2504.3750001350418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: -2503.1249999301508,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: -2505.0000002374873,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -2504.3750001350418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -2504.3750001350418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: -2504.3750001350418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: -2504.3750001350418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: -2504.3750001350418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: -2505.0000002374873,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: -2506.2499998603016,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -2503.7500000325963,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: -2506.2499998603016,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: -2516.2500003352761,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: -2505.6249997578561,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: -2503.1249999301508,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: -2503.1249999301508,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: -2503.1249999301508,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "106008",
                        title: "Давление хлора в н/н №1 карн.отд.",
                        isNormal: true,
                        measurement: "кг/см2",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 1.2179999828338621,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 1.1664000034332274,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 1.1088000297546388,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 1.1040000200271605,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 1.0499999999999998,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 0.91319997310638434,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 0.85440001487731942,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 0.735599970817566,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 0.6720000028610229,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 0.65039999485015865,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 0.63720002174377433,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 0.93840000629425058,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 0.98280000686645508,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 0.75,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 0.68039996623992915,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 0.62879998683929439,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 0.57359998226165776,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 0.5412000060081481,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 0.51600000858306894,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 0.46080000400543208,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 0.40200001001358032,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 0.34680000543594358,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 0.77999997138977051,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 0.78720002174377435,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 0.754800009727478,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 1.1003999948501586,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 0.93720002174377448,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 0.85799996852874749,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 0.92879998683929443,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 0.92160000801086417,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 0.86400003433227546,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: -0.025199999660253523,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 0.85320003032684333,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 0.735599970817566,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 0.67080001831054692,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 0.63359999656677246,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 0.62879998683929439,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 0.59160000085830688,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -0.0072000000625848763,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -0.0048000002279877663,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 0.6720000028610229,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 0.6743999719619751,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 0.57239999771118155,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 0.53880000114440918,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 0.51600000858306894,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 0.45839999914169316,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 0.39960000514984134,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 0.33959999084472658,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 0.31799998283386233,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 0.4212000131607056,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 0.74159996509552006,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 0.7187999725341796,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 0.682800006866455,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 0.896399974822998,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "106009",
                        title: "Давление хлора в н/н №2 карн.отд.",
                        isNormal: true,
                        measurement: "кг/см2",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 0.80900001525878906,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 0.80150002241134644,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 0.79750001430511475,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 1.0379999876022339,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 1.0900000333786011,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 1.0815000534057617,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 1.1200000047683716,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 1.125499963760376,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 1.0264999866485596,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 1.1015000343322754,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 1.0690000057220459,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 0.99150002002716064,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 1.0994999408721924,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 1.090999960899353,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 1.0290000438690186,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 0.93849998712539673,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 1.0295000076293945,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 1.1265000104904175,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 0.9660000205039978,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 1.00600004196167,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 1.0789999961853027,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 1.0605000257492065,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 1.0540000200271606,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 0.94300001859664917,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 1.0544999837875366,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 1.0525000095367432,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 1.003000020980835,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 0.77899998426437378,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 0.75099998712539673,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 0.75950002670288086,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 0.75249999761581421,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: -0.022500000894069672,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 0.887499988079071,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 0.82599997520446777,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 0.800000011920929,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 0.85049998760223389,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 0.78750002384185791,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 0.80750000476837158,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -0.024499999359250069,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -0.022500000894069672,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 0.8554999828338623,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 0.9089999794960022,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 0.796999990940094,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 0.74150002002716064,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 0.70899999141693115,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 0.73500001430511475,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 0.81749999523162842,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 0.88249999284744263,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 0.75499999523162842,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 0.78700000047683716,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 0.73600000143051147,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 0.69499999284744263,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 0.79250001907348633,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 0.8255000114440918,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "106010",
                        title: "Масса карналита в бункере хлоратора",
                        isNormal: true,
                        measurement: "т",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 55.461326252903817,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 55.560846671142464,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 55.39031302806616,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 55.3619247329056,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 55.333546125783663,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 55.376117674335532,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 55.3619247329056,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 55.3619247329056,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 55.3619247329056,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 55.3619247329056,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 55.3619247329056,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 55.376117674335532,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 55.404510820745664,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 55.404510820745664,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 55.632005545421428,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 55.39031302806616,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 55.333546125783663,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 55.333546125783663,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 55.333546125783663,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 55.290996411241359,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 55.290996411241359,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 55.205962422165996,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 55.191798577430632,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 55.234297390841107,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 55.27681802024194,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 55.290996411241359,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 55.27681802024194,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 55.290996411241359,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 55.319360466282326,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 55.347734216790741,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 55.262642053313591,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 55.262642053313591,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 55.220128696531816,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 55.135167411495082,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 55.305177224868075,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 55.290996411241359,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 55.290996411241359,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 55.290996411241359,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        }
    } else if (facilityId === 109) {
        if (equipmentId === 109001) {
            return {
                chartData: [
                    {
                        id: "109001",
                        title: "Температура ванны",
                        isNormal: false,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 652.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 652.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 680.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 680.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 668.29998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 667.0999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 666.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 666.4000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 666.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 666.5,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 676.20001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 666.79998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 669.20001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 669.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 677.0999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 669.79998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 667.9000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 671.70001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 658.9000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 671.0999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 671.0999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 667.4000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 668.9000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 668.29998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 668.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 664.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 669.79998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 667.9000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 665.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 666.5,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 666.4000244140625,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 651.70001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 651.9000244140625,
                                        labeled: {
                                            labels: ["651,900024414063"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 652.70001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 651.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 651.70001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 652.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 652.0999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 652.29998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 651.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 653.70001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 652.9000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 654.79998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 651.0,
                                        labeled: {
                                            labels: ["651"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 652.4000244140625,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 656.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 654.29998779296875,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 651.79998779296875,
                                        labeled: {
                                            labels: ["651,799987792969"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 651.5,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 649.29998779296875,
                                        labeled: {
                                            labels: ["649,299987792969"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 649.20001220703125,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 651.4000244140625,
                                        labeled: {
                                            labels: ["651,400024414063"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 650.79998779296875,
                                        labeled: {
                                            labels: ["650,799987792969"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 650.5999755859375,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 651.5,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 651.4000244140625,
                                        labeled: {
                                            labels: ["651,400024414063"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 650.9000244140625,
                                        labeled: {
                                            labels: ["650,900024414063"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 651.4000244140625,
                                        labeled: {
                                            labels: ["651,400024414063"],
                                            on: "below"
                                        }
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "109002",
                        title: "Уровень",
                        isNormal: false,
                        measurement: "Деление",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -2.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: -2.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 10.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 10.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 7.2625390672683778,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 5.9352000951766968,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 6.8393997144699128,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 10.222619581222538,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 9.5839006662368789,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 8.67571986675263,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 5.1252208185195975,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 6.4825000000000053,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 4.72204001903534,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 5.7839006662368782,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 15.145140304565434,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 6.4825000000000053,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 5.5563592195510871,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 7.3527598857879646,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 3.2000005722045906,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 7.2999995231628425,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 5.3799999237060554,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 4.9500000953674324,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 7.1500003814697273,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 8.6300004005432136,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 7.0399988174438484,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 7.4899995803833015,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 8.14999942779541,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 7.9899991035461433,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 7.2999990463256843,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 9.5399988174438484,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 7.5100005149841316,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -14.094659600257872,
                                        labeled: {
                                            labels: ["-14,0946596002579"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -1.1306393527984611,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -7.3920802760124182,
                                        labeled: {
                                            labels: ["-7,39208027601242"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: -23.4,
                                        labeled: {
                                            labels: ["-23,4"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 2.2186591243743905,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: -0.98491948604583612,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: -14.485479514598845,
                                        labeled: {
                                            labels: ["-14,4854795145988"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: -0.39371891498565503,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: -5.9925,
                                        labeled: {
                                            labels: ["-5,9925"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: -2.5693606472015347,
                                        labeled: {
                                            labels: ["-2,56936064720153"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -14.515419723987579,
                                        labeled: {
                                            labels: ["-14,5154197239876"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -2.5294411611556988,
                                        labeled: {
                                            labels: ["-2,5294411611557"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -2.5474011421203606,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: -2.0184590291976896,
                                        labeled: {
                                            labels: ["-2,01845902919769"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 2.6000011444091804,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: -6.1200005531311028,
                                        labeled: {
                                            labels: ["-6,1200005531311"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: -0.47000045776367116,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: -5.3300010681152337,
                                        labeled: {
                                            labels: ["-5,33000106811523"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: -2.9700004577636712,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: -5.9600002288818352,
                                        labeled: {
                                            labels: ["-5,96000022888184"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -0.089999389648436789,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 0.83000068664550852,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: -3.9900004386901848,
                                        labeled: {
                                            labels: ["-3,99000043869018"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: -3.04000015258789,
                                        labeled: {
                                            labels: ["-3,04000015258789"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: -1.6999995231628411,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: -2.7400004386901848,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 1.5600002288818366,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "109003",
                        title: "Напряжение",
                        isNormal: false,
                        measurement: "Вольт",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 4.3,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 4.3,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 6.5,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 6.5,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 5.1739997673034672,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 5.2680001068115239,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 5.2760000038146977,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 5.311999778747559,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 5.2959999847412114,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 5.15799997329712,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 5.3680000114440922,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 5.2979998397827153,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 5.2959999847412114,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 5.2959999847412114,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 5.5300001907348637,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 4.99800012588501,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 4.9739999580383305,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 5.0139999198913578,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 4.9819998550415043,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 5.0919999885559086,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 5.0500001716613774,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 5.1440000343322758,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 5.1480002212524418,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 5.3920001792907719,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 5.2400002288818364,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 5.2379998970031743,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 5.2259998130798344,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 5.3099999237060551,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 5.23,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 5.251999835968018,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 5.196000080108643,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 5.1059999275207524,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 5.0820002365112309,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 5.1079997825622563,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 5.0999998855590825,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 5.1040000724792485,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 5.0919999885559086,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 4.9520001220703129,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 5.0919999885559086,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 5.0900001335144047,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 5.1199998664855961,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -0.074000001400709156,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 4.7659997749328618,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 4.886000137329102,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 4.88999984741211,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 4.9720001029968266,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 4.8540000724792485,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 4.8299999046325688,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 4.941999893188477,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 5.0240001487731938,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 5.01000020980835,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 5.0159997749328618,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 5.1220001983642582,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 4.9780001449584965,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 5.0199999618530278,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 5.0360002326965336,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 5.0240001487731938,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 4.9720001029968266,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "109004",
                        title: "Температура ХОВ",
                        isNormal: false,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 30.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 30.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 100.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 100.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 72.1500039100647,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 68.124997615814209,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 67.774999141693115,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 1239.9999618530273,
                                        labeled: {
                                            labels: ["1239,99996185303"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 73.675000667572021,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 71.8000054359436,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 113.54999542236328,
                                        labeled: {
                                            labels: ["113,549995422363"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 960.00003814697266,
                                        labeled: {
                                            labels: ["960,000038146973"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 76.925003528594971,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 77.999997138977051,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 106.44999742507935,
                                        labeled: {
                                            labels: ["106,449997425079"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 73.249995708465576,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 2889.9999618530273,
                                        labeled: {
                                            labels: ["2889,99996185303"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 2957.5000762939453,
                                        labeled: {
                                            labels: ["2957,50007629395"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 82.749998569488525,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 1135.0000381469727,
                                        labeled: {
                                            labels: ["1135,00003814697"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 79.875004291534424,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 76.524996757507324,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 69.599997997283936,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 77.300000190734863,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 83.025002479553223,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 82.400000095367432,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 7375.0,
                                        labeled: {
                                            labels: ["7375"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 81.075000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 982.49998092651367,
                                        labeled: {
                                            labels: ["982,499980926514"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 9294.9996948242187,
                                        labeled: {
                                            labels: ["9294,99969482422"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 82.025003433227539,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 52.8749942779541,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 48.925000429153442,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 55.400002002716064,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 52.699995040893555,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 56.725001335144043,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 60.500001907348633,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 46.60000205039978,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 55.750000476837158,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 68.025004863739014,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 67.875003814697266,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 31.550002098083496,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 56.624996662139893,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 58.224999904632568,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 63.650000095367432,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 80.250000953674316,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 71.000003814697266,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 69.149994850158691,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 69.900000095367432,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 55.900001525878906,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 68.949997425079346,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 73.199999332427979,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 65.499997138977051,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 62.7500057220459,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 59.3999981880188,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 62.024998664855957,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 63.25000524520874,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 73.975002765655518,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        } else {
            return {
                chartData: [
                    {
                        id: "109001",
                        title: "Температура ванны",
                        isNormal: false,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 652.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 652.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 680.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 680.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 35.900001525878906,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 34.700000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 34.400001525878906,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 38.5,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 41.200000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 39.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 35.900001525878906,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 30.600000381469727,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 30.100000381469727,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 33.799999237060547,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 35.700000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 35.700000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 29.100000381469727,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 29.700000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 36.099998474121094,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 34.799999237060547,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 31.799999237060547,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 33.700000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 31.399999618530273,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 29.200000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 22.799999237060547,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 22.799999237060547,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 26.100000381469727,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 30.600000381469727,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 31.299999237060547,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 27.200000762939453,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 24.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 25.399999618530273,
                                        labeled: {
                                            labels: ["25,3999996185303"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 20.600000381469727,
                                        labeled: {
                                            labels: ["20,6000003814697"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 23.5,
                                        labeled: {
                                            labels: ["23,5"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 22.200000762939453,
                                        labeled: {
                                            labels: ["22,2000007629395"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 24.799999237060547,
                                        labeled: {
                                            labels: ["24,7999992370605"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 27.799999237060547,
                                        labeled: {
                                            labels: ["27,7999992370605"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 28.799999237060547,
                                        labeled: {
                                            labels: ["28,7999992370605"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 22.200000762939453,
                                        labeled: {
                                            labels: ["22,2000007629395"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 19.100000381469727,
                                        labeled: {
                                            labels: ["19,1000003814697"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 24.0,
                                        labeled: {
                                            labels: ["24"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 30.799999237060547,
                                        labeled: {
                                            labels: ["30,7999992370605"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 28.100000381469727,
                                        labeled: {
                                            labels: ["28,1000003814697"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 24.100000381469727,
                                        labeled: {
                                            labels: ["24,1000003814697"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 20.5,
                                        labeled: {
                                            labels: ["20,5"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 35.299999237060547,
                                        labeled: {
                                            labels: ["35,2999992370605"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 29.200000762939453,
                                        labeled: {
                                            labels: ["29,2000007629395"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 23.700000762939453,
                                        labeled: {
                                            labels: ["23,7000007629395"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 26.399999618530273,
                                        labeled: {
                                            labels: ["26,3999996185303"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 25.799999237060547,
                                        labeled: {
                                            labels: ["25,7999992370605"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 22.200000762939453,
                                        labeled: {
                                            labels: ["22,2000007629395"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 15.800000190734863,
                                        labeled: {
                                            labels: ["15,8000001907349"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 11.0,
                                        labeled: {
                                            labels: ["11"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 7.0999999046325684,
                                        labeled: {
                                            labels: ["7,09999990463257"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 14.899999618530273,
                                        labeled: {
                                            labels: ["14,8999996185303"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 22.0,
                                        labeled: {
                                            labels: ["22"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 13.199999809265137,
                                        labeled: {
                                            labels: ["13,1999998092651"],
                                            on: "below"
                                        }
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 11.600000381469727,
                                        labeled: {
                                            labels: ["11,6000003814697"],
                                            on: "below"
                                        }
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "109002",
                        title: "Уровень",
                        isNormal: false,
                        measurement: "Деление",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: -2.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: -2.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 10.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 10.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: null,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: -24.7,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: null,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "109003",
                        title: "Напряжение",
                        isNormal: false,
                        measurement: "Вольт",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 4.3,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 4.3,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 6.5,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 6.5,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: null,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 0.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: null,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "109004",
                        title: "Температура ХОВ",
                        isNormal: false,
                        measurement: "Градусы С",
                        periodType: "days",
                        items: [
                            {
                                name: "min-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 30.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 30.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max-norms",
                                title: null,
                                color: "#4B5160",
                                stroke_width: 1,
                                dashed: true,
                                dash_array: "5, 5",
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 100.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 100.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: null
                            },
                            {
                                name: "max",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 31.325000524520874,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: 29.6500027179718,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: 29.350000619888306,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 31.575000286102295,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 33.674997091293335,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 32.950001955032349,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 31.124997138977051,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: 18.599998950958252,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 19.725000858306885,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 28.1000018119812,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 28.649997711181641,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 25.900000333786011,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 18.500000238418579,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 18.225002288818359,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 22.79999852180481,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 23.250001668930054,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 22.724997997283936,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 24999925.0,
                                        labeled: {
                                            labels: ["24999925"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 24999925.0,
                                        labeled: {
                                            labels: ["24999925"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 51.17499828338623,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: 49.849998950958252,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: 49.550002813339233,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 54.774999618530273,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 61.074995994567871,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 73.025000095367432,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 175.39999485015869,
                                        labeled: {
                                            labels: ["175,399994850159"],
                                            on: "above"
                                        }
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: 218.05000305175781,
                                        labeled: {
                                            labels: ["218,050003051758"],
                                            on: "above"
                                        }
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "min",
                                title: null,
                                color: "#4BE08E",
                                stroke_width: 2,
                                dashed: false,
                                dash_array: null,
                                values: [
                                    {
                                        date: "2017-09-01T00:00:00",
                                        value: 27.375000715255737,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-02T00:00:00",
                                        value: -50.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-03T00:00:00",
                                        value: -50.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-04T00:00:00",
                                        value: 23.82500171661377,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-05T00:00:00",
                                        value: 25.975000858306885,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-06T00:00:00",
                                        value: 28.549998998641968,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-07T00:00:00",
                                        value: 18.624997138977051,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-08T00:00:00",
                                        value: -50.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-09T00:00:00",
                                        value: 14.775002002716064,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-10T00:00:00",
                                        value: 16.724997758865356,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-11T00:00:00",
                                        value: 23.925000429153442,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-12T00:00:00",
                                        value: 18.524998426437378,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-13T00:00:00",
                                        value: 16.425001621246338,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-14T00:00:00",
                                        value: 14.275002479553223,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-15T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-16T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-17T00:00:00",
                                        value: null,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-18T00:00:00",
                                        value: 22.074997425079346,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-19T00:00:00",
                                        value: 20.95000147819519,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-20T00:00:00",
                                        value: 19.050002098083496,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-21T00:00:00",
                                        value: 21.649998426437378,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-22T00:00:00",
                                        value: 36.84999942779541,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-23T00:00:00",
                                        value: 49.449998140335083,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-24T00:00:00",
                                        value: -50.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-25T00:00:00",
                                        value: -50.0,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-26T00:00:00",
                                        value: 48.4749972820282,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-27T00:00:00",
                                        value: 53.649997711181641,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-28T00:00:00",
                                        value: 23.82500171661377,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-29T00:00:00",
                                        value: 22.299998998641968,
                                        labeled: null
                                    },
                                    {
                                        date: "2017-09-30T00:00:00",
                                        value: -50.0,
                                        labeled: null
                                    }
                                ],
                                horizontalLine: null,
                                onLineCrosses: [
                                    {
                                        accordingTo: "min-norms",
                                        fill: {
                                            color: "red",
                                            on: "below"
                                        }
                                    },
                                    {
                                        accordingTo: "max-norms",
                                        fill: {
                                            color: "red",
                                            on: "above"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        }
    }

    return null;
}
